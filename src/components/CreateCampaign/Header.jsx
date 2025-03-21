import React from "react";
import StepIndicator from "./StepIndicator";

function Header({ currentStep, stepNumber, totalSteps, steps }) {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              {currentStep.title}
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Step {stepNumber} of {totalSteps} - {currentStep.title}
            </p>
          </div>
          <button className="!rounded-button inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            <i className="fa-regular fa-floppy-disk mr-2" />
            Save Draft
          </button>
        </div>
        <div className="border-t border-gray-200">
          <StepIndicator steps={steps} currentStep={currentStep.id} />
        </div>
      </div>
    </header>
  );
}

export default Header;
