import { FaAngleLeft, FaBus, FaUserFriends, FaCircle } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTER } from "../../configs/router";
import protect from '../../assets/confirmation/protect.svg';
import baoviet from '../../assets/confirmation/baoviet.svg';
import saladin from '../../assets/confirmation/saladin.svg';
import rental from '../../assets/confirmation/rental.svg';
import tayga from '../../assets/confirmation/xe-tay-ga.png';
import xeso from '../../assets/confirmation/xe-so.png';
import { useEffect, useState } from "react";
import Collapse from "../../components/Collapse";
import image from '../../assets/confirmation/img.png';
import { useSelector } from "react-redux";
import { formatChangeNumber } from "../../helpers/number";
import moment from "moment";
import { API_STORE } from "../../configs/apis";
import Modal from "../../components/Modal";
import LoginForm from "../../components/Auth/Login";
import SignupForm from "../../components/Auth/Signup";
import CalendarComp from "../../components/Calendar";
import { Toast } from "../../components/Alert/Toast";

const Confirmation = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [modalLogin, setModalLogin] = useState(false);
    const [modalSignup, setModalSignup] = useState(false);
    const { searchDetail } = useSelector(state => state.search);
    const [modalCalendar, setModalCalendar] = useState(false);
    const [rangeDate, setRangeDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [bikes] = useState([
        { id: 1, name: 'Honda Airblade, Honda Vision', type: 'Xe tay ga', price: '150.000đ/ngày', method: 'Giao xe tận nơi', img: tayga },
        { id: 2, name: 'Honda Wave RSX, Yamaha Sirius', type: 'Xe số', price: '100.000đ/ngày', method: 'Giao xe tận nơi', img: xeso },
    ]);
    const [formVals, setFormVals] = useState({
        phone: '',
        email: '',
        name: ''
    });
    const handleChange = (e) => {
        const name = e.target.name;
        const val = e.target.value;
        setFormVals({
            ...formVals,
            [name]: val
        })
    }
    const { user } = useSelector(state => state.auth);
    const { searchParams, returnDetail, departureQuantity, returnQuantity, departurePickup, departureDrop, returnPickup, returnDrop } = useSelector(state => state.search);
    const { departureCustomAddress, returnCustomAddress, useDepartureCustomAddress, useReturnCustomAddress, departureDropAddress, useDepartureDropAddress, returnDropAddress, useReturnDropAddress } = useSelector(state => state.address);
    useEffect(() => {
        if (Object.keys(user).length > 0) {
            setFormVals({
                phone: user.phone,
                email: user.email,
                name: user.name
            })
        }
    }, [user]);
    useEffect(() => {
        if (!(state && Object.keys(state).length > 0)) {
            navigate(ROUTER.SEARCH);
        }
    }, [state])
    const handleChangeState = (t) => {
        if (t === 'login') {
            setModalLogin(true);
            setModalSignup(false);
        }
        if (t === 'signup') {
            setModalSignup(true);
            setModalLogin(false);
        }
    }
    return (
        <>
            <Modal
                handleShow={setModalLogin}
                showStatus={modalLogin}
                outlet={<LoginForm handleShow={setModalLogin} handleChangeState={handleChangeState} />}
            />
            <Modal
                handleShow={setModalSignup}
                showStatus={modalSignup}
                outlet={<SignupForm handleShow={setModalSignup} handleChangeState={handleChangeState} />}
            />
            <Modal
                handleShow={setModalCalendar}
                showStatus={modalCalendar}
                outlet={<CalendarComp handleChange={setRangeDate} ranges={rangeDate} handleShow={setModalCalendar} handleConfirm={() => {
                    navigate(ROUTER.SEARCH, {
                        state: {
                            departure_province_id: searchParams.departure_province_id,
                            return_province_id: searchParams.return_province_id,
                            start_date: moment(rangeDate[0].startDate).format('YYYY-MM-DD'),
                            end_date: moment(rangeDate[0].endDate).format('YYYY-MM-DD'),
                            sort: searchParams.sort,
                            returnBooking: true,
                            coach_company_id: searchDetail.coach_company_id
                        }
                    });
                }} />}
            />
            <div className="bg-[#F2F2F2] w-full pt-16 xl:p-0">
                <div className="w-full xl:w-2/3 m-auto py-5 px-2 xl:px-0">
                    <div className="w-full">
                        <div className="flex items-center cursor-pointer" onClick={() => navigate(ROUTER.SEARCH)}>
                            <FaAngleLeft />
                            <span className="text-primary">Quay lại</span>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-full xl:col-span-2">
                                <div className="rounded-xl border border-[#F2F2F2] p-5 bg-white my-5">
                                    {!(Object.keys(user).length > 0) && (
                                        <div className="w-full border border-[#0d2e59] p-2 flex items-center justify-between rounded">
                                            <span className="text-[#0d2e59]">Đăng nhập để tự điền thông tin và nhận điểm khi đặt vé</span>
                                            <button className="px-2.5 py-2 text-white bg-[#0d2e59] rounded-lg" onClick={() => setModalLogin(true)}>Đăng nhập</button>
                                        </div>
                                    )}
                                    <div className="font-semibold my-3">Thông tin liên hệ</div>
                                    <form>
                                        <input type="text" required className="p-2.5 w-full bg-white border border-[#D9D9D9] rounded my-2" name="name" value={formVals.name} onChange={handleChange} placeholder="Tên người đi" />
                                        <div className="flex gap-2.5 my-2">
                                            <button type="button" className="p-2.5 bg-white border border-[#D9D9D9] w-20 text-sm rounded">VN +84</button>
                                            <input type="text" required className="p-2.5 bg-white border border-[#D9D9D9] rounded" style={{ width: 'calc(100% - 80px)' }} name="phone" value={formVals.phone} onChange={handleChange} placeholder="Số điện thoại" />
                                        </div>
                                        <input type="text" required className="p-2.5 w-full bg-white border border-[#D9D9D9] rounded my-2" name="email" value={formVals.email} onChange={handleChange} placeholder="Email để nhận thông tin đặt chỗ" />
                                    </form>
                                    <div className="flex items-center rounded border border-[#27ae5f] bg-[#EEFBF4] p-2 w-full my-2">
                                        <i className="fa-solid fa-circle-check text-[#27ae5f]"></i>
                                        <span className="text-sm ml-2">Số điện thoại và email được sử dụng để gửi thông tin đơn hàng và liên hệ khi cần thiết.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-full xl:col-span-1">
                                <div className="bg-white border border-[#F2F2F2] p-5 rounded-xl my-5">
                                    <Collapse
                                        title={<div className="flex justify-between font-semibold">
                                            <div>Tạm tính</div>
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
                                                        {useDepartureCustomAddress ? (
                                                            <span className="font-semibold">{departureCustomAddress.address}</span>
                                                        ) : (
                                                            <>
                                                                <span className="font-semibold">{searchDetail?.pickups?.find(p => p.id === departurePickup) ? searchDetail.pickups.find(p => p.id === departurePickup).name : 'Đang cập nhật'}</span>
                                                                <span className="text-[#858585]">{searchDetail?.pickups?.find(p => p.id === departurePickup) ? searchDetail.pickups.find(p => p.id === departurePickup).address : 'Đang cập nhật'}</span>
                                                            </>
                                                        )}
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
                                                        {useDepartureDropAddress ? (
                                                            <span className="font-semibold">{departureDropAddress.address}</span>
                                                        ) : (
                                                            <>
                                                                <span className="font-semibold">{searchDetail?.drops?.find(p => p.id === departureDrop) ? searchDetail.drops.find(p => p.id === departureDrop).name : 'Đang cập nhật'}</span>
                                                                <span className="text-[#858585]">{searchDetail?.drops?.find(p => p.id === departureDrop) ? searchDetail.drops.find(p => p.id === departureDrop).address : 'Đang cập nhật'}</span>
                                                            </>
                                                        )}
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
                                                            {useReturnCustomAddress ? (
                                                                <span className="font-semibold">{returnCustomAddress.address}</span>
                                                            ) : (
                                                                <>
                                                                    <span className="font-semibold">{returnDetail?.pickups?.find(p => p.id === returnPickup) ? returnDetail.pickups.find(p => p.id === returnPickup).name : 'Đang cập nhật'}</span>
                                                                    <span className="text-[#858585]">{returnDetail?.pickups?.find(p => p.id === returnPickup) ? returnDetail.pickups.find(p => p.id === returnPickup).address : 'Đang cập nhật'}</span>
                                                                </>
                                                            )}
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
                                                            {useReturnDropAddress ? (
                                                                <span className="font-semibold">{returnDropAddress.address}</span>
                                                            ) : (
                                                                <>
                                                                    <span className="font-semibold">{returnDetail?.drops?.find(p => p.id === returnDrop) ? returnDetail.drops.find(p => p.id === returnDrop).name : 'Đang cập nhật'}</span>
                                                                    <span className="text-[#858585]">{returnDetail?.drops?.find(p => p.id === returnDrop) ? returnDetail.drops.find(p => p.id === returnDrop).address : 'Đang cập nhật'}</span>
                                                                </>
                                                            )}
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
                </div >
                <div className="py-5 bg-white w-full">
                    <div className="w-full xl:w-2/3 m-auto px-2.5 xl:px-0">
                        <div className="flex justify-cennter gap-2.5">
                            <button className="bg-primary text-white py-2.5 rounded-lg px-5" onClick={() => {
                                if (formVals.email && formVals.name && formVals.phone) {
                                    navigate(ROUTER.PAYMENT, { state: { ...formVals, ...state } })
                                } else {
                                    Toast.fire({
                                        title: 'Vui lòng nhập đầy đủ thông tin',
                                        icon: 'warning'
                                    })
                                }
                            }}>Tiếp tục</button>
                            <button className="bg-pending text-black py-2.5 rounded-lg px-5" onClick={() => setModalCalendar(true)}>Đặt thêm chiều về</button>
                            <p className="text-sm">Bạn sẽ sớm nhận được biển số xe, số điện thoại tài xế
                                và dễ dàng thay đổi điểm đón trả sau khi đặt.</p>
                        </div>
                        <p className="text-sm my-2">Bằng việc nhấn nút Tiếp tục, bạn đồng ý với <span className="text-primary underline font-semibold">Chính sách bảo mật thanh toán </span> và <span className="text-primary underline font-semibold">Quy chế</span></p>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Confirmation;