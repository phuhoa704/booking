import { FaBus } from "react-icons/fa";
import { BsClock, BsFillHouseFill } from 'react-icons/bs';
import app from '../../assets/vexere-app.png';
import appstore from '../../assets/download/download-app-store.png';
import chplay from '../../assets/download/download-gg-play.png';
import { useLocation } from "react-router-dom";

const Result = () => {
    const { state } = useLocation();
    return (
        <div className="bg-[#F2F2F2] w-full h-screen">
            <div className="w-1/2 m-auto py-5">
                <div className="flex justify-center items-center gap-2 my-2 text-lg">
                    <FaBus className="text-primary" />
                    <span className="text-primary font-semibold">Đặt chỗ thành công</span>
                </div>
                {state.payment && (
                    <div className="bg-[#e8c051] p-2 flex gap-2.5 items-center">
                        <BsClock className='font-bold text-lg' />
                        <span className="text-sm">Vé của bạn chỉ được giữ chỗ đến <span className="font-bold">19:47</span> ngày <span className="font-bold">08/06/2024</span>. Vui lòng thanh toán trước thời điểm này, nếu không vé của bạn sẽ bị hủy.</span>
                    </div>
                )}
                <div className="rounded-lg border border-[#D9D9D9] p-5 bg-white my-5">
                    Chúng tôi đã gửi thông tin vé đến SĐT <span className="font-semibold">0954555666</span> và email <span className="font-semibold">test@gmail.com</span>, bạn hãy kiểm tra thật kỹ nhé !
                </div>
                <div className="rounded-lg border border-[#D9D9D9] p-5 bg-white my-5 grid grid-cols-2 gap-4">
                    <div className="col-span-1 flex flex-col">
                        <p className="text-lg font-semibold text-center">Tải ngay ứng dụng Hagiangbusticket để trải nghiệm tính năng này</p>
                        <div className="flex gap-6 justify-center">
                            <img src={appstore} alt="" className="w-1/3" />
                            <img src={chplay} alt="" className="w-1/3" />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <img src={app} alt="" className="w-7/12 m-auto" />
                    </div>
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