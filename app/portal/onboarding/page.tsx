"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/portal/DashboardLayout";

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Profile
    legalName: "",
    npn: "",
    dncPreference: false,
    
    // Carrier Selection
    carrier1: "",
    carrier2: "",
    carrier3: "",
    productType: "life",
    
    // Agreements
    writingAgentAgreed: false,
    termsAgreed: false,
    signature: "",
  });

  const carriers = [
    "American National",
    "Americo",
    "Foresters",
    "Mutual of Omaha",
    "National Life Group",
    "Prosperity Life",
    "Royal Neighbors",
    "Transamerica"
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    alert("Onboarding submitted successfully! Your application will be reviewed by your MGA.");
  };

  const steps = [
    { number: 1, title: "Profile", icon: "👤" },
    { number: 2, title: "Carrier Selection", icon: "🏢" },
    { number: 3, title: "Agreements", icon: "✍️" },
    { number: 4, title: "Review", icon: "✅" }
  ];

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900">🚀 New Member Onboarding</h1>
          <p className="text-sm text-gray-600 mt-1">
            Complete your profile and get started with APEX
          </p>
        </div>

        {/* Progress Steps */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-center justify-between">
            {steps.map((step, idx) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-all ${
                      step.number === currentStep
                        ? "bg-[#C41E3A] text-white"
                        : step.number < currentStep
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    {step.number < currentStep ? "✓" : step.icon}
                  </div>
                  <p
                    className={`text-sm mt-2 font-medium ${
                      step.number === currentStep
                        ? "text-[#C41E3A]"
                        : step.number < currentStep
                        ? "text-green-600"
                        : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </p>
                </div>
                {idx < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-4 ${
                      step.number < currentStep ? "bg-green-500" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          {/* Step 1: Profile Completion */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">📋 Profile Information</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  License/Legal Name *
                </label>
                <input
                  type="text"
                  value={formData.legalName}
                  onChange={(e) => handleInputChange("legalName", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
                  placeholder="Enter your legal name as it appears on your license"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  NPN Number *
                </label>
                <input
                  type="text"
                  value={formData.npn}
                  onChange={(e) => handleInputChange("npn", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
                  placeholder="Enter your National Producer Number"
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.dncPreference}
                    onChange={(e) => handleInputChange("dncPreference", e.target.checked)}
                    className="rounded text-[#C41E3A] focus:ring-[#C41E3A]"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Add me to Do Not Call (DNC) list
                    </p>
                    <p className="text-xs text-gray-600">
                      If checked, you won't receive promotional calls from APEX
                    </p>
                  </div>
                </label>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> Your source will be automatically set to "APEX" in our system.
                </p>
              </div>
            </div>
          )}

          {/* Step 2: Carrier Selection */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">🏢 Carrier Selection</h2>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  <strong>Required:</strong> Please select 3 carriers for annualization. This is a mandatory step for your onboarding.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Type *
                </label>
                <select
                  value={formData.productType}
                  onChange={(e) => handleInputChange("productType", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
                >
                  <option value="life">Life Insurance</option>
                  <option value="annuity">Annuity</option>
                  <option value="both">Both</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Carrier (1) *
                </label>
                <select
                  value={formData.carrier1}
                  onChange={(e) => handleInputChange("carrier1", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
                >
                  <option value="">Select a carrier...</option>
                  {carriers.map(carrier => (
                    <option key={carrier} value={carrier}>{carrier}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Secondary Carrier (2) *
                </label>
                <select
                  value={formData.carrier2}
                  onChange={(e) => handleInputChange("carrier2", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
                  disabled={!formData.carrier1}
                >
                  <option value="">Select a carrier...</option>
                  {carriers.filter(c => c !== formData.carrier1).map(carrier => (
                    <option key={carrier} value={carrier}>{carrier}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tertiary Carrier (3) *
                </label>
                <select
                  value={formData.carrier3}
                  onChange={(e) => handleInputChange("carrier3", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
                  disabled={!formData.carrier2}
                >
                  <option value="">Select a carrier...</option>
                  {carriers.filter(c => c !== formData.carrier1 && c !== formData.carrier2).map(carrier => (
                    <option key={carrier} value={carrier}>{carrier}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Step 3: Agreements */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">✍️ Digital Agreements</h2>

              <div className="border border-gray-200 rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-gray-900">Writing Agent Agreement</h3>
                <div className="bg-gray-50 rounded p-4 max-h-64 overflow-y-auto text-sm text-gray-700">
                  <p className="mb-4"><strong>APEX AFFINITY GROUP - WRITING AGENT AGREEMENT</strong></p>
                  <p className="mb-2">This Agreement is entered into as of the date of electronic signature between:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>APEX Affinity Group ("Company")</li>
                    <li>The undersigned Agent ("Agent")</li>
                  </ul>
                  <p className="mt-4 mb-2"><strong>1. APPOINTMENT</strong></p>
                  <p>The Company hereby appoints the Agent as an independent contractor to solicit applications for insurance products...</p>
                  <p className="mt-4 mb-2"><strong>2. COMPENSATION</strong></p>
                  <p>Agent shall be compensated according to the commission schedule provided separately...</p>
                  <p className="mt-4 mb-2"><strong>3. COMPLIANCE</strong></p>
                  <p>Agent agrees to comply with all applicable federal and state insurance regulations...</p>
                  <p className="mt-4 text-xs text-gray-500">[Full agreement text would be displayed here]</p>
                </div>
                
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.writingAgentAgreed}
                    onChange={(e) => handleInputChange("writingAgentAgreed", e.target.checked)}
                    className="rounded text-[#C41E3A] focus:ring-[#C41E3A]"
                  />
                  <span className="text-sm text-gray-700">
                    I have read and agree to the Writing Agent Agreement *
                  </span>
                </label>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-gray-900">Terms and Conditions</h3>
                <div className="bg-gray-50 rounded p-4 max-h-64 overflow-y-auto text-sm text-gray-700">
                  <p className="mb-4"><strong>APEX AFFINITY GROUP - TERMS OF SERVICE</strong></p>
                  <p className="mb-2">By using the APEX portal and services, you agree to:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Maintain active insurance licenses in good standing</li>
                    <li>Conduct business ethically and in compliance with all regulations</li>
                    <li>Protect confidential information and client data</li>
                    <li>Participate in required training and education programs</li>
                  </ul>
                  <p className="mt-4 text-xs text-gray-500">[Full terms would be displayed here]</p>
                </div>
                
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.termsAgreed}
                    onChange={(e) => handleInputChange("termsAgreed", e.target.checked)}
                    className="rounded text-[#C41E3A] focus:ring-[#C41E3A]"
                  />
                  <span className="text-sm text-gray-700">
                    I have read and agree to the Terms and Conditions *
                  </span>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Electronic Signature *
                </label>
                <input
                  type="text"
                  value={formData.signature}
                  onChange={(e) => handleInputChange("signature", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent font-signature text-2xl"
                  placeholder="Type your full legal name"
                  style={{ fontFamily: "'Brush Script MT', cursive" }}
                />
                <p className="text-xs text-gray-500 mt-1">
                  By typing your name, you are providing a legal electronic signature
                </p>
              </div>
            </div>
          )}

          {/* Step 4: Review */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">✅ Review Your Information</h2>

              <div className="border border-gray-200 rounded-lg p-6 space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Legal Name</p>
                  <p className="text-lg font-semibold text-gray-900">{formData.legalName || "-"}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600">NPN Number</p>
                  <p className="text-lg font-semibold text-gray-900">{formData.npn || "-"}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600">DNC Preference</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {formData.dncPreference ? "✓ Opted In" : "Not Opted In"}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-600">Product Type</p>
                  <p className="text-lg font-semibold text-gray-900 capitalize">{formData.productType}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600">Selected Carriers</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.carrier1 && (
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {formData.carrier1}
                      </span>
                    )}
                    {formData.carrier2 && (
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {formData.carrier2}
                      </span>
                    )}
                    {formData.carrier3 && (
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {formData.carrier3}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600">Agreements</p>
                  <div className="space-y-1 mt-2">
                    <p className="text-sm text-gray-700">
                      {formData.writingAgentAgreed ? "✓" : "✗"} Writing Agent Agreement
                    </p>
                    <p className="text-sm text-gray-700">
                      {formData.termsAgreed ? "✓" : "✗"} Terms and Conditions
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600">Electronic Signature</p>
                  <p className="text-2xl text-gray-900 font-signature" style={{ fontFamily: "'Brush Script MT', cursive" }}>
                    {formData.signature || "-"}
                  </p>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-green-800">
                  <strong>✓ Ready to Submit:</strong> Your application will be sent to your MGA for review and approval.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevStep}
            disabled={currentStep === 1}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              currentStep === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            ← Previous
          </button>

          {currentStep < 4 ? (
            <button
              onClick={handleNextStep}
              className="bg-[#C41E3A] text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Submit Application ✓
            </button>
          )}
        </div>
      </div>
      </DashboardLayout>
  );
}


