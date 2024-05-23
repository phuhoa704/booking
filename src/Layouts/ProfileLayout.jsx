import { Outlet } from "react-router-dom";

const ProfileLayout = () => {
    return (
        <div className="flex justify-center bg-[#f2f2f2]" style={{ height: 'calc(100vh - 72px)'}}>
            <div className="pt-10 px-2.5 w-7/12">
                <Outlet />
            </div>
        </div>
    );
}

export default ProfileLayout;