import { useState } from "react";
import { useDispatch } from "react-redux";
import { lookupOrder } from "../../redux/actions/Orders";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../configs/router";
import { useTranslation } from "react-i18next";

const TicketInfo = () => {
  const { t: tTicketInfo } = useTranslation("ticket");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    order_code: "",
    phone: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setState({
      ...state,
      [name]: val,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let rs = await dispatch(lookupOrder(state));
    if (rs.payload.action) {
      navigate(ROUTER.TICKETRESULT);
    }
  };
  return (
    <div className="flex justify-center bg-[#f2f2f2] h-full xl:h-rentPageContainer pt-16 xl:pt-0">
      <div className="pt-10 px-2.5 w-10/12 xl:w-2/5">
        <p className="text-[#484848] font-bold">{tTicketInfo("title")}</p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col my-3">
            <label htmlFor="order_code">{tTicketInfo("order_code")}</label>
            <input
              className="px-2.5 py-2 bg-white rounded border border-[#d9d9d9]"
              type="text"
              name="order_code"
              id="order_code"
              value={state.order_code}
              onChange={handleChange}
              placeholder={tTicketInfo("enter_order_code")}
            />
          </div>
          <div className="flex flex-col my-3">
            <label htmlFor="phone">{tTicketInfo("phone_number")}</label>
            <input
              className="px-2.5 py-2 bg-white rounded border border-[#d9d9d9]"
              type="text"
              name="phone"
              id="phone"
              value={state.phone}
              onChange={handleChange}
              placeholder={tTicketInfo("enter_phone_number")}
            />
          </div>
          <div className="my-3">
            <button
              type="submit"
              className="bg-primary text-white text-center w-full py-2 rounded"
            >
              {tTicketInfo("view_order_info")}
            </button>
          </div>
        </form>
        <div className="bg-[#dddddd] p-4">
          <p className="font-semibold">{tTicketInfo("note")}</p>
          <p>{tTicketInfo("cancel_order_note")}.</p>
        </div>
      </div>
    </div>
  );
};

export default TicketInfo;
