import React from "react";
import { useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";

function PreviewStep() {
  const { watch } = useFormContext();
  const formData = watch();
  const theme = useSelector((state) => state.theme.darkMode);

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Campaign Preview
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Review your campaign details before publishing
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h4 className="text-lg font-medium mt-5 mb-4">Basic Details</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Campaign Title</p>
              <p className="text-base font-medium">{formData.title}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Category</p>
              <p className="text-base font-medium">{formData.category}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Duration</p>
              <p className="text-base font-medium">{formData.duration} days</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Funding Type</p>
              <p className="text-base font-medium">
                {formData.fundingType === "all-or-nothing"
                  ? "All or Nothing"
                  : "Keep it All"}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h4 className="text-lg font-medium mb-4">Funding Goals</h4>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Target Amount</p>
              <p className="text-2xl font-bold text-[#1f2937]">
                ${formData.fundingGoal.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {formData.media.length > 0 && (
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="text-lg font-medium mb-4">Media</h4>
            <div className="grid grid-cols-2 gap-4">
              {formData.media.map((file, index) => (
                <div
                  key={index}
                  className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden"
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Campaign media ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h4 className="text-lg font-medium mb-4">Story</h4>
          <div className="prose max-w-none">
            <p>{formData.story}</p>
          </div>
        </div>

        {formData.rewards.length > 0 && (
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="text-lg font-medium mb-4">Reward Tiers</h4>
            <div className="space-y-4">
              {formData.rewards.map((reward) => (
                <div key={reward.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-medium">{reward.title}</h5>
                      {reward.limit && (
                        <p className="text-sm text-gray-500 mt-1">
                          Limited to {reward.limit} backers
                        </p>
                      )}
                    </div>
                    <p className="text-xl font-bold text-custom">
                      ${reward.amount}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    {reward.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PreviewStep;
