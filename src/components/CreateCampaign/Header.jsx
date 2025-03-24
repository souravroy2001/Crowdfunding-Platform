import React from "react";
import StepIndicator from "./StepIndicator";
import { useSelector } from "react-redux";

function Header({ currentStep, stepNumber, totalSteps, steps }) {
  const theme = useSelector((state) => state.theme.darkMode);
  return (
    <header
      className={` ${
        theme
          ? "bg-white border-b border-gray-200"
          : "bg-gray-800 border-b border-gray-600"
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="py-4 flex items-center justify-between">
          <div>
            <h1
              className={`${
                theme
                  ? "text-2xl font-semibold text-gray-900"
                  : "text-2xl font-semibold text-white"
              }`}
            >
              {currentStep.title}
            </h1>
            <p
              className={`${
                theme
                  ? "mt-1 text-sm text-gray-500"
                  : "mt-1 text-sm text-gray-400"
              }`}
            >
              Step {stepNumber} of {totalSteps} - {currentStep.title}
            </p>
          </div>
          <button className="!rounded-button inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            <i className="fa-regular fa-floppy-disk mr-2" />
            Save Draft
          </button>
        </div>
        <div
          className={`${
            theme ? "border-t border-gray-200" : "border-t border-gray-600"
          }`}
        >
          <StepIndicator steps={steps} currentStep={currentStep.id} />
        </div>
      </div>
    </header>
  );
}

export default Header;
