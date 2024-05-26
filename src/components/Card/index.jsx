import { FaStar, FaInfoCircle, FaAngleDown, FaAngleLeft } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../configs/router";

const Card = (Props) => {
    const navigate = useNavigate();
    const { img, title, rating, descr, discount, pickupTime, arrivalTime, pickupPlace, arrivalPlace, totalTime, minPrice, availableSeats, note } = Props.Props;
    const [state, setState] = useState(false);
    const [vouchers] = useState([
        { id: 1, name: 'FS040624BMT', descr: 'Giảm 50% chuyến đi từ 12:00 • T3, 04/06' },
        { id: 2, name: 'BMTCOMBO5', descr: 'Giảm 3% chuyến đi từ T6, 01/03' },
        { id: 3, name: 'FS040624VXR10', descr: 'Giảm 10% chuyến đi từ 12:00 • T3, 04/06' },
    ])
    const [seats] = useState([
        { id: 1, seat: true, pickable: false },
        { id: 2, seat: true, pickable: false },
        { id: 3, seat: true, pickable: false },
        { id: 4, seat: true, pickable: false },
        { id: 5, seat: true, pickable: false },
        { id: 6, seat: true, pickable: true },
        { id: 7, seat: true, pickable: true },
        { id: 8, seat: true, pickable: true },
        { id: 9, seat: true, pickable: true },
        { id: 10, seat: true, pickable: true },
        { id: 11, seat: true, pickable: true },
        { id: 12, seat: true, pickable: false },
        { id: 13, seat: true, pickable: true },
        { id: 14, seat: true, pickable: true },
        { id: 15, seat: true, pickable: true },
        { id: 16, seat: false, pickable: true },
        { id: 17, seat: false, pickable: true },
        { id: 18, seat: true, pickable: true },
    ])
    const [selected, setSelected] = useState([]);
    const [currentStep, setCurrentStep] = useState(1);
    return (
        <div className="w-full border border-[#e0e0e0] rounded-lg bg-white hover:shadow-lg p-4 mb-4">
            <div className="flex gap-2.5">
                <div className="w-[150px]">
                    <img src={img} alt="" className="object-center object-cover w-full h-full" />
                </div>
                <div className="" style={{ width: 'calc(100% - 150px)' }}>
                    <div className="flex justify-between mb-1.5">
                        <div className="flex items-center gap-2.5">
                            <span className="font-semibold">{title}</span>
                            <span className="bg-primary flex items-center text-sm px-1 rounded">
                                <FaStar className="mr-2 text-white" />
                                <span className="text-white">{rating}</span>
                            </span>
                        </div>
                        <span className="text-primary font-bold text-lg">{minPrice}</span>
                    </div>
                    <div className="flex justify-between mb-1.5">
                        <span className="text-sm">{descr}</span>
                        <div
                            className="flex justify-center items-center border border-[#27ae5f] py-[4px] px-[6px] relative rounded text-sm before:absolute before:w-[4px] before:h-[8px] before:bg-white before:left-[-1px] before:top-[8px] before:rounded-tr-lg before:rounded-br-lg before:border-t before:border-r before:border-b before:border-[#27ae5f] after:absolute after:w-[4px] after:h-[8px] after:bg-white after:right-[-1px] after:top-[8px] after:rounded-tl-lg after:rounded-bl-lg after:border-t after:border-l after:border-b after:border-[#27ae5f]"
                        >
                            {discount}
                        </div>
                    </div>
                    <div className="flex justify-between mb-1.5">
                        <div className="flex justify-center">
                            <svg className="TicketPC__LocationRouteSVG-sc-1mxgwjh-4 eKNjJr" xmlns="http://www.w3.org/2000/svg" width="14" height="74" viewBox="0 0 14 74">
                                <path fill="none" stroke="#787878" strokeLinecap="round" strokeWidth="2" strokeDasharray="0 7" d="M7 13.5v46"></path>
                                <g fill="none" stroke="#484848" stroke-width="3">
                                    <circle cx="7" cy="7" r="7" stroke="none"></circle>
                                    <circle cx="7" cy="7" r="5.5"></circle>
                                </g>
                                <path d="M7 58a5.953 5.953 0 0 0-6 5.891 5.657 5.657 0 0 0 .525 2.4 37.124 37.124 0 0 0 5.222 7.591.338.338 0 0 0 .506 0 37.142 37.142 0 0 0 5.222-7.582A5.655 5.655 0 0 0 13 63.9 5.953 5.953 0 0 0 7 58zm0 8.95a3.092 3.092 0 0 1-3.117-3.06 3.117 3.117 0 0 1 6.234 0A3.092 3.092 0 0 1 7 66.95z" fill="#787878">
                                </path>
                            </svg>
                            <div className="ml-[9px] relative">
                                <div className="absolute top-[-7px] flex items-center">
                                    <div className="font-bold text-lg mr-2">{pickupTime}</div>
                                    <div className="whitespace-nowrap">{pickupPlace}</div>
                                </div>
                                <div className="top-[26px] absolute text-sm">{totalTime}</div>
                                <div className="absolute bottom-[-5px] flex items-center">
                                    <div className="font-bold text-lg mr-2">{arrivalTime}</div>
                                    <div className="whitespace-nowrap">{arrivalPlace}</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between items-end">
                            <span>Còn {availableSeats} chỗ trống</span>
                            <button className="p-2 font-semibold bg-[#ffd333] text-[#484848] text-sm" onClick={() => setState(!state)}>Chọn chuyến</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-right font-bold uppercase">{note}</div>
            {state && (
                <div className="my-3">
                    <div className="py-2.5 border-t border-b border-[#d9d9d9]">
                        <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
                            <li class={`flex md:w-full items-center ${(currentStep === 1) && 'dark:text-blue-500'} sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-4 xl:after:mx-4 dark:after:border-gray-700`}>
                                <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                    {(currentStep === 1) && (
                                        <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    )}
                                    Chỗ mong muốn
                                </span>
                            </li>
                            <li class={`flex items-center ${(currentStep === 2) && 'dark:text-blue-500'}`}>
                                {(currentStep === 2) && (
                                    <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                )}
                                Điểm đón trả
                            </li>
                        </ol>
                    </div>
                    {(currentStep === 1) && (
                        <>
                            <div className="grid grid-cols-2 my-3">
                                <div className="col-span-1 flex justify-between rounded border border-primary bg-[#ECF4FD] p-2">
                                    <span className="text-sm">Quy định cần lưu ý khi đi xe</span>
                                    <span className="cursor-pointer text-sm text-primary font-semibold underline">Xem chi tiết</span>
                                </div>
                            </div>
                            <div className="my-3 flex items-center gap-4">
                                {vouchers.map(v => (
                                    <div className="flex-1 bg-[#e0f2ff] rounded p-2 flex justify-between items-center text-sm" key={v.id}>
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
                            <div className="my-5 grid grid-cols-2 px-10">
                                <div className="col-span-1 flex flex-col gap-4">
                                    <p className="font-semibold">Chú thích</p>
                                    <div className="flex items-center">
                                        <svg width="32" height="40" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="2.75" y="2.75" width="22.5" height="34.5" rx="2.25" fill='#d9d9d9' stroke="#d9d9d9" stroke-width="1.5" strokeLinejoin="round"></rect>
                                            <rect x="5.75" y="27.75" width="16.5" height="6.5" rx="2.25" fill="#d9d9d9" stroke="#fff" stroke-width="1.5" strokeLinejoin="round"></rect>
                                            <path class="icon-selected" d="M14 8.333A6.67 6.67 0 0 0 7.333 15 6.67 6.67 0 0 0 14 21.667 6.67 6.67 0 0 0 20.667 15 6.669 6.669 0 0 0 14 8.333zm-1.333 10L9.334 15l.94-.94 2.393 2.387 5.06-5.06.94.946-6 6z" fill="transparent"></path>
                                            <path class="icon-disabled" d="M18.96 11.46l-1.42-1.42L14 13.59l-3.54-3.55-1.42 1.42L12.59 15l-3.55 3.54 1.42 1.42L14 16.41l3.54 3.55 1.42-1.42L15.41 15l3.55-3.54z" fill="#fff"></path>
                                        </svg>
                                        <span className="text-sm ml-1">Ghế không bán</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg width="32" height="40" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="2.75" y="2.75" width="22.5" height="34.5" rx="2.25" fill="#FFF" stroke="#B8B8B8" stroke-width="1.5" strokeLinejoin="round"></rect>
                                            <rect x="5.75" y="27.75" width="16.5" height="6.5" rx="2.25" fill="#FFF" stroke="#B8B8B8" stroke-width="1.5" strokeLinejoin="round"></rect>
                                            <path class="icon-selected" d="M14 8.333A6.67 6.67 0 0 0 7.333 15 6.67 6.67 0 0 0 14 21.667 6.67 6.67 0 0 0 20.667 15 6.669 6.669 0 0 0 14 8.333zm-1.333 10L9.334 15l.94-.94 2.393 2.387 5.06-5.06.94.946-6 6z" fill="transparent"></path>
                                            <path class="icon-disabled" d="M18.96 11.46l-1.42-1.42L14 13.59l-3.54-3.55-1.42 1.42L12.59 15l-3.55 3.54 1.42 1.42L14 16.41l3.54 3.55 1.42-1.42L15.41 15l3.55-3.54z" fill="transparent"></path>
                                        </svg>
                                        <span className="text-sm ml-1">Còn trống</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg width="32" height="40" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="2.75" y="2.75" width="22.5" height="34.5" rx="2.25" fill="#6fe381" stroke="#53b061" stroke-width="1.5" strokeLinejoin="round"></rect>
                                            <rect x="5.75" y="27.75" width="16.5" height="6.5" rx="2.25" fill="#6fe381" stroke="#53b061" stroke-width="1.5" strokeLinejoin="round"></rect>
                                            <path class="icon-selected" d="M14 8.333A6.67 6.67 0 0 0 7.333 15 6.67 6.67 0 0 0 14 21.667 6.67 6.67 0 0 0 20.667 15 6.669 6.669 0 0 0 14 8.333zm-1.333 10L9.334 15l.94-.94 2.393 2.387 5.06-5.06.94.946-6 6z" fill="#2e993e"></path>
                                            <path class="icon-disabled" d="M18.96 11.46l-1.42-1.42L14 13.59l-3.54-3.55-1.42 1.42L12.59 15l-3.55 3.54 1.42 1.42L14 16.41l3.54 3.55 1.42-1.42L15.41 15l3.55-3.54z" fill="transparent"></path>
                                        </svg>
                                        <span className="text-sm ml-1">Đang chọn</span>
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <div className="w-1/2 m-auto rounded-xl bg-[#F2F2F2] h-full px-4 py-4 grid grid-cols-3 gap-4">
                                        <div className="col-span-full">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.305 24h-.61c-.035-.004-.07-.01-.105-.012a11.783 11.783 0 0 1-2.117-.261 12.027 12.027 0 0 1-6.958-4.394A11.933 11.933 0 0 1 .027 12.78L0 12.411v-.822c.005-.042.013-.084.014-.127a11.845 11.845 0 0 1 1.102-4.508 12.007 12.007 0 0 1 2.847-3.852A11.935 11.935 0 0 1 11.728.003c.947-.022 1.883.07 2.81.27 1.22.265 2.369.71 3.447 1.335a11.991 11.991 0 0 1 3.579 3.164 11.876 11.876 0 0 1 2.073 4.317c.178.712.292 1.434.334 2.168.008.146.02.292.029.439v.609c-.004.03-.011.06-.012.089a11.81 11.81 0 0 1-1.05 4.521 12.02 12.02 0 0 1-1.92 2.979 12.046 12.046 0 0 1-6.395 3.812c-.616.139-1.24.23-1.872.265-.149.008-.297.02-.446.03zm8.799-13.416c-.527-3.976-4.078-7.808-9.1-7.811-5.02-.003-8.583 3.823-9.11 7.809h.09c.64-.035 1.278-.092 1.912-.195.815-.131 1.614-.326 2.378-.639.625-.255 1.239-.54 1.855-.816.82-.368 1.673-.593 2.575-.62a7.123 7.123 0 0 1 1.947.187c.585.146 1.136.382 1.68.634.57.264 1.14.526 1.733.736 1.2.424 2.442.62 3.706.7.11.006.222.01.334.015zm-10.95 10.471v-.094c0-1.437 0-2.873-.002-4.31 0-.141-.011-.284-.035-.423a2.787 2.787 0 0 0-.775-1.495c-.564-.582-1.244-.896-2.067-.892-1.414.007-2.827.002-4.24.002h-.09a9.153 9.153 0 0 0 3.125 5.256 9.15 9.15 0 0 0 4.083 1.956zm3.689.001c1.738-.36 3.25-1.137 4.528-2.355 1.4-1.334 2.287-2.956 2.685-4.855l-.077-.003h-4.362c-.237 0-.47.038-.695.112-.667.22-1.188.635-1.588 1.206a2.673 2.673 0 0 0-.494 1.59c.008 1.4.003 2.801.003 4.202v.103zM12.05 14.22c1.215-.035 2.204-1.083 2.165-2.275-.039-1.223-1.095-2.215-2.29-2.166-1.211.05-2.2 1.108-2.15 2.302.051 1.191 1.108 2.186 2.275 2.139z" fill="#858585"></path></svg>
                                        </div>
                                        {seats.map(s => (
                                            <div className="col-span-1" key={s.id}>
                                                {s.seat && (
                                                    <div className="w-fit cursor-pointer" onClick={() => {
                                                        if (s.pickable) {
                                                            let idx = selected.findIndex(sl => sl === s.id);
                                                            if (idx === -1) {
                                                                setSelected(prev => [...prev, s.id])
                                                            } else {
                                                                setSelected(selected.filter(sl => sl !== s.id))
                                                            }
                                                        }
                                                    }}>
                                                        <svg width="32" height="40" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            {s.pickable ? (
                                                                <>
                                                                    <rect x="2.75" y="2.75" width="22.5" height="34.5" rx="2.25" fill={selected.includes(s.id) ? "#6fe381" : '#FFF'} stroke={selected.includes(s.id) ? "#53b061" : "#B8B8B8"} stroke-width="1.5" strokeLinejoin="round"></rect>
                                                                    <rect x="5.75" y="27.75" width="16.5" height="6.5" rx="2.25" fill={selected.includes(s.id) ? "#6fe381" : '#FFF'} stroke={selected.includes(s.id) ? "#53b061" : "#B8B8B8"} stroke-width="1.5" strokeLinejoin="round"></rect>
                                                                    <path class="icon-selected" d="M14 8.333A6.67 6.67 0 0 0 7.333 15 6.67 6.67 0 0 0 14 21.667 6.67 6.67 0 0 0 20.667 15 6.669 6.669 0 0 0 14 8.333zm-1.333 10L9.334 15l.94-.94 2.393 2.387 5.06-5.06.94.946-6 6z" fill={selected.includes(s.id) ? "#2e993e" : "transparent"}></path>
                                                                    <path class="icon-disabled" d="M18.96 11.46l-1.42-1.42L14 13.59l-3.54-3.55-1.42 1.42L12.59 15l-3.55 3.54 1.42 1.42L14 16.41l3.54 3.55 1.42-1.42L15.41 15l3.55-3.54z" fill="transparent"></path>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <rect x="2.75" y="2.75" width="22.5" height="34.5" rx="2.25" fill='#d9d9d9' stroke="#d9d9d9" stroke-width="1.5" strokeLinejoin="round"></rect>
                                                                    <rect x="5.75" y="27.75" width="16.5" height="6.5" rx="2.25" fill="#d9d9d9" stroke="#fff" stroke-width="1.5" strokeLinejoin="round"></rect>
                                                                    <path class="icon-selected" d="M14 8.333A6.67 6.67 0 0 0 7.333 15 6.67 6.67 0 0 0 14 21.667 6.67 6.67 0 0 0 20.667 15 6.669 6.669 0 0 0 14 8.333zm-1.333 10L9.334 15l.94-.94 2.393 2.387 5.06-5.06.94.946-6 6z" fill="transparent"></path>
                                                                    <path class="icon-disabled" d="M18.96 11.46l-1.42-1.42L14 13.59l-3.54-3.55-1.42 1.42L12.59 15l-3.55 3.54 1.42 1.42L14 16.41l3.54 3.55 1.42-1.42L15.41 15l3.55-3.54z" fill="#fff"></path>
                                                                </>
                                                            )}
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="flex w-full justify-end items-center my-2">
                                <div className="text-sm mr-2.5">Tổng cộng: <span className="text-primary font-semibold">0đ</span></div>
                                <button className="p-2 bg-primary rounded text-white text-sm" onClick={() => setCurrentStep(2)}>Tiếp tục</button>
                            </div>
                        </>
                    )}
                    {(currentStep === 2) && (
                        <>
                            <div className="w-full">
                                <div className="flex items-center rounded border border-[#27ae5f] bg-[#EEFBF4] p-2 w-fit">
                                    <i className="fa-solid fa-circle-check text-[#27ae5f]"></i>
                                    <span className="text-sm ml-2">An tâm được đón đúng nơi, trả đúng chỗ đã chọn và dễ dàng thay đổi khi cần.</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 divide-x">
                                <div className="col-span-1 p-3">
                                    <div className="bg-[#f7f7f7] w-full py-2 px-3">
                                        <p className="text-lg font-semibold">Điểm đón</p>
                                        <div className="flex justify-between">
                                            <div className="flex flex-col text-[#B8B8B8] text-xs">
                                                <span>Sắp xếp theo</span>
                                                <span className="flex items-center cursor-pointer">Sớm nhất <FaAngleDown className="ml-1" /></span>
                                            </div>
                                            <div className="flex flex-col text-xs">
                                                <span>Xem điểm đón gần nhất ?</span>
                                                <span className="text-primary underline">Nhập địa chỉ tại đây</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div class="inline-flex items-center">
                                            <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="html">
                                                <input name="type" type="radio"
                                                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                                    id="html" />
                                                <span
                                                    class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                                        <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                                    </svg>
                                                </span>
                                            </label>
                                            <label class="mt-px cursor-pointer select-none text-sm flex flex-col" htmlFor="html">
                                                <span className="text-primary">23:00 &nbsp;VP Phạm Ngũ Lão</span>
                                                <span className="text-xs"><i className="fa-solid fa-location-dot"></i>275H Phạm Ngũ Lão, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-1 p-3">
                                    <div className="bg-[#f7f7f7] w-full py-2 px-3">
                                        <p className="text-lg font-semibold">Điểm trả</p>
                                        <div className="flex justify-between">
                                            <div className="flex flex-col text-[#B8B8B8] text-xs">
                                                <span>Sắp xếp theo</span>
                                                <span className="flex items-center cursor-pointer">Sớm nhất <FaAngleDown className="ml-1" /></span>
                                            </div>
                                            <div className="flex flex-col text-xs">
                                                <span>Xem điểm đón gần nhất ?</span>
                                                <span className="text-primary underline">Nhập địa chỉ tại đây</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div class="inline-flex items-center">
                                            <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="html">
                                                <input name="type" type="radio"
                                                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                                    id="html" />
                                                <span
                                                    class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                                        <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                                    </svg>
                                                </span>
                                            </label>
                                            <label class="mt-px cursor-pointer select-none text-sm flex flex-col" htmlFor="html">
                                                <span className="text-primary">05:30&nbsp;Cây Xăng Mã Vòng</span>
                                                <span className="text-xs"><i className="fa-solid fa-location-dot"></i>127 Yersin, Phường Phương Sơn, Nha Trang, Khánh Hòa</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="flex w-full justify-between items-center my-2">
                                <button className="p-2 rounded border border-[#8e9190] text-[#8e9190] text-sm flex items-center" onClick={() => setCurrentStep(1)}><FaAngleLeft /> Quay lại</button>
                                <div className="flex items-center">
                                    <div className="text-sm mr-2.5">Tổng cộng: <span className="text-primary font-semibold">0đ</span></div>
                                    <button className="p-2 bg-primary rounded text-white text-sm" onClick={() => navigate(ROUTER.CONFIRMATION)}>Tiếp tục</button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default Card;