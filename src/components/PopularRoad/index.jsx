import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { useSelector } from "react-redux";
import { API_STORE } from "../../configs/apis";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../configs/router";
import { useEffect, useState } from "react";
import { SETTINGS } from "../../configs/constants";
import { useLocalizedFields } from "../../hooks/useLocalizedFields";

const PopularRoad = ({ tPopularRoad }) => {
  const localizedFields = useLocalizedFields;

  const navigate = useNavigate();
  const [text, setText] = useState("");
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
  const { routes } = useSelector((state) => state.routes);
  const { settings } = useSelector((state) => state.settings);

  useEffect(() => {
    if (settings.length > 0) {
      //settings
      const text = settings.find((s) => s.key === SETTINGS.COLOR);
      setText(text ? text.value : "#fff");
    }
  }, [settings]);

  return (
    <>
      {routes.filter((d) => d.popular === 1).length > 0 && (
        <section className="my-4">
          <p className="font-semibold text-base xl:text-2xl text-[#3d3d3b] py-2.5">
            {tPopularRoad("popular_routes")}
          </p>
          <Swiper
            {...swiperParams}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {routes
              .filter((d) => d.popular === 1)
              .map((d) => (
                <SwiperSlide key={d.id}>
                  <div
                    className="w-11/12 shadow-primary rounded cursor-pointer"
                    onClick={() => {
                      navigate(ROUTER.SEARCH, {
                        state: {
                          departure_province_id: "",
                          return_province_id: "",
                          start_date: "",
                          end_date: "",
                          sort: "asc_time",
                          route_id: d.id,
                        },
                      });
                    }}
                  >
                    <div className="w-full h-32 rounded-lt rounded-tr relative">
                      <img
                        className="w-full h-full rounded-tl rounded-tr absolute"
                        src={`${API_STORE}${d.image}`}
                        alt=""
                      />
                    </div>
                    <div
                      className={
                        "p-2.5 rounded-bl rounded-br bg-blacktransparent"
                      }
                    >
                      <p className="font-semibold" style={{ color: text }}>
                        {localizedFields(d).name}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </section>
      )}
    </>
  );
};

export default PopularRoad;
