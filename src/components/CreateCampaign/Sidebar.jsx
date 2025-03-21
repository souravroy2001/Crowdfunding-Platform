import React from "react";
import { useSelector } from "react-redux";

function Sidebar({ steps, currentStep, onStepClick }) {
  const theme = useSelector((state) => state.theme.darkMode);
  return (
    <aside className="w-72 bg-white border-r border-gray-200 hidden lg:block">
      <div className="p-6">
        <img src="/FundHive-logo.png" alt="Logo" className="h-8" />
      </div>
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
                  ? "text-[#fff] bg-[#1f2937]"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <i className={`${step.icon} mr-3`} />
              <span>{step.title}</span>
              {step.completed && (
                <i className="fa-solid fa-check ml-auto text-[#1f2937]" />
              )}
            </a>
          ))}
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
