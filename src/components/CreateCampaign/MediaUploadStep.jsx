import React, { useCallback } from "react";
import { useFormContext } from "react-hook-form";
import { useDropzone } from "react-dropzone";

function MediaUploadStep() {
  const { setValue, watch } = useFormContext();
  const media = watch("media");

  const onDrop = useCallback(
    (acceptedFiles) => {
      setValue("media", [...media, ...acceptedFiles]);
    },
    [media, setValue]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif"],
    },
    maxSize: 10485760,
  });

  const removeFile = (index) => {
    setValue(
      "media",
      media.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Media Upload
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Upload your campaign images and videos
        </p>
      </div>

      <div className="space-y-6">
        <div
          {...getRootProps()}
          className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-12"
        >
          <div className="text-center">
            <i className="fa-solid fa-cloud-arrow-up text-4xl text-gray-400 mb-4" />
            <div className="text-sm text-gray-600">
              <input {...getInputProps()} />
              <p>
                <span className="text-[#1f2937] hover:text-[#1f2937f0] cursor-pointer">
                  Upload files
                </span>{" "}
                or drag and drop
              </p>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        </div>

        {media.length > 0 && (
          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-900 mb-4">
              Uploaded Files
            </h4>
            <ul className="divide-y divide-gray-200 border border-gray-200 rounded-md">
              {media.map((file, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between py-3 px-4 text-sm"
                >
                  <div className="flex items-center">
                    <i className="fa-regular fa-image text-gray-400 mr-3" />
                    <span className="text-gray-700">{file.name}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-4">
                      {(file.size / (1024 * 1024)).toFixed(1)} MB
                    </span>
                    <button
                      onClick={() => removeFile(index)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <i className="fa-solid fa-trash" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default MediaUploadStep;
