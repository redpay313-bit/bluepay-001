"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ProcessingPage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/activate/payment")
    }, 4000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <main className="min-h-screen bg-blue-600 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 border-b border-blue-700 py-6 px-4">
        <div className="max-w-2xl mx-auto flex items-center gap-6">
          {/* Logo */}
          <div className="w-16 h-16 bg-slate-900 flex items-center justify-center flex-shrink-0 rounded-sm">
            <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white">Blue Pay Activation</h1>
        </div>
      </div>

      {/* Loading Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        {/* Spinner */}
        <div className="mb-12">
          <div className="w-32 h-32 border-8 border-blue-400 border-t-white rounded-full animate-spin"></div>
        </div>

        {/* Text */}
        <p className="text-4xl font-bold text-white text-center">Verifying account details</p>
      </div>
    </main>
  )
}
