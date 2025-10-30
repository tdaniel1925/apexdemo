"use client";

import { useState, useEffect } from "react";
import { useMockData } from "@/lib/portal/mockDataService";
import type { Distributor } from "@/lib/portal/mockDataService";
import { DashboardLayout } from "@/components/portal/DashboardLayout";

export default function TeamPage() {
  const { teamMembers } = useMockData();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterRank, setFilterRank] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter and sort team members
  const filteredMembers = teamMembers.filter(member => {
    const searchMatch = 
      member.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    const rankMatch = filterRank === "all" || member.rank === filterRank;
    const statusMatch = filterStatus === "all" || member.activeStatus === filterStatus;
    
    return searchMatch && rankMatch && statusMatch;
  }).sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.displayName.localeCompare(b.displayName);
      case "rank":
        return a.rank.localeCompare(b.rank);
      case "pv":
        return b.personalVolume - a.personalVolume;
      case "gv":
        return b.groupVolume - a.groupVolume;
      case "date":
        return new Date(b.enrollmentDate).getTime() - new Date(a.enrollmentDate).getTime();
      default:
        return 0;
    }
  });

  // Team statistics
  const totalTeamVolume = teamMembers.reduce((sum, m) => sum + m.personalVolume, 0);
  const activeMembers = teamMembers.filter(m => m.activeStatus === "active").length;
  const mgaCount = teamMembers.filter(m => m.isMGA).length;
  const leftLegMembers = teamMembers.filter(m => m.placement === "left").length;
  const rightLegMembers = teamMembers.filter(m => m.placement === "right").length;

  // Unique ranks
  const uniqueRanks = [...new Set(teamMembers.map(m => m.rank))];

  const handleSelectAll = () => {
    if (selectedMembers.length === filteredMembers.length) {
      setSelectedMembers([]);
    } else {
      setSelectedMembers(filteredMembers.map(m => m.id));
    }
  };

  const handleSelectMember = (memberId: string) => {
    setSelectedMembers(prev => 
      prev.includes(memberId) 
        ? prev.filter(id => id !== memberId)
        : [...prev, memberId]
    );
  };

  const handleBulkMessage = () => {
    alert(`Sending message to ${selectedMembers.length} selected member(s)`);
  };

  if (!mounted) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="text-4xl mb-4">👥</div>
            <p className="text-gray-500">Loading team...</p>
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
              <h1 className="text-2xl font-bold text-gray-900">👥 Team Management</h1>
              <p className="text-sm text-gray-600 mt-1">
                Manage and communicate with your team members
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleBulkMessage}
                disabled={selectedMembers.length === 0}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedMembers.length > 0
                    ? "bg-[#C41E3A] text-white hover:bg-red-700"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                📧 Message Selected ({selectedMembers.length})
              </button>
            </div>
          </div>
        </div>

        {/* Team Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-sm text-gray-600">Total Members</p>
            <p className="text-2xl font-bold text-gray-900">{teamMembers.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-sm text-gray-600">Active</p>
            <p className="text-2xl font-bold text-green-600">{activeMembers}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-sm text-gray-600">MGAs</p>
            <p className="text-2xl font-bold text-purple-600">{mgaCount}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-sm text-gray-600">Left Leg</p>
            <p className="text-2xl font-bold text-blue-600">{leftLegMembers}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-sm text-gray-600">Right Leg</p>
            <p className="text-2xl font-bold text-green-600">{rightLegMembers}</p>
          </div>
        </div>

        {/* Team Volume Card */}
        <div className="bg-gradient-to-r from-[#C41E3A] to-red-600 rounded-lg shadow p-6 mb-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Total Team Volume</p>
              <p className="text-4xl font-bold">${totalTeamVolume.toLocaleString()}</p>
            </div>
            <div className="text-6xl opacity-50">📈</div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Members
              </label>
              <input
                type="text"
                placeholder="Search by name or ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Rank
              </label>
              <select
                value={filterRank}
                onChange={(e) => setFilterRank(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
              >
                <option value="all">All Ranks</option>
                {uniqueRanks.map(rank => (
                  <option key={rank} value={rank}>{rank}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Status
              </label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
              >
                <option value="all">All Statuses</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-700">Sort by:</label>
            <div className="flex space-x-2">
              {[
                { value: "name", label: "Name" },
                { value: "rank", label: "Rank" },
                { value: "pv", label: "PV" },
                { value: "gv", label: "GV" },
                { value: "date", label: "Date" }
              ].map(option => (
                <button
                  key={option.value}
                  onClick={() => setSortBy(option.value)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    sortBy === option.value
                      ? "bg-[#C41E3A] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Team Members Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              Team Roster ({filteredMembers.length} members)
            </h3>
            <button
              onClick={handleSelectAll}
              className="text-sm text-[#C41E3A] hover:underline"
            >
              {selectedMembers.length === filteredMembers.length ? "Deselect All" : "Select All"}
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedMembers.length === filteredMembers.length && filteredMembers.length > 0}
                      onChange={handleSelectAll}
                      className="rounded text-[#C41E3A] focus:ring-[#C41E3A]"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Member
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rank
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Placement
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    PV
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    GV
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedMembers.includes(member.id)}
                        onChange={() => handleSelectMember(member.id)}
                        className="rounded text-[#C41E3A] focus:ring-[#C41E3A]"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {member.displayName}
                            {member.isMGA && (
                              <span className="ml-2 text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">
                                MGA
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-gray-500">{member.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {member.rank}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        member.placement === "left" 
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }`}>
                        {member.placement?.toUpperCase() || "N/A"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${member.personalVolume.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${member.groupVolume.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        member.activeStatus === "active"
                          ? "bg-green-100 text-green-700"
                          : member.activeStatus === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-700"
                      }`}>
                        {member.activeStatus.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                      <button className="text-[#C41E3A] hover:underline">View</button>
                      <button className="text-blue-600 hover:underline">Message</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              <p>No team members found matching your filters</p>
            </div>
          )}
        </div>
      </DashboardLayout>
  );
}


