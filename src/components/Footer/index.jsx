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

const Footer = () => {
    const navigate = useNavigate();
    const { routes } = useSelector(state => state.routes);
    return (
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
                        <p className="font-semibold text-xl mb-1.5 mt-8">Chứng nhận</p>
                        <div className="flex flex-col">
                            <img src={cert1} alt="" />
                            <div className="flex items-center">
                                <a href="">
                                    <img src={cert2} alt="" />
                                </a>
                                <a href="">
                                    <img src={cert3} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 xl:col-span-1">
                        <p className="font-semibold text-xl mb-1.5 mt-8">Đối tác thanh toán</p>
                        <img src={partner} alt="" />
                    </div>
                    <div className="col-span-2 xl:col-span-1">
                        <p className="font-semibold text-xl mb-1.5 mt-8">Tải ứng dụng Hagiangbusticket</p>
                        <div className="flex flex-col gap-4 w-9/12">
                            <img src={qrcode} className="cursor-pointer" alt="" />
                            <div className="flex flex-col gap-2 5">
                                <img src={appstore} className="cursor-pointer" alt="" />
                                <img src={chplay} className="cursor-pointer" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;