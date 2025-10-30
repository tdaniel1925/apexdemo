"use client";

import { useState, useEffect } from "react";
import { useMockData } from "@/lib/portal/mockDataService";
import { DashboardLayout } from "@/components/portal/DashboardLayout";

export default function AnalyticsPage() {
  const { currentUserCommissions, teamMembers, activities } = useMockData();
  const [dateRange, setDateRange] = useState("30d");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Calculate analytics
  const commissionTrends = generateCommissionTrends(currentUserCommissions, dateRange);
  const teamGrowth = generateTeamGrowth(teamMembers, dateRange);
  const productMix = generateProductMix(currentUserCommissions);
  const geoDistribution = generateGeoDistribution(teamMembers);

  function generateCommissionTrends(commissions: any[], range: string) {
    const periods = [...new Set(commissions.map(c => c.period))].sort().slice(-12);
    return periods.map(period => ({
      period,
      amount: commissions
        .filter(c => c.period === period && c.status === "paid")
        .reduce((sum, c) => sum + c.amount, 0)
    }));
  }

  function generateTeamGrowth(members: any[], range: string) {
    // Group by enrollment month
    const growth: Record<string, number> = {};
    members.forEach(member => {
      const month = member.enrollmentDate.substring(0, 7);
      growth[month] = (growth[month] || 0) + 1;
    });
    return Object.entries(growth).sort().slice(-12).map(([month, count]) => ({ month, count }));
  }

  function generateProductMix(commissions: any[]) {
    const types = commissions.reduce((acc, c) => {
      acc[c.type] = (acc[c.type] || 0) + c.amount;
      return acc;
    }, {} as Record<string, number>);
    
    const total = Object.values(types).reduce((sum: number, val: number) => sum + val, 0);
    return Object.entries(types).map(([type, amount]: [string, number]) => ({
      type,
      amount,
      percentage: (amount / total) * 100
    }));
  }

  function generateGeoDistribution(members: any[]) {
    const states = members.reduce((acc, m) => {
      acc[m.state] = (acc[m.state] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return Object.entries(states)
      .map(([state, count]: [string, number]) => ({ state, count }))
      .sort((a, b) => (b.count as number) - (a.count as number));
  }

  const handleExportPDF = () => {
    alert("PDF export functionality - would generate comprehensive analytics report");
  };

  const handleExportExcel = () => {
    // Generate Excel-style CSV with multiple sheets
    const commissionData = commissionTrends.map(t => `${t.period},${t.amount}`).join("\n");
    const teamData = teamGrowth.map(t => `${t.month},${t.count}`).join("\n");
    
    const csvContent = `COMMISSION TRENDS\nPeriod,Amount\n${commissionData}\n\nTEAM GROWTH\nMonth,New Members\n${teamData}`;
    
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `analytics-report-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  const commissionTypeLabels: Record<string, string> = {
    binary: "Binary Commissions",
    sponsor: "Sponsor Bonuses",
    matching: "Matching Bonuses",
    override: "Override Commissions",
    bonus: "Rank Bonuses",
    mga_quarterly: "MGA Quarterly Bonus"
  };

  if (!mounted) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="text-4xl mb-4">📊</div>
            <p className="text-gray-500">Loading analytics...</p>
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
              <h1 className="text-2xl font-bold text-gray-900">📈 Analytics & Reports</h1>
              <p className="text-sm text-gray-600 mt-1">
                Comprehensive business intelligence and performance analytics
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
              >
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
                <option value="12m">Last 12 Months</option>
                <option value="ytd">Year to Date</option>
                <option value="all">All Time</option>
              </select>
              
              <button
                onClick={handleExportPDF}
                className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                📄 Export PDF
              </button>
              
              <button
                onClick={handleExportExcel}
                className="bg-[#C41E3A] text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                📊 Export Excel
              </button>
            </div>
          </div>
        </div>

        {/* Key Metrics Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm text-gray-600">Total Earnings</p>
            <p className="text-3xl font-bold text-gray-900">
              ${currentUserCommissions
                .filter(c => c.status === "paid")
                .reduce((sum, c) => sum + c.amount, 0)
                .toLocaleString()}
            </p>
            <p className="text-xs text-green-600 mt-2">↑ 15.3% vs previous period</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm text-gray-600">Team Size</p>
            <p className="text-3xl font-bold text-gray-900">{teamMembers.length}</p>
            <p className="text-xs text-green-600 mt-2">↑ 8.7% growth rate</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm text-gray-600">Active Members</p>
            <p className="text-3xl font-bold text-gray-900">
              {teamMembers.filter(m => m.activeStatus === "active").length}
            </p>
            <p className="text-xs text-gray-600 mt-2">
              {((teamMembers.filter(m => m.activeStatus === "active").length / teamMembers.length) * 100).toFixed(1)}% of team
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm text-gray-600">Avg Volume/Member</p>
            <p className="text-3xl font-bold text-gray-900">
              ${Math.round(teamMembers.reduce((sum, m) => sum + m.personalVolume, 0) / teamMembers.length).toLocaleString()}
            </p>
            <p className="text-xs text-green-600 mt-2">↑ 12.1% improvement</p>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Commission Trends Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">💰 Commission Trends</h3>
            <div className="space-y-3">
              {commissionTrends.map((trend, idx) => {
                const maxAmount = Math.max(...commissionTrends.map(t => t.amount));
                const barWidth = (trend.amount / maxAmount) * 100;
                return (
                  <div key={idx}>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">{trend.period}</span>
                      <span className="font-semibold text-gray-900">${trend.amount.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[#C41E3A] to-red-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${barWidth}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Team Growth Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">👥 Team Growth</h3>
            <div className="space-y-3">
              {teamGrowth.map((growth, idx) => {
                const maxCount = Math.max(...teamGrowth.map(g => g.count));
                const barWidth = (growth.count / maxCount) * 100;
                return (
                  <div key={idx}>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">{growth.month}</span>
                      <span className="font-semibold text-gray-900">{growth.count} new members</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${barWidth}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Product Mix & Geographic Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Product Mix */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 Commission Breakdown</h3>
            <div className="space-y-4">
              {productMix.map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-700 font-medium">
                      {commissionTypeLabels[item.type] || item.type}
                    </span>
                    <div className="text-right">
                      <span className="font-bold text-gray-900">${(item.amount as number).toLocaleString()}</span>
                      <span className="text-gray-500 ml-2">({(item.percentage as number).toFixed(1)}%)</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Geographic Distribution */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">🗺️ Geographic Distribution</h3>
            <div className="space-y-2">
              {geoDistribution.slice(0, 10).map((geo, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📍</span>
                    <span className="font-medium text-gray-900">{geo.state}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-gray-900">{geo.count as number}</span>
                    <span className="text-xs text-gray-500 ml-1">members</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics Table */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">📋 Detailed Performance Metrics</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Retention Rate</p>
              <p className="text-2xl font-bold text-green-600">87.3%</p>
              <p className="text-xs text-gray-500 mt-1">Team member retention</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Avg Enrollment Time</p>
              <p className="text-2xl font-bold text-blue-600">4.2 days</p>
              <p className="text-xs text-gray-500 mt-1">From signup to first policy</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Top Producer Volume</p>
              <p className="text-2xl font-bold text-purple-600">
                ${Math.max(...teamMembers.map(m => m.personalVolume)).toLocaleString()}
              </p>
              <p className="text-xs text-gray-500 mt-1">Highest personal volume</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">MGA Ratio</p>
              <p className="text-2xl font-bold text-orange-600">
                {((teamMembers.filter(m => m.isMGA).length / teamMembers.length) * 100).toFixed(1)}%
              </p>
              <p className="text-xs text-gray-500 mt-1">Team members with MGA status</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Contract Completion</p>
              <p className="text-2xl font-bold text-teal-600">
                {((teamMembers.filter(m => m.contractStatus === "contracted").length / teamMembers.length) * 100).toFixed(1)}%
              </p>
              <p className="text-xs text-gray-500 mt-1">Fully contracted members</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Binary Balance</p>
              <p className="text-2xl font-bold text-indigo-600">
                {(Math.min(
                  teamMembers.filter(m => m.placement === "left").length,
                  teamMembers.filter(m => m.placement === "right").length
                ) / teamMembers.length * 100).toFixed(1)}%
              </p>
              <p className="text-xs text-gray-500 mt-1">Weaker leg percentage</p>
            </div>
          </div>
        </div>
      </DashboardLayout>
  );
}


