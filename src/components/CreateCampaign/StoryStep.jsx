import React from "react";
import { useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";

function StoryStep() {
  const { register } = useFormContext();
  const theme = useSelector((state) => state.theme.darkMode);

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Campaign Story
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Tell your story and describe your campaign in detail
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label
            htmlFor="story"
            className="block text-sm font-medium text-gray-700"
          >
            Campaign Story
          </label>
          <div className="mt-1">
            <textarea
              {...register("story")}
              rows={8}
              className="block w-full rounded-md border-gray-300 shadow-sm p-2 border outline-none m sm:text-sm"
              placeholder="Write your campaign story here..."
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="shortDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Short Description
          </label>
          <div className="mt-1">
            <textarea
              {...register("shortDescription")}
              rows={3}
              className="block w-full rounded-md border-gray-300 shadow-sm p-2 border outline-none sm:text-sm"
              placeholder="Write a brief description of your campaign..."
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            This will appear in campaign previews and cards. Maximum 200
            characters.
          </p>
        </div>
      </div>
    </div>
  );
}

export default StoryStep;
