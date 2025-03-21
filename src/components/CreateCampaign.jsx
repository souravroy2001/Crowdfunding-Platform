import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import BasicDetailsStep from "./CreateCampaign/BasicDetailsStep";
import FundingGoalsStep from "./CreateCampaign/FundingGoalsStep";
import MediaUploadStep from "./CreateCampaign/MediaUploadStep";
import StoryStep from "./CreateCampaign/StoryStep";
import RewardsStep from "./CreateCampaign/RewardsStep";
import PreviewStep from "./CreateCampaign/PreviewStep";
import Sidebar from "./CreateCampaign/Sidebar";
import Header from "./CreateCampaign/Header";
import Footer from "./CreateCampaign/Footer";

const steps = [
  {
    id: "basic-details",
    title: "Basic Details",
    icon: "fa-regular fa-file-lines",
  },
  {
    id: "funding-goals",
    title: "Funding Goals",
    icon: "fa-solid fa-chart-line",
  },
  {
    id: "media-upload",
    title: "Media Upload",
    icon: "fa-regular fa-images",
  },
  {
    id: "story",
    title: "Story & Description",
    icon: "fa-regular fa-pen-to-square",
  },
  {
    id: "rewards",
    title: "Reward Tiers",
    icon: "fa-solid fa-gift",
  },
  {
    id: "preview",
    title: "Preview & Publish",
    icon: "fa-regular fa-eye",
  },
];

const defaultValues = {
  title: "",
  category: "technology",
  shortDescription: "",
  tags: [],
  fundingGoal: 0,
  duration: "30",
  fundingType: "all-or-nothing",
  story: "",
  media: [],
  rewards: [],
};

function CreateCampaign() {
  const methods = useForm({
    defaultValues,
  });

  const [currentStepId, setCurrentStepId] = useState(steps[0].id);
  const currentStepIndex = steps.findIndex((step) => step.id === currentStepId);
  const currentStep = steps[currentStepIndex];

  // Update steps with completed status
  const updatedSteps = steps.map((step, index) => ({
    ...step,
    completed: index < currentStepIndex,
    current: step.id === currentStepId,
  }));

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepId(steps[currentStepIndex - 1].id);
    }
  };

  const handleNext = async () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepId(steps[currentStepIndex + 1].id);
    }
  };

  const renderStepContent = () => {
    switch (currentStepId) {
      case "basic-details":
        return <BasicDetailsStep />;
      case "funding-goals":
        return <FundingGoalsStep />;
      case "media-upload":
        return <MediaUploadStep />;
      case "story":
        return <StoryStep />;
      case "rewards":
        return <RewardsStep />;
      case "preview":
        return <PreviewStep />;
      default:
        return null;
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="min-h-screen flex mt-[80px]">
        <Sidebar
          steps={updatedSteps}
          currentStep={currentStepId}
          onStepClick={setCurrentStepId}
        />

        <div className="flex-1 min-w-0 flex flex-col">
          <Header
            currentStep={currentStep}
            stepNumber={currentStepIndex + 1}
            totalSteps={steps.length}
            steps={updatedSteps}
          />

          <main className="flex-1 overflow-y-auto">
            <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
              <form onSubmit={methods.handleSubmit(handleNext)}>
                {renderStepContent()}

                <div className="pt-8">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1f2937] hover:bg-[#1f2937f0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom"
                    >
                      Save and Continue
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </main>

          <Footer
            onPrevious={handlePrevious}
            onNext={methods.handleSubmit(handleNext)}
            isFirstStep={currentStepIndex === 0}
            isLastStep={currentStepIndex === steps.length - 1}
          />
        </div>
      </div>
    </FormProvider>
  );
}

export default CreateCampaign;
