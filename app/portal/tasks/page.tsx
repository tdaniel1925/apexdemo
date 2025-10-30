"use client";

import { useState, useEffect } from "react";
import { useMockData } from "@/lib/portal/mockDataService";
import type { Task } from "@/lib/portal/mockDataService";
import { DashboardLayout } from "@/components/portal/DashboardLayout";

export default function TasksPage() {
  const { tasks } = useMockData();
  const [filter, setFilter] = useState<"all" | "pending" | "in_progress" | "completed">("all");
  const [priorityFilter, setPriorityFilter] = useState<"all" | "high" | "medium" | "low">("all");
  const [typeFilter, setTypeFilter] = useState<"all" | Task["type"]>("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredTasks = tasks.filter(task => {
    const statusMatch = filter === "all" || task.status === filter;
    const priorityMatch = priorityFilter === "all" || task.priority === priorityFilter;
    const typeMatch = typeFilter === "all" || task.type === typeFilter;
    return statusMatch && priorityMatch && typeMatch;
  });

  const tasksByStatus = {
    pending: tasks.filter(t => t.status === "pending").length,
    in_progress: tasks.filter(t => t.status === "in_progress").length,
    completed: tasks.filter(t => t.status === "completed").length
  };

  const tasksByPriority = {
    high: tasks.filter(t => t.priority === "high" && t.status !== "completed").length,
    medium: tasks.filter(t => t.priority === "medium" && t.status !== "completed").length,
    low: tasks.filter(t => t.priority === "low" && t.status !== "completed").length
  };

  const taskIcons: Record<Task["type"], string> = {
    promotion: "🏆",
    contract: "📝",
    onboarding: "🚀",
    agreement: "✍️",
    dispute: "⚠️"
  };

  const taskTypeLabels: Record<Task["type"], string> = {
    promotion: "Promotion Approval",
    contract: "Contract Request",
    onboarding: "Onboarding",
    agreement: "Agreement Signing",
    dispute: "Dispute Resolution"
  };

  const priorityColors = {
    high: "bg-red-100 text-red-700 border-red-300",
    medium: "bg-yellow-100 text-yellow-700 border-yellow-300",
    low: "bg-green-100 text-green-700 border-green-300"
  };

  const statusColors = {
    pending: "bg-yellow-100 text-yellow-700",
    in_progress: "bg-blue-100 text-blue-700",
    completed: "bg-green-100 text-green-700"
  };

  const handleTaskAction = (taskId: string, action: string) => {
    alert(`Task ${taskId}: ${action} action triggered`);
  };

  if (!mounted) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="text-4xl mb-4">✅</div>
            <p className="text-gray-500">Loading tasks...</p>
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
              <h1 className="text-2xl font-bold text-gray-900">✅ Task Management</h1>
              <p className="text-sm text-gray-600 mt-1">
                Manage your pending tasks and workflow approvals
              </p>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-sm text-gray-600">Total Tasks</p>
            <p className="text-2xl font-bold text-gray-900">{tasks.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-sm text-gray-600">Pending</p>
            <p className="text-2xl font-bold text-yellow-600">{tasksByStatus.pending}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-sm text-gray-600">In Progress</p>
            <p className="text-2xl font-bold text-blue-600">{tasksByStatus.in_progress}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-sm text-gray-600">Completed</p>
            <p className="text-2xl font-bold text-green-600">{tasksByStatus.completed}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-sm text-gray-600">High Priority</p>
            <p className="text-2xl font-bold text-red-600">{tasksByPriority.high}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Status
              </label>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as any)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
              >
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Priority
              </label>
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value as any)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
              >
                <option value="all">All Priorities</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Type
              </label>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value as any)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
              >
                <option value="all">All Types</option>
                {Object.entries(taskTypeLabels).map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Task List */}
        <div className="space-y-4">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  {/* Icon */}
                  <div className="text-4xl">{taskIcons[task.type]}</div>

                  {/* Task Info */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full border ${priorityColors[task.priority]}`}>
                        {task.priority.toUpperCase()}
                      </span>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[task.status]}`}>
                        {task.status.replace("_", " ").toUpperCase()}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 mb-3">{task.description}</p>

                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <span>📋</span>
                        <span>{taskTypeLabels[task.type]}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>📅</span>
                        <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>👤</span>
                        <span>Assigned: {task.assignedTo}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col space-y-2 ml-4">
                  {task.status === "pending" && (
                    <>
                      <button
                        onClick={() => handleTaskAction(task.id, "start")}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium whitespace-nowrap"
                      >
                        Start Task
                      </button>
                      <button
                        onClick={() => handleTaskAction(task.id, "view")}
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                      >
                        View Details
                      </button>
                    </>
                  )}
                  {task.status === "in_progress" && (
                    <>
                      <button
                        onClick={() => handleTaskAction(task.id, "complete")}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium whitespace-nowrap"
                      >
                        Complete
                      </button>
                      <button
                        onClick={() => handleTaskAction(task.id, "view")}
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                      >
                        View Details
                      </button>
                    </>
                  )}
                  {task.status === "completed" && (
                    <button
                      onClick={() => handleTaskAction(task.id, "view")}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                    >
                      View Details
                    </button>
                  )}
                </div>
              </div>

              {/* Progress Bar for In Progress Tasks */}
              {task.status === "in_progress" && (
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                    <span>Task Progress</span>
                    <span>In Progress...</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full animate-pulse"
                      style={{ width: "60%" }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}

          {filteredTasks.length === 0 && (
            <div className="bg-white rounded-lg shadow p-12 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <p className="text-lg text-gray-400">No tasks found matching your filters</p>
              <p className="text-sm text-gray-500 mt-2">You're all caught up!</p>
            </div>
          )}
        </div>
      </DashboardLayout>
  );
}


