"use client";

import { useState } from "react";

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-[#C41E3A] to-red-600 text-white rounded-lg shadow-lg p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">📢</span>
          <div>
            <p className="font-semibold">Q4 MGA Bonus Program Now Active!</p>
            <p className="text-sm opacity-90">
              Achieve your quarterly goals and earn up to $5,000 in bonus commissions. Track your progress below.
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-gray-200 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}


