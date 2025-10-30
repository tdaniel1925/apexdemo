"use client";

import { useMockData } from "@/lib/portal/mockDataService";

const RANK_REQUIREMENTS = {
  "Agent": { pv: 0, team: 0, nextRank: "Senior Agent" },
  "Senior Agent": { pv: 10000, team: 3, nextRank: "Team Leader" },
  "Team Leader": { pv: 25000, team: 10, nextRank: "Regional Manager" },
  "Regional Manager": { pv: 50000, team: 25, nextRank: "Executive Director" },
  "Executive Director": { pv: 100000, team: 50, nextRank: "National Director" },
  "National Director": { pv: 200000, team: 100, nextRank: "Maximum Rank" }
};

export function RankProgress() {
  const { currentUserStats } = useMockData();
  
  const currentRank = currentUserStats.rank;
  const requirements = RANK_REQUIREMENTS[currentRank as keyof typeof RANK_REQUIREMENTS] || RANK_REQUIREMENTS["Agent"];
  
  const pvProgress = Math.min((currentUserStats.personalVolume / requirements.pv) * 100, 100);
  const teamProgress = Math.min((currentUserStats.activePersonallySponsored / requirements.team) * 100, 100);

  const isMaxRank = requirements.nextRank === "Maximum Rank";

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">🏆 Rank Progress</h3>

      <div className="space-y-4">
        {/* Current Rank */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-[#C41E3A] to-red-600 text-white px-4 py-2 rounded-lg">
            <p className="text-sm opacity-90">Current Rank</p>
            <p className="text-xl font-bold">{currentRank}</p>
            {currentUserStats.isMGA && (
              <p className="text-xs opacity-90">MGA Status</p>
            )}
          </div>
        </div>

        {!isMaxRank ? (
          <>
            {/* Next Rank */}
            <div className="text-center">
              <p className="text-sm text-gray-600">Next Rank</p>
              <p className="text-lg font-semibold text-gray-900">{requirements.nextRank}</p>
            </div>

            {/* Requirements Progress */}
            <div className="space-y-3">
              {/* Personal Volume */}
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Personal Volume</span>
                  <span className="font-semibold text-gray-900">
                    ${currentUserStats.personalVolume.toLocaleString()} / ${requirements.pv.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-[#C41E3A] h-2 rounded-full transition-all duration-300"
                    style={{ width: `${pvProgress}%` }}
                  />
                </div>
              </div>

              {/* Team Size */}
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Active Team Members</span>
                  <span className="font-semibold text-gray-900">
                    {currentUserStats.activePersonallySponsored} / {requirements.team}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${teamProgress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Status Message */}
            <div className="bg-blue-50 rounded-lg p-3 text-center">
              {pvProgress >= 100 && teamProgress >= 100 ? (
                <p className="text-sm text-green-700 font-medium">
                  ✅ You qualify for {requirements.nextRank}!
                </p>
              ) : (
                <p className="text-sm text-blue-700">
                  Keep building to reach {requirements.nextRank}
                </p>
              )}
            </div>
          </>
        ) : (
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-4 text-center">
            <p className="text-lg font-bold text-yellow-900">🌟 Maximum Rank Achieved! 🌟</p>
            <p className="text-sm text-yellow-700 mt-2">Congratulations on reaching the highest rank!</p>
          </div>
        )}
      </div>
    </div>
  );
}


