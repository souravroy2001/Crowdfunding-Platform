import React, { useCallback } from "react";
import { useFormContext } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { useSelector } from "react-redux";

function MediaUploadStep() {
  const { setValue, watch } = useFormContext();
  const media = watch("media");
  const theme = useSelector((state) => state.theme.darkMode);

  // Convert File to URL
  const createFileURL = (file) => URL.createObjectURL(file);

  // Compare two images (checks byte data)
  const areImagesIdentical = async (file1, file2) => {
    const buffer1 = await file1.arrayBuffer();
    const buffer2 = await file2.arrayBuffer();

    return (
      buffer1.byteLength === buffer2.byteLength &&
      new Uint8Array(buffer1).every(
        (val, index) => val === new Uint8Array(buffer2)[index]
      )
    );
  };

  // Handle file drop
  const onDrop = useCallback(
    async (acceptedFiles) => {
      const newFiles = [];

      for (const file of acceptedFiles) {
        let isDuplicate = false;

        for (const existingFile of media) {
          if (await areImagesIdentical(existingFile, file)) {
            isDuplicate = true;
            break;
          }
        }

        if (!isDuplicate) {
          newFiles.push(Object.assign(file, { preview: createFileURL(file) }));
        }
      }

      setValue("media", [...media, ...newFiles]);
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
    <div
      className={`space-y-8 p-6 rounded-lg shadow-md ${
        theme ? "bg-white" : "bg-gray-800"
      }`}
    >
      <div>
        <h3
          className={`text-lg font-medium leading-6 ${
            theme ? "text-gray-900" : "text-white"
          }`}
        >
          Media Upload
        </h3>
        <p
          className={`mt-1 text-sm ${
            theme ? "text-gray-500" : "text-gray-400"
          }`}
        >
          Upload your campaign images and videos
        </p>
      </div>

      <div className="space-y-6">
        <div
          {...getRootProps()}
          className={`${
            theme ? "bg-white" : "bg-gray-900"
          } rounded-lg border-2 border-dashed border-gray-300 p-12`}
        >
          <div className="text-center">
            <i
              className={`fa-solid fa-cloud-arrow-up text-4xl mb-4 ${
                theme ? "text-gray-400" : "text-gray-100"
              }`}
            />
            <div
              className={`text-sm ${theme ? "text-gray-600" : "text-gray-400"}`}
            >
              <input {...getInputProps()} />
              <p>
                <span
                  className={`${
                    theme
                      ? "text-[#1f2937] hover:text-[#1f2937f0]"
                      : "text-gray-300 hover:text-gray-400"
                  } cursor-pointer`}
                >
                  Upload files
                </span>{" "}
                or drag and drop
              </p>
            </div>
            <p
              className={`text-xs mt-2 ${
                theme ? "text-gray-500" : "text-gray-400"
              }`}
            >
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
