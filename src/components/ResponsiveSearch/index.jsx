import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../configs/router";
import { useState } from "react";
//datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// react select
import Select from "react-select";
import { location } from "../../configs/data";

const ResponsiveSearch = ({ tResponsiveSearch }) => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(null);
  const [activeTab, setActiveTab] = useState(1);
  const [firstPlace, setFirstPlace] = useState(null);
  const [secondPlace, setSecondPlace] = useState(null);
  return (
    <div className="w-full bg-white rounded-lg shadow-secondary mb-4 border border-[#e0e0e0]">
      <div className="flex justify-center py-3">
        <div className="flex pt-1.5 md:pt-0 xl:pt-3">
          <div
            onClick={() => setActiveTab(1)}
            className={`px-3 py-2 mr-3 transition-all duration-300 ease-linear cursor-pointer text-sm xl:text-xl font-semibold ${
              activeTab === 1 ? "text-primary border-primary border-b-2" : ""
            }`}
          >
            <i className="fa-solid fa-bus"></i> {tResponsiveSearch("bus")}
          </div>
          <div
            onClick={() => navigate(ROUTER.RENT)}
            className={`px-3 py-2 mr-3 transition-all duration-300 ease-linear cursor-pointer text-sm xl:text-xl font-semibold ${
              activeTab === 2 ? "text-primary border-primary border-b-2" : ""
            }`}
          >
            <i className="fa-solid fa-taxi"></i> {tResponsiveSearch("rent")}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2.5 w-full relative border-t border-[#ddd] py-3.5 px-3 dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
        <div className="border border-[#d9d9d9] col-span-full xl:col-span-4">
          <div className="grid grid-cols-4 h-full">
            <div className="col-span-2 xl:col-span-1 relative">
              <Select
                options={location}
                classNames={{
                  menu: () => "text-left",
                  // placeholder: (styles) => ({...styles, ...dotPlaceholder('#2474E5')})
                }}
                value={firstPlace}
                onChange={(e) => setFirstPlace(e)}
                placeholder={
                  <div>
                    <i className="fa-solid fa-location-arrow text-primary text-lg"></i>{" "}
                    {tResponsiveSearch("start_here")}
                  </div>
                }
                className="hidden-select-border"
              />
              <div
                onClick={() => {
                  let tempFirst = firstPlace;
                  let tempSecond = secondPlace;
                  setFirstPlace(tempSecond);
                  setSecondPlace(tempFirst);
                }}
                className="absolute w-8 h-8 right-0 top-1/2 translate-x-[50%] translate-y-[-50%] cursor-pointer z-10 rounded-full bg-[#cfd1d0] flex items-center justify-center"
              >
                <i className="fa-solid fa-arrow-right-arrow-left"></i>
              </div>
            </div>
            <div className="col-span-2 xl:col-span-1 border-[#d9d9d9] xl:border-r">
              <Select
                options={location}
                classNames={{
                  menu: () => "text-left",
                }}
                value={secondPlace}
                onChange={(e) => setSecondPlace(e)}
                placeholder={
                  <div>
                    <i className="fa-solid fa-location-dot text-[#ed4532] text-lg"></i>{" "}
                    {tResponsiveSearch("destination")}
                  </div>
                }
                className="hidden-select-border"
              />
            </div>
            <div className="col-span-2 xl:col-span-1 border-t border-r xl:border-t-0 border-[#d9d9d9] ">
              <DatePicker
                className="px-2.5 py-2.5 bg-white border border-[#d9d9d9] w-full h-full rounded border-none focus:border-none"
                placeholderText={tResponsiveSearch("departure_date")}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="col-span-2 xl:col-span-1 border-t border-[#d9d9d9] xl:border-none">
              <DatePicker
                className="px-2.5 py-2.5 bg-white border border-[#d9d9d9] w-full h-full rounded border-none focus:border-none"
                placeholderText={tResponsiveSearch("return_date")}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
        </div>
        <div className="col-span-full xl:col-span-1">
          <button className="bg-[#ffd333] py-2.5 text-center w-full rounded">
            <span
              className="font-semibold"
              onClick={() => navigate(ROUTER.SEARCH)}
            >
              {tResponsiveSearch("search")}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSearch;
