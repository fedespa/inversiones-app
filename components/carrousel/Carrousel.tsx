"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

type CarrouselProps<T> = {
  items: T[];
  ItemComponent: React.ComponentType<{ item: T }>;
};

export default function Carrousel<T>({ items, ItemComponent }: CarrouselProps<T>) {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[Pagination]}
      breakpoints={{
        1024: { slidesPerView: 3, spaceBetween: 30 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        0: { slidesPerView: 1, spaceBetween: 15 },
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index} className="w-full">
          <ItemComponent item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
