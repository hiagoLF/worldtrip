import React from "react";
import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import SlideElement from "./SlideElement";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Continent {
  id: string;
  title: string;
  description: string;
}

interface ContinentsSlideProps {
  continents: Continent[];
}

const ContinentsSlide: React.FC<ContinentsSlideProps> = ({ continents }) => {
  return (
    <Box w="100%" maxW={1148} mx="auto" mb="10">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.id}>
            <SlideElement
              id={continent.id}
              imageUrl={`/countries/${continent.id}.jpg`}
              title={continent.title}
              description={continent.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ContinentsSlide;
