"use client";

import { useMockData } from "@/lib/portal/mockDataService";

export function TeamVolume() {
  const { currentUserStats } = useMockData();

  const leftPercentage = (currentUserStats.leftLegVolume / currentUserStats.groupVolume) * 100;
  const rightPercentage = (currentUserStats.rightLegVolume / currentUserStats.groupVolume) * 100;

  const weaker = currentUserStats.leftLegVolume < currentUserStats.rightLegVolume ? "left" : "right";
  const weakerVolume = Math.min(currentUserStats.leftLegVolume, currentUserStats.rightLegVolume);
  const strongerVolume = Math.max(currentUserStats.leftLegVolume, currentUserStats.rightLegVolume);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">👥 Team Volume</h3>

      <div className="space-y-6">
        {/* Total Group Volume */}
        <div className="text-center">
          <p className="text-sm text-gray-600">Total Group Volume</p>
          <p className="text-3xl font-bold text-gray-900">${currentUserStats.groupVolume.toLocaleString()}</p>
        </div>

        {/* Binary Legs */}
        <div className="grid grid-cols-2 gap-4">
          <div className={`rounded-lg p-4 ${weaker === "left" ? "bg-yellow-50 border-2 border-yellow-300" : "bg-green-50"}`}>
            <p className="text-xs text-gray-600 mb-1">
              Left Leg {weaker === "left" && "⚠️"}
            </p>
            <p className="text-xl font-bold text-gray-900">${currentUserStats.leftLegVolume.toLocaleString()}</p>
            <p className="text-xs text-gray-500 mt-1">{leftPercentage.toFixed(1)}%</p>
          </div>
          <div className={`rounded-lg p-4 ${weaker === "right" ? "bg-yellow-50 border-2 border-yellow-300" : "bg-green-50"}`}>
            <p className="text-xs text-gray-600 mb-1">
              Right Leg {weaker === "right" && "⚠️"}
            </p>
            <p className="text-xl font-bold text-gray-900">${currentUserStats.rightLegVolume.toLocaleString()}</p>
            <p className="text-xs text-gray-500 mt-1">{rightPercentage.toFixed(1)}%</p>
          </div>
        </div>

        {/* Visual Balance Indicator */}
        <div>
          <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
            <span>Left</span>
            <span>Balance</span>
            <span>Right</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div className="h-full flex">
              <div 
                className="bg-blue-500"
                style={{ width: `${leftPercentage}%` }}
              />
              <div 
                className="bg-green-500"
                style={{ width: `${rightPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Binary Qualification Status */}
        <div className="bg-blue-50 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-600">Weaker Leg Volume</p>
              <p className="text-lg font-bold text-gray-900">${weakerVolume.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-600">Binary Commission</p>
              <p className="text-lg font-bold text-[#C41E3A]">${(weakerVolume * 0.15).toLocaleString()}</p>
              <p className="text-xs text-gray-500">Est. 15%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


