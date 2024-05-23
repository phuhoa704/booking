import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveUser } from "../../../redux/slices/Auth";

const Verification = (Props) => {
    const dispatch = useDispatch();
    const { handleShow, handleShowProfileUpdation, state } = Props;
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(2);
    const countDown = setTimeout(checkTime, 1000);
    async function checkTime() {
        setSeconds(seconds - 1);
        if(seconds === 0){
            setSeconds(59);
          setMinutes(minutes - 1);
        }
        if (seconds === 0 && minutes === 0) {
          clearTimeout(countDown);
        }
      }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        handleShow(false);
        if(state === 'login') {
            dispatch(saveUser({
                id: '372196',
                phone: '0941207429',
                fullname: 'Huỳnh Phú Hòa'
            }))
        }
        if(state === 'signup') {
            handleShowProfileUpdation(true)
        }
    }
    return (
        <div className="px-6 rounded py-5 bg-white w-modalBaseWidth flex max-h-full dark:bg-boxdark">
            <div className="flex max-h-full flex-col items-center w-full text-base">
                <div className="pt-2 pb-3 border-b border-[#ddd] w-full">
                    <h2 className="m-0 text-lg text-center capitalize font-semibold">
                        Nhập mã xác thực
                    </h2>
                </div>
                <form className="text-sm pt-3 w-full max-h-full overflow-overlay custom-scroll" onSubmit={handleSubmit}>
                    <span className="text-[#5a5a5a]">Nhập mã xác thực vừa được gửi đến số điện thoại <span className="font-semibol">0941207429</span></span>
                    <div className="grid grid-cols-2 gap-2 my-2">
                        <div className="col-span-full">
                            <input type="text" placeholder="Nhập mã OTP" className="w-full bg-white border border-[#d9d9d9] p-2.5 rounded" />
                        </div>
                        <div className="col-span-1">
                            <button disabled={(seconds === 0 && minutes === 0) ? false : true} className={`${(seconds === 0 && minutes === 0) ? 'text-[#d9d9d9]' : 'text-[#5a5a5a]'}`}>Gửi lại mã xác thực</button>
                        </div>
                        <div className="col-span-1 text-right">
                            <span className="text-[#db3535]">{(minutes < 10) ? `0${minutes}` : minutes}:{(seconds < 10) ? `0${seconds}` : seconds}</span>
                        </div>
                        <div className="col-span-full">
                            <button type="submit" /* disabled={(seconds === 0 && minutes === 0) ? false : true} */ className={`w-full border border-[#d9d9d9] text-base py-2.5 ${(seconds === 0 && minutes === 0) ? 'bg-primary' : 'bg-[#b0a2a2]' }`}>Tiếp tục</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Verification;