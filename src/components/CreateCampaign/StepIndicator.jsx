import React from "react";
import { useSelector } from "react-redux";

function StepIndicator({ steps, currentStep }) {
  const theme = useSelector((state) => state.theme.darkMode);
  return (
    <div className="py-4">
      <div className="flex items-center">
        {steps.map((step, index) => (
          <div key={step.id} className="w-2/12 flex items-center">
            <div className="flex items-center relative">
              <div
                className={`rounded-full flex justify-center items-center transition duration-500 ease-in-out h-12 w-12 py-3 text-center
                  ${
                    step.completed || step.id === currentStep
                      ? "border-[#333] bg-[#333] text-white"
                      : "border-[#ccc] border text-gray-400"
                  }`}
              >
                <i className={`${step.icon} text-lg`} />
              </div>
              <div
                className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium
                  ${
                    step.completed || step.id === currentStep
                      ? "text-[#333] mt-[75px]"
                      : "text-gray-500 mt-[75px]"
                  }`}
              >
                {step.title}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-auto border-t-2 ${
                  step.completed ? "border-[#333]" : "border-gray-300"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StepIndicator;
