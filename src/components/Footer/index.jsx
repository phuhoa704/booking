import { footerSuggestions, footerSupport, footerAbout } from "../../configs/data";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../configs/router";
import { useEffect, useState } from "react";
import { SETTINGS } from "../../configs/constants";
import facebook from '../../assets/icons/facebook.png';
import zalo from '../../assets/icons/zalo.png';
import { getPageList } from "../../redux/actions/Pages";

const Footer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { routes } = useSelector(state => state.routes);
    const { settings } = useSelector(state => state.settings);
    const { listNews } = useSelector(state => state.news);
    const { pages } = useSelector(state => state.pages);
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [fb, setFb] = useState('')
    const [zl, setZl] = useState('')
    const [siteName, setSiteName] = useState('');
    useEffect(() => {
        dispatch(getPageList([]))
    }, [])
    useEffect(() => {
        if (settings.length > 0) {
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
                        <div className="col-span-full xl:col-span-2">
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
                                    }}>Tuyến đường {fsi.name}</div>
                                ))}
                            </div>
                        </div>
                        <div className="col-span-full xl:col-span-3">
                            <p className="font-semibold text-xl my-1.5">Tin tức</p>
                            <div className="grid grid-cols-1 gap-2.5">
                                {listNews.map(fsi => (
                                    <div className="col-span-full font-semibold text-sm cursor-pointer" key={fsi.id} onClick={() => navigate(`/news/${fsi.slug}`)}>{fsi.name}</div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 col-span-full">
                            {pages.map(p => (
                                <div className="col-span-full xl:col-span-1" key={p.id}>
                                    <p className="font-semibold text-xl my-1.5">{p.name}</p>
                                    <div className="grid grid-cols-1 gap-2.5">
                                        {p.pages.map(fsi => (
                                            <div className="col-span-full font-semibold text-sm cursor-pointer" onClick={() => navigate(`/pages/${fsi.slug}`)} key={fsi.id}>{fsi.title}</div>
                                        ))}
                                    </div>
                                </div>
                            ))}
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
                        <img src={facebook} alt="" className="w-8 h-8" />
                        <span className="text-[#767676] text-sm">{fb}</span>
                    </a>
                    <a className="flex items-center justify-center cursor-pointer">
                        <img src={zalo} alt="" className="w-8 h-8" />
                        <span className="text-[#767676] text-sm">{zl}</span>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Footer;