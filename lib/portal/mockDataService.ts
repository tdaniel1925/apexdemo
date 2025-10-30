"use client";

import { useMemo } from "react";

export interface Distributor {
  id: string;
  displayName: string;
  legalName: string;
  email: string;
  phone: string;
  npn: string;
  rank: string;
  isMGA: boolean;
  enrollmentDate: string;
  personalVolume: number;
  groupVolume: number;
  leftLegVolume: number;
  rightLegVolume: number;
  activeStatus: "active" | "inactive" | "pending";
  sponsorId: string | null;
  placement: "left" | "right" | null;
  firstPolicyPaidDate: string | null;
  annualizedCarriers: string[];
  contractStatus: "contracted" | "pending" | "incomplete";
  state: string;
  city: string;
}

export interface Commission {
  id: string;
  distributorId: string;
  type: "binary" | "sponsor" | "matching" | "override" | "bonus" | "mga_quarterly";
  amount: number;
  period: string;
  status: "pending" | "paid" | "processing";
  paidDate: string | null;
  description: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  type: "promotion" | "contract" | "onboarding" | "agreement" | "dispute";
  priority: "high" | "medium" | "low";
  status: "pending" | "in_progress" | "completed";
  assignedTo: string;
  dueDate: string;
  createdDate: string;
}

export interface Activity {
  id: string;
  type: "enrollment" | "sale" | "promotion" | "commission" | "task";
  title: string;
  description: string;
  timestamp: string;
  userId: string;
  userName: string;
}

const RANKS = [
  "Agent",
  "Senior Agent", 
  "Team Leader",
  "Regional Manager",
  "Executive Director",
  "National Director"
];

const CARRIERS = [
  "American National",
  "Americo",
  "Foresters",
  "Mutual of Omaha",
  "National Life Group",
  "Prosperity Life",
  "Royal Neighbors",
  "Transamerica"
];

const STATES = ["TX", "FL", "CA", "NY", "PA", "IL", "OH", "GA", "NC", "MI"];
const CITIES: Record<string, string[]> = {
  TX: ["Houston", "Dallas", "Austin", "San Antonio"],
  FL: ["Miami", "Orlando", "Tampa", "Jacksonville"],
  CA: ["Los Angeles", "San Diego", "San Francisco", "Sacramento"],
  NY: ["New York", "Buffalo", "Rochester", "Albany"],
  PA: ["Philadelphia", "Pittsburgh", "Allentown"],
  IL: ["Chicago", "Aurora", "Naperville"],
  OH: ["Columbus", "Cleveland", "Cincinnati"],
  GA: ["Atlanta", "Augusta", "Savannah"],
  NC: ["Charlotte", "Raleigh", "Durham"],
  MI: ["Detroit", "Grand Rapids", "Ann Arbor"]
};

