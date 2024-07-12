import Breadscrum from "../../../components/Breadscrum";
import UserSidebar from "../../../components/UserSidebar";
import app from "../../../assets/vexere-app.png";
import appstore from "../../../assets/download/download-app-store.png";
import chplay from "../../../assets/download/download-gg-play.png";
import { useTranslation } from "react-i18next";

const Evaluation = () => {
  const { t: tEvaluation } = useTranslation("user_info");

  return (
    <div>
      <Breadscrum site={tEvaluation("trip_review")} />
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-full xl:col-span-1">
          <UserSidebar />
        </div>
        <div className="col-span-full xl:col-span-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1 flex flex-col">
              <p className="text-lg font-semibold text-center">
                {tEvaluation("app_download_prompt")}
              </p>
              <div className="flex gap-6 justify-center">
                <img src={appstore} alt="" className="w-1/3" />
                <img src={chplay} alt="" className="w-1/3" />
              </div>
            </div>
            <div className="col-span-1">
              <img src={app} alt="" className="w-7/12 m-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evaluation;
