import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../../../redux/actions/Auth";
import { useTranslation } from "react-i18next";

const LoginForm = (Props) => {
  const { t: tLogin } = useTranslation("confirmation");
  const dispatch = useDispatch();
  const { handleShow, handleChangeState } = Props;
  const [formVals, setFormVals] = useState({
    phone: "",
    password: "",
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
    let rs = await dispatch(login(formVals));
    if (rs.payload.action) {
      handleShow(false);
    }
  };
  return (
    <>
      <div className="px-6 rounded py-5 bg-white w-modalBaseWidth flex max-h-full dark:bg-boxdark">
        <div className="flex max-h-full flex-col items-center w-full text-base">
          <div className="pt-2 pb-3 border-b border-[#ddd] w-full">
            <h2 className="m-0 text-lg text-center capitalize font-semibold">
              {tLogin("login")}
            </h2>
          </div>
          <form
            className="text-sm pt-3 w-full max-h-full overflow-overlay custom-scroll"
            onSubmit={handleSubmit}
          >
            <small>
              {tLogin("phone")} <span className="text-[#DF2029]">*</span>
            </small>
            <div className="grid grid-cols-3 gap-2.5">
              <div className="col-span-1">
                <select className="w-full border border-[#d9d9d9] focus:border-primary bg-white p-4 xl:p-2">
                  <option>(Viet Nam) +84</option>
                </select>
              </div>
              <div className="col-span-2">
                <input
                  required
                  name="phone"
                  value={formVals.phone}
                  onChange={handleChange}
                  placeholder={tLogin("phone")}
                  className="bg-white w-full border border-[#d9d9d9] h-full px-2.5 py-2.5"
                />
              </div>
              <small>
                {tLogin("password")} <span className="text-[#DF2029]">*</span>
              </small>
              <div className="col-span-3">
                <input
                  required
                  name="password"
                  value={formVals.password}
                  type="password"
                  onChange={handleChange}
                  placeholder={tLogin("password")}
                  className="bg-white w-full border border-[#d9d9d9] h-full px-2.5 py-2.5"
                />
              </div>
              <div className="col-span-3">
                <button
                  type="submit"
                  className="w-full border border-[#d9d9d9] text-base py-2.5 hover:text-primary hover:border-primary"
                >
                  {tLogin("continue")}
                </button>
              </div>
              {/* <div className="col-span-full relative flex py-5 items-center">
                                <div className="flex-grow border-t border-gray-400"></div>
                                <span className="flex-shrink mx-4 text-gray-400">hoặc</span>
                                <div className="flex-grow border-t border-gray-400"></div>
                            </div>
                            <div className="col-span-full">
                                <button type="button" className="w-full bg-primary text-white text-base py-2.5">Đăng nhập với Google</button>
                            </div> */}
              <span className="col-span-full">
                {tLogin("no_account")}{" "}
                <button
                  type="button"
                  className="text-primary"
                  onClick={() => {
                    handleChangeState("signup");
                  }}
                >
                  {tLogin("sign_up")}
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
