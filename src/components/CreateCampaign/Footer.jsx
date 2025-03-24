import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormContext } from "react-hook-form";
import { toast } from "react-toastify";
import { addCampaign } from "../../redux/features/campaignSlice";

function Footer({ onPrevious, onNext, isFirstStep, isLastStep }) {
  const theme = useSelector((state) => state.theme.darkMode);

  const { watch } = useFormContext();
  const dispatch = useDispatch();

  // Get the current form values
  const formData = watch();
  
  // Function to handle the "Publish" button click
  function handlePunish() {
    if (formData.title.trim() === "") {
      toast.error("Please enter a title");
      return;
    }
    if (formData.category.trim() === "") {
      toast.error("Please select a category");
      return;
    }
    if (formData.duration === "") {
      toast.error("Please select a duration");
      return;
    }
    if (formData.fundingGoal === 0) {
      toast.error("Please enter a funding goal");
      return;
    }
    if (formData.story.trim() === "") {
      toast.error("Please enter a story");
      return;
    }
    if (formData.media.length < 4) {
      toast.error("Please upload at least 4 media file");
      return;
    }
    if (formData.rewards.length < 0) {
      toast.error("Please add at least three reward");
      return;
    }

    if (formData.shortDescription.trim() === "") {
      toast.error("Please enter a short description");
      return;
    }
    if (formData.tags.length === 0) {
      toast.error("Please add at least one tag");
      return;
    }

    console.log("Form Data Before Dispatch:", formData);
    dispatch(addCampaign(formData))
      .unwrap()
      .then((result) => {
        console.log("Dispatch Success:", result);
      })
      .catch((error) => {
        console.log("Dispatch Failed:", error);
      });
  }

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
              onClick={isLastStep ? handlePunish : onNext}
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
