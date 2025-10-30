"use client";

import { DashboardLayout } from "@/components/portal/DashboardLayout";

export default function SettingsPage() {
  return (
    <DashboardLayout>
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900">⚙️ Settings</h1>
          <p className="text-sm text-gray-600 mt-1">
            Manage your account preferences and notification settings
          </p>
        </div>

        {/* Profile Settings */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Profile Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Display Name
              </label>
              <input
                type="text"
                defaultValue="John Distributor"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="john@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                defaultValue="(555) 123-4567"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h2>
          <div className="space-y-4">
            {[
              { label: "Email Notifications", description: "Receive email updates about your account" },
              { label: "Commission Alerts", description: "Get notified when commissions are paid" },
              { label: "Team Updates", description: "Receive updates about your team members" },
              { label: "Promotion Notifications", description: "Get alerts about rank advancements" },
              { label: "Task Reminders", description: "Receive reminders for pending tasks" }
            ].map((setting, idx) => (
              <label key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                <div>
                  <p className="text-sm font-medium text-gray-900">{setting.label}</p>
                  <p className="text-xs text-gray-500">{setting.description}</p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="rounded text-[#C41E3A] focus:ring-[#C41E3A]"
                />
              </label>
            ))}
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Security</h2>
          <div className="space-y-4">
            <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium">
              Change Password
            </button>
            <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium">
              Enable Two-Factor Authentication
            </button>
          </div>
        </div>

        {/* Save Button */}
        <button className="w-full bg-[#C41E3A] text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-medium">
          Save Settings
        </button>
      </DashboardLayout>
  );
}


