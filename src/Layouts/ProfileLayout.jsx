import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { listOrder, listOrderCompleted, listOrderCanceled } from "../redux/actions/Orders";

const ProfileLayout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listOrder([]));
        dispatch(listOrderCompleted([]));
        dispatch(listOrderCanceled([]));
    },[])
    return (
        <div className="flex justify-center bg-[#f2f2f2] h-full xl:h-rentPageContainer pt-16 xl:pt-0">
            <div className="pt-10 px-2.5 w-full xl:w-8/12">
                <Outlet />
            </div>
        </div>
    );
}

export default ProfileLayout;