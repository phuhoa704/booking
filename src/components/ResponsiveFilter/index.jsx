import { useState } from "react";
import { location } from "../../configs/data";
import Collapse from "../../components/Collapse";
import InputRange from "react-input-range";
import { formatChangeNumber } from "../../helpers/number";

const ResponsiveFilter = ({ tResponsiveFilter }) => {
  const [numSeat, setNumSeat] = useState(1);
  const [rangeVals, setRangeVals] = useState({
    min: 5,
    max: 10,
  });
  return (
    <div className="w-full bg-white p-2 5 border border-[#e0e0e0] rounded-lg">
      <div className="flex justify-between mb-2.5">
        <span className="font-semibold text-lg">Lọc</span>
        <span className="text-primary underline font-semibold">
          {tResponsiveFilter("clear")}
        </span>
      </div>
      <ul>
        <li className="border-b border-[#d9d9d9] mb-3">
          <Collapse
            title={tResponsiveFilter("departure_time")}
            content={
              <InputRange
                maxValue={24}
                minValue={0}
                formatLabel={(value) => `${value}:00`}
                value={rangeVals}
                onChange={(value) => setRangeVals(value)}
                onChangeComplete={(value) => console.log(value)}
              />
            }
          />
        </li>
        <li className="border-b border-[#d9d9d9] mb-3">
          <Collapse
            title={tResponsiveFilter("operator")}
            content={
              <ul>
                <li>
                  <div className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      class="w-5 h-5 shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    />
                    <label for="hs-default-checkbox" class="text-sm ms-3">
                      Anh Huy (Hải Phòng) (96)
                    </label>
                  </div>
                </li>
                <li>
                  <div class="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      class="w-5 h-5 shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    />
                    <label for="hs-default-checkbox" class="text-sm ms-3">
                      AGO Hoàng Phương (34)
                    </label>
                  </div>
                </li>
                <li>
                  <div class="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      class="w-5 h-5 shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    />
                    <label for="hs-default-checkbox" class="text-sm ms-3">
                      Anh Huy Đất Cảng (15)
                    </label>
                  </div>
                </li>
                <li>
                  <div class="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      class="w-5 h-5 shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    />
                    <label for="hs-default-checkbox" class="text-sm ms-3">
                      Cát Bà Limousine (4)
                    </label>
                  </div>
                </li>
                <li>
                  <div class="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      class="w-5 h-5 shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    />
                    <label for="hs-default-checkbox" class="text-sm ms-3">
                      Cát Bà Express (3)
                    </label>
                  </div>
                </li>
                <li>
                  <div class="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      class="w-5 h-5 shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    />
                    <label for="hs-default-checkbox" class="text-sm ms-3">
                      Cát Bà Go Easy Limousine (3)
                    </label>
                  </div>
                </li>
              </ul>
            }
          />
        </li>
        <li className="border-b border-[#d9d9d9] mb-3">
          <Collapse
            title={tResponsiveFilter("price")}
            content={
              <InputRange
                maxValue={2000000}
                minValue={0}
                step={50000}
                formatLabel={(value) =>
                  `${formatChangeNumber(value.toString())}đ`
                }
                value={rangeVals}
                onChange={(value) => setRangeVals(value)}
                onChangeComplete={(value) => console.log(value)}
              />
            }
          />
        </li>
        <li className="border-b border-[#d9d9d9] mb-3">
          <Collapse
            title={tResponsiveFilter("pickup")}
            content={
              <ul>
                {location.map((l) => (
                  <li>
                    <div className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value={l.value}
                        class="w-5 h-5 shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      />
                      <label for="hs-default-checkbox" class="text-sm ms-3">
                        {l.label}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            }
          />
        </li>
        <li className="border-b border-[#d9d9d9] mb-3">
          <Collapse
            title={tResponsiveFilter("dropoff")}
            content={
              <ul>
                {location.map((l) => (
                  <li>
                    <div className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value={l.value}
                        class="w-5 h-5 shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      />
                      <label for="hs-default-checkbox" class="text-sm ms-3">
                        {l.label}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            }
          />
        </li>
        <li className="border-b border-[#d9d9d9] mb-3">
          <Collapse
            title={tResponsiveFilter("position")}
            content={
              <div className="flex justify-between items-center">
                <span className="text-sm">
                  {tResponsiveFilter("available")}
                </span>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => {
                      if (numSeat > 1) {
                        setNumSeat(numSeat - 1);
                      }
                    }}
                    className={`rounded-full p-1.5 text-sm w-7 h-7 flex justify-center items-center border-2 ${
                      numSeat < 2
                        ? "border-[#e0e0e0] bg-[#f7f7f7] text-[#e0e0e0]"
                        : "bg-[#e3edfc] border-primary text-primary"
                    }`}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <span>{numSeat}</span>
                  <button
                    onClick={() => {
                      setNumSeat(numSeat + 1);
                    }}
                    className={`rounded-full p-1.5 text-sm w-7 h-7 flex justify-center items-center border-2 bg-[#e3edfc] border-primary text-primary`}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            }
          />
        </li>
      </ul>
    </div>
  );
};

export default ResponsiveFilter;
