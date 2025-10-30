"use client";

import { useMockData } from "@/lib/portal/mockDataService";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: string;
}

function MetricCard({ title, value, change, changeType, icon }: MetricCardProps) {
  const changeColors = {
    positive: "text-green-600 bg-green-50",
    negative: "text-red-600 bg-red-50",
    neutral: "text-gray-600 bg-gray-50"
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="flex items-baseline justify-between">
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <span className={`text-sm font-medium px-2 py-1 rounded ${changeColors[changeType]}`}>
          {change}
        </span>
      </div>
    </div>
  );
}

export function PerformanceMetrics() {
  const { currentUserStats } = useMockData();

  const metrics = [
    {
      title: "Personal Volume (PV)",
      value: currentUserStats.personalVolume.toLocaleString(),
      change: "+12.5%",
      changeType: "positive" as const,
      icon: "📊"
    },
    {
      title: "Group Volume (GV)",
      value: currentUserStats.groupVolume.toLocaleString(),
      change: "+8.3%",
      changeType: "positive" as const,
      icon: "👥"
    },
    {
      title: "MTD Earnings",
      value: `$${currentUserStats.mtdEarnings.toLocaleString()}`,
      change: "+15.2%",
      changeType: "positive" as const,
      icon: "💰"
    },
    {
      title: "Team Size",
      value: currentUserStats.teamSize.toString(),
      change: "+3 new",
      changeType: "positive" as const,
      icon: "🌟"
    }
  ];

  return (
    <>
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </>
  );
}


