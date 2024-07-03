import { useDispatch, useSelector } from "react-redux";
import { getDistricts, getWards } from "../../redux/actions/Location";
import { useState } from "react";
import { saveDptCustomAddress, saveDptDropAddress, saveReturnCustomAddress, saveReturnDropAddress, saveUseDptCustomAddress, saveUseReturnCustomAddress, saveUseReturnDropAddress } from "../../redux/slices/Address";
import { randomVoucherCode } from "../../helpers/string";

const Address = (Props) => {
    const { type, handleShow, returnBooking } = Props;
    const dispatch = useDispatch();
    const { provinces, districts, wards } = useSelector(state => state.location);
    const [formVals, setFormVals] = useState({
        address: '',
        province_id: '',
        district_id: '',
        ward_id: '',
        id: randomVoucherCode()
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        if(returnBooking) {
            if(type === 'PICKUP') {
                dispatch(saveReturnCustomAddress(formVals));
                dispatch(saveUseReturnCustomAddress(true));
            }
            if(type === 'DROP') {
                dispatch(saveReturnDropAddress(formVals));
                dispatch(saveUseReturnDropAddress(true));
            }
        } else {
            if(type === 'PICKUP') {
                dispatch(saveDptCustomAddress(formVals));
                dispatch(saveUseDptCustomAddress(true));
            }
            if(type === 'DROP') {
                dispatch(saveDptDropAddress(formVals));
                dispatch(saveUseDptCustomAddress(true));
            }
        }
        handleShow(false);
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const val = e.target.value;
        setFormVals({
            ...formVals,
            [name]: val
        })
    }
    return (
        <div className="px-6 rounded py-5 bg-white w-modalBaseWidth flex max-h-full dark:bg-boxdark">
            <div className="flex max-h-full flex-col items-center w-full text-base">
                <div className="pt-2 pb-3 border-b border-[#ddd] w-full">
                    <h2 className="m-0 text-lg text-center capitalize font-semibold">
                        Nhập địa chỉ mới
                    </h2>
                    <form className="text-sm pt-3 w-full max-h-full overflow-overlay custom-scroll" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-2.5">
                            <small>Địa chỉ <span className="text-[#DF2029]">*</span></small>
                            <div className="col-span-full">
                                <input type="text" placeholder="Vui lòng nhập địa chỉ" name="address" value={formVals.address} onChange={handleChange} className="bg-white w-full border border-[#d9d9d9] h-full px-2.5 py-2.5" />
                            </div>
                            <div className="col-span-1">
                                <small>Tỉnh / Thành phố <span className="text-[#DF2029]">*</span></small>
                            </div>
                            <div className="col-span-1">
                                <small>Quận / Huyện <span className="text-[#DF2029]">*</span></small>
                            </div>
                            <div className="col-span-1">
                                <select className="bg-white w-full border border-[#d9d9d9] h-full px-2.5 py-2.5" name="province_id" value={formVals.province_id} onChange={(e) => {
                                    dispatch(getDistricts(e.target.value));
                                    handleChange(e);
                                }}>
                                    <option>--Chọn Tỉnh / Thành phố--</option>
                                    {provinces.map(p => (
                                        <option value={p.id} key={p.id}>{p.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-span-1">
                                <select className="bg-white w-full border border-[#d9d9d9] h-full px-2.5 py-2.5" name="district_id" value={formVals.district_id} onChange={(e) => {
                                    dispatch(getWards(e.target.value));
                                    handleChange(e);
                                }}>
                                    <option>--Chọn Quận / Huyện--</option>
                                    {districts.map(d => (
                                        <option value={d.id} key={d.id}>{d.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-span-1">
                                <small>Xã / Phường <span className="text-[#DF2029]">*</span></small>
                            </div>
                            <div className="col-span-1"></div>
                            <div className="col-span-1">
                                <select className="bg-white w-full border border-[#d9d9d9] h-full px-2.5 py-2.5" name="ward_id" value={formVals.ward_id} onChange={handleChange}>
                                    <option>--Chọn Xã / Phường--</option>
                                    {wards.map(w => (
                                        <option value={w.id} key={w.id}>{w.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-span-full text-right">
                                <button className="bg-primary p-2 text-white rounded">Xác nhận</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Address;