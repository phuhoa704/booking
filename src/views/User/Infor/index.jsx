import Breadscrum from "../../../components/Breadscrum";
import UserSidebar from "../../../components/UserSidebar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const Info = () => {
    const [startDate, setStartDate] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <Breadscrum site='Thông tin cá nhân' />
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-full xl:col-span-1">
                    <UserSidebar />
                </div>
                <div className="col-span-full xl:col-span-4">
                    <form className="text-sm w-full max-h-full" onSubmit={handleSubmit}>
                        <div className="flex flex-col my-3">
                            <label htmlFor="fullname">
                                Họ và tên
                                <span className="text-[#DF2029]">*</span>
                            </label>
                            <input className="px-2.5 py-1.5 bg-white text-[#d9d9d9] rounded border border-[#d9d9d9]" type="text" name="fullname" id="fullname" placeholder="Nhập họ và tên" />
                        </div>
                        <div className="flex flex-col my-3">
                            <label htmlFor="fullname">
                                Ngày sinh
                            </label>
                            <DatePicker className="px-2.5 py-1.5 bg-white border border-[#d9d9d9] w-full rounded" placeholderText="Chọn ngày sinh" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className="flex flex-col my-3">
                            <label htmlFor="sex">
                                Giới tính
                            </label>
                            <div className="grid grid-cols-3 border border-[#d9d9d9] rounded">
                                <button className="col-span-1 bg-white hover:text-primary border-r border-[#d9d9d9] py-1.5 rounded-tl rounded-bl">Nam</button>
                                <button className="col-span-1 bg-white hover:text-primary border-r border-[#d9d9d9] py-1.5">Nữ</button>
                                <button className="col-span-1 bg-white hover:text-primary py-1.5 rounded-tr rounded-br">Khác</button>
                            </div>
                        </div>
                        <div className="my-3">
                            <button className="bg-primary text-white text-center w-full py-2 rounded">Lưu</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Info;