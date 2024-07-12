import { useState } from "react";

const ResponsiveSort = ({ tResponsiveSort }) => {
  const [sortOpts] = useState([
    { id: 1, label: tResponsiveSort("default"), value: "1" },
    { id: 2, label: tResponsiveSort("earliest_departure"), value: "2" },
    { id: 3, label: tResponsiveSort("latest_departure"), value: "3" },
    { id: 4, label: tResponsiveSort("highest"), value: "4" },
    { id: 5, label: tResponsiveSort("price_ascending"), value: "5" },
    { id: 6, label: tResponsiveSort("price_descending"), value: "6" },
  ]);
  return (
    <div className="w-full bg-white p-2.5 border border-[#e0e0e0] rounded-lg mb-4">
      <p className="font-semibold mb-2.5">{tResponsiveSort("sort")}</p>
      <ul>
        {sortOpts.map((s) => (
          <li key={s.id}>
            <div class="inline-flex items-center">
              <label
                class="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor="html"
              >
                <input
                  name="type"
                  value={s.value}
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
                {s.label}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResponsiveSort;
