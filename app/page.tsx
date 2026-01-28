"use client"

import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  const handleActivate = () => {
    router.push("/activate")
  }

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Header with logo and title */}
      <div className="flex items-center gap-6 mb-12">
        {/* Dark navy logo box */}
        <div className="w-24 h-24 bg-slate-900 flex items-center justify-center flex-shrink-0 rounded-sm">
          <svg className="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-black">Blue Pay Activation</h1>
      </div>

      {/* Banner with BLUEPAY2026 */}
      <div className="w-full max-w-2xl mb-12 bg-blue-600 p-8 rounded-lg">
        <div className="bg-slate-100 px-6 py-4 rounded-md relative overflow-hidden">
          {/* Dripping effect */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600 opacity-0"></div>
          <svg className="absolute -top-2 left-0 right-0 w-full" viewBox="0 0 400 20" preserveAspectRatio="none">
            <defs>
              <pattern id="drip" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 Q 20 5 15 8 Q 10 11 20 15 Q 30 11 25 8 Q 20 5 20 0" fill="rgb(37, 99, 235)" />
              </pattern>
            </defs>
          </svg>
          <h2
            className="text-3xl font-black text-blue-600 tracking-tight"
            style={{
              fontFamily: "Impact, sans-serif",
              letterSpacing: "0.05em",
              textShadow: "2px 2px 0px rgba(0,0,0,0.1)",
            }}
          >
            BLUEPAY2026
          </h2>
          {/* Drips at bottom */}
          <div className="absolute -bottom-3 left-0 right-0 flex justify-around px-6 text-blue-600 text-lg font-bold opacity-60">
            <span>~</span>
            <span>~</span>
            <span>~</span>
            <span>~</span>
          </div>
        </div>
      </div>

      {/* Main heading */}
      <h2 className="text-5xl font-bold text-blue-600 text-center mb-8 max-w-2xl" style={{ lineHeight: "1.2" }}>
        Welcome to Blue Pay Payment System
      </h2>

      {/* Subheading */}
      <p className="text-2xl text-gray-600 text-center mb-12 max-w-2xl">
        Activate your account and start using BluePay2026 today!
      </p>

      <button
        onClick={handleActivate}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-2xl text-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
      >
        Activate
      </button>
    </main>
  )
}
