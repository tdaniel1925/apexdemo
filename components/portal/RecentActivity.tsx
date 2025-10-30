"use client";

import { useMockData } from "@/lib/portal/mockDataService";

export function RecentActivity() {
  const { activities } = useMockData();

  const recentActivities = activities.slice(0, 8);

  const activityIcons = {
    enrollment: "🎉",
    sale: "💼",
    promotion: "🏆",
    commission: "💰",
    task: "✅"
  };

  const formatTimeAgo = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">📰 Recent Activity</h3>
        <button className="text-sm text-[#C41E3A] hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {recentActivities.map((activity) => (
          <div 
            key={activity.id}
            className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <span className="text-2xl">{activityIcons[activity.type]}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {activity.title}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {activity.userName}
              </p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap">
              {formatTimeAgo(activity.timestamp)}
            </span>
          </div>
        ))}
      </div>

      {recentActivities.length === 0 && (
        <div className="text-center py-8 text-gray-400">
          <p className="text-sm">No recent activity</p>
        </div>
      )}
    </div>
  );
}


