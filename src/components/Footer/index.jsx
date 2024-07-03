import { footerSuggestions, footerSupport, footerAbout } from "../../configs/data";
import cert1 from '../../assets/cert/Desktop_Cert_1.png';
import cert2 from '../../assets/cert/Desktop_Cert_2.png';
import cert3 from '../../assets/cert/Desktop_Cert_3.png';
import partner from '../../assets/payment_partner/payment_partner_desktop.png';
import qrcode from '../../assets/download/download_app_qr.png';
import appstore from '../../assets/download/download-app-store.png';
import chplay from '../../assets/download/download-gg-play.png';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../configs/router";
import { useEffect, useState } from "react";
import { SETTINGS } from "../../configs/constants";
import facebook from '../../assets/icons/facebook.png';
import zalo from '../../assets/icons/zalo.png';

const Footer = () => {
    const navigate = useNavigate();
    const { routes } = useSelector(state => state.routes);
    const { settings } = useSelector(state => state.settings);
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [fb, setFb] = useState('')
    const [zl, setZl] = useState('')
    const [siteName, setSiteName] = useState('');
    useEffect(() => {
        if(settings.length > 0) {
            //address
            let finder = settings.find(s => s.key === SETTINGS.ADDRESS);
            setAddress(finder ? finder.value : '');
            //phone
            let phone = settings.find(s => s.key === SETTINGS.PHONE);
            setPhone(phone ? phone.value : '')
            //email
            let email = settings.find(s => s.key === SETTINGS.EMAIL);
            setEmail(email ? email.value : '')
            //facebook
            let facebook = settings.find(s => s.key === SETTINGS.FACEBOOK);
            setFb(facebook ? facebook.value : '')
            //zalo
            let zalo = settings.find(s => s.key === SETTINGS.ZALO);
            setZl(zalo ? zalo.value : '')
            //sitename
            let siteName = settings.find(s => s.key === SETTINGS.SITENAME);
            setSiteName(siteName ? siteName.value : '')
        }
    }, [settings])
    return (
        <>
            <div className="w-full bg-[#f2f2f2]">
                <div className="w-9/12 py-8 m-auto">
                    <div className="grid grid-cols-5 gap-4">
                        <div className="col-span-full xl:col-span-1">
                            <p className="font-semibold text-xl my-1.5">Tuyến đường</p>
                            <div className="grid grid-cols-1 gap-2.5">
                                {routes.map(fsi => (
                                    <div className="col-span-full font-semibold text-sm cursor-pointer" key={fsi.id} onClick={() => {
                                        navigate(ROUTER.SEARCH, {
                                            state: {
                                                departure_province_id: '',
                                                return_province_id: '',
                                                start_date: '',
                                                end_date: '',
                                                sort: 'asc_time',
                                                route_id: fsi.id
                                            }
                                        });
                                    }}>{fsi.name}</div>
                                ))}
                            </div>
                        </div>
                        {footerSuggestions.map(fs => {
                            if (fs.id === 2 || fs.id === 3) {
                                return (
                                    <div className="col-span-full xl:col-span-2" key={fs.id}>
                                        <p className="font-semibold text-xl my-1.5">{fs.title}</p>
                                        <div className="grid grid-cols-1 gap-2.5">
                                            {fs.items.map(fsi => (
                                                <div className="col-span-full font-semibold text-sm cursor-pointer" key={fsi.id}>{fsi.title}</div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            }
                            if (fs.id === 5) {
                                return (
                                    <div className="col-span-full xl:col-span-4" key={fs.id}>
                                        <p className="font-semibold text-xl my-1.5">{fs.title}</p>
                                        <div className="grid grid-cols-4 gap-2.5">
                                            {fs.items.map(fsi => (
                                                <div className="col-span-2 xl:col-span-1 font-semibold text-sm cursor-pointer" key={fsi.id}>{fsi.title}</div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            }
                            if (fs.id === 4) {
                                return (
                                    <div className="col-span-full xl:col-span-1" key={fs.id}>
                                        <p className="font-semibold text-xl my-1.5">{fs.title}</p>
                                        <div className="grid grid-cols-1 gap-2.5">
                                            {fs.items.map(fsi => (
                                                <div className="col-span-full font-semibold text-sm cursor-pointer" key={fsi.id}>{fsi.title}</div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div className="grid grid-cols-4 gap-4 mt-6">
                        <div className="col-span-full xl:col-span-1">
                            <p className="font-semibold text-xl my-1.5">Hỗ trợ</p>
                            <div className="grid grid-cols-1 gap-2 5">
                                {footerSupport.map(fs => (
                                    <div className="col-span-full font-semibold text-sm cursor-pointer" key={fs.id}>{fs.title}</div>
                                ))}
                            </div>
                        </div>
                        <div className="col-span-full xl:col-span-1">
                            <p className="font-semibold text-xl my-1.5">Về chúng tôi</p>
                            <div className="grid grid-cols-1 gap-2 5">
                                {footerAbout.map(fs => (
                                    <div className="col-span-full font-semibold text-sm cursor-pointer" key={fs.id}>{fs.title}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white">
                <div className="w-8/12 py-8 m-auto text-center">
                    <p className="font-bold text-xl">{siteName}</p>
                    <p className="text-[#767676] text-sm">Địa chỉ: {address}</p>
                    <p className="text-[#767676] text-sm">Số điện thoại: {phone}</p>
                    <p className="text-[#767676] text-sm">Email: {email}</p>
                    <a className="flex items-center justify-center cursor-pointer">
                        <img src={facebook} alt="" className="w-8 h-8"/>
                        <span className="text-[#767676] text-sm">{fb}</span>
                    </a>
                    <a className="flex items-center justify-center cursor-pointer">
                        <img src={zalo} alt="" className="w-8 h-8"/>
                        <span className="text-[#767676] text-sm">{zl}</span>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Footer;