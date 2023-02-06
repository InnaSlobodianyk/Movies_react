import cn from "classnames";

import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import PopularMovie from "components/PopularMovie";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";

import styles from "./Slider.module.scss";

const Slider = (
  {
    slides,
    navigation = true,
    pagination = false,
    videos = true,
    autoplay, className
  } ) => (
  <Swiper
    navigation={ navigation }
    pagination={ pagination }
    modules={ [ Navigation, Pagination, Autoplay, A11y ] }
    autoplay={ autoplay }
    className={ cn( styles.slider, className ) }
  >
    { slides.map( ( item ) => (
      <SwiperSlide
        key={ item.key || item.id }
        className={ cn( videos ? styles.sliderItemVideo : styles.sliderItem ) }
      >
        { videos ? (
          <iframe width='560' height='315' src={`https://www.youtube.com/embed/${ item.key }`} frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen title={ item.name } />
        ) : (
          <PopularMovie movieDetails={ item } />
        ) }

      </SwiperSlide>
    ) ) }
  </Swiper>
);

export default Slider;