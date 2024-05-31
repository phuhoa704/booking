import { Outlet } from "react-router-dom";

const ProfileLayout = () => {
    return (
        <div className="flex justify-center bg-[#f2f2f2] h-full xl:h-rentPageContainer pt-16 xl:pt-0">
            <div className="pt-10 px-2.5 w-full xl:w-7/12">
                <Outlet />
            </div>
        </div>
    );
}

export default ProfileLayout;