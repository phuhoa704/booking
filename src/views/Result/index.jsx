import { FaBus } from "react-icons/fa";
import { BsClock, BsFillHouseFill } from 'react-icons/bs';
import app from '../../assets/vexere-app.png';
import appstore from '../../assets/download/download-app-store.png';
import chplay from '../../assets/download/download-gg-play.png';
import { useDispatch, useSelector } from "react-redux";
import { PAYMENT_METHODS, STATUS } from "../../configs/constants";
import moment from "moment";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { lookupOrder } from "../../redux/actions/Orders";
import { ROUTER } from "../../configs/router";

const Result = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const orderCode = searchParams.get("order_code");
    const paymentError = searchParams.get("payment-error");
    const { bookingOrder } = useSelector(state => state.order);
    useEffect(() => {
        if(orderCode) {
            const parsed = JSON.parse(orderCode);
            dispatch(lookupOrder({
                order_code: parsed.order_code,
                phone: parsed.phone
            }));
        }
    }, [orderCode]);
    /* useEffect(() => {
        if(!(Object.keys(bookingOrder).length > 0)) {
            navigate(ROUTER.SEARCH);
        }
    },[bookingOrder]) */
    return (
        <div className="bg-[#F2F2F2] w-full h-screen pt-16 xl:pt-0">
            <div className="w-full xl:w-1/2 m-auto py-5 px-2.5 xl:px-0">
                <div className="flex justify-center items-center gap-2 my-2 text-lg">
                    <FaBus className="text-primary" />
                    <span className="text-primary font-semibold">Đặt chỗ thành công</span>
                </div>
                {/* <div className="bg-[#e8c051] p-2 flex gap-2.5 items-center">
                    <BsClock className='font-bold text-lg' />
                    <span className="text-sm">Vé của bạn chỉ được giữ chỗ đến <span className="font-bold">19:47</span> ngày <span className="font-bold">08/06/2024</span>. Vui lòng thanh toán trước thời điểm này, nếu không vé của bạn sẽ bị hủy.</span>
                </div> */}
                <div className="rounded-lg border border-[#D9D9D9] p-5 bg-white my-5">
                    Chúng tôi đã gửi thông tin vé đến SĐT <span className="font-semibold">{bookingOrder.phone}</span> và email <span className="font-semibold">{bookingOrder.email}</span>, bạn hãy kiểm tra thật kỹ nhé !
                </div>
                <div className="rounded-lg border border-[#D9D9D9] p-5 bg-white my-5">
                    <h2 className="m-0 text-lg text-center capitalize font-semibold">
                        Mã: {bookingOrder.order_code}
                    </h2>
                    <div className="text-center">
                        <span className={`inline-flex rounded-lg p-1 text-white ${(bookingOrder.status === 0) && 'bg-pending'} ${(bookingOrder.status === 1) && 'bg-approved'} ${(bookingOrder.status === 2) && 'bg-completed'} ${(bookingOrder.status === 3) && 'bg-canceled'}`}>{STATUS.find(s => s.value === bookingOrder.status) ? STATUS.find(s => s.value === bookingOrder.status).label : 'Đang cập nhật'}</span>
                        <span className="inline-flex rounded-lg p-1 text-white bg-payment_method ml-2">{PAYMENT_METHODS.find(p => p.value === bookingOrder.payment_method) ? PAYMENT_METHODS.find(p => p.value === bookingOrder.payment_method).label : 'Đang cập nhật'}</span>
                    </div>
                    <div className="text-center mb-2">
                        <p className="font-semibold">Họ và tên: <span className="font-normal">{bookingOrder.name}</span></p>
                        <p className="font-semibold">Số điện thoại: <span className="font-normal">{bookingOrder.phone}</span></p>
                        <p className="font-semibold">Ngày: <span className="font-normal">{moment(new Date(bookingOrder.created_at)).format('DD-MM-YYYY')}</span></p>
                    </div>
                    {(bookingOrder.order_details && bookingOrder.order_details.length > 0) && bookingOrder.order_details.map(od => (
                        <div className="border rounded-lg border-[#eee] w-full shadow-lg">
                            <div className="text-center text-sm mb-2">
                                <p className="font-semibold text-base">{od.trip.coach_company.name}</p>
                                <p className="text-xs">Số điện thoại: {od.trip.coach_company.phone}</p>
                                <p className="text-xs">Tuyến đường: {od.trip.route.name} - Loại xe: {od.trip.vehicle_category.name}</p>
                            </div>
                            <div className="grid grid-cols-2 divide-x">
                                <div className="col-span-full xl:col-span-1 p-3">
                                    <div className="bg-[#f7f7f7] w-full py-2 px-3">
                                        <p className="font-semibold">Điểm đón</p>
                                        <div class="mt-px cursor-pointer select-none text-sm flex flex-col">
                                            <span className="text-primary">{moment(od.trip.start_time).format('HH:mm')} &nbsp;{od.trip.departure_province.name}</span>
                                            <span className="text-xs"><i className="fa-solid fa-location-dot"></i>{od.trip.drops.map(p => p.address).join(' ')}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-full xl:col-span-1 p-3">
                                    <div className="bg-[#f7f7f7] w-full py-2 px-3">
                                        <p className="font-semibold">Điểm trả</p>
                                        <div class="mt-px cursor-pointer select-none text-sm flex flex-col">
                                            <span className="text-primary">{moment(od.trip.end_time).format('HH:mm')} &nbsp;{od.trip.return_province.name}</span>
                                            <span className="text-xs"><i className="fa-solid fa-location-dot"></i>{od.trip.pickups.map(p => p.address).join(' ')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full flex justify-center">
                    <a href="/" className="bg-primary w-1/3 text-sm text-white py-2.5 rounded-lg flex items-center justify-center gap-2.5">
                        <BsFillHouseFill />
                        <span>Trang chủ</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Result;