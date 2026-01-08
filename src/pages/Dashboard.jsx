"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/contexts/AuthContext"
import AdminDashboard from "@/components/Dashboard/AdminDashboard.jsx"
import CoordinatorDashboard from "@/components/Dashboard/CoordinatorDashboard.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Dashboard() {
  const { user, userData, loading, logout } = useAuth()
  const navigate = useNavigate()
  const [showDebug, setShowDebug] = useState(false)

  useEffect(() => {
    if (!loading && !user) {
      navigate("/")
    }
  }, [user, loading, navigate])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#12001A]">
        <div className="flex items-center justify-center min-h-screen">
          <FontAwesomeIcon icon={faSpinner} spin className="text-6xl text-purple-600" />
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  // This helps with debugging and shows users their status
  if (!userData || userData?.type === "member") {
    return (
      <div className="min-h-screen bg-[#12001A]">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center">
                <FontAwesomeIcon icon={faUser} className="text-2xl text-purple-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">{user.name || "User"}</h1>
                <p className="text-gray-400 flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
                  {user.email}
                </p>
              </div>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-6">
              <h3 className="text-yellow-400 font-semibold mb-2">Member Account</h3>
              <p className="text-gray-300 text-sm">
                You are logged in as a <strong>member</strong>. To access the admin or coordinator dashboard, an
                administrator needs to update your role in the database.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Your Account Info</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>
                    <strong>User ID:</strong> {user.$id}
                  </li>
                  <li>
                    <strong>Email:</strong> {user.email}
                  </li>
                  <li>
                    <strong>Role:</strong> {userData?.type || userData?.role || "member"}
                  </li>
                </ul>
              </div>

              <button
                onClick={() => setShowDebug(!showDebug)}
                className="text-sm text-purple-400 hover:text-purple-300"
              >
                {showDebug ? "Hide" : "Show"} Debug Info
              </button>

              {showDebug && (
                <pre className="bg-black/50 rounded-lg p-4 text-xs text-green-400 overflow-auto max-h-64">
                  {JSON.stringify({ user, userData }, null, 2)}
                </pre>
              )}
            </div>

            <button
              onClick={logout}
              className="mt-6 px-6 py-3 bg-red-500/20 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#12001A]">
      <div>
        {userData?.type === "admin" ? (
          <AdminDashboard />
        ) : userData?.type === "coordinator" ? (
          <CoordinatorDashboard clubName={userData.clubName} />
        ) : null}
      </div>
    </div>
  )
}
