"use client";

export function MGABonusProgress() {
  // Calculate current quarter
  const now = new Date();
  const quarter = Math.floor(now.getMonth() / 3) + 1;
  const year = now.getFullYear();
  
  // Mock data for bonus progress
  const bonusThresholds = [
    { amount: 1000, required: 50000, label: "Bronze" },
    { amount: 2500, required: 100000, label: "Silver" },
    { amount: 5000, required: 200000, label: "Gold" }
  ];

  const currentVolume = 127500;
  const maxVolume = 200000;
  const progressPercentage = (currentVolume / maxVolume) * 100;

  // Determine current tier
  let currentTier = bonusThresholds[0];
  for (const tier of bonusThresholds) {
    if (currentVolume >= tier.required) {
      currentTier = tier;
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">💎 MGA Bonus Progress</h3>

      <div className="space-y-4">
        {/* Current Quarter */}
        <div className="text-center">
          <p className="text-sm text-gray-600">Q{quarter} {year}</p>
          <p className="text-2xl font-bold text-[#C41E3A]">${currentTier.amount.toLocaleString()}</p>
          <p className="text-xs text-gray-500">{currentTier.label} Tier Achieved</p>
        </div>

        {/* Progress Bar */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Quarterly Volume</span>
            <span className="font-semibold text-gray-900">
              ${currentVolume.toLocaleString()} / ${maxVolume.toLocaleString()}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Tier Breakdown */}
        <div className="space-y-2">
          {bonusThresholds.map((tier, index) => {
            const achieved = currentVolume >= tier.required;
            return (
              <div 
                key={index}
                className={`flex items-center justify-between p-2 rounded ${
                  achieved ? "bg-green-50" : "bg-gray-50"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{achieved ? "✅" : "🔒"}</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{tier.label} Tier</p>
                    <p className="text-xs text-gray-500">${tier.required.toLocaleString()}</p>
                  </div>
                </div>
                <p className="text-sm font-bold text-gray-900">${tier.amount.toLocaleString()}</p>
              </div>
            );
          })}
        </div>

        {/* Days Remaining */}
        <div className="bg-blue-50 rounded-lg p-3 text-center">
          <p className="text-xs text-gray-600">Days Remaining in Quarter</p>
          <p className="text-2xl font-bold text-blue-700">
            {Math.ceil((new Date(year, quarter * 3, 0).getTime() - now.getTime()) / (1000 * 60 * 60 * 24))}
          </p>
        </div>
      </div>
    </div>
  );
}


