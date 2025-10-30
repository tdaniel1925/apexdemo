"use client";

import { useMockData } from "@/lib/portal/mockDataService";
import Link from "next/link";

export function TaskManagementWidget() {
  const { currentUserTasks } = useMockData();

  const highPriorityTasks = currentUserTasks.filter(t => t.priority === "high");
  const inProgressTasks = currentUserTasks.filter(t => t.status === "in_progress");
  const pendingTasks = currentUserTasks.filter(t => t.status === "pending");

  const taskIcons = {
    promotion: "🏆",
    contract: "📝",
    onboarding: "🚀",
    agreement: "✍️",
    dispute: "⚠️"
  };

  const priorityColors = {
    high: "bg-red-100 text-red-700 border-red-300",
    medium: "bg-yellow-100 text-yellow-700 border-yellow-300",
    low: "bg-green-100 text-green-700 border-green-300"
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">✅ Pending Tasks</h3>
        <Link 
          href="/portal/tasks" 
          className="text-sm text-[#C41E3A] hover:underline"
        >
          View All
        </Link>
      </div>

      <div className="space-y-4">
        {/* Task Summary */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-red-50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-red-700">{highPriorityTasks.length}</p>
            <p className="text-xs text-gray-600">High Priority</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-blue-700">{inProgressTasks.length}</p>
            <p className="text-xs text-gray-600">In Progress</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-gray-700">{pendingTasks.length}</p>
            <p className="text-xs text-gray-600">Pending</p>
          </div>
        </div>

        {/* Task List */}
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {currentUserTasks.slice(0, 6).map(task => (
            <div 
              key={task.id}
              className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span className="text-xl">{taskIcons[task.type]}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {task.title}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  Due: {new Date(task.dueDate).toLocaleDateString()}
                </p>
              </div>
              <span className={`text-xs px-2 py-1 rounded border ${priorityColors[task.priority]}`}>
                {task.priority.toUpperCase()}
              </span>
            </div>
          ))}
        </div>

        {currentUserTasks.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            <p className="text-sm">No pending tasks</p>
            <p className="text-xs mt-1">You're all caught up! 🎉</p>
          </div>
        )}

        {/* Quick Action Button */}
        {currentUserTasks.length > 0 && (
          <Link
            href="/portal/tasks"
            className="block w-full text-center bg-[#C41E3A] text-white py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
          >
            Manage All Tasks ({currentUserTasks.length})
          </Link>
        )}
      </div>
    </div>
  );
}


