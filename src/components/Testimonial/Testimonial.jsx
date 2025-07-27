import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import pro1 from "../../assets/testimonial/Ellipse 10.png";
import pro2 from "../../assets/testimonial/Ellipse 10 (1).png";
import pro3 from "../../assets/testimonial/Ellipse 10 (2).png";
import star from "../../assets/testimonial/Vector.png";

const Testimonial = () => {
  return (
    <div className="mt-20">
      <p className="border border-[#343268] px-5 py-2 rounded-3xl w-fit">Testimonial</p>
      <p className="text-4xl font-semibold text-[#020043] mt-2">What they say about us</p>

      <div className="mt-5 w-full">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            440: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            576: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-[#fffff5] p-5">
              <p className="text-[#020043] text-xl font-semibold">
                Expertise and Compassion <br /> Combined
              </p>
              <p className="text-xs mt-2">
                I can't thank enough for their exceptional care. The doctors and staff showed
                incredible expertise and compassion throughout my treatment journey. I felt truly
                cared for every step of the way.
              </p>

              <div className="mt-3 flex gap-2 items-center">
                <img src={pro1} alt="" />
                <div>
                  <div className="flex">
                    <p className="font-bold text-xs">Sarah D,</p>
                    <p className="text-xs">IT Professional</p>
                  </div>
                  <div className="flex gap-1 mt-1">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-[#fffff5] p-5">
              <p className="text-[#020043] text-xl font-semibold">
                Life-Saving Care, Life-Changing Experience
              </p>
              <p className="text-xs mt-2">
                My experience at [Healthcare Provider Name] was life-changing. The prompt and
                accurate diagnosis, coupled with the advanced treatments they provided, saved my
                life.
              </p>

              <div className="mt-3 flex gap-2 items-center">
                <img src={pro2} alt="" />
                <div>
                  <div className="flex">
                    <p className="font-bold text-xs">Michael R,</p>
                    <p className="text-xs">Business Executive</p>
                  </div>
                  <div className="flex gap-1 mt-1">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-[#fffff5] p-5">
              <p className="text-[#020043] text-xl font-semibold">
                A Partner in Health and <br /> Wellness
              </p>
              <p className="text-xs mt-2">
                As a busy professional, I appreciate the convenience and quality of care I receive
                at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups,
                they've become my trusted partner in health and
              </p>

              <div className="mt-3 flex gap-2 items-center">
                <img src={pro3} alt="" />
                <div>
                  <div className="flex">
                    <p className="font-bold text-xs">David S,</p>
                    <p className="text-xs">Lawyer</p>
                  </div>
                  <div className="flex gap-1 mt-1">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-[#fffff5] p-5">
              <p className="text-[#020043] text-xl font-semibold">
                Expertise and Compassion <br /> Combined
              </p>
              <p className="text-xs mt-2">
                I can't thank enough for their exceptional care. The doctors and staff showed
                incredible expertise and compassion throughout my treatment journey. I felt truly
                cared for every step of the way.
              </p>

              <div className="mt-3 flex gap-2 items-center">
                <img src={pro1} alt="" />
                <div>
                  <div className="flex">
                    <p className="font-bold text-xs">Sarah D,</p>
                    <p className="text-xs">IT Professional</p>
                  </div>
                  <div className="flex gap-1 mt-1">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#fffff5] p-5">
              <p className="text-[#020043] text-xl font-semibold">
                Life-Saving Care, Life-Changing Experience
              </p>
              <p className="text-xs mt-2">
                My experience at [Healthcare Provider Name] was life-changing. The prompt and
                accurate diagnosis, coupled with the advanced treatments they provided, saved my
                life.
              </p>

              <div className="mt-3 flex gap-2 items-center">
                <img src={pro2} alt="" />
                <div>
                  <div className="flex">
                    <p className="font-bold text-xs">Michael R,</p>
                    <p className="text-xs">Business Executive</p>
                  </div>
                  <div className="flex gap-1 mt-1">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
