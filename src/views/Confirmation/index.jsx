import { FaAngleLeft, FaBus, FaUserFriends, FaCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../configs/router";
import protect from '../../assets/confirmation/protect.svg';
import baoviet from '../../assets/confirmation/baoviet.svg';
import saladin from '../../assets/confirmation/saladin.svg';
import rental from '../../assets/confirmation/rental.svg';
import tayga from '../../assets/confirmation/xe-tay-ga.png';
import xeso from '../../assets/confirmation/xe-so.png';
import { useState } from "react";
import Collapse from "../../components/Collapse";
import image from '../../assets/confirmation/img.png';

const Confirmation = () => {
    const navigate = useNavigate();
    const [bikes] = useState([
        { id: 1, name: 'Honda Airblade, Honda Vision', type: 'Xe tay ga', price: '150.000đ/ngày', method: 'Giao xe tận nơi', img: tayga },
        { id: 2, name: 'Honda Wave RSX, Yamaha Sirius', type: 'Xe số', price: '100.000đ/ngày', method: 'Giao xe tận nơi', img: xeso },
    ])
    return (
        <div className="bg-[#F2F2F2] w-full">
            <div className="w-2/3 m-auto py-5">
                <div className="w-full">
                    <div className="flex items-center cursor-pointer" onClick={() => navigate(ROUTER.SEARCH)}>
                        <FaAngleLeft />
                        <span className="text-primary">Quay lại</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2">
                            <div className="rounded-xl border border-[#F2F2F2] p-5 bg-white my-5">
                                <div className="w-full border border-[#0d2e59] p-2 flex items-center justify-between rounded">
                                    <span className="text-[#0d2e59]">Đăng nhập để tự điền thông tin và nhận điểm khi đặt vé</span>
                                    <button className="px-2.5 py-2 text-white bg-[#0d2e59] rounded-lg">Đăng nhập</button>
                                </div>
                                <div className="font-semibold my-3">Thông tin liên hệ</div>
                                <form>
                                    <input type="text" className="p-2.5 w-full bg-white border border-[#D9D9D9] rounded my-2" placeholder="Tên người đi" />
                                    <div className="flex gap-2.5 my-2">
                                        <button className="p-2.5 bg-white border border-[#D9D9D9] w-20 text-sm rounded">VN +84</button>
                                        <input type="text" className="p-2.5 bg-white border border-[#D9D9D9] rounded" style={{ width: 'calc(100% - 80px)' }} placeholder="Số điện thoại" />
                                    </div>
                                    <input type="text" className="p-2.5 w-full bg-white border border-[#D9D9D9] rounded my-2" placeholder="Email để nhận thông tin đặt chỗ" />
                                </form>
                                <div className="flex items-center rounded border border-[#27ae5f] bg-[#EEFBF4] p-2 w-full my-2">
                                    <i className="fa-solid fa-circle-check text-[#27ae5f]"></i>
                                    <span className="text-sm ml-2">Số điện thoại và email được sử dụng để gửi thông tin đơn hàng và liên hệ khi cần thiết.</span>
                                </div>
                            </div>
                            <div className="rounded-xl border border-[#F2F2F2] p-5 bg-white">
                                <div className="font-semibold my-3">Tiện ích</div>
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                        <div className="flex text-sm">
                                            <img src={protect} alt="" />
                                            <span><span className="font-semibold ml-1.5">Bảo hiểm chuyến đi</span> (+20.000đ/ghế)</span>
                                        </div>
                                        <div className="text-xs text-[#858585]">Được bồi thường lên đến 400.000.000đ/ghế.</div>
                                        <div className="flex text-[#858585] text-xs">
                                            <span>Cung cấp bởi</span>
                                            <img src={baoviet} alt="" />
                                            <span>x</span>
                                            <img src={saladin} alt="" />
                                        </div>
                                    </div>
                                    <input type="checkbox" class="w-5 h-5 shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                                </div>
                                <div className="w-full border border-[#27ae5f] p-2.5 flex flex-col gap-2.5 my-4 rounded cursor-pointer">
                                    <div>
                                        <p className="font-semibold text-sm">Bảo hiểm tai nạn</p>
                                        <p className="text-xs">Quyền lợi bảo hiểm lên đến 400 triệu đồng khi xảy ra tai nạn</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">Bảo hiểm hủy chuyến</p>
                                        <p className="text-xs">Bồi thường 100% tiền vé nếu chuyến đi bị hủy bởi các lí do khách quan hoặc bất khả kháng về sức khỏe.</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between items-center my-5">
                                    <div className="flex gap-2">
                                        <img src={rental} alt="" />
                                        <div className="flex flex-col">
                                            <p className="font-semibold text-sm">Thuê xe máy tại Nha Trang</p>
                                            <p className="text-xs text-[#858585]">Vexere sẽ liên hệ lại để xác nhận dịch vụ.</p>
                                        </div>
                                    </div>
                                    <input type="checkbox" class="w-5 h-5 shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                                </div>
                                <div className="grid grid-cols-4 gap-2.5">
                                    {bikes.map(b => (
                                        <div className="col-span-1 flex flex-col text-center">
                                            <img src={b.img} alt="" />
                                            <p className="text-sm">{b.type}</p>
                                            <p className="text-xs">{b.name}</p>
                                            <p className="text-xs text-[#EB5757]">{b.price}</p>
                                            <p style={{ fontSize: 9 }}>{b.method}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center rounded border border-[#27ae5f] bg-[#EEFBF4] p-2 w-full my-2">
                                    <i className="fa-solid fa-circle-check text-[#27ae5f]"></i>
                                    <span className="text-sm ml-2">Thuê càng lâu, giá càng rẻ!</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="bg-white border border-[#F2F2F2] p-5 rounded-xl my-5">
                                <Collapse
                                    title={<div className="flex justify-between font-semibold">
                                        <div>Tạm tính</div>
                                        <div>280.000đ</div>
                                    </div>}
                                    content={<div className="flex justify-between">
                                        <div className="text-sm">Giá vé</div>
                                        <div className="flex flex-col">
                                            <p className="text-sm">280.000đ x 1</p>
                                            <p className="text-xs text-[#858585]">Mã ghế/giường: C9</p>
                                        </div>
                                    </div>}
                                />
                            </div>
                            <div className="bg-white border border-[#F2F2F2] p-5 rounded-xl my-5">
                                <div className="font-semibold my-3">Thông tin chuyến đi</div>
                                <div className="border border-[#D9D9D9] rounded-lg p-4">
                                    <div className="flex justify-between items-center text-xs gap-2">
                                        <div className="flex items-center gap-2">
                                            <FaBus className="text-primary" />
                                            <span>T2, 27/05/2024</span>
                                            <div className="flex items-center text-[#484848] gap-1.5">
                                                <FaUserFriends />
                                                <span>1</span>
                                            </div>
                                        </div>
                                        <div className="text-primary underline font-semibold">Chi tiết</div>
                                    </div>
                                    <div className="border-t border-[#F2F2F2] mt-2">
                                        <div className="p-2 flex gap-2.5">
                                            <div className="w-1/4 rounded">
                                                <img src={image} alt="" className="rounded" />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <p className="text-xs font-bold">Huỳnh Gia</p>
                                                <p style={{ fontSize: 9 }}>Giường nằm 38 chỗ (WC)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center gap-2">
                                            <div className="flex flex-col">
                                                <span className="font-bold">23:00</span>
                                                <span className="text-xs">(27/05)</span>
                                            </div>
                                            <div className="flex text-xs items-center gap-2">
                                                <FaCircle className="text-primary" />
                                                <div className="flex flex-col">
                                                    <span className="font-semibold">VP Phạm Ngũ Lão</span>
                                                    <span className="text-[#858585]">275H Phạm Ngũ Lão, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex flex-col">
                                                <span className="font-bold">05:30</span>
                                                <span className="text-xs">(28/05)</span>
                                            </div>
                                            <div className="flex text-xs items-center gap-2">
                                                <i className="fa-solid fa-location-dot text-[#de3e6e]"></i>
                                                <div className="flex flex-col">
                                                    <span className="font-semibold">Cây Xăng Mã Vòng</span>
                                                    <span className="text-[#858585]">127 Yersin, Phường Phương Sơn, Nha Trang, Khánh Hòa</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5 bg-white w-full">
                <div className="w-2/3 m-auto">
                    <div className="flex justify-cennter gap-2.5">
                        <button className="bg-primary text-white py-2.5 w-1/2 rounded-lg" onClick={() => navigate(ROUTER.PAYMENT)}>Tiếp tục</button>
                        <p className="text-sm">Bạn sẽ sớm nhận được biển số xe, số điện thoại tài xế
                            và dễ dàng thay đổi điểm đón trả sau khi đặt.</p>
                    </div>
                    <p className="text-sm my-2">Bằng việc nhấn nút Tiếp tục, bạn đồng ý với <span className="text-primary underline font-semibold">Chính sách bảo mật thanh toán </span> và <span className="text-primary underline font-semibold">Quy chế</span></p>
                </div>
            </div>
        </div>
    );
}

export default Confirmation;