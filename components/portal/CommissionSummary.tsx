"use client";

import { useMockData } from "@/lib/portal/mockDataService";
import Link from "next/link";

export function CommissionSummary() {
  const { currentUserStats, currentUserCommissions } = useMockData();

  const commissionsByType = currentUserCommissions
    .filter(c => c.period === new Date().toISOString().substring(0, 7))
    .reduce((acc, c) => {
      acc[c.type] = (acc[c.type] || 0) + c.amount;
      return acc;
    }, {} as Record<string, number>);

  const commissionLabels: Record<string, string> = {
    binary: "Binary Commissions",
    sponsor: "Sponsor Bonuses",
    matching: "Matching Bonuses",
    override: "Override Commissions",
    bonus: "Rank Bonuses",
    mga_quarterly: "MGA Quarterly Bonus"
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">💰 Commission Summary</h3>
        <Link 
          href="/portal/commissions" 
          className="text-sm text-[#C41E3A] hover:underline"
        >
          View All
        </Link>
      </div>

      <div className="space-y-4">
        {/* Total Earnings */}
        <div className="bg-gradient-to-r from-[#C41E3A] to-red-600 rounded-lg p-4 text-white">
          <p className="text-sm opacity-90">Month-to-Date Earnings</p>
          <p className="text-3xl font-bold">${currentUserStats.mtdEarnings.toLocaleString()}</p>
        </div>

        {/* YTD & Pending */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-xs text-gray-600">Year-to-Date</p>
            <p className="text-xl font-bold text-gray-900">${currentUserStats.ytdEarnings.toLocaleString()}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-xs text-gray-600">Pending</p>
            <p className="text-xl font-bold text-gray-900">${currentUserStats.pendingCommissions.toLocaleString()}</p>
          </div>
        </div>

        {/* Breakdown */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">This Month Breakdown:</p>
          {Object.entries(commissionsByType).map(([type, amount]) => (
            <div key={type} className="flex justify-between items-center text-sm">
              <span className="text-gray-600">{commissionLabels[type] || type}</span>
              <span className="font-semibold text-gray-900">${amount.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


