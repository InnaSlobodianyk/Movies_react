import cn from "classnames";

import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./Slider.module.scss";

const Slider = ( { slides, navigation = true, pagination = false, className } ) => {
  return (
    <Swiper
      navigation={ navigation }
      pagination={ pagination }
      modules={ [ Navigation, Pagination, A11y ] }
      className={  cn( styles.slider, className ) }
    >
      { slides.map( ( item ) => (
        <SwiperSlide
          key={ item.key }
          className={ styles.sliderItem }
        >
          <iframe width='560' height='315' src={`https://www.youtube.com/embed/${ item.key }`} frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen title={ item.name }></iframe>
        </SwiperSlide>
      ) ) }
    </Swiper>
  );
};

export default Slider;