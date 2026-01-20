'use client';

import { useState } from 'react';
import Header from '../components/Header';

function Sportfest() {
  const [searchTerm, setSearchTerm] = useState('');

  const sportsData = [
    {
      id: 1,
      name: 'Basket Ball',
      image: 'https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/696fb33500248607c462/view?project=695eb843003ae5a0552b&mode=admin',
      details: [
        'Format: Knockout format',
        'Players: max. 12 players per team',
        'Playing time: 4 × 10 minutes (4 minutes overtime)',
      ],
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc-R7jPrBoVX774SYupEFzTAD2Q7rADZRoWadE8rKJ7diLP_g/viewform',
    },
    {
      id: 2,
      name: 'Football',
      image: 'https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/696fb32a002aaa614c1e/view?project=695eb843003ae5a0552b&mode=admin',
      details: [
        'Format: Knockout format',
        'Players: max. 18 players & min 11 players per team',
        'Playing time: two 30 minutes halves with 10 minutes rest',
      ],
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeA7Xly0LnZjcO86o6NOorO8_LhEiWHAALIYcO1Q8JLC3m0GQ/viewform',
    },
    {
      id: 3,
      name: 'Volleyball',
      image: 'https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/696fb54c00321a3e4544/view?project=695eb843003ae5a0552b&mode=admin',
      details: [
        'Format: League format',
        'Players: 6 players per team',
        'Playing time: Best of 3 sets with 25 points per set',
      ],
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf5AzN_Edc2IT01ylz9-SIOn8p9PiN2jXvdYCGvsEMpu-l7Dw/viewform',
    },
    {
      id: 4,
      name: 'Badminton',
      image: 'https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/696fb57a00175a1de88f/view?project=695eb843003ae5a0552b&mode=admin',
      details: [
        'Format: Knockout format',
        'Categories: Singles & Doubles',
        'Playing time: Best of 3 matches, 21 points per match',
      ],
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSes4RT3rEs-zXZ_wizH0M6mIjiuave0URxIhLGMjnwKJqqP5w/viewform',
    },
    {
      id: 5,
      name: 'Table Tennis',
      image: 'https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/696fb30e0033b253d393/view?project=695eb843003ae5a0552b&mode=admin',
      details: [
        'Format: Knockout format',
        'Categories: Singles & Doubles',
        'Playing time: Best of 3 matches, 11 points per match',
      ],
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSej5a1w7nq7BAGkb25Wb5L5IUyHAjpxoTiJG1JwhpNAiIykzw/viewform',
    },
    {
      id: 6,
      name: 'Cricket',
      image: 'https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/696fb6fb003c59f0213a/view?project=695eb843003ae5a0552b&mode=admin',
      details: [
        'Format: T20 League format',
        'Players: max. 15 players per team',
        'Playing time: 20 overs per side',
      ],
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc5Me7mFTmHTSoq96gR5zdbOtlick7rFZXy7HMMQ4bsGMY4oA/viewform',
    },
    {
      id: 7,
      name: 'Kabaddi',
      image: 'https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/696fb31d00295744d0a6/view?project=695eb843003ae5a0552b&mode=admin',
      details: [
        'Format: Knockout format',
        'Players: max. 12 players per team',
        'Playing time: 15 mins per half',
      ],
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc9PDeGfMUrql-1SD1dtBenwR7kBTCvjzVBZEVqTvjQJJko7w/viewform',
    },
    {
      id: 8,
      name: 'Chess',
      image: 'https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/696fb6d4001524dd56a3/view?project=695eb843003ae5a0552b&mode=admin',
      details: [
        'Format: Individual knockout',
        'Standard FIDE rules',
        'Time control as per organizers',
      ],
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc--ThbPH-pxbPjEuHAixAAUJjHEgkuf5JMCtGHzouZ1Frw-g/viewform',
    },
    {
      id: 9,
      name: 'Weightlifting',
      image: 'https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/696fb301000e38f8535e/view?project=695eb843003ae5a0552b&mode=admin',
      details: [
        '2 attempts per lift',
        'Entry fees as per category',
        'Strict weight categories',
      ],
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf1CbTnSnjWObGXsZRJEwb9ZHeGM1aL9iH55f77b_94jz-8Ag/viewform',
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#0F041C] flex flex-col">
      <Header />

      {/* FULL PAGE BACKGROUND */}
      <img
        src="/Herosection_BG.svg"
        alt="Background"
        className="hidden sm:block fixed inset-0 w-full h-screen object-cover opacity-30 pointer-events-none z-0"
      />

      <main className="relative z-10 flex-1 w-full pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* HERO */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              adVITya&apos;26 SPORTS FEST
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Dive into the heart of VIT Bhopal with adVITya&apos;26 – an electrifying blend of sports,
              energy, and competition.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <a href="mailto:advitya.convenor@vitbhopal.ac.in?cc=events@vitbhopal.ac.in">
                <button className="px-8 py-3 bg-[#3D1749] hover:bg-[#4D1F59] text-white font-semibold rounded-lg transition">
                  CONTACT US
                </button>
              </a>

              <a
                href="https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/696fa8b0002393a9c135/view?project=695eb843003ae5a0552b&mode=admin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-3 bg-[#C4A8D8] hover:bg-[#D4B8E8] text-gray-900 font-semibold rounded-lg transition">
                  ↓ BROCHURE
                </button>
              </a>
            </div>
          </div>

          {/* SPORTS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sportsData.map((sport) => (
              <div
                key={sport.id}
                className="bg-[#1A0A28] border border-purple-700/30 rounded-2xl overflow-hidden hover:border-purple-500/50 transition"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={sport.image}
                    alt={sport.name}
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {sport.name}
                  </h3>

                  <ul className="space-y-2 mb-6">
                    {sport.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-300 flex gap-2">
                        <span className="text-purple-400">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={sport.registerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#C4A8D8] hover:bg-[#D4B8E8] text-gray-900 font-bold py-3 rounded-lg text-center rounded-lg transition"
                  >
                    Register
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Sportfest;
