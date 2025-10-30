"use client";

import { useState, useEffect } from "react";
import { useMockData } from "@/lib/portal/mockDataService";
import type { Commission } from "@/lib/portal/mockDataService";
import { DashboardLayout } from "@/components/portal/DashboardLayout";

export default function CommissionsPage() {
  const { currentUserCommissions } = useMockData();
  const [selectedPeriod, setSelectedPeriod] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Get unique periods
  const periods = [...new Set(currentUserCommissions.map(c => c.period))].sort().reverse();

  // Filter commissions
  const filteredCommissions = currentUserCommissions.filter(commission => {
    const periodMatch = selectedPeriod === "all" || commission.period === selectedPeriod;
    const typeMatch = selectedType === "all" || commission.type === selectedType;
    return periodMatch && typeMatch;
  });

  // Calculate totals
  const totalPaid = filteredCommissions
    .filter(c => c.status === "paid")
    .reduce((sum, c) => sum + c.amount, 0);

  const totalPending = filteredCommissions
    .filter(c => c.status === "pending")
    .reduce((sum, c) => sum + c.amount, 0);

  const totalProcessing = filteredCommissions
    .filter(c => c.status === "processing")
    .reduce((sum, c) => sum + c.amount, 0);

  // Commission type labels
  const commissionLabels: Record<string, string> = {
    binary: "Binary Commission",
    sponsor: "Sponsor Bonus",
    matching: "Matching Bonus",
    override: "Override Commission",
    bonus: "Rank Bonus",
    mga_quarterly: "MGA Quarterly Bonus"
  };

  const commissionTypeColors: Record<string, string> = {
    binary: "bg-blue-100 text-blue-700",
    sponsor: "bg-green-100 text-green-700",
    matching: "bg-purple-100 text-purple-700",
    override: "bg-orange-100 text-orange-700",
    bonus: "bg-pink-100 text-pink-700",
    mga_quarterly: "bg-yellow-100 text-yellow-700"
  };

  const statusColors = {
    paid: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
    processing: "bg-blue-100 text-blue-700"
  };

  const handleExportCSV = () => {
    const headers = ["ID", "Type", "Amount", "Period", "Status", "Paid Date", "Description"];
    const rows = filteredCommissions.map(c => [
      c.id,
      commissionLabels[c.type] || c.type,
      `$${c.amount.toLocaleString()}`,
      c.period,
      c.status,
      c.paidDate || "N/A",
      c.description
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `commissions-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  if (!mounted) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="text-4xl mb-4">💰</div>
            <p className="text-gray-500">Loading commissions...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">💰 Commission Center</h1>
              <p className="text-sm text-gray-600 mt-1">
                Track your earnings and commission history
              </p>
            </div>

            <button
              onClick={handleExportCSV}
              className="bg-[#C41E3A] text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              📥 Export to CSV
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Paid</p>
                <p className="text-3xl font-bold text-green-600">${totalPaid.toLocaleString()}</p>
              </div>
              <div className="bg-green-100 rounded-full p-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-3xl font-bold text-yellow-600">${totalPending.toLocaleString()}</p>
              </div>
              <div className="bg-yellow-100 rounded-full p-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Processing</p>
                <p className="text-3xl font-bold text-blue-600">${totalProcessing.toLocaleString()}</p>
              </div>
              <div className="bg-blue-100 rounded-full p-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Period
              </label>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
              >
                <option value="all">All Periods</option>
                {periods.map(period => (
                  <option key={period} value={period}>{period}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
              >
                <option value="all">All Types</option>
                {Object.entries(commissionLabels).map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Commission History Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Commission History ({filteredCommissions.length} records)
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Period
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Paid Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCommissions.slice(0, 100).map((commission) => (
                  <tr key={commission.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {commission.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${commissionTypeColors[commission.type]}`}>
                        {commissionLabels[commission.type] || commission.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                      ${commission.amount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {commission.period}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[commission.status]}`}>
                        {commission.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {commission.paidDate 
                        ? new Date(commission.paidDate).toLocaleDateString()
                        : "-"
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredCommissions.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              <p>No commissions found matching your filters</p>
            </div>
          )}

          {filteredCommissions.length > 100 && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600">
                Showing first 100 of {filteredCommissions.length} records. Use filters to refine results.
              </p>
            </div>
          )}
        </div>
      </DashboardLayout>
  );
}


