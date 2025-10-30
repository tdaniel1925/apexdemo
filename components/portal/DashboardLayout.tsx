"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  const navigation = [
    { name: "Dashboard", href: "/portal/dashboard", icon: "📊" },
    { name: "Binary Tree", href: "/portal/genealogy", icon: "🌳" },
    { name: "Commissions", href: "/portal/commissions", icon: "💰" },
    { name: "Team", href: "/portal/team", icon: "👥" },
    { name: "Analytics", href: "/portal/analytics", icon: "📈" },
    { name: "Onboarding", href: "/portal/onboarding", icon: "🚀" },
    { name: "Training", href: "/portal/training", icon: "📚" },
    { name: "Settings", href: "/portal/settings", icon: "⚙️" },
  ];

  const userInfo = {
    name: "John Distributor",
    rank: "Regional Manager (MGA)",
    id: "APX-10234",
    avatar: "JD"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 fixed w-full z-30 top-0">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 mr-4"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <Link href="/portal/dashboard" className="flex items-center">
                <span className="text-2xl font-bold text-[#C41E3A]">APEX</span>
                <span className="ml-2 text-gray-600">Member Portal</span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="relative text-gray-500 hover:text-gray-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
              </button>

              {/* User Menu */}
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{userInfo.name}</p>
                  <p className="text-xs text-gray-500">{userInfo.rank}</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-[#C41E3A] flex items-center justify-center text-white font-semibold">
                  {userInfo.avatar}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className="flex">
        <aside
          className={`${
            sidebarOpen ? "w-64" : "w-0"
          } bg-white border-r border-gray-200 fixed h-full overflow-y-auto transition-all duration-300 ease-in-out z-20 top-16`}
        >
          {sidebarOpen && (
            <nav className="px-4 py-6 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? "bg-[#C41E3A] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span className="text-xl mr-3">{item.icon}</span>
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          )}
        </aside>

        {/* Main Content */}
        <main
          className={`flex-1 transition-all duration-300 ease-in-out mt-16 ${
            sidebarOpen ? "ml-64" : "ml-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-[30px]">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}


