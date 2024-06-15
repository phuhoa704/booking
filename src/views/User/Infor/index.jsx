import Breadscrum from "../../../components/Breadscrum";
import UserSidebar from "../../../components/UserSidebar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
import { updateProfile, updateAvatar } from "../../../redux/actions/Auth";
import { API_STORE } from "../../../configs/apis";

const Info = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);
    const [birthday, setBirthday] = useState(null);
    const [fileBase64, setFileBase64] = useState();
    const [file, setFile] = useState();
    const [formVals, setFormVals] = useState({
        name: '',
        gender: ''
    })
    useEffect(() => {
        if (Object.keys(user).length > 0) {
            setFormVals({
                name: user.name,
                gender: `${user.gender}`
            })
            setBirthday(user.birthday ? new Date(user.birthday) : new Date());
            setFileBase64(user.avatar ? `${API_STORE}${user.avatar}` : null);
        }
    }, [user])
    const handleChange = (e) => {
        const name = e.target.name;
        const val = e.target.value;
        setFormVals({
            ...formVals,
            [name]: val
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProfile({
            ...formVals,
            birthday: moment(birthday).format('YYYY-MM-HH')
        }))
        if (file) {
            let formData = new FormData();
            formData.append('avatar', file);
            dispatch(updateAvatar(formData));
        }
    }

    return (
        <div>
            <Breadscrum site='Thông tin cá nhân' />
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-full xl:col-span-1">
                    <UserSidebar />
                </div>
                <div className="col-span-full xl:col-span-4">
                    <form className="text-sm w-full max-h-full grid grid-cols-3 gap-2" onSubmit={handleSubmit}>
                        <div className="col-span-1">
                            <label
                                htmlFor="tittlePost"
                                className="block"
                            >
                                Ảnh đại diện
                            </label>
                            <div className="relative">
                                <div className="flex items-center justify-center w-full">
                                    <label
                                        htmlFor="dropzone-file"
                                        className={`flex flex-col items-center justify-center w-full h-fit ${(!fileBase64)
                                            ? "border border-dashed border-slate-400"
                                            : ""
                                            } rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100`}
                                    >
                                        {fileBase64 ? <div className="w-full h-full">
                                            <img src={fileBase64} alt="" className="w-full h-full object-cover rounded-lg" />
                                        </div> :
                                            <div className="bg-white h-48 rounded-lg flex flex-col items-center justify-center text-gray-500 px-4">
                                                <svg
                                                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 20 16"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                    />
                                                </svg>
                                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                    <span className="font-semibold">
                                                        Nhấn vào đây để upload
                                                    </span>{" "}
                                                    Hoặc kéo ảnh vào đây
                                                </p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                                    SVG, PNG, JPG or GIF
                                                </p>
                                            </div>
                                        }
                                        <input
                                            id="dropzone-file"
                                            type="file"
                                            name="files"
                                            onChange={(evt) => {
                                                const selectedFiles = evt.target.files[0];
                                                if (selectedFiles) {
                                                    setFile(selectedFiles);
                                                    const reader = new FileReader();
                                                    reader.onload = (e) => {
                                                        setFileBase64(prevBase64 => {
                                                            const base64 = e.target?.result;
                                                            return base64;
                                                        });
                                                    };
                                                    reader.readAsDataURL(selectedFiles);
                                                } else {
                                                    setFile(null);
                                                    setFileBase64(null);
                                                }
                                            }}
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="flex flex-col my-3">
                                <label htmlFor="fullname">
                                    Họ và tên
                                    <span className="text-[#DF2029]">*</span>
                                </label>
                                <input className="px-2.5 py-1.5 bg-white rounded border border-[#d9d9d9]" type="text" value={formVals.name} onChange={handleChange} name="name" id="name" placeholder="Nhập họ và tên" />
                            </div>
                            <div className="flex flex-col my-3">
                                <label htmlFor="fullname">
                                    Ngày sinh
                                </label>
                                <DatePicker className="px-2.5 py-1.5 bg-white border border-[#d9d9d9] w-full rounded" placeholderText="Chọn ngày sinh" selected={birthday} onChange={(date) => setBirthday(date)} />
                            </div>
                            <div className="flex flex-col my-3">
                                <label htmlFor="sex">
                                    Giới tính
                                </label>
                                <div className="grid grid-cols-3 border border-[#d9d9d9] rounded">
                                    <button type="button" className={`col-span-1 bg-white hover:text-primary border-r border-[#d9d9d9] py-1.5 rounded-tl rounded-bl ${(formVals.gender === '1') ? 'active-btn' : ''}`} name="gender" value={1} onClick={handleChange}>Nam</button>
                                    <button type="button" className={`col-span-1 bg-white hover:text-primary border-r border-[#d9d9d9] py-1.5 ${(formVals.gender === '2') ? 'active-btn' : ''}`} name="gender" value={2} onClick={handleChange}>Nữ</button>
                                    <button type="button" className={`col-span-1 bg-white hover:text-primary py-1.5 rounded-tr rounded-br ${(formVals.gender === '3') ? 'active-btn' : ''}`} name="gender" value={3} onClick={handleChange}>Khác</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-full">
                            <div className="my-3">
                                <button type="submit" className="bg-primary text-white text-center w-full py-2 rounded">Lưu</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Info;