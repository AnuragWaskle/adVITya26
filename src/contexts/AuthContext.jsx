"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { account, databases } from "@/lib/appwrite"
import { OAuthProvider, Query } from "appwrite"

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    checkUserStatus()
  }, [])

  const checkUserStatus = async () => {
    try {
      const urlParams = new URLSearchParams(window.location.search)
      const userId = urlParams.get("userId")
      const secret = urlParams.get("secret")

      if (userId && secret) {
        try {
          await account.updateMagicURLSession(userId, secret)
          window.history.replaceState({}, document.title, window.location.pathname)
        } catch (sessionError) {
          console.log("[v0] Magic link session error:", sessionError)
        }
      }

      const accountDetails = await account.get()
      console.log("[v0] User logged in:", accountDetails.email)
      setUser(accountDetails)

      const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID
      const USERS_COLLECTION_ID = import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID

      console.log("[v0] Database ID:", DATABASE_ID)
      console.log("[v0] Users Collection ID:", USERS_COLLECTION_ID)

      if (DATABASE_ID && USERS_COLLECTION_ID) {
        try {
          const userEmail = accountDetails.email
          const userEmailLower = accountDetails.email.toLowerCase()

          console.log("[v0] Searching for email:", userEmail)
          console.log("[v0] Lowercase email:", userEmailLower)

          // First try exact match
          let userDocs = await databases.listDocuments(DATABASE_ID, USERS_COLLECTION_ID, [
            Query.equal("email", userEmail),
          ])

          console.log("[v0] Exact match results:", userDocs.documents.length)

          // If no exact match, try lowercase
          if (userDocs.documents.length === 0) {
            userDocs = await databases.listDocuments(DATABASE_ID, USERS_COLLECTION_ID, [
              Query.equal("email", userEmailLower),
            ])
            console.log("[v0] Lowercase match results:", userDocs.documents.length)
          }

          // If still no match, get ALL users and manually search (case insensitive)
          if (userDocs.documents.length === 0) {
            console.log("[v0] Trying manual case-insensitive search...")
            const allUsers = await databases.listDocuments(DATABASE_ID, USERS_COLLECTION_ID)
            console.log(
              "[v0] All users in database:",
              allUsers.documents.map((d) => d.email),
            )

            const matchedUser = allUsers.documents.find(
              (doc) => doc.email && doc.email.toLowerCase() === userEmailLower,
            )

            if (matchedUser) {
              userDocs = { documents: [matchedUser] }
              console.log("[v0] Found user with case-insensitive match:", matchedUser.email)
            }
          }

          if (userDocs.documents.length > 0) {
            const userDoc = userDocs.documents[0]
            console.log("[v0] User document found:", userDoc)
            console.log("[v0] User role:", userDoc.role)

            setUserData({
              ...userDoc,
              type: userDoc.role || "member",
            })
          } else {
            // No user found, create new one
            console.log("[v0] User not in database, creating new document...")

            try {
              const newUserDoc = await databases.createDocument(DATABASE_ID, USERS_COLLECTION_ID, "unique()", {
                email: userEmail.toLowerCase(), // Store lowercase for consistency
                name: accountDetails.name || accountDetails.email.split("@")[0],
                role: "member",
              })
              console.log("[v0] New user created:", newUserDoc)
              setUserData({
                ...newUserDoc,
                type: "member",
              })
            } catch (createError) {
              console.error("[v0] Failed to create user:", createError.message)
              setUserData({
                type: "member",
                email: accountDetails.email,
                name: accountDetails.name || accountDetails.email.split("@")[0],
                $id: accountDetails.$id,
              })
            }
          }
        } catch (error) {
          console.error("[v0] Database query error:", error.message)
          setUserData({
            type: "member",
            email: accountDetails.email,
            name: accountDetails.name || accountDetails.email.split("@")[0],
            $id: accountDetails.$id,
          })
        }
      } else {
        console.warn("[v0] Missing env vars")
        setUserData({
          type: "member",
          email: accountDetails.email,
          name: accountDetails.name,
          $id: accountDetails.$id,
        })
      }
    } catch (error) {
      console.log("[v0] No active session:", error.message)
      setUser(null)
      setUserData(null)
    } finally {
      setLoading(false)
    }
  }

  const loginWithGoogle = async () => {
    try {
      account.createOAuth2Session(
        OAuthProvider.Google,
        `${window.location.origin}/dashboard`,
        `${window.location.origin}/login`,
      )
    } catch (error) {
      console.error("[v0] Google login error:", error)
    }
  }

  const loginWithMagicLink = async (email) => {
    try {
      await account.createMagicURLToken("unique()", email, `${window.location.origin}/dashboard`)
      return { success: true }
    } catch (error) {
      console.error("[v0] Magic link error:", error)
      return { success: false, error }
    }
  }

  const loginWithPassword = async (email, password) => {
    try {
      await account.createEmailPasswordSession(email, password)
      await checkUserStatus() // Hydrate user data
      return { success: true }
    } catch (error) {
      console.error("[v0] Password login error:", error)
      return { success: false, error }
    }
  }

  const logout = async () => {
    try {
      await account.deleteSession("current")
      setUser(null)
      setUserData(null)
    } catch (error) {
      console.error("[v0] Logout error:", error)
    }
  }

  const refreshUser = () => {
    checkUserStatus()
  }

  const value = {
    user,
    userData,
    loading,
    loginWithGoogle,
    loginWithMagicLink,
    loginWithPassword,
    logout,
    refreshUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
