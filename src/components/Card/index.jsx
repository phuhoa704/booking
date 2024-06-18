import { FaStar, FaInfoCircle, FaAngleDown, FaAngleLeft } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../configs/router";
import { API_STORE } from "../../configs/apis";
import moment from "moment";
import { formatChangeNumber } from "../../helpers/number";
import { useDispatch } from "react-redux";
import { getSearchDetail } from "../../redux/actions/Search";

const Card = (Props) => {
    const { data } = Props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
    const [subtotal, setSubtotal] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [pickup, setPickup] = useState(0);
    const [drop, setDrop] = useState(0);
    return (
        <div className="w-full border border-[#e0e0e0] rounded-lg bg-white hover:shadow-lg p-4 mb-4">
            <div className="flex gap-2.5 flex-col xl:flex-row">
                <div className="w-full xl:w-[150px]">
                    <img src={`${API_STORE}${data.vehicle_category.image}`} alt="" className="object-center object-cover w-full h-full" />
                </div>
                <div className="w-full xl:w-largeCardContainer">
                    <div className="flex justify-between mb-1.5">
                        <div className="flex items-center gap-2.5">
                            <span className="font-semibold">{data.coach_company.name} ({data.coach_company.address})</span>
                            <span className="bg-primary xl:flex items-center text-sm px-1 rounded hidden">
                                <FaStar className="mr-2 text-white" />
                                <span className="text-white">4.5 (556)</span>
                            </span>
                        </div>
                        <span className="text-primary font-bold text-lg">Từ {formatChangeNumber(data.price.toString())}đ</span>
                    </div>
                    <div className="flex justify-between mb-1.5">
                        <span className="text-sm">{data.vehicle_category.name}</span>
                        <div
                            className="flex justify-center items-center border border-[#27ae5f] py-[4px] px-[6px] relative rounded text-sm before:absolute before:w-[4px] before:h-[8px] before:bg-white before:left-[-1px] before:top-[8px] before:rounded-tr-lg before:rounded-br-lg before:border-t before:border-r before:border-b before:border-[#27ae5f] after:absolute after:w-[4px] after:h-[8px] after:bg-white after:right-[-1px] after:top-[8px] after:rounded-tl-lg after:rounded-bl-lg after:border-t after:border-l after:border-b after:border-[#27ae5f]"
                        >
                            Giảm 50%
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
                                    <div className="font-bold text-lg mr-2">{moment(new Date(data.start_time)).format('HH:mm')}</div>
                                    <div className="whitespace-nowrap">{data.departure_province.name}</div>
                                </div>
                                <div className="top-[26px] absolute text-sm">4h30m</div>
                                <div className="absolute bottom-[-5px] flex items-center">
                                    <div className="font-bold text-lg mr-2">{moment(new Date(data.end_time)).format('HH:mm')}</div>
                                    <div className="whitespace-nowrap">{data.return_province.name}</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between items-end">
                            <span>Còn {data.quantity} chỗ trống</span>
                            <button className="p-2 font-semibold bg-[#ffd333] text-[#484848] text-sm" onClick={() => setState(!state)}>Chọn chuyến</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-right font-bold uppercase">KHÔNG CẦN THANH TOÁN TRƯỚC</div>
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
                                <div className="col-span-full xl:col-span-1 flex justify-between rounded border border-primary bg-[#ECF4FD] p-2">
                                    <span className="text-sm">Quy định cần lưu ý khi đi xe</span>
                                    <span className="cursor-pointer text-sm text-primary font-semibold underline">Xem chi tiết</span>
                                </div>
                            </div>
                            <div className="my-3 overflow-x-auto custom-scroll w-full">
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
                            </div>
                            <div className="my-5 grid grid-cols-2">
                                <div className="col-span-1"></div>
                                <div className="col-span-1">
                                    <input type="number" className="p-2.5 w-full bg-white border border-[#D9D9D9] rounded my-2" placeholder="Số lượng vé" onChange={(e) => {
                                        setQuantity(e.target.value);
                                        setSubtotal(data.price * parseInt(e.target.value));
                                    }} />
                                </div>
                            </div>
                            <hr />
                            <div className="flex w-full justify-end items-center my-2">
                                <div className="text-sm mr-2.5">Tổng cộng: <span className="text-primary font-semibold">{formatChangeNumber(subtotal.toString())}đ</span></div>
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
                            <div className="grid grid-cols-2 divide-y xl:divide-x">
                                <div className="col-span-full xl:col-span-1 p-3">
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
                                        {data.pickups.map(dp => (
                                            <div class="inline-flex items-center">
                                                <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="pickup">
                                                    <input name="pickup" checked={pickup === dp.id} value={dp.id} onChange={() => setPickup(dp.id)} type="radio"
                                                        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                                        id="pickup" />
                                                    <span
                                                        class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                                            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                                        </svg>
                                                    </span>
                                                </label>
                                                <label class="mt-px cursor-pointer select-none text-sm flex flex-col" htmlFor="html">
                                                    <span className="text-primary">{moment(new Date(dp.time)).format('HH:mm')} &nbsp;{dp.name}</span>
                                                    <span className="text-xs"><i className="fa-solid fa-location-dot"></i>{dp.address}</span>
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-span-full xl:col-span-1 p-3">
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
                                        {data.drops.map(dd => (
                                            <div class="inline-flex items-center">
                                                <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="drop">
                                                    <input name="drop" checked={drop === dd.id} onChange={() => setDrop(dd.id)} value={drop} type="radio"
                                                        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                                        id="drop" />
                                                    <span
                                                        class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                                            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                                        </svg>
                                                    </span>
                                                </label>
                                                <label class="mt-px cursor-pointer select-none text-sm flex flex-col" htmlFor="html">
                                                    <span className="text-primary">{moment(new Date(dd.time)).format('HH:mm')} &nbsp;{dd.name}</span>
                                                    <span className="text-xs"><i className="fa-solid fa-location-dot"></i>{dd.address}</span>
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="flex w-full justify-between items-center my-2">
                                <button className="p-2 rounded border border-[#8e9190] text-[#8e9190] text-sm flex items-center" onClick={() => setCurrentStep(1)}><FaAngleLeft /> Quay lại</button>
                                <div className="flex items-center">
                                    <div className="text-sm mr-2.5">Tổng cộng: <span className="text-primary font-semibold">{formatChangeNumber(subtotal.toString())}đ</span></div>
                                    <button className="p-2 bg-primary rounded text-white text-sm" onClick={() => {
                                        dispatch(getSearchDetail(data.id))
                                        navigate(ROUTER.CONFIRMATION, {state: {pickup, drop, quantity, trip_id: data.id, type: 1, subtotal}});
                                    }}>Tiếp tục</button>
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