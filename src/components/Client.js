import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";

const Client = () => {
  return (
    <div id="client">
      <div className="container colob">
        <div className="bg-primary client-container  wow fadeInUp">
          <Swiper {...sliderProps.logo} className="swiper client-slider">
            <SwiperSlide className="swiper-slide">
              <a href="#">
                <img src="./assets/images/manvian.png" alt="image" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <a href="#">
                <img src="./assets/images/Wraptron.jpeg" alt="image" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <a href="#">
                <img src="./assets/images/Deep-dark.jpeg" alt="image" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <a href="#">
                <img src="./assets/images/art-mount-academy" alt="image" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <a href="#">
                <img
                  src="./assets/images/colaborators/5.png"
                  alt="opptiverse"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <a href="#">
                <img src="./assets/images/colaborators/1.png" alt="image" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <a href="#">
                <img src="./assets/images/colaborators/2.png" alt="image" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <a href="#">
                <img src="./assets/images/colaborators/3.png" alt="image" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <a href="#">
                <img src="./assets/images/colaborators/4.png" alt="image" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <a href="#">
                <img src="./assets/images/colaborators/5.png" alt="image" />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Client;
