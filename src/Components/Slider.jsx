import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from "../assets/images/slider/1.jpeg";
import img2 from "../assets/images/slider/2.jpg";
import img3 from "../assets/images/slider/3.png";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Slider() {
  const sliders = [img1, img2, img3];

  return (
    <section className="lg:h-screen w-screen relative ">
      <Swiper
        pagination={true}
        loop="true"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper w-full lg:h-full "
        style={{ direction: "ltr" }}
      >
        {sliders?.map((slider, index) => {
          return (
            <SwiperSlide className="relative z-0" key={index}>
              <div className="bg-black/30 absolute top-0 right-0 left-0 bottom-0 ">
                &nbsp;
              </div>
              <div className="bg-primary p-2 px-10 rounded absolute top-10 left-10 text-light">
                hi it's me
              </div>
              <img
                src={slider}
                alt=""
                className="w-full lg:h-full object-cover "
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
