import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveUser } from "../../../redux/slices/Auth";

const ProfileUpdation = () => {
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(saveUser({
            id: '372196',
            phone: '0941207429',
            fullname: 'Huỳnh Phú Hòa'
        }))
    }
    return (
        <div className="px-6 rounded py-5 bg-white w-modalBaseWidth flex max-h-full dark:bg-boxdark">
            <div className="flex max-h-full flex-col items-center w-full text-base">
                <form className="text-sm pt-3 w-full max-h-full" onSubmit={handleSubmit}>
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
                        {/* <input className="px-2.5 py-1.5 bg-white text-[#d9d9d9] rounded border border-[#d9d9d9]" type="date" name="fullname" id="fullname" placeholder="Nhập họ và tên" /> */}
                    </div>
                    <div className="flex flex-col my-3">
                        <label htmlFor="sex">
                            Giới tính
                        </label>
                        <div className="grid grid-cols-3 border border-[#d9d9d9] rounded py-1.5">
                            <button className="col-span-1 hover:text-primary border-r border-[#d9d9d9]">Nam</button>
                            <button className="col-span-1 hover:text-primary border-r border-[#d9d9d9]">Nữ</button>
                            <button className="col-span-1 hover:text-primary">Khác</button>
                        </div>
                    </div>
                    <div className="my-3">
                        <button className="bg-primary text-white text-center w-full py-2 rounded">Tiếp tục</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProfileUpdation;