import { FaSearch } from "react-icons/fa";

const ResponsiveStation = ({ tResponsiveStation }) => {
  return (
    <div className="w-full bg-white p-2.5 border border-[#e0e0e0] rounded-lg">
      <div className="flex justify-between mb-4">
        <span className="font-semibold text-lg">
          {tResponsiveStation("operator")}
        </span>
        <span className="text-primary underline font-semibold">
          {tResponsiveStation("clear")}
        </span>
      </div>
      <div className="py-2 border-b border-[#d9d9d9]">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FaSearch />
          </div>
          <input
            type="search"
            id="title"
            className="block w-full h-10 px-4 py-3 ps-10 text-sm rounded-lg border border-stroke bg-transparent outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            placeholder={`${tResponsiveStation("in_list")}...`}
          />
        </div>
      </div>
      <div className="py-2 overflow-y-auto">
        <ul className="h-max">
          <li className="py-2.5 px-2">
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
          <li className="py-2.5 px-2">
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
          <li className="py-2.5 px-2">
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
          <li className="py-2.5 px-2">
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
          <li className="py-2.5 px-2">
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
          <li className="py-2.5 px-2">
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
      </div>
    </div>
  );
};

export default ResponsiveStation;
