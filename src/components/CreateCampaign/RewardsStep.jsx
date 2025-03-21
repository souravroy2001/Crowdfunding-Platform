import React from "react";
import { useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";

function RewardsStep() {
  const { setValue, watch } = useFormContext();
  const rewards = watch("rewards");
  const theme = useSelector((state) => state.theme.darkMode);

  const addReward = () => {
    const newReward = {
      id: crypto.randomUUID(),
      title: "",
      amount: 0,
      description: "",
    };
    setValue("rewards", [...rewards, newReward]);
  };

  const removeReward = (id) => {
    setValue(
      "rewards",
      rewards.filter((reward) => reward.id !== id)
    );
  };

  const updateReward = (id, field, value) => {
    setValue(
      "rewards",
      rewards.map((reward) =>
        reward.id === id ? { ...reward, [field]: value } : reward
      )
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Campaign Rewards
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Create reward tiers that will encourage backers to support your
          campaign
        </p>
      </div>

      <div className="space-y-6">
        {rewards.map((reward) => (
          <div
            key={reward.id}
            className="bg-white p-6 rounded-lg border border-gray-200 space-y-4"
          >
            <div className="flex justify-between">
              <div className="flex-1 mr-4">
                <label className="block text-sm font-medium text-gray-700">
                  Reward Title
                </label>
                <input
                  type="text"
                  value={reward.title}
                  placeholder="Reward Title"
                  onChange={(e) =>
                    updateReward(reward.id, "title", e.target.value)
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border outline-none sm:text-sm"
                />
              </div>
              <div className="w-32">
                <label className="block text-sm font-medium text-gray-700">
                  Amount
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    value={reward.amount}
                    onChange={(e) =>
                      updateReward(
                        reward.id,
                        "amount",
                        parseFloat(e.target.value)
                      )
                    }
                    className="block w-full pl-7 rounded-md border-gray-300 p-2 border outline-none sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                value={reward.description}
                onChange={(e) =>
                  updateReward(reward.id, "description", e.target.value)
                }
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border outline-none sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Limit (Optional)
              </label>
              <input
                type="number"
                value={reward.limit || ""}
                onChange={(e) =>
                  updateReward(reward.id, "limit", parseInt(e.target.value))
                }
                className="mt-1 block w-32 rounded-md border-gray-300 shadow-sm p-2 border outline-none sm:text-sm"
                placeholder="No limit"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => removeReward(reward.id)}
                className="text-red-600 hover:text-red-700"
              >
                <i className="fa-solid fa-trash mr-1" />
                Remove Reward
              </button>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addReward}
          className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-center hover:border-gray-400"
        >
          <i className="fa-solid fa-plus text-gray-400 text-xl mb-2" />
          <div className="text-sm font-medium text-gray-600">
            Add New Reward Tier
          </div>
        </button>
      </div>
    </div>
  );
}

export default RewardsStep;
