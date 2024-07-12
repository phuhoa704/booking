import { useLocation, useNavigate } from "react-router-dom";
import { ROUTER } from "../../configs/router";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/Auth";
import { useTranslation } from "react-i18next";

const UserSidebar = () => {
  const { t: tUserSidebar } = useTranslation("user_info");

  console.log(tUserSidebar("account_info"));

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const userDropdown = [
    {
      id: 1,
      name: tUserSidebar("account_info"),
      icon: <i className="fa-regular fa-user"></i>,
      path: `${ROUTER.USER}/${ROUTER.INFO}`,
      onClick: () => navigate(`${ROUTER.USER}/${ROUTER.INFO}`),
    },
    {
      id: 1,
      name: tUserSidebar("change_password"),
      icon: <i className="fa-solid fa-key"></i>,
      path: `${ROUTER.USER}/${ROUTER.PASSWORD}`,
      onClick: () => navigate(`${ROUTER.USER}/${ROUTER.PASSWORD}`),
    },
    {
      id: 2,
      name: tUserSidebar("regular_member"),
      icon: <i className="fa-solid fa-tags"></i>,
      path: `${ROUTER.USER}/${ROUTER.MEMBER}`,
      onClick: () => navigate(`${ROUTER.USER}/${ROUTER.MEMBER}`),
    },
    {
      id: 3,
      name: tUserSidebar("my_ticket"),
      icon: <i className="fa-solid fa-ticket"></i>,
      path: `${ROUTER.USER}/${ROUTER.MYTICKET}`,
      onClick: () => navigate(`${ROUTER.USER}/${ROUTER.MYTICKET}`),
    },
    {
      id: 4,
      name: tUserSidebar("promotions"),
      icon: <i className="fa-solid fa-gift"></i>,
      path: `${ROUTER.USER}/${ROUTER.PREFERENTIAL}`,
      onClick: () => navigate(`${ROUTER.USER}/${ROUTER.PREFERENTIAL}`),
    },
    {
      id: 5,
      name: tUserSidebar("card_management"),
      icon: <i className="fa-solid fa-credit-card"></i>,
      path: `${ROUTER.USER}/${ROUTER.CREDITS}`,
      onClick: () => navigate(`${ROUTER.USER}/${ROUTER.CREDITS}`),
    },
    {
      id: 6,
      name: tUserSidebar("trip_review"),
      icon: <i className="fa-solid fa-square-pen"></i>,
      path: `${ROUTER.USER}/${ROUTER.EVALUATION}`,
      onClick: () => navigate(`${ROUTER.USER}/${ROUTER.EVALUATION}`),
    },
    {
      id: 7,
      name: tUserSidebar("logout"),
      icon: <i className="fa-solid fa-right-from-bracket"></i>,
      onClick: () => {
        dispatch(logout());
        navigate(ROUTER.HOME);
      },
    },
  ];

  return (
    <div className="w-full bg-white rounded shadow-lg p-2.5 border border-[#d9d9d9]">
      <ul className="text-sm">
        {userDropdown.map((u) => (
          <li
            key={u.id}
            className="my-3 cursor-pointer hover:text-primary capitalize"
            style={{ color: pathname === u.path ? "#2474E5" : "" }}
            onClick={() => u.onClick()}
          >
            {u.icon}&nbsp;&nbsp;{u.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserSidebar;
