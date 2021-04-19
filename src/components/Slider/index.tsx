import { Flex } from "@chakra-ui/react";

import { Continent } from "./Continent";

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export function Slider() {
  return (
    <Flex
      w={["375px","1200px"]}
      h={["250px", "450"]}
      maxWidth={1440}
      bg="dark.black"
      margin="0 auto"
      marginTop={["20px", "52px"]}
      marginBottom={["24px", "40px"]}
      boxShadow=" 0px 4px 4px rgba(0, 0, 0, 0.25)"
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // autoplay
      >
        <SwiperSlide>
          <Continent
            href="/continent/europe"
            srcImage="/continents/europe.jpg"
            altText="europe"
            name="Europa"
            description="O continente mais antigo"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Continent
            href="/continent/oceania"
            srcImage="/continents/oceania.jpg"
            altText="oceania"
            name="Oceania"
            description="O país continente"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Continent
            href="/continent/northAmerica"
            srcImage="/continents/northAmerica.jpg"
            altText="north america"
            name="América do Norte"
            description="A capital do mundo"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Continent
            href="/continent/southAmerica"
            srcImage="/continents/southAmerica.jpg"
            altText="south america"
            name="América do Sul"
            description="As maravilhas do Machu Pichu."
          />
        </SwiperSlide>

        <SwiperSlide>
          <Continent
            href="/continent/asia"
            srcImage="/continents/asia.jpg"
            altText="asia"
            name="Ásia"
            description="Entre o moderno e o antigo."
          />
        </SwiperSlide>

        <SwiperSlide>
          <Continent
            href="/continent/africa"
            srcImage="/continents/africa.jpg"
            altText="africa"
            name="África"
            description="Os melhores safáris."
          />
        </SwiperSlide>
      
      </Swiper>
    </Flex>
  );
}
