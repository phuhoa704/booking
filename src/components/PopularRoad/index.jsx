import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import first from '../../assets/popular/1.png';
import second from '../../assets/popular/2.png';
import third from '../../assets/popular/3.png';
import fourth from '../../assets/popular/4.png';
import fifth from '../../assets/popular/5.png';
import sixth from '../../assets/popular/6.png';
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../configs/router";

const PopularRoad = () => {
    const navigate = useNavigate();
    const [data] = useState([
        { id: 1, name: 'Sài Gòn - Nha Trang', price: 'Từ 200.000đ', img: first, color: '#9E947C' },
        { id: 2, name: 'Hà Nội - Hải Phòng', price: 'Từ 100.000đ', img: third, color: '#585279' },
        { id: 3, name: 'Sài Gòn - Đà Lạt', price: 'Từ 200.000đ', img: fourth, color: '#C6324E' },
        { id: 4, name: 'Sài Gòn - Phan Thiết', price: 'Từ 150.000đ', img: fifth, color: '#4C6C8C' },
        { id: 5, name: 'Sài Gòn - Phan Rang', price: 'Từ 180.000đ', img: sixth, color: '#8A9BB4' },
        { id: 6, name: 'Sài Gòn - Vũng Tàu', price: 'Từ 150.000đ', img: second, color: '#D0906C' },
        { id: 7, name: 'Nha Trang - Sài Gòn', price: 'Từ 180.000đ', img: first, color: '#D3B291' },
    ]);
    const swiperParams = {
        navigation: true,
        slidesPerView: 4,
        breakpoints: {
            1200: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            320: {
                slidesPerView: 2,
            },
        },
    };
    return (
        <section className="my-4">
            <p className="font-semibold text-base xl:text-2xl text-[#3d3d3b] py-2.5">Tuyến đường phổ biến</p>
            <Swiper {...swiperParams} navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">
                {data.map(d => (
                    <SwiperSlide key={d.id}>
                        <div className="w-11/12 shadow-primary rounded cursor-pointer" onClick={() => navigate(ROUTER.SEARCH)}>
                            <div className="w-full h-32 rounded-lt rounded-tr relative">
                                <img className="w-full h-full rounded-tl rounded-tr absolute" src={d.img} alt="" />
                            </div>
                            <div className={"p-2.5 rounded-bl rounded-br"} style={{ backgroundColor: d.color }}>
                                <p className="text-white font-semibold">{d.name}</p>
                                <p className="text-white text-sm">{d.price}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default PopularRoad;