import { useTranslation } from "react-i18next";
import Breadscrum from "../../../components/Breadscrum";
import UserSidebar from "../../../components/UserSidebar";

const Credits = () => {
  const { t: tCredits } = useTranslation("user_info");

  return (
    <div>
      <Breadscrum site={tCredits("card_management")} />
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-full xl:col-span-1">
          <UserSidebar />
        </div>
        <div className="col-span-full xl:col-span-4">
          <div className="w-full px-4 pt-4 pb-5 flex justify-between bg-white border border-[#d9d9d9] rounded mb-4">
            <div>
              <p className="text-lg font-bold">{tCredits("domestic_atm")}</p>
              <p className="text-sm">{tCredits("internet_banking_note")}.</p>
            </div>
            <div>
              <button className="px-2.5 py-1.5 text-sm text-white bg-[#0D2E59] font-semibold rounded">
                <i className="fa-solid fa-plus"></i> {tCredits("add_new_card")}
              </button>
            </div>
          </div>
          <div className="w-full px-4 pt-4 pb-5 bg-white border border-[#d9d9d9] rounded">
            <div className="flex justify-between">
              <div>
                <p className="text-lg font-bold">
                  {tCredits("international_card")}
                </p>
                <p className="text-sm">VISA, MasterCard, JCB.</p>
              </div>
              <div>
                <button className="px-2.5 py-1.5 text-sm text-white bg-[#0D2E59] font-semibold rounded">
                  <i className="fa-solid fa-plus"></i>{" "}
                  {tCredits("add_new_card")}
                </button>
              </div>
            </div>
            <div className="bg-[#eefbf4] border border-[#27ae5f] w-full py-2 px-1.5 flex items-center gap-2.5 rounded my-2.5">
              <i className="fa-solid fa-circle-check text-[#27ae5f]"></i>
              <span className="text-sm">{tCredits("security_note")}.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;
