"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function PaymentDetailsPage() {
  const router = useRouter()
  const [fileName, setFileName] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name)
    }
  }

  const handleUploadReceipt = async () => {
    if (!fileName) {
      alert("Please select a file to upload")
      return
    }

    setIsUploading(true)
    // Simulate upload delay
    setTimeout(() => {
      router.push("/activate/payment-review")
    }, 1500)
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
        {/* Payment Details Card */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          {/* Amount */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <p className="text-gray-600 text-lg mb-2">Amount to Pay</p>
            <h2 className="text-4xl font-bold text-gray-900">18,400</h2>
          </div>

          {/* Account Number */}
          <div className="mb-8">
            <label className="block text-gray-900 font-semibold mb-3">Account Number</label>
            <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 font-medium">
              8110221728
            </div>
          </div>

          {/* Account Name */}
          <div className="mb-8">
            <label className="block text-gray-900 font-semibold mb-3">Account Name</label>
            <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 font-medium">
              AROWOJOLU ABIDEMI
            </div>
          </div>

          {/* Bank Name */}
          <div className="mb-8">
            <label className="block text-gray-900 font-semibold mb-3">Bank Name</label>
            <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 font-medium">
              zenith Eazy wallet
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

          {/* Upload Receipt Button */}
          <button
            onClick={handleUploadReceipt}
            disabled={isUploading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-3 px-4 rounded-lg transition"
          >
            {isUploading ? "Uploading..." : "Upload Receipt"}
          </button>
        </div>
      </div>
    </main>
  )
}
