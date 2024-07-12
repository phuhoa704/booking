import {
  FaStar,
  FaInfoCircle,
  FaAngleDown,
  FaAngleLeft,
  FaCheckCircle,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../configs/router";
import { API_STORE } from "../../configs/apis";
import moment from "moment";
import { formatChangeNumber } from "../../helpers/number";
import { useDispatch, useSelector } from "react-redux";
import { getSearchDetail } from "../../redux/actions/Search";
import {
  saveDeparture,
  saveDepartureQuantity,
  saveReturn,
  saveReturnDetail,
  saveReturnQuantity,
} from "../../redux/slices/Search";
import { getComments, postComment } from "../../redux/actions/Comments";
import Modal from "../Modal";
import Address from "../Addess";
import {
  saveReturnDropAddress,
  saveUseDptCustomAddress,
  saveUseDptDropAddress,
  saveUseReturnCustomAddress,
  saveUseReturnDropAddress,
} from "../../redux/slices/Address";
import { SETTINGS } from "../../configs/constants";

const Card = (Props) => {
  const { tCard, data, returnBooking } = Props;
  console.log(tCard);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  const [expand, setExpand] = useState(false);
  const [modalAddress, setModalAddress] = useState(false);
  const [typeAddress, setTypeAddress] = useState("PICKUP");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [sortOpts, setSortOpts] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [subtotal, setSubtotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [pickup, setPickup] = useState(0);
  const [drop, setDrop] = useState(0);
  const [files, setFiles] = useState([]);
  const [fileBase64, setFileBase64] = useState([]);
  const [background, setBackground] = useState("");
  const [text, setText] = useState("");
  const {
    comments,
    hasComment,
    hasImage,
    total,
    rating1,
    rating2,
    rating3,
    rating4,
    rating5,
    avg,
  } = useSelector((state) => state.comments);
  const {
    departureCustomAddress,
    returnCustomAddress,
    departureDropAddress,
    returnDropAddress,
  } = useSelector((state) => state.address);
  const { user } = useSelector((state) => state.auth);
  const { settings } = useSelector((state) => state.settings);
  useEffect(() => {
    if (settings.length > 0) {
      //background
      const background = settings.find((s) => s.key === SETTINGS.BACKGROUND);
      setBackground(background ? background.value : "#2474E5");
      //text
      const text = settings.find((s) => s.key === SETTINGS.COLOR);
      setText(text ? text.value : "#fff");
    }
  }, [settings]);
  return (
    <>
      <Modal
        showStatus={modalAddress}
        handleShow={setModalAddress}
        outlet={
          <Address
            tAddress={tCard}
            type={typeAddress}
            handleShow={setModalAddress}
            returnBooking={returnBooking}
          />
        }
      />
      <div className="w-full border border-[#e0e0e0] rounded-lg bg-white hover:shadow-lg p-4 mb-4">
        <div className="flex gap-2.5 flex-col xl:flex-row">
          <div className="w-full xl:w-[150px]">
            <img
              src={`${API_STORE}${data.vehicle_category.image}`}
              alt=""
              className="object-center object-cover w-full h-full"
            />
          </div>
          <div className="w-full xl:w-largeCardContainer">
            <div className="flex justify-between mb-1.5">
              <div className="flex items-center gap-2.5">
                <span
                  className="font-semibold cursor-pointer"
                  onClick={() => {
                    setExpand(!expand);
                    if (state) {
                      setState(false);
                    }
                    dispatch(
                      getComments({
                        company_id: data.coach_company_id,
                        hasComment: 0,
                        hasImage: 0,
                        rating5: 0,
                        rating4: 0,
                        rating3: 0,
                        rating2: 0,
                        rating1: 0,
                      })
                    );
                  }}
                >
                  {data.coach_company.name} ({data.coach_company.address})
                </span>
                <span
                  className="xl:flex items-center text-sm px-1 rounded hidden"
                  style={{ backgroundColor: background }}
                >
                  <FaStar className="mr-2" style={{ color: text }} />
                  <span className="" style={{ color: text }}>
                    {parseInt(avg)} ({total})
                  </span>
                </span>
              </div>
              <span className="font-bold text-lg" style={{ color: background }}>
                Từ {formatChangeNumber(data.price.toString())}đ
              </span>
            </div>
            <div className="flex justify-between mb-1.5">
              <span className="text-sm">{data.vehicle_category.name}</span>
            </div>
            <div className="flex justify-between mb-1.5">
              <div className="flex justify-center">
                <svg
                  className="TicketPC__LocationRouteSVG-sc-1mxgwjh-4 eKNjJr"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="74"
                  viewBox="0 0 14 74"
                >
                  <path
                    fill="none"
                    stroke="#787878"
                    strokeLinecap="round"
                    strokeWidth="2"
                    strokeDasharray="0 7"
                    d="M7 13.5v46"
                  ></path>
                  <g fill="none" stroke="#484848" stroke-width="3">
                    <circle cx="7" cy="7" r="7" stroke="none"></circle>
                    <circle cx="7" cy="7" r="5.5"></circle>
                  </g>
                  <path
                    d="M7 58a5.953 5.953 0 0 0-6 5.891 5.657 5.657 0 0 0 .525 2.4 37.124 37.124 0 0 0 5.222 7.591.338.338 0 0 0 .506 0 37.142 37.142 0 0 0 5.222-7.582A5.655 5.655 0 0 0 13 63.9 5.953 5.953 0 0 0 7 58zm0 8.95a3.092 3.092 0 0 1-3.117-3.06 3.117 3.117 0 0 1 6.234 0A3.092 3.092 0 0 1 7 66.95z"
                    fill="#787878"
                  ></path>
                </svg>
                <div className="ml-[9px] relative">
                  <div className="absolute top-[-7px] flex items-center">
                    <div className="font-bold text-lg mr-2">
                      {moment(new Date(data.start_time)).format("HH:mm")}
                    </div>
                    <div className="whitespace-nowrap">
                      {data.departure_province.name}
                    </div>
                  </div>
                  <div className="absolute bottom-[-5px] flex items-center">
                    <div className="font-bold text-lg mr-2">
                      {moment(new Date(data.end_time)).format("HH:mm")}
                    </div>
                    <div className="whitespace-nowrap">
                      {data.return_province.name}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between items-end">
                <span>
                  {tCard("remaining")} {data.quantity}{" "}
                  {tCard("available_seats")}
                </span>
                <button
                  className="p-2 font-semibold bg-[#ffd333] text-[#484848] text-sm"
                  onClick={() => {
                    setState(!state);
                    if (expand) {
                      setExpand(false);
                    }
                  }}
                >
                  {tCard("select_trip")}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-right font-bold uppercase">
          {tCard("no_prepayment_required")}
        </div>
        {state && (
          <div className="my-3">
            <div className="py-2.5 border-t border-b border-[#d9d9d9]">
              <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
                <li
                  className={`flex md:w-full items-center ${
                    currentStep === 1 && "dark:text-blue-500"
                  } sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-4 xl:after:mx-4 dark:after:border-gray-700`}
                >
                  <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    {currentStep === 1 && (
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                    )}
                    {tCard("desired_seat")}
                  </span>
                </li>
                <li
                  className={`flex items-center ${
                    currentStep === 2 && "dark:text-blue-500"
                  }`}
                >
                  {currentStep === 2 && (
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                  )}
                  {tCard("pickup_dropoff_points")}
                </li>
              </ol>
            </div>
            {currentStep === 1 && (
              <>
                {/* <div className="grid grid-cols-2 my-3">
                                <div className="col-span-full xl:col-span-1 flex justify-between rounded border border-primary bg-[#ECF4FD] p-2">
                                    <span className="text-sm">Quy định cần lưu ý khi đi xe</span>
                                    <span className="cursor-pointer text-sm text-primary font-semibold underline">Xem chi tiết</span>
                                </div>
                            </div> */}
                {/* <div className="my-3 overflow-x-auto custom-scroll w-full">
                                <div className="flex items-center gap-4">
                                    {vouchers.map(v => (
                                        <div className="flex-1 bg-[#e0f2ff] rounded p-2 flex justify-between items-center text-sm gap-4 xl:gap-0" key={v.id}>
                                            <div className="flex flex-col">
                                                <span className="text-primary">
                                                    Nhập mã &nbsp;
                                                    <span className="text-primary font-semibold">{v.name}</span>
                                                </span>
                                                <span className="title-box-1-line">{v.descr}</span>
                                            </div>
                                            <div><FaInfoCircle className="text-primary" /></div>
                                        </div>
                                    ))}
                                </div>
                            </div> */}
                <div className="my-5 grid grid-cols-2">
                  <div className="col-span-1"></div>
                  <div className="col-span-1">
                    <input
                      type="number"
                      className="p-2.5 w-full bg-white border border-[#D9D9D9] rounded my-2"
                      placeholder={tCard("number_of_tickets")}
                      onChange={(e) => {
                        setQuantity(e.target.value);
                        setSubtotal(data.price * parseInt(e.target.value));
                      }}
                    />
                  </div>
                </div>
                <hr />
                <div className="flex w-full justify-end items-center my-2 text-black">
                  <div className="text-sm mr-2.5">
                    {tCard("total")}:{" "}
                    <span
                      className="font-semibold"
                      //   style={{ color: background }}
                    >
                      {formatChangeNumber(subtotal.toString())}đ
                    </span>
                  </div>
                  <button
                    className="p-2 rounded text-sm"
                    // style={{ backgroundColor: background, color: text }}
                    onClick={() => setCurrentStep(2)}
                  >
                    {tCard("continue")}
                  </button>
                </div>
              </>
            )}
            {currentStep === 2 && (
              <>
                <div className="w-full">
                  <div className="flex items-center rounded border border-[#27ae5f] bg-[#EEFBF4] p-2 w-fit">
                    <i className="fa-solid fa-circle-check text-[#27ae5f]"></i>
                    <span className="text-sm ml-2">
                      {tCard("pickup_dropoff_assurance")}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-y xl:divide-x">
                  <div className="col-span-full xl:col-span-1 p-3">
                    <div className="bg-[#f7f7f7] w-full py-2 px-3">
                      <p className="text-lg font-semibold">
                        {tCard("pickup_point")}
                      </p>
                      <div className="flex justify-between">
                        <div className="flex flex-col text-[#B8B8B8] text-xs">
                          <span>{tCard("sort_by")}</span>
                          <span className="flex items-center cursor-pointer">
                            {tCard("earliest")} <FaAngleDown className="ml-1" />
                          </span>
                        </div>
                        <div className="flex flex-col text-xs">
                          <span>
                            Xem {tCard("pickup_point")}{" "}
                            {tCard("nearest_question")}
                          </span>
                          <span
                            className="text-primary underline cursor-pointer"
                            onClick={() => {
                              setTypeAddress("PICKUP");
                              setModalAddress(true);
                            }}
                          >
                            {tCard("enter_address_here")}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2.5 py-2 divide-y">
                      {data.pickups.map((dp) => (
                        <div class="inline-flex items-center">
                          <label
                            class="relative flex items-center p-3 rounded-full cursor-pointer"
                            htmlFor="pickup"
                          >
                            <input
                              name="pickup"
                              checked={pickup === dp.id}
                              value={dp.id}
                              onChange={() => {
                                setPickup(dp.id);
                                if (returnBooking) {
                                  dispatch(saveUseReturnCustomAddress(false));
                                } else {
                                  dispatch(saveUseDptCustomAddress(false));
                                }
                              }}
                              type="radio"
                              class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                              id="pickup"
                            />
                            <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3.5 w-3.5"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                              >
                                <circle
                                  data-name="ellipse"
                                  cx="8"
                                  cy="8"
                                  r="8"
                                ></circle>
                              </svg>
                            </span>
                          </label>
                          <label
                            class="mt-px cursor-pointer select-none text-sm flex flex-col"
                            htmlFor="html"
                          >
                            <span className="" style={{ color: background }}>
                              {moment(new Date(dp.time)).format("HH:mm")} &nbsp;
                              {dp.name}
                            </span>
                            <span className="text-xs">
                              <i className="fa-solid fa-location-dot"></i>
                              {dp.address}
                            </span>
                          </label>
                        </div>
                      ))}
                      {returnBooking
                        ? Object.keys(returnCustomAddress).length > 0 && (
                            <div class="inline-flex items-center">
                              <label
                                class="relative flex items-center p-3 rounded-full cursor-pointer"
                                htmlFor="pickup"
                              >
                                <input
                                  name="pickup"
                                  checked={pickup === returnCustomAddress.id}
                                  value={returnCustomAddress.id}
                                  onChange={() => {
                                    setPickup(returnCustomAddress.id);
                                    if (returnBooking) {
                                      dispatch(
                                        saveUseReturnCustomAddress(true)
                                      );
                                    } else {
                                      dispatch(saveUseDptCustomAddress(true));
                                    }
                                  }}
                                  type="radio"
                                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                  id="pickup"
                                />
                                <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-3.5 w-3.5"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                  >
                                    <circle
                                      data-name="ellipse"
                                      cx="8"
                                      cy="8"
                                      r="8"
                                    ></circle>
                                  </svg>
                                </span>
                              </label>
                              <label
                                class="mt-px cursor-pointer select-none text-sm flex flex-col"
                                htmlFor="html"
                              >
                                <span
                                  className=""
                                  style={{ color: background }}
                                >
                                  {moment(new Date(data.start_time)).format(
                                    "HH:mm"
                                  )}
                                </span>
                                <span className="text-xs">
                                  <i className="fa-solid fa-location-dot"></i>
                                  {returnCustomAddress.address}
                                </span>
                              </label>
                            </div>
                          )
                        : Object.keys(departureCustomAddress).length > 0 && (
                            <div class="inline-flex items-center">
                              <label
                                class="relative flex items-center p-3 rounded-full cursor-pointer"
                                htmlFor="pickup"
                              >
                                <input
                                  name="pickup"
                                  checked={pickup === departureCustomAddress.id}
                                  value={departureCustomAddress.id}
                                  onChange={() =>
                                    setPickup(departureCustomAddress.id)
                                  }
                                  type="radio"
                                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                  id="pickup"
                                />
                                <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-3.5 w-3.5"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                  >
                                    <circle
                                      data-name="ellipse"
                                      cx="8"
                                      cy="8"
                                      r="8"
                                    ></circle>
                                  </svg>
                                </span>
                              </label>
                              <label
                                class="mt-px cursor-pointer select-none text-sm flex flex-col"
                                htmlFor="html"
                              >
                                <span
                                  className=""
                                  style={{ color: background }}
                                >
                                  {moment(new Date(data.start_time)).format(
                                    "HH:mm"
                                  )}
                                </span>
                                <span className="text-xs">
                                  <i className="fa-solid fa-location-dot"></i>
                                  {departureCustomAddress.address}
                                </span>
                              </label>
                            </div>
                          )}
                    </div>
                  </div>
                  <div className="col-span-full xl:col-span-1 p-3">
                    <div className="bg-[#f7f7f7] w-full py-2 px-3">
                      <p className="text-lg font-semibold">
                        {tCard("dropoff")}
                      </p>
                      <div className="flex justify-between">
                        <div className="flex flex-col text-[#B8B8B8] text-xs">
                          <span>{tCard("sort_by")}</span>
                          <span className="flex items-center cursor-pointer">
                            {tCard("earliest")} <FaAngleDown className="ml-1" />
                          </span>
                        </div>
                        <div className="flex flex-col text-xs">
                          <span>
                            {tCard("view")} {tCard("pickup_point")}{" "}
                            {tCard("nearest_question")}
                          </span>
                          <span
                            className="text-primary underline cursor-pointer"
                            onClick={() => {
                              setTypeAddress("DROP");
                              setModalAddress(true);
                            }}
                          >
                            {tCard("enter_address_here")}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2.5 py-2 divide-y">
                      {data.drops.map((dd) => (
                        <div class="inline-flex items-center">
                          <label
                            class="relative flex items-center p-3 rounded-full cursor-pointer"
                            htmlFor="drop"
                          >
                            <input
                              name="drop"
                              checked={drop === dd.id}
                              onChange={() => {
                                setDrop(dd.id);
                                if (returnBooking) {
                                  dispatch(saveUseReturnDropAddress(false));
                                } else {
                                  dispatch(saveUseDptDropAddress(false));
                                }
                              }}
                              value={drop}
                              type="radio"
                              class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                              id="drop"
                            />
                            <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3.5 w-3.5"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                              >
                                <circle
                                  data-name="ellipse"
                                  cx="8"
                                  cy="8"
                                  r="8"
                                ></circle>
                              </svg>
                            </span>
                          </label>
                          <label
                            class="mt-px cursor-pointer select-none text-sm flex flex-col"
                            htmlFor="html"
                          >
                            <span className="" style={{ color: background }}>
                              {moment(new Date(dd.time)).format("HH:mm")} &nbsp;
                              {dd.name}
                            </span>
                            <span className="text-xs">
                              <i className="fa-solid fa-location-dot"></i>
                              {dd.address}
                            </span>
                          </label>
                        </div>
                      ))}
                      {returnBooking
                        ? Object.keys(returnDropAddress).length > 0 && (
                            <div class="inline-flex items-center">
                              <label
                                class="relative flex items-center p-3 rounded-full cursor-pointer"
                                htmlFor="drop"
                              >
                                <input
                                  name="drop"
                                  checked={drop === returnDropAddress.id}
                                  value={returnDropAddress.id}
                                  onChange={() => {
                                    setDrop(returnDropAddress.id);
                                    if (returnBooking) {
                                      dispatch(saveUseReturnDropAddress(true));
                                    } else {
                                      dispatch(saveUseDptDropAddress(true));
                                    }
                                  }}
                                  type="radio"
                                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                  id="drop"
                                />
                                <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-3.5 w-3.5"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                  >
                                    <circle
                                      data-name="ellipse"
                                      cx="8"
                                      cy="8"
                                      r="8"
                                    ></circle>
                                  </svg>
                                </span>
                              </label>
                              <label
                                class="mt-px cursor-pointer select-none text-sm flex flex-col"
                                htmlFor="html"
                              >
                                <span
                                  className=""
                                  style={{ color: background }}
                                >
                                  {moment(new Date(data.end_time)).format(
                                    "HH:mm"
                                  )}
                                </span>
                                <span className="text-xs">
                                  <i className="fa-solid fa-location-dot"></i>
                                  {returnDropAddress.address}
                                </span>
                              </label>
                            </div>
                          )
                        : Object.keys(departureDropAddress).length > 0 && (
                            <div class="inline-flex items-center">
                              <label
                                class="relative flex items-center p-3 rounded-full cursor-pointer"
                                htmlFor="drop"
                              >
                                <input
                                  name="drop"
                                  checked={drop === departureDropAddress.id}
                                  value={departureDropAddress.id}
                                  onChange={() =>
                                    setDrop(departureDropAddress.id)
                                  }
                                  type="radio"
                                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                  id="drop"
                                />
                                <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-3.5 w-3.5"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                  >
                                    <circle
                                      data-name="ellipse"
                                      cx="8"
                                      cy="8"
                                      r="8"
                                    ></circle>
                                  </svg>
                                </span>
                              </label>
                              <label
                                class="mt-px cursor-pointer select-none text-sm flex flex-col"
                                htmlFor="html"
                              >
                                <span
                                  className=""
                                  style={{ color: background }}
                                >
                                  {moment(new Date(data.end_time)).format(
                                    "HH:mm"
                                  )}
                                </span>
                                <span className="text-xs">
                                  <i className="fa-solid fa-location-dot"></i>
                                  {departureDropAddress.address}
                                </span>
                              </label>
                            </div>
                          )}
                    </div>
                  </div>
                </div>
                <hr />
                <div className="flex w-full justify-between items-center my-2">
                  <button
                    className="p-2 rounded border border-[#8e9190] text-[#8e9190] text-sm flex items-center"
                    onClick={() => setCurrentStep(1)}
                  >
                    <FaAngleLeft /> {tCard("go_back")}
                  </button>
                  <div className="flex items-center text-black">
                    <div className="text-sm mr-2.5">
                      {tCard("total")}:{" "}
                      <span
                        className="font-semibold"
                        // style={{ color: background }}
                      >
                        {formatChangeNumber(subtotal.toString())}đ
                      </span>
                    </div>
                    <button
                      className="p-2 rounded text-sm"
                      //   style={{ backgroundColor: background }}
                      onClick={() => {
                        if (returnBooking) {
                          dispatch(saveReturnDetail(data));
                          dispatch(saveReturnQuantity(quantity));
                          dispatch(saveReturn({ pickup, drop }));
                        } else {
                          dispatch(getSearchDetail(data.id));
                          dispatch(saveDepartureQuantity(quantity));
                          dispatch(saveDeparture({ pickup, drop }));
                        }
                        navigate(ROUTER.CONFIRMATION, {
                          state: {
                            pickup,
                            drop,
                            quantity,
                            trip_id: data.id,
                            type: 1,
                            subtotal,
                          },
                        });
                      }}
                    >
                      {tCard("continue")}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
        {expand && (
          <div className="my-3">
            <div className="py-2.5 px-4 border-t border-b border-[#d9d9d9]">
              {Object.keys(user).length > 0 && (
                <div className="py-2.5 w-10/12 m-auto">
                  <div class="flex items-center py-2">
                    {Array(1, 2, 3, 4, 5).map((i) => (
                      <svg
                        key={i}
                        className="rating w-5 h-5 ms-1 cursor-pointer"
                        style={{ color: i <= rating ? "#fddf47" : "#d1d5db" }}
                        onClick={() => setRating(i)}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </div>
                  <label
                    htmlFor="tittlePost"
                    className="mb-2.5 block font-medium text-black"
                  >
                    {tCard("image")}
                  </label>
                  <div className="relative py-2">
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="dropzone-file"
                        className={`flex flex-col items-center justify-center w-full h-fit ${
                          !fileBase64 || fileBase64.length === 0
                            ? "border-2 border-gray-300 border-dashed"
                            : ""
                        } rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100`}
                      >
                        {fileBase64 && fileBase64.length > 0 ? (
                          <div className="mt-4 grid-cols-4 grid gap-2">
                            {fileBase64.map((item, index) => (
                              <div
                                key={index}
                                className="col-span-1 h-40 relative"
                              >
                                <img
                                  src={item}
                                  alt=""
                                  className="w-full h-full object-cover rounded-lg"
                                />
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="bg-gray-200 h-48 rounded-lg flex flex-col items-center justify-center text-gray-500">
                            <svg
                              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                {tCard("click_to_upload")}
                              </span>{" "}
                              {tCard("or_drag_image")}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {tCard("image_formats")}
                            </p>
                          </div>
                        )}
                        <input
                          id="dropzone-file"
                          type="file"
                          name="files"
                          onChange={(evt) => {
                            const selectedFiles = evt.target.files;
                            if (selectedFiles && selectedFiles.length > 0) {
                              const filesArray = Array.from(selectedFiles);
                              setFiles(filesArray);
                              filesArray.forEach((file) => {
                                const reader = new FileReader();
                                reader.onload = (e) => {
                                  setFileBase64((prevBase64) => {
                                    const base64 = e.target?.result;
                                    return [...(prevBase64 || []), base64];
                                  });
                                };
                                reader.readAsDataURL(file);
                              });
                            }
                          }}
                          className="hidden"
                          multiple // cho phép chọn nhiều file
                        />
                      </label>
                    </div>
                  </div>
                  <textarea
                    placeholder="Nhập đánh giá của bạn"
                    value={comment}
                    name="comment"
                    onChange={(e) => setComment(e.target.value)}
                    rows={4}
                    className="border border-[#d9d9d9] rounded w-full bg-white p-2.5"
                  />
                  <div className="text-right">
                    <button
                      className="p-2 rounded bg-primary text-white"
                      onClick={async () => {
                        const formData = new FormData();
                        files.forEach((f) => {
                          formData.append("images[]", f);
                        });
                        formData.append("rating", rating);
                        formData.append("content", comment);
                        let rs = await dispatch(
                          postComment({
                            company_id: data.coach_company_id,
                            data: formData,
                          })
                        );
                        if (rs.payload.action) {
                          dispatch(
                            getComments({
                              company_id: data.coach_company_id,
                              hasComment: 0,
                              hasImage: 0,
                              rating5: 0,
                              rating4: 0,
                              rating3: 0,
                              rating2: 0,
                              rating1: 0,
                            })
                          );
                        }
                      }}
                    >
                      {tCard("submit_review")}
                    </button>
                  </div>
                </div>
              )}
              <div className="flex gap-5">
                <span className="bg-primary xl:flex items-center text-sm px-1 rounded hidden">
                  <FaStar className="mr-2 text-white" />
                  <span className="text-white">
                    {parseInt(avg)} ({total})
                  </span>
                </span>
                <div class="flex items-center">
                  {Array(1, 2, 3, 4, 5).map((i) => (
                    <svg
                      key={i}
                      className="rating w-4 h-4 ms-1 cursor-pointer"
                      style={{
                        color: i <= parseInt(avg) ? "#fddf47" : "#d1d5db",
                      }}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  ))}
                </div>
                <span>
                  • {total} {tCard("reviews")}
                </span>
              </div>
              <div className="w-full overflow-x-auto scroll-horizontal py-4">
                <div className="flex gap-4 w-max">
                  <button
                    className="p-2.5 border border-[#d9d9d9] flex items-center rounded text-sm hover:text-primary hover:border-primary"
                    style={{
                      border: sortOpts.includes("ALL")
                        ? "1px solid #2474E5"
                        : "1px solid #d9d9d9",
                      color: sortOpts.includes("ALL") ? "#2474E5" : "#000",
                    }}
                    onClick={() => {
                      if (sortOpts.includes("ALL")) {
                        setSortOpts(sortOpts.filter((s) => s !== "ALL"));
                      } else {
                        setSortOpts([...sortOpts, "ALL"]);
                      }
                      dispatch(
                        getComments({
                          company_id: data.coach_company_id,
                          hasComment: 0,
                          hasImage: 0,
                          rating5: 0,
                          rating4: 0,
                          rating3: 0,
                          rating2: 0,
                          rating1: 0,
                        })
                      );
                    }}
                  >
                    {tCard("all")} ({total})
                  </button>
                  <button
                    className="p-2.5 border border-[#d9d9d9] flex items-center rounded text-sm hover:text-primary hover:border-primary"
                    style={{
                      border: sortOpts.includes("COMMENT")
                        ? "1px solid #2474E5"
                        : "1px solid #d9d9d9",
                      color: sortOpts.includes("COMMENT") ? "#2474E5" : "#000",
                    }}
                    onClick={() => {
                      if (sortOpts.includes("COMMENT")) {
                        setSortOpts(sortOpts.filter((s) => s !== "COMMENT"));
                      } else {
                        setSortOpts([...sortOpts, "COMMENT"]);
                      }
                      dispatch(
                        getComments({
                          company_id: data.coach_company_id,
                          hasComment: 1,
                          hasImage: sortOpts.includes("IMAGE") ? 1 : 0,
                          rating5: sortOpts.includes("RATING5") ? 1 : 0,
                          rating4: sortOpts.includes("RATING4") ? 1 : 0,
                          rating3: sortOpts.includes("RATING3") ? 1 : 0,
                          rating2: sortOpts.includes("RATING2") ? 1 : 0,
                          rating1: sortOpts.includes("RATING1") ? 1 : 0,
                        })
                      );
                    }}
                  >
                    {tCard("with_comments")} ({hasComment})
                  </button>
                  <button
                    className="p-2.5 border border-[#d9d9d9] flex items-center rounded text-sm hover:text-primary hover:border-primary"
                    style={{
                      border: sortOpts.includes("IMAGE")
                        ? "1px solid #2474E5"
                        : "1px solid #d9d9d9",
                      color: sortOpts.includes("IMAGE") ? "#2474E5" : "#000",
                    }}
                    onClick={() => {
                      if (sortOpts.includes("IMAGE")) {
                        setSortOpts(sortOpts.filter((s) => s !== "IMAGE"));
                      } else {
                        setSortOpts([...sortOpts, "IMAGE"]);
                      }
                      dispatch(
                        getComments({
                          company_id: data.coach_company_id,
                          hasComment: sortOpts.includes("COMMENT") ? 1 : 0,
                          hasImage: 1,
                          rating5: sortOpts.includes("RATING5") ? 1 : 0,
                          rating4: sortOpts.includes("RATING4") ? 1 : 0,
                          rating3: sortOpts.includes("RATING3") ? 1 : 0,
                          rating2: sortOpts.includes("RATING2") ? 1 : 0,
                          rating1: sortOpts.includes("RATING1") ? 1 : 0,
                        })
                      );
                    }}
                  >
                    Có {tCard("")} ({hasImage})
                  </button>
                  <button
                    className="p-2.5 border border-[#d9d9d9] flex items-center rounded text-sm hover:text-primary hover:border-primary"
                    style={{
                      border: sortOpts.includes("RATING5")
                        ? "1px solid #2474E5"
                        : "1px solid #d9d9d9",
                      color: sortOpts.includes("RATING5") ? "#2474E5" : "#000",
                    }}
                    onClick={() => {
                      if (sortOpts.includes("RATING5")) {
                        setSortOpts(sortOpts.filter((s) => s !== "RATING5"));
                      } else {
                        setSortOpts([...sortOpts, "RATING5"]);
                      }
                      dispatch(
                        getComments({
                          company_id: data.coach_company_id,
                          hasComment: sortOpts.includes("COMMENT") ? 1 : 0,
                          hasImage: sortOpts.includes("IMAGE") ? 1 : 0,
                          rating5: 1,
                          rating4: sortOpts.includes("RATING4") ? 1 : 0,
                          rating3: sortOpts.includes("RATING3") ? 1 : 0,
                          rating2: sortOpts.includes("RATING2") ? 1 : 0,
                          rating1: sortOpts.includes("RATING1") ? 1 : 0,
                        })
                      );
                    }}
                  >
                    5
                    <svg
                      class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>{" "}
                    ({rating5})
                  </button>
                  <button
                    className="p-2.5 border border-[#d9d9d9] flex items-center rounded text-sm hover:text-primary hover:border-primary"
                    style={{
                      border: sortOpts.includes("RATING4")
                        ? "1px solid #2474E5"
                        : "1px solid #d9d9d9",
                      color: sortOpts.includes("RATING4") ? "#2474E5" : "#000",
                    }}
                    onClick={() => {
                      if (sortOpts.includes("RATING4")) {
                        setSortOpts(sortOpts.filter((s) => s !== "RATING4"));
                      } else {
                        setSortOpts([...sortOpts, "RATING4"]);
                      }
                      dispatch(
                        getComments({
                          company_id: data.coach_company_id,
                          hasComment: sortOpts.includes("COMMENT") ? 1 : 0,
                          hasImage: sortOpts.includes("IMAGE") ? 1 : 0,
                          rating5: sortOpts.includes("RATING5") ? 1 : 0,
                          rating4: 1,
                          rating3: sortOpts.includes("RATING3") ? 1 : 0,
                          rating2: sortOpts.includes("RATING2") ? 1 : 0,
                          rating1: sortOpts.includes("RATING1") ? 1 : 0,
                        })
                      );
                    }}
                  >
                    4{" "}
                    <svg
                      class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>{" "}
                    ({rating4})
                  </button>
                  <button
                    className="p-2.5 border border-[#d9d9d9] flex items-center rounded text-sm hover:text-primary hover:border-primary"
                    style={{
                      border: sortOpts.includes("RATING3")
                        ? "1px solid #2474E5"
                        : "1px solid #d9d9d9",
                      color: sortOpts.includes("RATING3") ? "#2474E5" : "#000",
                    }}
                    onClick={() => {
                      if (sortOpts.includes("RATING3")) {
                        setSortOpts(sortOpts.filter((s) => s !== "RATING3"));
                      } else {
                        setSortOpts([...sortOpts, "RATING3"]);
                      }
                      dispatch(
                        getComments({
                          company_id: data.coach_company_id,
                          hasComment: sortOpts.includes("COMMENT") ? 1 : 0,
                          hasImage: sortOpts.includes("IMAGE") ? 1 : 0,
                          rating5: sortOpts.includes("RATING5") ? 1 : 0,
                          rating4: sortOpts.includes("RATING4") ? 1 : 0,
                          rating3: 1,
                          rating2: sortOpts.includes("RATING2") ? 1 : 0,
                          rating1: sortOpts.includes("RATING1") ? 1 : 0,
                        })
                      );
                    }}
                  >
                    3{" "}
                    <svg
                      class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>{" "}
                    ({rating3})
                  </button>
                  <button
                    className="p-2.5 border border-[#d9d9d9] flex items-center rounded text-sm hover:text-primary hover:border-primary"
                    style={{
                      border: sortOpts.includes("RATING2")
                        ? "1px solid #2474E5"
                        : "1px solid #d9d9d9",
                      color: sortOpts.includes("RATING2") ? "#2474E5" : "#000",
                    }}
                    onClick={() => {
                      if (sortOpts.includes("RATING2")) {
                        setSortOpts(sortOpts.filter((s) => s !== "RATING2"));
                      } else {
                        setSortOpts([...sortOpts, "RATING2"]);
                      }
                      dispatch(
                        getComments({
                          company_id: data.coach_company_id,
                          hasComment: sortOpts.includes("COMMENT") ? 1 : 0,
                          hasImage: sortOpts.includes("IMAGE") ? 1 : 0,
                          rating5: sortOpts.includes("RATING5") ? 1 : 0,
                          rating4: sortOpts.includes("RATING4") ? 1 : 0,
                          rating3: sortOpts.includes("RATING3") ? 1 : 0,
                          rating2: 1,
                          rating1: sortOpts.includes("RATING1") ? 1 : 0,
                        })
                      );
                    }}
                  >
                    2{" "}
                    <svg
                      class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>{" "}
                    ({rating2})
                  </button>
                  <button
                    className="p-2.5 border border-[#d9d9d9] flex items-center rounded text-sm hover:text-primary hover:border-primary"
                    style={{
                      border: sortOpts.includes("RATING1")
                        ? "1px solid #2474E5"
                        : "1px solid #d9d9d9",
                      color: sortOpts.includes("RATING1") ? "#2474E5" : "#000",
                    }}
                    onClick={() => {
                      if (sortOpts.includes("RATING1")) {
                        setSortOpts(sortOpts.filter((s) => s !== "RATING1"));
                      } else {
                        setSortOpts([...sortOpts, "RATING1"]);
                      }
                      dispatch(
                        getComments({
                          company_id: data.coach_company_id,
                          hasComment: sortOpts.includes("COMMENT") ? 1 : 0,
                          hasImage: sortOpts.includes("IMAGE") ? 1 : 0,
                          rating5: sortOpts.includes("RATING5") ? 1 : 0,
                          rating4: sortOpts.includes("RATING4") ? 1 : 0,
                          rating3: sortOpts.includes("RATING3") ? 1 : 0,
                          rating2: sortOpts.includes("RATING2") ? 1 : 0,
                          rating1: 1,
                        })
                      );
                    }}
                  >
                    1{" "}
                    <svg
                      class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>{" "}
                    ({rating1})
                  </button>
                </div>
              </div>
              <div className="py-4">
                {comments.map((c) => (
                  <div className="border-b border-[#f2f2f2] py-4 w-10/12 m-auto">
                    <div className="flex gap-4">
                      <div className="rounded-full w-10 h-10 bg-primary text-white p-2 text-center">
                        {c.user.avatar ? (
                          <img src={`${API_STORE}${c.user.avatar}`} />
                        ) : (
                          <svg
                            className="w-full h-full text-white -left-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        )}
                      </div>
                      <div className="">
                        <p className="">{c.user.name}</p>
                        <div class="flex items-center">
                          {Array(1, 2, 3, 4, 5).map((i) => (
                            <svg
                              key={i}
                              className="rating w-4 h-4 ms-1 cursor-pointer"
                              style={{
                                color: i <= c.rating ? "#fddf47" : "#d1d5db",
                              }}
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="py-2 text-sm">{c.content}</p>
                    <div className="flex gap-4">
                      {c.images &&
                        c.images.length > 0 &&
                        c.images.map((ci) => (
                          <img
                            src={`${API_STORE}${"ci"}`}
                            className="h-10 w-10 shadow-lg rounded"
                          />
                        ))}
                    </div>
                    <div className="flex gap-2.5">
                      <span className="text-[#b8b8b8] text-xs">
                        {tCard("travel_date")} {c.date_move}
                      </span>
                      {c.booked && (
                        <span className="text-[#27AE60] text-xs flex items-center gap-2">
                          <FaCheckCircle /> {tCard("ticket_purchased")}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
