import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { useSelector } from "react-redux";
import { API_STORE } from '../../configs/apis';
import { useNavigate } from 'react-router-dom';
import { ROUTER } from '../../configs/router';

const PopularRoad = () => {
    const navigate = useNavigate();
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
        <>
            {(routes.filter(d => d.popular === 1).length > 0) && (
                <section className="my-4">
                    <p className="font-semibold text-base xl:text-2xl text-[#3d3d3b] py-2.5">Tuyến đường phổ biến</p>
                    <Swiper {...swiperParams} navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">
                        {routes.filter(d => d.popular === 1).map(d => (
                            <SwiperSlide key={d.id}>
                                <div className="w-11/12 shadow-primary rounded cursor-pointer" onClick={() => {
                                    navigate(ROUTER.SEARCH, {
                                        state: {
                                            departure_province_id: '',
                                            return_province_id: '',
                                            start_date: '',
                                            end_date: '',
                                            sort: 'asc_time',
                                            route_id: d.id
                                        }
                                    });
                                }}>
                                    <div className="w-full h-32 rounded-lt rounded-tr relative">
                                        <img className="w-full h-full rounded-tl rounded-tr absolute" src={`${API_STORE}${d.image}`} alt="" />
                                    </div>
                                    <div className={"p-2.5 rounded-bl rounded-br bg-blacktransparent"}>
                                        <p className="text-white font-semibold">{d.name}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            )}
        </>
    );
}

export default PopularRoad;