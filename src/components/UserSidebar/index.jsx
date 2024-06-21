import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTER } from "../../configs/router";
import { useDispatch } from "react-redux";  
import { logout } from "../../redux/actions/Auth";

const UserSidebar = () => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [userDropdown] = useState([
        { id: 1, name: "Thông tin tài khoản", icon: <i className="fa-regular fa-user"></i>, path: `${ROUTER.USER}/${ROUTER.INFO}`, onClick: () => navigate(`${ROUTER.USER}/${ROUTER.INFO}`) },
        { id: 1, name: "Thay đổi mật khẩu", icon: <i className="fa-solid fa-key"></i>, path: `${ROUTER.USER}/${ROUTER.PASSWORD}`, onClick: () => navigate(`${ROUTER.USER}/${ROUTER.PASSWORD}`) },
        { id: 2, name: "Thành viên thường", icon: <i className="fa-solid fa-tags"></i>, path: `${ROUTER.USER}/${ROUTER.MEMBER}`, onClick: () => navigate(`${ROUTER.USER}/${ROUTER.MEMBER}`) },
        { id: 3, name: "Vé của tôi", icon: <i className="fa-solid fa-ticket"></i>, path: `${ROUTER.USER}/${ROUTER.MYTICKET}`, onClick: () => navigate(`${ROUTER.USER}/${ROUTER.MYTICKET}`) },
        { id: 4, name: "Ưu đãi", icon: <i className="fa-solid fa-gift"></i>, path: `${ROUTER.USER}/${ROUTER.PREFERENTIAL}`, onClick: () => navigate(`${ROUTER.USER}/${ROUTER.PREFERENTIAL}`) },
        { id: 5, name: "Quản lý thẻ", icon: <i className="fa-solid fa-credit-card"></i>, path: `${ROUTER.USER}/${ROUTER.CREDITS}`, onClick: () => navigate(`${ROUTER.USER}/${ROUTER.CREDITS}`) },
        { id: 6, name: "Nhận xét chuyến đi", icon: <i className="fa-solid fa-square-pen"></i>, path: `${ROUTER.USER}/${ROUTER.EVALUATION}`, onClick: () => navigate(`${ROUTER.USER}/${ROUTER.EVALUATION}`) },
        {
            id: 7, name: "Đăng xuất", icon: <i className="fa-solid fa-right-from-bracket"></i>, onClick: () => {
                dispatch(logout())
                navigate(ROUTER.HOME)
            }
        },
    ])
    return (
        <div className="w-full bg-white rounded shadow-lg p-2.5 border border-[#d9d9d9]">
            <ul className='text-sm'>
                {userDropdown.map(u => (
                    <li key={u.id} className='my-3 cursor-pointer hover:text-primary' style={{ color: (pathname === u.path) ? '#2474E5' : '' }} onClick={() => u.onClick()}>{u.icon}&nbsp;&nbsp;{u.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserSidebar;