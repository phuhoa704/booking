import { FaBus, FaUserFriends, FaCircle, FaQrcode, FaRegUser, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Collapse from "../../components/Collapse";
import { useEffect, useState } from "react";
import { BsShieldCheck } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTER } from "../../configs/router";
import { formatChangeNumber } from "../../helpers/number";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { API_STORE } from "../../configs/apis";
import { booking } from "../../redux/actions/Orders";

const Payment = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const dispatch = useDispatch();
    const [vouchers] = useState([
        { id: 1, name: 'WELCOMETOTQD', descr: 'Giảm 15,000VNĐ từ CN, 17/03' },
        { id: 2, name: 'DISCOUNTTQD', descr: 'Giảm 50% từ CN, 17/03' },
        { id: 3, name: 'WELCOMETOTQD', descr: 'Giảm 10% từ CN, 17/03' },
    ])
    const [payment, setPayment] = useState(2);
    const [departureTrip, setDepartureTrip] = useState();
    const [returnTrip, setReturnTrip] = useState();
    const { searchDetail, returnDetail, departureQuantity, returnQuantity, departurePickup, departureDrop, returnPickup, returnDrop } = useSelector(state => state.search);
    useEffect(() => {
        if (!(state && Object.keys(state).length > 0)) {
            navigate(ROUTER.SEARCH);
        }
    }, [state])
    useEffect(() => {
        if(Object.keys(searchDetail).length > 0) {
            const departurePickupDetail = searchDetail.pickups.find(sp => sp.id === departurePickup);
            const departureDropDetail = searchDetail.drops.find(sp => sp.id === departureDrop);
            if(departurePickupDetail && departureDropDetail) {
                setDepartureTrip({
                    trip_drop: departureDropDetail,
                    trip_pickup: departurePickupDetail
                })
            }
        }
    }, [searchDetail])
    useEffect(() => {
        if(Object.keys(returnDetail).length > 0) {
            const returnPickupDetail = returnDetail.pickups.find(rp => rp.id === returnPickup);
            const returnDropDetail = returnDetail.drops.find(rp => rp.id === returnDrop);
            if(returnPickupDetail && returnDropDetail) {
                setReturnTrip({
                    trip_drop: returnDropDetail,
                    trip_pickup: returnPickupDetail
                })
            }
        }
    }, [returnDetail])
    return (
        <div className="bg-[#F2F2F2] w-full pt-16 xl:p-0">
            <div className="w-full xl:w-2/3 m-auto py-5 px-2 xl:px-0">
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-full xl:col-span-2">
                        <div className="rounded-xl border border-[#F2F2F2] p-2.5 xl:p-5 bg-white my-5">
                            <div className="font-semibold my-3">Phương thức thanh toán</div>
                            <div className="flex gap-1.5 mb-2">
                                <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="html">
                                    <input name="type" value={2} checked={payment === 2} onChange={() => setPayment(2)} type="radio"
                                        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                        id="html" />
                                    <span
                                        class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                        </svg>
                                    </span>
                                </label>
                                <div className="flex flex-col">
                                    <div className="flex items-center text-sm gap-2">
                                        <FaQrcode className="text-primary" />
                                        <span>QR Chuyển khoản/Ví điện tử</span>
                                        <div className="p-1 bg-[#27ae5f] text-white flex items-center text-xs">
                                            <BsShieldCheck className="text-white" />
                                            <span>An toàn và tiện lợi</span>
                                        </div>
                                    </div>
                                    <div className="text-xs">Không cần nhập thông tin. Xác nhận thanh toán tức thì, nhanh chóng và ít sai sót.</div>
                                    {/* <div className="p-2 5">
                                        <div className="border border-primary p-2 rounded-lg">
                                            <div className="grid grid-cols-4 gap-2 pb-2.5 border-b border-[#F2F2F2]">
                                                <div className="col-span-3">
                                                    <div className="font-semibold">Chuyển khoản bằng mã QR, tự động điền thông tin</div>
                                                    <div className="grid grid-cols-3 gap-4 p-4">
                                                        <div className="col-span-1 flex flex-col justify-center">
                                                            <BsPhoneVibrate className="text-primary" />
                                                            <span className="text-xs">Mở ứng dụng ngân hàng hoặc Ví điện tử</span>
                                                        </div>
                                                        <div className="col-span-1 flex flex-col justify-center">
                                                            <BsQrCodeScan className="text-primary" />
                                                            <span className="text-xs">Dùng tính năng mã QR quét hình bên</span>
                                                        </div>
                                                        <div className="col-span-1 flex flex-col justify-center">
                                                            <BsCheck2All className="text-primary" />
                                                            <span className="text-xs">Hoàn tất thanh toán, chờ Vexe xác nhận</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-1">
                                                    <div className="flex flex-col items-center">
                                                        <span className="text-xs">Quét mã bên dưới</span>
                                                        <img src={'https://api.vietqr.io/MBBank/00140499621033/10000/vietqr_net_2.jpg'} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full flex justify-between p-2.5">
                                                <span className="font-bold">Không thể thanh toán bằng mã QR ?</span>
                                                <span className="text-primary underline font-semibold">Tự nhập thông tin</span>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <hr />
                            {/* <div className="border-primary border bg-[#d7e4f7] flex justify-between rounded p-2 mt-4 text-sm">
                                <div className="flex items-center">
                                    <BsFillInfoCircleFill className="text-primary" />
                                    <span className="ml-1">Vé có bảo hiểm không áp dụng thanh toán tại nhà xe</span>
                                </div>
                                <div className="text-primary underline font-semibold">Hủy bảo hiểm</div>
                            </div> */}
                            <div className="flex gap-1.5 my-2 relative">
                                <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="html">
                                    <input name="type" value={1} checked={payment === 1} onChange={() => setPayment(1)} type="radio"
                                        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                        id="html" />
                                    <span
                                        class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                        </svg>
                                    </span>
                                </label>
                                <div className="flex flex-col">
                                    <div className="flex items-center text-sm gap-2">
                                        <FaBus className="text-primary" />
                                        <span>Thanh toán tại nhà xe/khi lên xe</span>
                                    </div>
                                    <div className="text-xs">Bạn có thể thanh toán cho tài xế khi lên xe.</div>
                                </div>
                            </div>
                            {/* <hr />
                            <div className="my-2 flex gap-1.5">
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
                                <div className="flex flex-col">
                                    <div className="flex items-center text-sm gap-2">
                                        <img src={vnpay} className="w-6" alt="" />
                                        <span>Thanh toán VNPay - QR</span>
                                    </div>
                                    <div className="text-xs">Thiết bị cần cài ứng dụng ngân hàng (Mobile Banking) hoặc Ví VNPay.</div>
                                    <div className="text-xs text-[#27ae5f]">Nhập mã VNPAYVXR150 tại ứng dụng VNPAY - giảm đến 150K cho đơn hàng xe khách từ 1.000.000đ.</div>
                                    <div className="text-primary underline font-semibold text-sm">Điều kiện sử dụng</div>
                                </div>
                            </div>
                            <hr />
                            <div className="my-2 flex gap-1.5">
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
                                <div className="flex flex-col">
                                    <div className="flex items-center text-sm gap-2">
                                        <img src={shopee} className="w-6" alt="" />
                                        <span>Ví ShopeePay</span>
                                    </div>
                                    <div className="text-xs">Điện thoại của bạn phải được cài đặt ứng dụng ShopeePay.</div>
                                    <div className="text-xs text-[#27ae5f]">Nhập mã SPPVEXE05 tại ví ShopeePay - Giảm 10K cho đơn hàng xe khách từ 100K -.</div>
                                    <div className="text-primary underline font-semibold text-sm">Điều kiện sử dụng</div>
                                </div>
                            </div>
                            <hr />
                            <div className="my-2 flex gap-1.5">
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
                                <div className="flex flex-col">
                                    <div className="flex items-center text-sm gap-2">
                                        <img src={momo} className="w-6" alt="" />
                                        <span>Ví MoMo</span>
                                    </div>
                                    <div className="text-xs">Điện thoại của bạn phải được cài đặt ứng dụng MoMo.</div>
                                </div>
                            </div>
                            <hr />
                            <div className="my-2 flex gap-1.5">
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
                                <div className="flex flex-col">
                                    <div className="flex items-center text-sm gap-2">
                                        <img src={zalopay} className="w-6" alt="" />
                                        <span>Ví Zalopay</span>
                                    </div>
                                    <div className="text-xs">Điện thoại của bạn phải được cài đặt ứng dụng Zalopay.</div>
                                </div>
                            </div> */}
                        </div>
                        <div className="bg-white border border-[#F2F2F2] p-5 rounded-xl my-5">
                            <div className="flex justify-between items-center">
                                <div className="font-semibold my-3">Thông tin liên hệ</div>
                            </div>
                            <di className="flex justify-between items-center text-sm">
                                <div className="flex items-center gap-2"><FaRegUser />Hành khách</div>
                                <div className="font-semibold">{state.name}</div>
                            </di>
                            <div className="flex justify-between items-center text-sm">
                                <div className="flex items-center gap-2"><FaPhoneAlt />Số điện thoại</div>
                                <div className="font-semibold">{state.phone}</div>
                            </div>
                            <di className="flex justify-between items-center text-sm">
                                <div className="flex items-center gap-2"><FaEnvelope />Email</div>
                                <div className="font-semibold">{state.email}</div>
                            </di>
                        </div>
                    </div>
                    <div className="col-span-full xl:col-span-1">
                        <div className="bg-white border border-[#F2F2F2] p-5 rounded-xl my-5">
                            <Collapse
                                title={<div className="flex justify-between font-semibold">
                                    <div>Tổng tiền</div>
                                    <div>{formatChangeNumber((Object.keys(returnDetail).length > 0) ? `${(searchDetail.price * departureQuantity) + (returnDetail.price * returnQuantity)}` : `${searchDetail.price * departureQuantity}`)}</div>
                                </div>}
                                content={<div className="flex flex-col">
                                    <div className="flex justify-between border-b border-[#d9d9d9] py-2">
                                        <div className="text-sm">Giá vé</div>
                                        <p className="text-sm">{formatChangeNumber(`${searchDetail.price}`)} x {departureQuantity}</p>
                                    </div>
                                    {(Object.keys(returnDetail).length > 0) && (
                                        <div className="flex justify-between border-b border-[#d9d9d9] py-2">
                                            <div className="text-sm">Giá vé</div>
                                            <p className="text-sm">{formatChangeNumber(`${returnDetail.price}`)} x {returnQuantity}</p>
                                        </div>
                                    )}
                                </div>}
                            />
                        </div>
                        {/* <div className="bg-white border border-[#F2F2F2] p-5 rounded-xl my-5">
                            <div className="flex justify-between items-center">
                                <div className="font-semibold my-3">Mã giảm giá</div>
                                <div className="text-primary underline font-semibold text-sm">Chọn hoặc nhập mã</div>
                            </div>
                            <div className="w-full overflow-x-auto scroll-horizontal">
                                <div className="flex gap-4 w-max">
                                    {vouchers.map(v => (
                                        <div className="grid grid-cols-3 text-xs" key={v.id}>
                                            <div className="col-span-2 p-2 rounded border-[#F2F2F2] border-t border-b border-l">
                                                <p className="font-semibold">{v.name}</p>
                                                <p>{v.descr}</p>
                                            </div>
                                            <div className="col-span-1 p-2 dashed-left-border flex items-center justify-center rounded border-[#F2F2F2] border-t border-b border-r text-primary underline">
                                                Dùng ngay
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div> */}
                        <div className="bg-white border border-[#F2F2F2] p-5 rounded-xl my-5">
                            <div className="font-semibold my-3">Thông tin chuyến đi</div>
                            <div className="border border-[#D9D9D9] rounded-lg p-4 mb-2.5">
                                <div className="flex justify-between items-center text-xs gap-2">
                                    <div className="flex items-center gap-2">
                                        <FaBus className="text-primary" />
                                        <span>{moment(new Date(searchDetail.start_time)).format('DD/MM/YYYY HH:mm')}</span>
                                        <div className="flex items-center text-[#484848] gap-1.5">
                                            <FaUserFriends />
                                            <span>{departureQuantity}</span>
                                        </div>
                                    </div>
                                    <div className="text-primary underline font-semibold">Chi tiết</div>
                                </div>
                                <div className="border-t border-[#F2F2F2] mt-2">
                                    <div className="p-2 flex gap-2.5">
                                        <div className="w-1/4 rounded">
                                            <img src={`${API_STORE}${searchDetail?.vehicle_category?.image}`} alt="" className="rounded" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <p className="text-xs font-bold">{searchDetail?.coach_company?.name}</p>
                                            <p style={{ fontSize: 9 }}>{searchDetail?.vehicle_category?.name}</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-2">
                                        <div className="flex flex-col">
                                            <span className="font-bold">{moment(new Date(searchDetail.start_time)).format('HH:mm')}</span>
                                            <span className="text-xs">({moment(new Date(searchDetail.start_time)).format('DD/MM')})</span>
                                        </div>
                                        <div className="flex text-xs items-center gap-2">
                                            <FaCircle className="text-primary" />
                                            <div className="flex flex-col">
                                                <span className="font-semibold">{searchDetail?.pickups?.find(p => p.id === departurePickup) ? searchDetail.pickups.find(p => p.id === departurePickup).name : 'Đang cập nhật'}</span>
                                                <span className="text-[#858585]">{searchDetail?.pickups?.find(p => p.id === departurePickup) ? searchDetail.pickups.find(p => p.id === departurePickup).address : 'Đang cập nhật'}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex flex-col">
                                            <span className="font-bold">{moment(new Date(searchDetail.end_time)).format('HH:mm')}</span>
                                            <span className="text-xs">({moment(new Date(searchDetail.end_time)).format('DD/MM')})</span>
                                        </div>
                                        <div className="flex text-xs items-center gap-2">
                                            <i className="fa-solid fa-location-dot text-[#de3e6e]"></i>
                                            <div className="flex flex-col">
                                                <span className="font-semibold">{searchDetail?.drops?.find(p => p.id === departureDrop) ? searchDetail.drops.find(p => p.id === departureDrop).name : 'Đang cập nhật'}</span>
                                                <span className="text-[#858585]">{searchDetail?.drops?.find(p => p.id === departureDrop) ? searchDetail.drops.find(p => p.id === departureDrop).address : 'Đang cập nhật'}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {(Object.keys(returnDetail).length > 0) && (
                                <div className="border border-[#D9D9D9] rounded-lg p-4">
                                    <div className="flex justify-between items-center text-xs gap-2">
                                        <div className="flex items-center gap-2">
                                            <FaBus className="text-primary" />
                                            <span>{moment(new Date(returnDetail.start_time)).format('DD/MM/YYYY HH:mm')}</span>
                                            <div className="flex items-center text-[#484848] gap-1.5">
                                                <FaUserFriends />
                                                <span>{returnQuantity}</span>
                                            </div>
                                        </div>
                                        <div className="text-primary underline font-semibold">Chi tiết</div>
                                    </div>
                                    <div className="border-t border-[#F2F2F2] mt-2">
                                        <div className="p-2 flex gap-2.5">
                                            <div className="w-1/4 rounded">
                                                <img src={`${API_STORE}${returnDetail?.vehicle_category?.image}`} alt="" className="rounded" />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <p className="text-xs font-bold">{returnDetail?.coach_company?.name}</p>
                                                <p style={{ fontSize: 9 }}>{returnDetail?.vehicle_category?.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center gap-2">
                                            <div className="flex flex-col">
                                                <span className="font-bold">{moment(new Date(returnDetail.start_time)).format('HH:mm')}</span>
                                                <span className="text-xs">({moment(new Date(returnDetail.start_time)).format('DD/MM')})</span>
                                            </div>
                                            <div className="flex text-xs items-center gap-2">
                                                <FaCircle className="text-primary" />
                                                <div className="flex flex-col">
                                                    <span className="font-semibold">{returnDetail?.pickups?.find(p => p.id === returnPickup) ? returnDetail.pickups.find(p => p.id === returnPickup).name : 'Đang cập nhật'}</span>
                                                    <span className="text-[#858585]">{returnDetail?.pickups?.find(p => p.id === returnPickup) ? returnDetail.pickups.find(p => p.id === returnPickup).address : 'Đang cập nhật'}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex flex-col">
                                                <span className="font-bold">{moment(new Date(returnDetail.end_time)).format('HH:mm')}</span>
                                                <span className="text-xs">({moment(new Date(returnDetail.end_time)).format('DD/MM')})</span>
                                            </div>
                                            <div className="flex text-xs items-center gap-2">
                                                <i className="fa-solid fa-location-dot text-[#de3e6e]"></i>
                                                <div className="flex flex-col">
                                                    <span className="font-semibold">{returnDetail?.drops?.find(p => p.id === returnDrop) ? returnDetail.drops.find(p => p.id === returnDrop).name : 'Đang cập nhật'}</span>
                                                    <span className="text-[#858585]">{returnDetail?.drops?.find(p => p.id === returnDrop) ? returnDetail.drops.find(p => p.id === returnDrop).address : 'Đang cập nhật'}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5 bg-white w-full">
                <div className="w-full xl:w-2/3 m-auto px-2.5 xl:px-0">
                    <div className="flex justify-cennter gap-2.5 items-center">
                        <div className="w-1/3 flex gap-2.5 flex-col xl:flex-row">
                            <button className="bg-primary w-full text-sm text-white py-2.5 rounded-lg" onClick={async() => {
                                const order = {
                                    name: state.name,
                                    email: state.email,
                                    phone: state.phone,
                                    payment_method: payment,
                                    trips: (Object.keys(returnDetail).length > 0) ? [
                                        {
                                            trip_id: searchDetail.id,
                                            type: 1,
                                            quantity: departureQuantity,
                                            ...departureTrip
                                        },
                                        {
                                            trip_id: returnDetail.id,
                                            type: 2,
                                            quantity: returnQuantity,
                                            ...returnTrip
                                        }
                                    ] : [
                                        {
                                            trip_id: searchDetail.id,
                                            type: 1,
                                            quantity: departureQuantity,
                                            ...departureTrip
                                        }
                                    ]
                                }
                                let rs = await dispatch(booking(order));
                                if(rs.payload.action && payment === 1) {
                                    navigate(ROUTER.RESULT)
                                }
                            }}>Xác nhận đặt vé</button>
                            {/* <button className="bg-white border w-full xl:w-1/2 text-sm text-[#000] font-semibold border-[#D9D9D9] py-2.5 rounded-lg" onClick={() => navigate(ROUTER.RESULT, { state: { payment: false } })}>Tôi sẽ chuyển khoản sau</button> */}
                        </div>
                        <p className="text-sm w-2/3">Bạn sẽ sớm nhận được biển số xe, số điện thoại tài xế
                            và dễ dàng thay đổi điểm đón trả sau khi đặt.</p>
                    </div>
                    <p className="text-sm my-2">Bằng việc nhấn nút Tiếp tục, bạn đồng ý với <span className="text-primary underline font-semibold">Chính sách bảo mật thanh toán </span> và <span className="text-primary underline font-semibold">Quy chế</span></p>
                </div>
            </div>
        </div>
    );
}

export default Payment;