import logo from '../../assets/logo-01.svg';
import uk from '../../assets/uk.png';
import vietnam from '../../assets/vietnam.png';
import { useState } from 'react';
import Modal from '../Modal';
import LoginAndSignupForm from '../Auth/LoginAndSignup';
import Verification from '../Auth/Verification';
import { ROUTER } from '../../configs/router';
import { Link, useNavigate } from 'react-router-dom';
import ProfileUpdation from '../Auth/ProfileUpdation';
import { useDispatch, useSelector } from 'react-redux';
import { resetUser } from '../../redux/slices/Auth';

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [lang, setLang] = useState('vi');
    const [modalLogin, setModalLogin] = useState(false);
    const [modalVerify, setModalVerify] = useState(false);
    const [showHotline, setShowHotline] = useState(false);
    const [showProfileUpdation, setShowProfileUpdation] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [state, setState] = useState('login');
    //
    const { user } = useSelector(state => state.auth);  
    //
    const [userDropdown] = useState([
        {id: 1, name: "Thông tin tài khoản", icon: <i className="fa-regular fa-user"></i>, onClick: () => navigate(`${ROUTER.USER}/${ROUTER.INFO}`)},
        {id: 2, name: "Thành viên thường", icon: <i className="fa-solid fa-tags"></i>, onClick: () => navigate(`${ROUTER.USER}/${ROUTER.MEMBER}`) },
        {id: 3, name: "Vé của tôi", icon: <i className="fa-solid fa-ticket"></i>, onClick: () => navigate(`${ROUTER.USER}/${ROUTER.MYTICKET}`) },
        {id: 4, name: "Ưu đãi", icon: <i className="fa-solid fa-gift"></i>, onClick: () => navigate(`${ROUTER.USER}/${ROUTER.PREFERENTIAL}`) },
        {id: 5, name: "Quản lý thẻ", icon: <i className="fa-solid fa-credit-card"></i>, onClick: () => navigate(`${ROUTER.USER}/${ROUTER.CREDITS}`) },
        {id: 6, name: "Nhận xét chuyến đi", icon: <i className="fa-solid fa-square-pen"></i>, onClick: () => navigate(`${ROUTER.USER}/${ROUTER.EVALUATION}`) },
        {id: 7, name: "Đăng xuất", icon: <i className="fa-solid fa-right-from-bracket"></i>, onClick: () => dispatch(resetUser()) },
    ])
    return (
        <>
            <Modal
                handleShow={setModalLogin}
                showStatus={modalLogin}
                outlet={<LoginAndSignupForm handleShow={setModalLogin} handleShowVerify={setModalVerify} handleChangeState={setState} state={state} />}
            />
            <Modal
                handleShow={setModalVerify}
                showStatus={modalVerify}
                outlet={<Verification handleShow={setModalVerify} handleShowProfileUpdation={setShowProfileUpdation} state={state}/>}
            />
            <Modal
                handleShow={setShowProfileUpdation}
                showStatus={showProfileUpdation}
                outlet={<ProfileUpdation />}
            />
            <div className="w-full bg-primary py-4 px-3.5 flex justify-between items-center">
                <div className="flex gap-4">
                    <Link to="/" style={{ backgroundImage: `url(${logo})`}} className='w-[148px] h-10 bg-center bg-no-repeat bg-contain'>
                        {/* <img src={logo} alt="" /> */}
                    </Link>
                    <a href="https://Hagiangbusticket.com/vi-VN/nhung-cau-hoi-thuong-gap.html" className='whitespace-pre text-sm font-bold text-white'>
                        Cam kết hoàn 150% nếu <br />
                        nhà xe không giữ vé
                    </a>
                </div>
                <div className="flex gap-6">
                    <ul className='flex items-center gap-4'>
                        <li>
                            <Link to={ROUTER.TICKETINFO} className='text-white font-semibold text-sm'>Quản lý đơn hàng</Link>
                        </li>
                        <li>
                            <a href="/" className='text-white font-semibold text-sm'>Mở bán vé trên Hagiangbusticket</a>
                        </li>
                        <li>
                            <a href="/" className='text-white font-semibold text-sm'>Trở thành đối tác</a>
                        </li>
                    </ul>
                    <button
                        onClick={() => {
                            if (lang === 'vi') {
                                setLang('en');
                            }
                            if (lang === 'en') {
                                setLang('vi');
                            }
                        }}
                    >
                        <img src={(lang === 'vi') ? uk : vietnam} alt='' className='w-7 h-5 object-cover border border-white rounded' />
                    </button>
                    <div className="relative">
                        <button className='rounded bg-white text-black font-semibold p-1.5 text-sm' onClick={() => setShowHotline(!showHotline)}>
                            <i className="fa-solid fa-phone mr-1.5"></i>
                            Hotline 24/7
                        </button>
                        <div className={`absolute z-10 w-72 bg-white rounded p-2.5 right-0 mt-2.5 ${showHotline ? 'block' : 'hidden'}`}>
                            <div className='flex flex-col text-sm'>
                                <div className="">
                                    <a href="tel:1900545541" className='text-primary'>1900545541</a> - Để đặt dịch vụ thuê xe
                                </div>
                                <div className="">
                                    <a href="tel:1900888684" className='text-primary'>1900888684</a> - Để đặt vé qua điện thoại
                                </div>
                            </div>
                        </div>
                    </div>
                    {(Object.keys(user).length > 0) ? (
                        <div class="relative w-8 h-8 bg-gray-100 rounded-full cursor-pointer" onClick={() => setDropdown(!dropdown)}>
                            <svg class="w-8 h-8 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                            <div className="absolute bottom-0 w-44 z-[9999] bg-white translate-x-[-135px] translate-y-[240px] rounded shadow-lg p-2" style={{ display: dropdown ? 'block' : 'none' }}>
                                <ul className='text-sm'>
                                    {userDropdown.map(u => (
                                        <li key={u.id} className='my-2.5 hover:text-primary' onClick={u.onClick}>{u.icon} {u.name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <button className='rounded bg-white text-black font-semibold p-1.5 text-sm' onClick={() => setModalLogin(true)}>
                            Đăng nhập
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}

export default Navbar;