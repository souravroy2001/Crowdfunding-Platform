import React from "react";
import { useSelector } from "react-redux";

const Achievements = () => {
    const theme = useSelector((state) => state.theme.darkMode);

  const achievements = [
    {
      id: 1,
      title: "First Campaign",
      description: "Started your first fundraising campaign",
      icon: "🌟",
      unlocked: true,
      date: "2025-01-15",
      reward: "100 Impact Points",
    },
    {
      id: 2,
      title: "Impact Maker",
      description: "Raised over $1,000 in total",
      icon: "💫",
      unlocked: true,
      date: "2025-02-20",
      reward: "250 Impact Points",
    },
    {
      id: 3,
      title: "Community Leader",
      description: "Successfully completed 5 campaigns",
      icon: "👑",
      unlocked: false,
      progress: "3/5 campaigns",
      reward: "500 Impact Points",
    },
  ];

  return (
    <div className={`rounded-xl ${theme ? "bg-white" : "bg-gray-800"} shadow-md`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-xl font-semibold ${theme ? "text-gray-800" : "text-gray-100"}`}>
            Achievements
          </h2>
          <div className={`px-3 py-1 rounded-full text-sm bg-[#00bfa5]/10 text-[#00bfa5]`}>
            2/3 Unlocked
          </div>
        </div>

        <div className="space-y-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`relative p-4 rounded-lg ${
                theme ? "bg-gray-50 hover:bg-gray-100" : "bg-gray-700 hover:bg-gray-600"
              } ${!achievement.unlocked && "opacity-75"}`}
            >
              <div className="flex gap-4">
                <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl text-xl ${
                  achievement.unlocked
                    ? "bg-[#00bfa5]/10 text-[#00bfa5]"
                    : theme
                    ? "bg-gray-200 text-gray-500"
                    : "bg-gray-600 text-gray-400"
                }`}>
                  {achievement.icon}
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className={`font-medium mb-1 ${theme ? "text-gray-800" : "text-gray-100"}`}>
                        {achievement.title}
                      </h3>
                      <p className={`text-sm mb-2 ${theme ? "text-gray-600" : "text-gray-400"}`}>
                        {achievement.description}
                      </p>
                    </div>
                    {achievement.unlocked && (
                      <div className="text-[#00bfa5] text-sm">✓</div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className={`text-xs ${theme ? "text-gray-500" : "text-gray-400"}`}>
                      {achievement.unlocked ? (
                        <>Unlocked on {achievement.date}</>
                      ) : (
                        <>In Progress - {achievement.progress}</>
                      )}
                    </div>
                    <div className={`text-xs font-medium ${
                      achievement.unlocked ? "text-[#00bfa5]" : theme ? "text-gray-500" : "text-gray-400"
                    }`}>
                      {achievement.reward}
                    </div>
                  </div>

                  {!achievement.unlocked && (
                    <div className="mt-2">
                      <div className="w-full h-1 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                        <div className={`h-full ${theme ? "bg-[#00bfa5]" : "bg-[#00bfa5]"}`}
                          style={{ width: "60%" }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-4 py-2 px-4 rounded-lg text-sm font-medium text-center text-[#00bfa5] hover:text-[#009688]">
          View All Achievements
        </button>
      </div>
    </div>
  );
};

export default Achievements;
