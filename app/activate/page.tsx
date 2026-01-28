"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"

const NIGERIAN_BANKS = [
  "Access Bank",
  "Zenith Bank",
  "Guaranty Trust Bank (GTB)",
  "United Bank for Africa (UBA)",
  "Fidelity Bank",
  "Wema Bank",
  "First City Monument Bank (FCMB)",
  "Stanbic IBTC Bank",
  "Sterling Bank",
  "Ecobank",
  "ICBC Nigeria",
  "Polaris Bank",
  "Union Bank of Nigeria",
  "First Bank Nigeria",
  "Standard Chartered Bank",
  "Citibank Nigeria",
  "Heritage Bank",
  "Keystone Bank",
  "Providus Bank",
  "Titan Bank",
  "Abbey Mortgage Bank",
  "Accion Microfinance Bank",
  "Apeks Microfinance Bank",
  "Benu Microfinance Bank",
  "BOFA Microfinance Bank",
  "CGC Microfinance Bank",
  "Cheated Microfinance Bank",
  "Chikum Microfinance Bank",
  "Credit Afrique Microfinance Bank",
  "Fido Microfinance Bank",
  "Fortis Microfinance Bank",
  "Gowans Microfinance Bank",
  "Grooming Microfinance Bank",
  "Haggai Microfinance Bank",
  "Horsed Microfinance Bank",
  "IRL Microfinance Bank",
  "LAPO Microfinance Bank",
  "Midland Microfinance Bank",
  "Mogul Microfinance Bank",
  "Nuli Microfinance Bank",
  "Okhaio Microfinance Bank",
  "Olowolagba Microfinance Bank",
  "Optimus Bank",
  "PatrickGold Microfinance Bank",
  "Petrolex Microfinance Bank",
  "Royal Microfinance Bank",
  "Sigma Microfinance Bank",
  "Unity Bank",
  "VFD Microfinance Bank",
  "Visa Card Services",
  "Opay",
  "Moniepoint",
  "Palmpay",
  "Momo Bank",
]

export default function ActivatePage() {
  const [formData, setFormData] = useState({
    accountNumber: "",
    accountName: "",
    bank: "",
    email: "",
    bpcCode: "",
  })
  const [generalError, setGeneralError] = useState("")
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (generalError) {
      setGeneralError("")
    }
  }

  const validateForm = () => {
    if (
      !formData.accountNumber.trim() ||
      !formData.accountName.trim() ||
      !formData.bank ||
      !formData.email.trim() ||
      !formData.bpcCode.trim()
    ) {
      setGeneralError("Please fill in all your details")
      return false
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setGeneralError("Please enter a valid email address")
      return false
    }

    return true
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      router.push("/activate/processing")
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-6 px-4">
        <div className="max-w-2xl mx-auto flex items-center gap-6">
          {/* Logo */}
          <div className="w-16 h-16 bg-slate-900 flex items-center justify-center flex-shrink-0 rounded-sm">
            <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-black">Blue Pay Activation</h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm p-8">
          {/* Form Header */}
          <h2 className="text-3xl font-bold text-black mb-3">Activate Your Blue Pay Account</h2>
          <p className="text-gray-600 text-lg mb-8">Please provide your details to activate your account</p>

          {generalError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 font-medium text-center">{generalError}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Account Number */}
            <div>
              <label className="block text-lg font-bold text-black mb-2">Account Number</label>
              <input
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleInputChange}
                placeholder="Enter your account number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            {/* Account Name */}
            <div>
              <label className="block text-lg font-bold text-black mb-2">Account Name</label>
              <input
                type="text"
                name="accountName"
                value={formData.accountName}
                onChange={handleInputChange}
                placeholder="Enter your account name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            {/* Select Bank */}
            <div>
              <label className="block text-lg font-bold text-black mb-2">Select Bank</label>
              <select
                name="bank"
                value={formData.bank}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white"
              >
                <option value="">Select a bank</option>
                {NIGERIAN_BANKS.map((bank) => (
                  <option key={bank} value={bank}>
                    {bank}
                  </option>
                ))}
              </select>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-lg font-bold text-black mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            {/* BPC Code */}
            <div>
              <label className="block text-lg font-bold text-black mb-2">BPC Code</label>
              <input
                type="text"
                name="bpcCode"
                value={formData.bpcCode}
                onChange={handleInputChange}
                placeholder="Enter your BPC code"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg text-lg transition-colors duration-200"
            >
              Proceed to Payment
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
