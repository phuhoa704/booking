import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { useSelector } from "react-redux";

const PopularRoad = () => {
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
    const { routes } = useSelector(state => state.routes);
    return (
        <section className="my-4">
            <p className="font-semibold text-base xl:text-2xl text-[#3d3d3b] py-2.5">Tuyến đường phổ biến</p>
            <Swiper {...swiperParams} navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">
                {routes.map(d => (
                    <SwiperSlide key={d.id}>
                        <div className="w-11/12 shadow-primary rounded cursor-pointer">
                            <div className="w-full h-32 rounded-lt rounded-tr relative">
                                <img className="w-full h-full rounded-tl rounded-tr absolute" src={d.img} alt="" />
                            </div>
                            <div className={"p-2.5 rounded-bl rounded-br"} style={{ backgroundColor: d.color }}>
                                <p className="text-white font-semibold">{d.name}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default PopularRoad;