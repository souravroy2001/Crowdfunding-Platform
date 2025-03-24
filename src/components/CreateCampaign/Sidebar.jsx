import React from "react";
import { useSelector } from "react-redux";

function Sidebar({ steps, currentStep, onStepClick }) {
  const theme = useSelector((state) => state.theme.darkMode);
  return (
    <aside
      className={`w-72 ${
        theme ? "bg-gray-100 border-gray-200" : "bg-gray-800 border-gray-600"
      } border-r hidden lg:block`}
    >
      <nav className="px-4 py-6">
        <div className="space-y-1">
          {steps.map((step) => (
            <a
              key={step.id}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onStepClick(step.id);
              }}
              className={`flex items-center justify-start px-4 py-4 text-sm font-medium rounded-lg ${
                step.id === currentStep
                  ? theme
                    ? "text-[#fff] bg-[#1f2937]"
                    : "text-[#fff] bg-[#00a693]"
                  : theme
                  ? "text-gray-600 hover:bg-gray-50"
                  : "text-gray-100 hover:bg-gray-700"
              }`}
            >
              <i className={`${step.icon} mr-3`} />
              <span>{step.title}</span>
              {step.completed && (
                <i
                  className={`fa-solid fa-check ml-auto ${
                    theme ? "text-[#1f2937]" : "text-[#00a693]"
                  }`}
                />
              )}
            </a>
          ))}
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
