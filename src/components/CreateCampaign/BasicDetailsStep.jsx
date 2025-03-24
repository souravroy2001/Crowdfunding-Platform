import React from "react";
import { useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";

function BasicDetailsStep() {
  const theme = useSelector((state) => state.theme.darkMode);
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();
  const tags = watch("tags", []);

  const handleAddTag = () => {
    const input = document.getElementById("tag-input");
    const newTags = input.value
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "" && !tags.includes(tag));

    if (newTags.length > 0) {
      setValue("tags", [...tags, ...newTags]);
      input.value = "";
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setValue(
      "tags",
      tags.filter((tag) => tag !== tagToRemove)
    );
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div>
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Campaign Details
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          This information will be displayed publicly, so be careful what you
          share.
        </p>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        {/* Campaign Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Campaign Title
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="title"
              {...register("title", { required: "Campaign title is required" })}
              className={`block w-full rounded-md border-gray-300 p-2 border outline-none shadow-sm sm:text-sm ${
                errors.title ? "border-red-500" : ""
              }`}
              placeholder="Enter your campaign title"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-500">
                {errors.title.message}
              </p>
            )}
          </div>
        </div>

        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            id="category"
            {...register("category", { required: "Category is required" })}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 outline-none border sm:text-sm ${
              errors.category ? "border-red-500" : ""
            }`}
          >
            <option value="">Select a category</option>
            <option value="technology">Technology</option>
            <option value="art">Art & Creative Works</option>
            <option value="community">Community Projects</option>
            <option value="film">Film & Video</option>
            <option value="music">Music</option>
            <option value="publishing">Publishing</option>
          </select>
          {errors.category && (
            <p className="mt-1 text-sm text-red-500">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* Short Description */}
        <div>
          <label
            htmlFor="shortDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Short Description
          </label>
          <div className="mt-1">
            <textarea
              id="shortDescription"
              {...register("shortDescription", {
                required: "Short description is required",
                maxLength: {
                  value: 200,
                  message: "Description should not exceed 200 characters",
                },
              })}
              rows={3}
              className={`block w-full rounded-md border-gray-300 shadow-sm p-2 border outline-none sm:text-sm ${
                errors.shortDescription ? "border-red-500" : ""
              }`}
              placeholder="Write a brief description of your campaign"
            />
            {errors.shortDescription && (
              <p className="mt-1 text-sm text-red-500">
                {errors.shortDescription.message}
              </p>
            )}
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Brief description for your campaign. URLs are hyperlinked.
          </p>
        </div>

        {/* Campaign Tags */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Campaign Tags
          </label>
          <div className="mt-1">
            <div className="flex flex-wrap gap-2">
              {/* Display Tags */}
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#1f2937] text-[#fff]"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-1 inline-flex text-[#fff] hover:text-[#ccc]"
                    aria-label={`Remove tag ${tag}`}
                  >
                    <i className="fa-solid fa-xmark" />
                  </button>
                </span>
              ))}

              {/* Add Tag Input */}
              <div className="flex items-center gap-2">
                <input
                  id="tag-input"
                  type="text"
                  className="block rounded-md border-gray-300 shadow-sm p-2 outline-none border sm:text-sm"
                  placeholder="Add a tag"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddTag();
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  aria-label="Add tag"
                >
                  <i className="fa-solid fa-plus mr-1" />
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicDetailsStep;
