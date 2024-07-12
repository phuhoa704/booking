import { useDispatch } from "react-redux";
import Breadscrum from "../../../components/Breadscrum";
import UserSidebar from "../../../components/UserSidebar";
import { useState } from "react";
import { changePassword } from "../../../redux/actions/Auth";
import { useTranslation } from "react-i18next";

const ChangePassword = () => {
  const { t: tChangePassword } = useTranslation("user_info");
  const dispatch = useDispatch();
  const [formVals, setFormVals] = useState({
    old_password: "",
    new_password: "",
    confirm_new_password: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setFormVals({
      ...formVals,
      [name]: val,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let rs = await dispatch(changePassword(formVals));
    if (rs.payload.action) {
      setFormVals({
        new_password: "",
        old_password: "",
        confirm_new_password: "",
      });
    }
  };

  return (
    <div>
      <Breadscrum site={tChangePassword("change_password")} />
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-full xl:col-span-1">
          <UserSidebar />
        </div>
        <div className="col-span-full xl:col-span-4">
          <form className="text-sm w-full max-h-full" onSubmit={handleSubmit}>
            <div className="flex flex-col my-3">
              <label htmlFor="fullname">
                {tChangePassword("old_password")}
                <span className="text-[#DF2029]">*</span>
              </label>
              <input
                className="px-2.5 py-1.5 bg-white rounded border border-[#d9d9d9]"
                type="password"
                value={formVals.old_password}
                onChange={handleChange}
                name="old_password"
                id="old_password"
                placeholder={tChangePassword("enter_old_password")}
              />
            </div>
            <div className="flex flex-col my-3">
              <label htmlFor="fullname">
                {tChangePassword("new_password")}
                <span className="text-[#DF2029]">*</span>
              </label>
              <input
                className="px-2.5 py-1.5 bg-white rounded border border-[#d9d9d9]"
                type="password"
                value={formVals.new_password}
                onChange={handleChange}
                name="new_password"
                id="new_password"
                placeholder={tChangePassword("enter_new_password")}
              />
            </div>
            <div className="flex flex-col my-3">
              <label htmlFor="sex">
                {tChangePassword("confirm_new_password")}
                <span className="text-[#DF2029]">*</span>
              </label>
              <input
                className="px-2.5 py-1.5 bg-white rounded border border-[#d9d9d9]"
                type="password"
                value={formVals.confirm_new_password}
                onChange={handleChange}
                name="confirm_new_password"
                id="confirm_new_password"
                placeholder={tChangePassword("confirm_new_password")}
              />
            </div>
            <div className="my-3">
              <button
                type="submit"
                className="bg-primary text-white text-center w-full py-2 rounded"
              >
                {tChangePassword("save")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
