"use client";

import { DashboardLayout } from "@/components/portal/DashboardLayout";

export default function TrainingPage() {
  const courses = [
    {
      title: "Getting Started with APEX",
      description: "Learn the basics of the APEX platform and how to get started",
      duration: "30 min",
      level: "Beginner",
      completed: true
    },
    {
      title: "Understanding Binary Compensation",
      description: "Deep dive into the binary compensation structure",
      duration: "45 min",
      level: "Intermediate",
      completed: true
    },
    {
      title: "Product Knowledge: Life Insurance",
      description: "Comprehensive guide to our life insurance products",
      duration: "60 min",
      level: "Intermediate",
      completed: false
    },
    {
      title: "Advanced Sales Techniques",
      description: "Master advanced sales strategies and closing techniques",
      duration: "90 min",
      level: "Advanced",
      completed: false
    },
    {
      title: "Team Building & Leadership",
      description: "Learn how to build and lead a successful team",
      duration: "120 min",
      level: "Advanced",
      completed: false
    },
    {
      title: "Compliance & Regulations",
      description: "Stay compliant with insurance regulations",
      duration: "60 min",
      level: "Required",
      completed: false
    }
  ];

  const upcomingWebinars = [
    {
      title: "Q4 Strategy Session",
      date: "November 15, 2025",
      time: "2:00 PM EST",
      presenter: "Executive Leadership Team"
    },
    {
      title: "Product Launch: New Annuity Line",
      date: "December 1, 2025",
      time: "3:00 PM EST",
      presenter: "Product Team"
    }
  ];

  return (
    <DashboardLayout>
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900">📚 Training & Resources</h1>
          <p className="text-sm text-gray-600 mt-1">
            Access training materials and educational resources
          </p>
        </div>

        {/* Progress Overview */}
        <div className="bg-gradient-to-r from-[#C41E3A] to-red-600 rounded-lg shadow p-6 mb-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Training Progress</p>
              <p className="text-4xl font-bold">33%</p>
              <p className="text-sm opacity-90 mt-1">2 of 6 courses completed</p>
            </div>
            <div className="text-6xl opacity-50">🎓</div>
          </div>
          <div className="mt-4 w-full bg-white/20 rounded-full h-3">
            <div className="bg-white h-3 rounded-full" style={{ width: "33%" }} />
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6">
              <div className="flex items-start justify-between mb-3">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  course.level === "Required" ? "bg-red-100 text-red-700" :
                  course.level === "Beginner" ? "bg-green-100 text-green-700" :
                  course.level === "Intermediate" ? "bg-blue-100 text-blue-700" :
                  "bg-purple-100 text-purple-700"
                }`}>
                  {course.level}
                </span>
                {course.completed && (
                  <span className="text-green-600 text-xl">✓</span>
                )}
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{course.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>⏱️ {course.duration}</span>
              </div>

              <button className={`w-full py-2 rounded-lg font-medium transition-colors ${
                course.completed
                  ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  : "bg-[#C41E3A] text-white hover:bg-red-700"
              }`}>
                {course.completed ? "Review Course" : "Start Course"}
              </button>
            </div>
          ))}
        </div>

        {/* Upcoming Webinars */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">📅 Upcoming Webinars</h2>
          <div className="space-y-4">
            {upcomingWebinars.map((webinar, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-gray-900">{webinar.title}</h3>
                  <p className="text-sm text-gray-600">{webinar.presenter}</p>
                  <p className="text-xs text-gray-500 mt-1">{webinar.date} at {webinar.time}</p>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap">
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>
      </DashboardLayout>
  );
}


