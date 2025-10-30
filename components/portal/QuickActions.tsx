"use client";

import Link from "next/link";

export function QuickActions() {
  const actions = [
    {
      title: "View Binary Tree",
      description: "Visualize your organization",
      icon: "🌳",
      href: "/portal/genealogy",
      color: "bg-blue-500"
    },
    {
      title: "Commission Report",
      description: "Download earnings statement",
      icon: "📊",
      href: "/portal/commissions",
      color: "bg-green-500"
    },
    {
      title: "Enroll New Member",
      description: "Add someone to your team",
      icon: "➕",
      href: "/portal/onboarding",
      color: "bg-purple-500"
    },
    {
      title: "Training Resources",
      description: "Access learning materials",
      icon: "📚",
      href: "/portal/training",
      color: "bg-orange-500"
    },
    {
      title: "Get Contracted",
      description: "Submit contracting request",
      icon: "📝",
      href: "/portal/contracting",
      color: "bg-red-500"
    },
    {
      title: "Team Analytics",
      description: "View performance metrics",
      icon: "📈",
      href: "/portal/analytics",
      color: "bg-indigo-500"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">⚡ Quick Actions</h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {actions.map((action) => (
          <Link
            key={action.title}
            href={action.href}
            className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors text-center group"
          >
            <div className={`${action.color} w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform`}>
              {action.icon}
            </div>
            <p className="text-sm font-medium text-gray-900 mb-1">{action.title}</p>
            <p className="text-xs text-gray-500">{action.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}