// Generate mock distributors
function generateDistributors(count: number): Distributor[] {
  const distributors: Distributor[] = [];
  const today = new Date();

  for (let i = 0; i < count; i++) {
    const enrollmentDate = new Date(today.getTime() - Math.random() * 365 * 24 * 60 * 60 * 1000);
    const state = STATES[Math.floor(Math.random() * STATES.length)];
    const cities = CITIES[state];
    const city = cities[Math.floor(Math.random() * cities.length)];
    
    const rankIndex = Math.floor(Math.random() * RANKS.length);
    const rank = RANKS[rankIndex];
    const isMGA = rankIndex >= 3; // Regional Manager and above get MGA status

    const hasPolicy = Math.random() > 0.3;
    const firstPolicyPaidDate = hasPolicy 
      ? new Date(enrollmentDate.getTime() + Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      : null;

    const numCarriers = Math.floor(Math.random() * 3) + 1;
    const selectedCarriers = [...CARRIERS]
      .sort(() => Math.random() - 0.5)
      .slice(0, numCarriers);

    distributors.push({
      id: `APX-${10000 + i}`,
      displayName: `Member ${i + 1}`,
      legalName: `Legal Name ${i + 1}`,
      email: `member${i + 1}@example.com`,
      phone: `(555) ${String(Math.floor(Math.random() * 900) + 100)}-${String(Math.floor(Math.random() * 9000) + 1000)}`,
      npn: String(Math.floor(Math.random() * 90000000) + 10000000),
      rank,
      isMGA,
      enrollmentDate: enrollmentDate.toISOString().split('T')[0],
      personalVolume: Math.floor(Math.random() * 50000) + 5000,
      groupVolume: Math.floor(Math.random() * 500000) + 50000,
      leftLegVolume: Math.floor(Math.random() * 250000) + 25000,
      rightLegVolume: Math.floor(Math.random() * 250000) + 25000,
      activeStatus: Math.random() > 0.15 ? "active" : Math.random() > 0.5 ? "pending" : "inactive",
      sponsorId: i > 0 ? `APX-${10000 + Math.floor(Math.random() * i)}` : null,
      placement: i > 0 ? (Math.random() > 0.5 ? "left" : "right") : null,
      firstPolicyPaidDate,
      annualizedCarriers: selectedCarriers,
      contractStatus: Math.random() > 0.2 ? "contracted" : Math.random() > 0.5 ? "pending" : "incomplete",
      state,
      city
    });
  }

  return distributors;
}

// Generate mock commissions
function generateCommissions(distributorCount: number): Commission[] {
  const commissions: Commission[] = [];
  const types: Commission["type"][] = ["binary", "sponsor", "matching", "override", "bonus", "mga_quarterly"];
  
  for (let i = 0; i < distributorCount * 4; i++) {
    const period = new Date();
    period.setMonth(period.getMonth() - Math.floor(Math.random() * 12));
    
    const isPaid = Math.random() > 0.3;
    const paidDate = isPaid 
      ? new Date(period.getTime() + Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      : null;

    commissions.push({
      id: `COM-${100000 + i}`,
      distributorId: `APX-${10000 + Math.floor(Math.random() * distributorCount)}`,
      type: types[Math.floor(Math.random() * types.length)],
      amount: Math.floor(Math.random() * 5000) + 100,
      period: period.toISOString().split('T')[0].substring(0, 7),
      status: isPaid ? "paid" : Math.random() > 0.5 ? "pending" : "processing",
      paidDate,
      description: `Commission for ${period.toISOString().split('T')[0].substring(0, 7)}`
    });
  }

  return commissions;
}

// Generate mock tasks
function generateTasks(): Task[] {
  const tasks: Task[] = [];
  const types: Task["type"][] = ["promotion", "contract", "onboarding", "agreement", "dispute"];
  const priorities: Task["priority"][] = ["high", "medium", "low"];
  
  for (let i = 0; i < 25; i++) {
    const createdDate = new Date();
    createdDate.setDate(createdDate.getDate() - Math.floor(Math.random() * 30));
    
    const dueDate = new Date(createdDate);
    dueDate.setDate(dueDate.getDate() + Math.floor(Math.random() * 14) + 1);

    const isCompleted = Math.random() > 0.6;

    tasks.push({
      id: `TASK-${1000 + i}`,
      title: `Task ${i + 1}: Review Required`,
      description: `This task requires attention and action.`,
      type: types[Math.floor(Math.random() * types.length)],
      priority: priorities[Math.floor(Math.random() * priorities.length)],
      status: isCompleted ? "completed" : Math.random() > 0.5 ? "pending" : "in_progress",
      assignedTo: `APX-${10000 + Math.floor(Math.random() * 100)}`,
      dueDate: dueDate.toISOString().split('T')[0],
      createdDate: createdDate.toISOString().split('T')[0]
    });
  }

  return tasks;
}

// Generate mock activities
function generateActivities(distributorCount: number): Activity[] {
  const activities: Activity[] = [];
  const types: Activity["type"][] = ["enrollment", "sale", "promotion", "commission", "task"];
  
  for (let i = 0; i < 100; i++) {
    const timestamp = new Date();
    timestamp.setHours(timestamp.getHours() - Math.floor(Math.random() * 168)); // Last 7 days

    activities.push({
      id: `ACT-${10000 + i}`,
      type: types[Math.floor(Math.random() * types.length)],
      title: `Activity ${i + 1}`,
      description: `Recent activity description`,
      timestamp: timestamp.toISOString(),
      userId: `APX-${10000 + Math.floor(Math.random() * distributorCount)}`,
      userName: `Member ${Math.floor(Math.random() * distributorCount) + 1}`
    });
  }

  return activities.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
}

export function useMockData() {
  const data = useMemo(() => {
    const distributors = generateDistributors(5000);
    const commissions = generateCommissions(5000);
    const tasks = generateTasks();
    const activities = generateActivities(5000);

    // Current user data (first distributor)
    const currentUser = distributors[0];
    const currentUserCommissions = commissions.filter(c => c.distributorId === currentUser.id);
    const currentUserTasks = tasks.filter(t => t.assignedTo === currentUser.id && t.status !== "completed");

    // Calculate stats
    const mtdEarnings = currentUserCommissions
      .filter(c => c.period === new Date().toISOString().substring(0, 7))
      .reduce((sum, c) => sum + c.amount, 0);

    const ytdEarnings = currentUserCommissions
      .filter(c => c.period.startsWith(new Date().getFullYear().toString()))
      .reduce((sum, c) => sum + c.amount, 0);

    const pendingCommissions = currentUserCommissions
      .filter(c => c.status === "pending")
      .reduce((sum, c) => sum + c.amount, 0);

    // Get team members (mock - first 50 distributors as team)
    const teamMembers = distributors.slice(1, 51);

    const currentUserStats = {
      ...currentUser,
      mtdEarnings,
      ytdEarnings,
      pendingCommissions,
      teamSize: teamMembers.length,
      activePersonallySponsored: teamMembers.filter(m => m.sponsorId === currentUser.id && m.activeStatus === "active").length,
    };

    return {
      currentUser,
      currentUserStats,
      allDistributors: distributors,
      commissions,
      tasks,
      activities,
      teamMembers,
      currentUserCommissions,
      currentUserTasks
    };
  }, []);

  return data;
}


