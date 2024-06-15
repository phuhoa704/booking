import { useSelector } from "react-redux";
import { PAYMENT_METHODS, STATUS } from "../../configs/constants";
import moment from "moment/moment";

const OrderDetail = () => {
    const { orderDetail } = useSelector(state => state.order);
    console.log(orderDetail);
    return (
        <div className="px-6 rounded py-5 bg-white w-modalBaseWidth flex max-h-full dark:bg-boxdark">
            <div className="flex max-h-full flex-col items-center w-full text-base">
                <div className="pt-2 pb-3 border-b border-[#ddd] w-full">
                    <h2 className="m-0 text-lg text-center capitalize font-semibold">
                        Mã: {orderDetail.order_code}
                    </h2>
                    <div className="text-center">
                        <span className={`inline-flex rounded-lg p-1 text-white ${(orderDetail.status === 0) && 'bg-pending'} ${(orderDetail.status === 1) && 'bg-approved'} ${(orderDetail.status === 2) && 'bg-completed'} ${(orderDetail.status === 3) && 'bg-canceled'}`}>{STATUS.find(s => s.value === orderDetail.status) ? STATUS.find(s => s.value === orderDetail.status).label : 'Đang cập nhật'}</span>
                        <span className="inline-flex rounded-lg p-1 text-white bg-payment_method ml-2">{PAYMENT_METHODS.find(p => p.value === orderDetail.payment_method) ? PAYMENT_METHODS.find(p => p.value === orderDetail.payment_method).label : 'Đang cập nhật'}</span>
                    </div>
                </div>
                <div className="text-center mb-2">
                    <p className="font-semibold">Họ và tên: <span className="font-normal">{orderDetail.name}</span></p>
                    <p className="font-semibold">Số điện thoại: <span className="font-normal">{orderDetail.phone}</span></p>
                    <p className="font-semibold">Ngày: <span className="font-normal">{moment(new Date(orderDetail.created_at)).format('DD-MM-YYYY')}</span></p>
                </div>
                {(orderDetail.order_details && orderDetail.order_details.length > 0) && orderDetail.order_details.map(od => (
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
        </div>
    );
}

export default OrderDetail;