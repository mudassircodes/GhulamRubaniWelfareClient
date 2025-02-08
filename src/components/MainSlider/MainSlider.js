import React, { useEffect, useState } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleSlide from "./SingleSlide";
import SliderCounter from "./SliderCounter";

SwiperCore.use([Autoplay, Navigation, EffectFade, Pagination]);

const mainSlideOptions = {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  pagination: {
    el: "#main-slider-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
};

const MainSlider = () => {
  const [sliderData, setSliderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/slider-image`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch slider data");
        }
        const data = await response.json();
        setSliderData(data); // Assuming the API returns an array of slider objects
        console.log("slider data", data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching slider data:", err);
        setError("Failed to load slider data");
        setLoading(false);
      }
    };

    fetchSliderData();
  }, []);

  if (loading) {
    return <div>Loading slider...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="main-slider">
      <Swiper className="thm-swiper__slider" {...mainSlideOptions}>
        <div className="swiper-wrapper">
          {sliderData.map((slide) => (
            <SwiperSlide key={slide._id}>
              <SingleSlide slide={slide} />
            </SwiperSlide>
          ))}
        </div>
        <div className="swiper-pagination" id="main-slider-pagination"></div>
        <div className="main-slider__nav">
          <div
            className="swiper-button-prev"
            id="main-slider__swiper-button-next"
          >
            <i className="icon-right-arrow icon-left-arrow"></i>
          </div>
          <div
            className="swiper-button-next"
            id="main-slider__swiper-button-prev"
          >
            <i className="icon-right-arrow"></i>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default MainSlider;
