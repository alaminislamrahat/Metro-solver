"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";

const logos = [
  "/logos/luminus.png",
  "/logos/brembo.png",
  "/logos/motorola.png",
  "/logos/luminus.png",
  "/logos/brembo.png",
  // add more logos as needed
];

const BrandSlider = () => {
  return (
    <div className="py-8 bg-[#0a0311]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={5}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img src={logo} alt={`brand-${index}`} className="h-12 object-contain" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSlider;
