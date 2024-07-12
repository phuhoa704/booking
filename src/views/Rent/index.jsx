import bg from "../../assets/rent-bg.jpg";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRoute, FaRegClipboard, FaHandshake } from "react-icons/fa";
import { vehicles, experiences } from "../../configs/data";
import { useTranslation } from "react-i18next";

const Rent = () => {
  const { t: tRent } = useTranslation("rent");
  const [formVals, setFormVals] = useState({
    from: "",
    to: "",
    addressFrom: "",
    addressTo: "",
    type: "",
    vehicle: "",
    amount: "",
  });
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [fromHour, setFromHour] = useState(null);
  const [toHour, setToHour] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setFormVals({
      ...formVals,
      [name]: val,
    });
  };
  return (
    <div className="bg-white">
      <div
        className="w-full bg-center bg-cover h-full xl:h-rentPageContainer"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="w-full h-full relative">
          <div className="absolute w-full h-full bg-[#202020] opacity-50"></div>
          <div className="flex flex-col xl:flex-row items-center relative w-full xl:w-9/12 m-auto h-full gap-4 pt-16 xl:pt-0 pb-4 xl:pb-0">
            <div className="w-full xl:w-1/2 px-4 xl:px-0">
              <p className="text-white text-xl xl:text-4xl font-bold my-5">
                {tRent("title")}
              </p>
              <ul>
                <li className="text-white mb-3 font-semibold">
                  <i className="fa-solid fa-check mr-2"></i>
                  <span>{tRent("clear_info")}</span>
                </li>
                <li className="text-white mb-3 font-semibold">
                  <i className="fa-solid fa-check mr-2"></i>
                  <span>{tRent("quick_quote")}</span>
                </li>
                <li className="text-white mb-3 font-semibold">
                  <i className="fa-solid fa-check mr-2"></i>
                  <span>{tRent("diverse_vehicles")}</span>
                </li>
                <li className="text-white font-semibold">
                  <i className="fa-solid fa-check mr-2"></i>
                  <span>{tRent("support")}</span>
                </li>
              </ul>
            </div>
            <div className="w-full xl:w-1/2 px-4 xl:px-0">
              <div className="rounded-lg w-full bg-white shadow-lg px-3 py-4">
                <form onSubmit={handleSubmit}>
                  <p className="text-lg font-semibold text-center my-4">
                    {tRent("register")}
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="col-span-1">
                      <label className="font-semibold" htmlFor="from">
                        {tRent("departure")}
                      </label>
                      <select
                        name="from"
                        value={formVals.from}
                        onChange={handleChange}
                        id="from"
                        className="bg-white border border-[#d9d9d9] w-full rounded p-1.5 text-sm"
                      >
                        <option value="SG">Sài Gòn</option>
                        <option value="DL">Đà Lạt</option>
                        <option value="HU">Huế</option>
                        <option value="DN">Đà Nẵng</option>
                        <option value="OTHER">Khác</option>
                      </select>
                    </div>
                    <div className="col-span-1">
                      <label className="font-semibold" htmlFor="from">
                        {tRent("destination")}
                      </label>
                      <select
                        name="from"
                        id="from"
                        value={formVals.to}
                        onChange={handleChange}
                        className="bg-white border border-[#d9d9d9] w-full rounded p-1.5 text-sm"
                      >
                        <option value="--">---</option>
                        <option value="SG">Sài Gòn</option>
                        <option value="DL">Đà Lạt</option>
                        <option value="HU">Huế</option>
                        <option value="DN">Đà Nẵng</option>
                        <option value="OTHER">{tRent("other")}</option>
                      </select>
                    </div>
                    <div className="col-span-1">
                      <input
                        type="text"
                        value={formVals.addressFrom}
                        onChange={handleChange}
                        name="addressFrom"
                        placeholder={tRent("departure_address")}
                        id="addressFrom"
                        className="bg-white border border-[#d9d9d9] w-full rounded p-1.5 text-sm"
                      />
                    </div>
                    <div className="col-span-1">
                      <input
                        type="text"
                        value={formVals.addressTo}
                        onChange={handleChange}
                        name="addressTo"
                        placeholder={tRent("destination_address")}
                        id="addressTo"
                        className="bg-white border border-[#d9d9d9] w-full rounded p-1.5 text-sm"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="font-semibold" htmlFor="type">
                        {tRent("destination_address")}{" "}
                        <span className="text-[#DF2029]">*</span>
                      </label>
                      <select
                        name="type"
                        id="type"
                        value={formVals.type}
                        onChange={handleChange}
                        className="bg-white border border-[#d9d9d9] w-full rounded p-1.5 text-sm"
                      >
                        <option value="oneway">{tRent("one_way")}</option>
                        <option value="twoway">{tRent("round_trip")}</option>
                        <option value="other">{tRent("other_schedule")}</option>
                      </select>
                    </div>
                    <div className="col-span-1">
                      <label className="font-semibold" htmlFor="vehicle">
                        {tRent("choose_vehicle")}{" "}
                        <span className="text-[#DF2029]">*</span>
                      </label>
                      <select
                        name="vehicle"
                        value={formVals.vehicle}
                        onChange={handleChange}
                        id="vehicle"
                        className="bg-white border border-[#d9d9d9] w-full rounded p-1.5 text-sm"
                      >
                        <option value="4">{tRent("seats_4")}</option>
                        <option value="7">{tRent("seats_7")}</option>
                        <option value="16">{tRent("seats_16")}</option>
                      </select>
                    </div>
                    <div className="col-span-1">
                      <label className="font-semibold" htmlFor="amount">
                        {tRent("passenger_count")}{" "}
                        <span className="text-[#DF2029]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formVals.amount}
                        onChange={handleChange}
                        name="amount"
                        placeholder="3"
                        id="amount"
                        className="bg-white border border-[#d9d9d9] w-full rounded p-1.5 text-sm"
                      />
                    </div>
                    <div className="col-span-1">
                      <label className="font-semibold" htmlFor="fromDate">
                        {tRent("departure_date")}{" "}
                        <span className="text-[#DF2029]">*</span>
                      </label>
                      <DatePicker
                        className="p-1.5 bg-white border border-[#d9d9d9] w-full h-full rounded text-sm"
                        placeholderText={tRent("departure_date")}
                        selected={fromDate}
                        onChange={(date) => setFromDate(date)}
                      />
                    </div>
                    <div className="col-span-1">
                      <label className="font-semibold" htmlFor="fromHour">
                        {tRent("departure_time")}{" "}
                        <span className="text-[#DF2029]">*</span>
                      </label>
                      <DatePicker
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        className="p-1.5 bg-white border border-[#d9d9d9] w-full h-full rounded text-sm"
                        placeholderText={tRent("departure_time")}
                        selected={fromHour}
                        onChange={(hour) => setFromHour(hour)}
                      />
                    </div>
                    <div className="col-span-1">
                      <label className="font-semibold" htmlFor="toDate">
                        {tRent("return_date")}
                      </label>
                      <DatePicker
                        className="p-1.5 bg-white border border-[#d9d9d9] w-full h-full rounded text-sm"
                        placeholderText={tRent("return_date")}
                        selected={toDate}
                        onChange={(date) => setToDate(date)}
                      />
                    </div>
                    <div className="col-span-1">
                      <label className="font-semibold" htmlFor="toHour">
                        {tRent("return_time")}
                      </label>
                      <DatePicker
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        className="p-1.5 bg-white border border-[#d9d9d9] w-full h-full rounded text-sm"
                        placeholderText={tRent("return_time")}
                        selected={toHour}
                        onChange={(hour) => setToHour(hour)}
                      />
                    </div>
                    <div className="col-span-full">
                      <button
                        type="submit"
                        className="bg-[#ffc700] font-semibold p-2.5 text-center w-full"
                      >
                        {tRent("next")}
                      </button>
                    </div>
                    <div className="col-span-full">
                      <p className="text-center text-sm italic">
                        {tRent("contact_for_advice")}{" "}
                        <a href="tel:1900545541" className="text-primary">
                          1900.545.541
                        </a>{" "}
                        (7h-21h)
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-10/12 m-auto py-8">
        <p className="text-xl xl:text-2xl font-semibold text-center py-5">
          {tRent("rental_steps")}
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-full xl:col-span-1 flex flex-col items-center gap-5">
            <FaRoute className="text-primary text-6xl" />
            <div className="text-center">
              <p className="font-semibold">{tRent("describe_itinerary")}</p>
              <p className="text-sm">{tRent("itinerary_description")}</p>
            </div>
          </div>
          <div className="col-span-full xl:col-span-1 flex flex-col items-center gap-5">
            <FaRegClipboard className="text-primary text-6xl" />
            <div className="text-center">
              <p className="font-semibold">{tRent("receive_quote")}</p>
              <p className="text-sm">{tRent("quote_description")}</p>
            </div>
          </div>
          <div className="col-span-full xl:col-span-1 flex flex-col items-center gap-5">
            <FaHandshake className="text-primary text-6xl" />
            <div className="text-center">
              <p className="font-semibold">{tRent("confirm_rental")}</p>
              <p className="text-sm">{tRent("confirmation_description")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#2020200A]">
        <div className="w-10/12 m-auto py-8">
          <p className="text-xl xl:text-2xl font-semibold text-center py-5">
            {tRent("diverse_vehicles_title")}
          </p>
          <div className="grid grid-cols-4 gap-4">
            {vehicles.map((v) => (
              <div
                className="col-span-full xl:col-span-1 text-center"
                key={v.id}
              >
                <img src={v.img} alt="" className="shadow-lg rounded" />
                <p className="font-semibold py-3">{v.name}</p>
                <p className="text-sm">{v.descr}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-10/12 m-auto py-8">
        <p className="text-xl xl:text-2xl font-semibold text-center py-5">
          {tRent("customer_experience")}
        </p>
        <div className="grid grid-cols-3 gap-4">
          {experiences.map((e) => (
            <div
              className="col-span-full xl:col-span-1 border border-[#d9d9d9] rounded-lg p-4 text-sm flex flex-col justify-between"
              key={e.id}
            >
              <div
                className="whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: e.content }}
              ></div>
              <div>
                <p className="font-semibold text-lg">{e.author}</p>
                <p className="text-sm">{e.to}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-[#001c38] py-8 text-center text-white">
        <p className="text-xl font-semibold">{tRent("company_name")}</p>
        <p className="text-sm">{tRent("southern_address")}</p>
        <p className="text-sm">{tRent("northern_address")}</p>
        <p className="text-sm">
          {tRent("hotline")}:{" "}
          <a href="tel:1900545541" className="font-semibold">
            1900 545541
          </a>{" "}
          (7h-21h, T2-CN)
        </p>
        <p className="text-sm">
          Facebook:{" "}
          <a
            href="https://www.facebook.com/Hagiangbusticketthuexe/"
            className="font-semibold"
          >
            Hagiangbusticket {tRent("car_rental")}
          </a>
        </p>
        <p className="text-sm">{tRent("copyright")}</p>
      </div>
    </div>
  );
};

export default Rent;
