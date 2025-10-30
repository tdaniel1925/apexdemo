"use client";

import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/portal/DashboardLayout";
import { PerformanceMetrics } from "@/components/portal/PerformanceMetrics";
import { CommissionSummary } from "@/components/portal/CommissionSummary";
import { TeamVolume } from "@/components/portal/TeamVolume";
import { RankProgress } from "@/components/portal/RankProgress";
import { RecentActivity } from "@/components/portal/RecentActivity";
import { QuickActions } from "@/components/portal/QuickActions";
import { AnnouncementBanner } from "@/components/portal/AnnouncementBanner";
import { MGABonusProgress } from "@/components/portal/MGABonusProgress";
import { NewRecruitsTracker } from "@/components/portal/NewRecruitsTracker";
import { TaskManagementWidget } from "@/components/portal/TaskManagementWidget";

export default function DashboardPage() {
  const [layoutMode, setLayoutMode] = useState<"grid" | "list">("grid");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="text-4xl mb-4">📊</div>
            <p className="text-gray-500">Loading dashboard...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Announcement Banner */}
      <AnnouncementBanner />

      {/* Main Dashboard Grid */}
      <div className="space-y-6">
        {/* Performance Overview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          <PerformanceMetrics />
        </div>

        {/* Primary Widgets Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CommissionSummary />
          <TeamVolume />
        </div>

        {/* Rank & Bonus Progress Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <RankProgress />
          <MGABonusProgress />
          <NewRecruitsTracker />
        </div>

        {/* Activity & Tasks Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentActivity />
          <TaskManagementWidget />
        </div>

        {/* Quick Actions */}
        <QuickActions />
      </div>
    </DashboardLayout>
  );
}


