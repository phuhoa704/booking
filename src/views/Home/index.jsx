import background from '../../assets/leaderboard.png';
import { useState } from 'react';
import PopularRoad from '../../components/PopularRoad';
import Concessionary from '../../components/Concessionary';
import ConcessionaryFromPartner from '../../components/ConcessionaryFromPartner';
import HotNews from '../../components/HotNews';
import Services from '../../components/Services';
import CarRental from '../../components/CarRental';
import Travel from '../../components/Travel';
import ForPartner from '../../components/ForPartner';
import News from '../../components/News';
//datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import DatePicker from 'react-date-picker';
// import 'react-date-picker/dist/DatePicker.css';
// import 'react-calendar/dist/Calendar.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
// react select
import Select from 'react-select';
import { dataTestimonial } from '../../configs/data';
import CustomerCard from '../../components/CustomerCard';
import Flatforms from '../../components/Flatforms';
import SocialMedia from '../../components/SocialMedia';
import BusStations from '../../components/BusStations';
// data sample
import { location } from '../../configs/data';
import { useEffect } from 'react';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
import { ROUTER } from '../../configs/router';

const Home = () => {
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(null);
    const [activeTab, setActiveTab] = useState(1)
    const [rendered, setRendered] = useState(false);
    const [firstPlace, setFirstPlace] = useState(null);
    const [secondPlace, setSecondPlace] = useState(null);
    const swiperParams = {
        slidesPerView: 2,
        pagination: {
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
        breakpoints: {
            1200: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            },
        },
    };
    useEffect(() => {
        setRendered(true)
    }, [])
    return (
        <>
            <section className='w-full bg-center bg-cover flex justify-center items-center relative' style={{ backgroundImage: `url(${background})`, height: `calc(90vh - 180px)` }}>
                <div className="w-8/12 text-center">
                    <p className='text-3xl text-white font-semibold my-4'>Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ</p>
                    <div className="w-full bg-white rounded-lg shadow-secondary">
                        <div className="flex justify-center py-3">
                            <div className="flex pt-3 md:pt-0">
                                <div
                                    onClick={() => setActiveTab(1)}
                                    className={`px-3 py-2 mr-3 transition-all duration-300 ease-linear cursor-pointer text-xl font-semibold ${(activeTab === 1) ? 'text-primary border-primary border-b-2' : ''}`}
                                >
                                    <i className="fa-solid fa-bus"></i> Xe khách
                                </div>
                                <div
                                    onClick={() => navigate(ROUTER.RENT)}
                                    className={`px-3 py-2 mr-3 transition-all duration-300 ease-linear cursor-pointer text-xl font-semibold ${(activeTab === 2) ? 'text-primary border-primary border-b-2' : ''}`}
                                >
                                    <i className="fa-solid fa-taxi"></i> Thuê xe
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 gap-2.5 w-full relative border-t border-[#ddd] py-3.5 px-3 dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                            <div className="border border-[#d9d9d9] col-span-4">
                                <div className="grid grid-cols-4 h-full">
                                    <div className="col-span-1 relative">
                                        <Select
                                            options={location}
                                            classNames={{
                                                menu: () => 'text-left',
                                                // placeholder: (styles) => ({...styles, ...dotPlaceholder('#2474E5')})
                                            }}
                                            value={firstPlace}
                                            onChange={(e) => setFirstPlace(e)}
                                            placeholder={<div><i className="fa-solid fa-location-arrow text-primary text-lg"></i> Nơi bắt đầu</div>}
                                            className='hidden-select-border'
                                        />
                                        <div 
                                        onClick={() => {
                                            let tempFirst = firstPlace;
                                            let tempSecond = secondPlace;
                                            setFirstPlace(tempSecond);
                                            setSecondPlace(tempFirst);
                                        }}
                                        className="absolute w-8 h-8 right-0 top-1/2 translate-x-[50%] translate-y-[-50%] cursor-pointer z-10 rounded-full bg-[#cfd1d0] flex items-center justify-center"
                                        >
                                            <i className="fa-solid fa-arrow-right-arrow-left"></i>
                                        </div>
                                    </div>
                                    <div className="col-span-1 border-r border-[#d9d9d9]">
                                        <Select
                                            options={location}
                                            classNames={{
                                                menu: () => 'text-left',
                                            }}
                                            value={secondPlace}
                                            onChange={(e) => setSecondPlace(e)}
                                            placeholder={<div><i className="fa-solid fa-location-dot text-[#ed4532] text-lg"></i> Nơi đến</div>}
                                            className='hidden-select-border'
                                        />
                                    </div>
                                    <div className="col-span-1 border-r border-[#d9d9d9]">
                                        {rendered && (<DatePicker className="px-2.5 py-2.5 bg-white border border-[#d9d9d9] w-full h-full rounded border-none focus:border-none" placeholderText="Ngày đi" selected={startDate} onChange={(date) => setStartDate(date)} />)}
                                    </div>
                                    <div className="col-span-1">
                                        {rendered && (<DatePicker className="px-2.5 py-2.5 bg-white border border-[#d9d9d9] w-full h-full rounded border-none focus:border-none" placeholderText="Ngày về" selected={startDate} onChange={(date) => setStartDate(date)} />)}
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <button className='bg-[#ffd333] py-2.5 text-center w-full rounded'>
                                    <span className='font-semibold'>Tìm kiếm</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 py-5 bg-blacktransparent w-full flex justify-center gap-12">
                    <div className="flex items-center gap-2">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group">
                                <path id="Vector" d="M22 11L19.56 8.21L19.9 4.52L16.29 3.7L14.4 0.5L11 1.96L7.6 0.5L5.71 3.69L2.1 4.5L2.44 8.2L0 11L2.44 13.79L2.1 17.49L5.71 18.31L7.6 21.5L11 20.03L14.4 21.49L16.29 18.3L19.9 17.48L19.56 13.79L22 11ZM8.38 15.01L6 12.61C5.61 12.22 5.61 11.59 6 11.2L6.07 11.13C6.46 10.74 7.1 10.74 7.49 11.13L9.1 12.75L14.25 7.59C14.64 7.2 15.28 7.2 15.67 7.59L15.74 7.66C16.13 8.05 16.13 8.68 15.74 9.07L9.82 15.01C9.41 15.4 8.78 15.4 8.38 15.01Z" fill="#FFD333" />
                            </g>
                        </svg>
                        <span className='text-white font-semibold'>Chắc chắn có chỗ</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Rounded / headset_mic">
                                <path id="Vector" d="M11.4 1.02048C6.62 1.33048 3 5.52048 3 10.3105V17.0005C3 18.6605 4.34 20.0005 6 20.0005H7C8.1 20.0005 9 19.1005 9 18.0005V14.0005C9 12.9005 8.1 12.0005 7 12.0005H5V10.2905C5 6.45048 7.96 3.11048 11.79 3.00048C15.76 2.89048 19 6.06048 19 10.0005V12.0005H17C15.9 12.0005 15 12.9005 15 14.0005V18.0005C15 19.1005 15.9 20.0005 17 20.0005H19V21.0005H13C12.45 21.0005 12 21.4505 12 22.0005C12 22.5505 12.45 23.0005 13 23.0005H18C19.66 23.0005 21 21.6605 21 20.0005V10.0005C21 4.83048 16.64 0.680479 11.4 1.02048Z" fill="#FFD333" />
                            </g>
                        </svg>
                        <span className='text-white font-semibold'>Hỗ trợ 24/7</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="discount" clipPath="url(#clip0_6256_177330)">
                                <g id="Group">
                                    <g id="Group_2">
                                        <g id="Group_3">
                                            <path id="Exclude" fillRule="evenodd" clipRule="evenodd" d="M22.7992 5.52035V9.84035C21.6112 9.84035 20.6392 10.8124 20.6392 12.0004C20.6392 13.1884 21.6112 14.1604 22.7992 14.1604V18.4804C22.7992 19.6684 21.8272 20.6404 20.6392 20.6404H3.35922C2.17122 20.6404 1.19922 19.6684 1.19922 18.4804V14.1604C2.39802 14.1604 3.35922 13.1884 3.35922 12.0004C3.35922 10.8124 2.39802 9.84035 1.21002 9.84035V5.52035C1.21002 4.32155 2.17122 3.36035 3.35922 3.36035H20.6392C21.8272 3.36035 22.7992 4.32155 22.7992 5.52035ZM7.62126 11.4351C8.01706 11.6571 8.4563 11.7681 8.93898 11.7681C9.41201 11.7681 9.84159 11.6571 10.2277 11.4351C10.6235 11.2131 10.9325 10.9138 11.1545 10.5373C11.3765 10.1608 11.4875 9.7457 11.4875 9.29198C11.4875 8.83826 11.3765 8.42315 11.1545 8.04666C10.9325 7.67017 10.6235 7.37091 10.2277 7.14887C9.84159 6.92684 9.41201 6.81582 8.93898 6.81582C8.4563 6.81582 8.01706 6.92684 7.62126 7.14887C7.23511 7.37091 6.93103 7.67017 6.70899 8.04666C6.48696 8.42315 6.37594 8.83826 6.37594 9.29198C6.37594 9.7457 6.48696 10.1608 6.70899 10.5373C6.93103 10.9138 7.23511 11.2131 7.62126 11.4351ZM14.6443 6.81582L8.21496 16.4164L9.35891 17.1838L15.7882 7.58329L14.6443 6.81582ZM9.64852 10.0594C9.4651 10.2525 9.22859 10.3491 8.93898 10.3491C8.65903 10.3491 8.42251 10.2525 8.22944 10.0594C8.03637 9.85672 7.93983 9.6009 7.93983 9.29198C7.93983 8.98306 8.03637 8.73207 8.22944 8.539C8.42251 8.33627 8.65903 8.23491 8.93898 8.23491C9.22859 8.23491 9.4651 8.33144 9.64852 8.52452C9.84159 8.71759 9.93813 8.97341 9.93813 9.29198C9.93813 9.61055 9.84159 9.86637 9.64852 10.0594ZM13.761 16.8508C14.1568 17.0728 14.596 17.1838 15.0787 17.1838C15.5517 17.1838 15.9813 17.0728 16.3674 16.8508C16.7632 16.6287 17.0722 16.3295 17.2942 15.953C17.5162 15.5765 17.6272 15.1614 17.6272 14.7077C17.6272 14.2539 17.5162 13.8388 17.2942 13.4623C17.0722 13.0859 16.7632 12.7866 16.3674 12.5646C15.9813 12.3425 15.5517 12.2315 15.0787 12.2315C14.596 12.2315 14.1568 12.3425 13.761 12.5646C13.3748 12.7866 13.0707 13.0859 12.8487 13.4623C12.6267 13.8388 12.5157 14.2539 12.5157 14.7077C12.5157 15.1614 12.6267 15.5765 12.8487 15.953C13.0707 16.3295 13.3748 16.6287 13.761 16.8508ZM15.7882 15.4751C15.6048 15.6682 15.3683 15.7647 15.0787 15.7647C14.7987 15.7647 14.5622 15.6682 14.3691 15.4751C14.1761 15.2724 14.0795 15.0166 14.0795 14.7077C14.0795 14.3988 14.1761 14.1478 14.3691 13.9547C14.5622 13.752 14.7987 13.6506 15.0787 13.6506C15.3683 13.6506 15.6048 13.7471 15.7882 13.9402C15.9813 14.1333 16.0778 14.3891 16.0778 14.7077C16.0778 15.0262 15.9813 15.2821 15.7882 15.4751Z" fill="#FFD333" />
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_6256_177330">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span className='text-white font-semibold'>Nhiều ưu đãi</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="monetization_on">
                                <path id="Vector" d="M8.1 14.75C8.33333 15.55 8.69583 16.1958 9.1875 16.6875C9.67917 17.1792 10.3167 17.5167 11.1 17.7V18.125C11.1 18.3583 11.1875 18.5625 11.3625 18.7375C11.5375 18.9125 11.7417 19 11.975 19C12.2083 19 12.4125 18.9125 12.5875 18.7375C12.7625 18.5625 12.85 18.3583 12.85 18.125V17.75C13.6833 17.6 14.4 17.275 15 16.775C15.6 16.275 15.9 15.5333 15.9 14.55C15.9 13.85 15.7 13.2083 15.3 12.625C14.9 12.0417 14.1 11.5333 12.9 11.1C11.9 10.7667 11.2083 10.475 10.825 10.225C10.4417 9.975 10.25 9.63333 10.25 9.2C10.25 8.76667 10.4042 8.425 10.7125 8.175C11.0208 7.925 11.4667 7.8 12.05 7.8C12.5833 7.8 13 7.92917 13.3 8.1875C13.6 8.44583 13.8167 8.76667 13.95 9.15L15.55 8.5C15.3667 7.91667 15.0292 7.40833 14.5375 6.975C14.0458 6.54167 13.5 6.3 12.9 6.25V5.875C12.9 5.64167 12.8125 5.4375 12.6375 5.2625C12.4625 5.0875 12.2583 5 12.025 5C11.7917 5 11.5875 5.0875 11.4125 5.2625C11.2375 5.4375 11.15 5.64167 11.15 5.875V6.25C10.3167 6.43333 9.66667 6.8 9.2 7.35C8.73333 7.9 8.5 8.51667 8.5 9.2C8.5 9.98333 8.72917 10.6167 9.1875 11.1C9.64583 11.5833 10.3667 12 11.35 12.35C12.4 12.7333 13.1292 13.075 13.5375 13.375C13.9458 13.675 14.15 14.0667 14.15 14.55C14.15 15.1 13.9542 15.5042 13.5625 15.7625C13.1708 16.0208 12.7 16.15 12.15 16.15C11.6 16.15 11.1125 15.9792 10.6875 15.6375C10.2625 15.2958 9.95 14.7833 9.75 14.1L8.1 14.75ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z" fill="#FFD333" />
                            </g>
                        </svg>
                        <span className='text-white font-semibold'>Thanh toán đa dạng</span>
                    </div>
                </div>
            </section>
            <div className="w-full py-2">
                <div className="w-7/12 m-auto">
                    <PopularRoad />
                    <Concessionary />
                    <ConcessionaryFromPartner />
                    <HotNews />
                    <Services />
                    <CarRental />
                    <Travel />
                    <ForPartner />
                    <News />
                    <section className='my-4'>
                        <p className="font-semibold text-2xl text-[#3d3d3b] py-2.5">Khách hàng nói gì về Vexere</p>
                        <Swiper {...swiperParams} modules={[Pagination]} className="mySwiper">
                            {dataTestimonial.map(dt => (
                                <SwiperSlide key={dt.id}>
                                    <CustomerCard Props={dt} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </section>
                    <Flatforms />
                    <SocialMedia />
                    <BusStations />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;