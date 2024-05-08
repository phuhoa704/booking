import logo from '../../assets/icon_vxr_full_2.svg';
import uk from '../../assets/uk.png';
import vietnam from '../../assets/vietnam.png';
import { useState } from 'react';

const Navbar = () => {
    const [lang, setLang] = useState('vi');
    return (
        <div className="w-full bg-primary py-4 px-3.5 flex justify-between items-center">
            <div className="flex gap-4">
                <a href="https://vexere.com/">
                    <img src={logo} alt="" />
                </a>
                <a href="https://vexere.com/vi-VN/nhung-cau-hoi-thuong-gap.html" className='whitespace-pre text-sm font-bold'>
                    Cam kết hoàn 150% nếu <br />
                    nhà xe không giữ vé
                </a>
            </div>
            <div className="flex gap-6">
                <ul className='flex items-center gap-4'>
                    <li>
                        <a href="/" className='text-white font-semibold text-sm'>Quản lý đơn hàng</a>
                    </li>
                    <li>
                        <a href="/" className='text-white font-semibold text-sm'>Mở bán vé trên Vexere</a>
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
                    <img src={(lang === 'vi') ? uk : vietnam} alt='' className='w-7 h-5 object-cover border border-white rounded'/>
                </button>
                <button className='rounded bg-white text-black font-semibold p-1.5 text-sm'>
                    <i className="fa-solid fa-phone mr-1.5"></i>
                    Hotline 24/7
                </button>
                <button className='rounded bg-white text-black font-semibold p-1.5 text-sm'>
                    Đăng nhập
                </button>
            </div>
        </div>
    );
}

export default Navbar;