"use client";

import { useMockData } from "@/lib/portal/mockDataService";

export function NewRecruitsTracker() {
  const { teamMembers } = useMockData();

  // Get recruits from last 30 days
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const recentRecruits = teamMembers.filter(member => {
    const enrollmentDate = new Date(member.enrollmentDate);
    return enrollmentDate >= thirtyDaysAgo;
  });

  const recruitsWithPolicy = recentRecruits.filter(r => r.firstPolicyPaidDate !== null);
  const recruitsWithoutPolicy = recentRecruits.filter(r => r.firstPolicyPaidDate === null);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 New Recruits (30 Days)</h3>

      <div className="space-y-4">
        {/* Total Recruits */}
        <div className="text-center">
          <p className="text-4xl font-bold text-gray-900">{recentRecruits.length}</p>
          <p className="text-sm text-gray-600">New Team Members</p>
        </div>

        {/* Status Breakdown */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-green-50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-green-700">{recruitsWithPolicy.length}</p>
            <p className="text-xs text-gray-600">First Policy Paid</p>
          </div>
          <div className="bg-yellow-50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-yellow-700">{recruitsWithoutPolicy.length}</p>
            <p className="text-xs text-gray-600">In Progress</p>
          </div>
        </div>

        {/* Conversion Rate */}
        <div className="bg-blue-50 rounded-lg p-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Conversion Rate</span>
            <span className="text-lg font-bold text-blue-700">
              {recentRecruits.length > 0 
                ? `${((recruitsWithPolicy.length / recentRecruits.length) * 100).toFixed(1)}%`
                : "0%"
              }
            </span>
          </div>
          <div className="w-full bg-blue-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ 
                width: recentRecruits.length > 0 
                  ? `${(recruitsWithPolicy.length / recentRecruits.length) * 100}%`
                  : "0%"
              }}
            />
          </div>
        </div>

        {/* Recent Recruits List */}
        {recentRecruits.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs font-medium text-gray-700">Recent Enrollments:</p>
            <div className="max-h-32 overflow-y-auto space-y-1">
              {recentRecruits.slice(0, 5).map(recruit => (
                <div 
                  key={recruit.id}
                  className="flex items-center justify-between text-xs p-2 bg-gray-50 rounded"
                >
                  <span className="font-medium text-gray-900">{recruit.displayName}</span>
                  <span className={`px-2 py-0.5 rounded ${
                    recruit.firstPolicyPaidDate 
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {recruit.firstPolicyPaidDate ? "✓ Paid" : "⏳ Pending"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {recentRecruits.length === 0 && (
          <div className="text-center py-4 text-gray-400">
            <p className="text-sm">No new recruits this month</p>
          </div>
        )}
      </div>
    </div>
  );
}


