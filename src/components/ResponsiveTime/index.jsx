import { useState } from "react";
import InputRange from "react-input-range";

const ResponsiveTime = ({ tResponsiveTime }) => {
  const [rangeVals, setRangeVals] = useState({
    min: 5,
    max: 10,
  });
  return (
    <div className="w-full bg-white p-2 5 border border-[#e0e0e0] rounded-lg">
      <div className="flex justify-between mb-4 border-b border-[#d9d9d9]">
        <span className="font-semibold text-lg">
          {tResponsiveTime("departure_time")}
        </span>
        <span className="text-primary underline font-semibold">
          {tResponsiveTime("clear")}
        </span>
      </div>
      <div className="px-4 py-2.5">
        <div className="my-4">
          <InputRange
            maxValue={24}
            minValue={0}
            formatLabel={(value) => `${value}:00`}
            value={rangeVals}
            onChange={(value) => setRangeVals(value)}
            onChangeComplete={(value) => console.log(value)}
          />
        </div>
      </div>
      <div className="px-4 py-2.5">
        <ul>
          <li>
            <div class="inline-flex items-center">
              <label
                class="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor="html"
              >
                <input
                  name="type"
                  type="radio"
                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                  id="html"
                />
                <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </span>
              </label>
              <label
                class="mt-px text-gray-700 cursor-pointer select-none text-sm"
                htmlFor="html"
              >
                {tResponsiveTime("default")}
              </label>
            </div>
          </li>
          <li>
            <div class="inline-flex items-center">
              <label
                class="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor="html"
              >
                <input
                  name="type"
                  type="radio"
                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                  id="html"
                />
                <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </span>
              </label>
              <label
                class="mt-px text-gray-700 cursor-pointer select-none text-sm"
                htmlFor="html"
              >
                {tResponsiveTime("earliest_departure")}
              </label>
            </div>
          </li>
          <li>
            <div class="inline-flex items-center">
              <label
                class="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor="html"
              >
                <input
                  name="type"
                  type="radio"
                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                  id="html"
                />
                <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </span>
              </label>
              <label
                class="mt-px text-gray-700 cursor-pointer select-none text-sm"
                htmlFor="html"
              >
                {tResponsiveTime("latest_departure")}
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveTime;
