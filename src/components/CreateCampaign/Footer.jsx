import React from 'react';

function Footer({ onPrevious, onNext, isFirstStep, isLastStep }) {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-500">
              <i className="fa-regular fa-clock mr-1" />
              Last saved 2 minutes ago
            </span>
            <span className="text-sm text-gray-500">
              <i className="fa-regular fa-circle-question mr-1" />
              Need help? Contact support
            </span>
          </div>
          <div className="flex items-center space-x-4">
            {!isFirstStep && (
              <button
                type="button"
                onClick={onPrevious}
                className="!rounded-button inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                <i className="fa-solid fa-arrow-left mr-2" />
                Previous
              </button>
            )}
            <button
              type="button"
              onClick={onNext}
              className="!rounded-button inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#1f2937] hover:bg-[#1f2937f0]"
            >
              {isLastStep ? "Publish" : "Next"}
              {!isLastStep && <i className="fa-solid fa-arrow-right ml-2" />}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
