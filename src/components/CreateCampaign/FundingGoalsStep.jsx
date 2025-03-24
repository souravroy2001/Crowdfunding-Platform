import React from "react";
import { useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";

function FundingGoalsStep() {
  const { register } = useFormContext();
  const theme = useSelector((state) => state.theme.darkMode);

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
          Funding Goals
        </h3>
        <p
          className={`mt-1 text-sm ${
            theme ? "text-gray-500" : "text-gray-400"
          }`}
        >
          Set your campaign funding goals and duration
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label
            className={`block text-sm font-medium ${
              theme ? "text-gray-700" : "text-gray-200"
            }`}
          >
            Funding Goal
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span
                className={`${
                  theme ? "text-gray-500" : "text-gray-100"
                } sm:text-sm`}
              >
                $
              </span>
            </div>
            <input
              type="number"
              {...register("fundingGoal")}
              className={`block w-full pl-7 rounded-md border-gray-300 p-2 border outline-none sm:text-sm ${
                theme ? "text-gray-900" : "text-gray-50"
              }`}
              placeholder="0.00"
            />
          </div>
        </div>

        <div>
          <label
            className={`block text-sm font-medium ${
              theme ? "text-gray-700" : "text-gray-100"
            } `}
          >
            Campaign Duration
          </label>
          <select
            {...register("duration")}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border outline-none sm:text-sm ${
              theme ? "text-gray-900" : "text-gray-50 bg-gray-800"
            }`}
          >
            <option value="15">15 days</option>
            <option value="30">30 days</option>
            <option value="45">45 days</option>
            <option value="60">60 days</option>
          </select>
        </div>

        <div>
          <label
            className={`block text-sm font-medium ${
              theme ? "text-gray-700" : "text-gray-100"
            } `}
          >
            Funding Type
          </label>
          <div className="mt-2 space-y-4">
            <div className="flex items-center">
              <input
                type="radio"
                {...register("fundingType")}
                value="all-or-nothing"
                className="h-4 w-4 p-2 border outline-none text-custom border-gray-300"
              />
              <label
                className={`ml-3 block text-sm font-medium ${
                  theme ? "text-gray-700" : "text-gray-100"
                }`}
              >
                All or Nothing
                <p
                  className={`text-sm ${
                    theme ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  You'll receive funds only if you reach your goal
                </p>
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                {...register("fundingType")}
                value="keep-it-all"
                className=" h-4 w-4 p-2 border outline-none text-custom border-gray-300"
              />
              <label
                className={`ml-3 block text-sm font-medium ${
                  theme ? "text-gray-700" : "text-gray-100"
                }`}
              >
                Keep it All
                <p
                  className={`text-sm ${
                    theme ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  You'll receive all funds raised, even if you don't reach your
                  goal
                </p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FundingGoalsStep;
