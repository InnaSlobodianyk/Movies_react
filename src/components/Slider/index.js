import cn from "classnames";

import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import PopularMovie from "components/PopularMovie";
import Loader from "components/Loader";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";

import styles from "./Slider.module.scss";

const iframeSettings = {
  width: '560',
  height: '315',
  allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  allowFullScreen: true,
  frameBorder: '0'
};

const swiperModules = [ Navigation, Pagination, Autoplay, A11y ];

const Slider = (
  {
    slides,
    navigation = false,
    pagination = false,
    videos = false,
    autoplay,
    className,
    fetching
  } ) => (
    <Swiper
      navigation={ navigation }
      pagination={ pagination }
      modules={ swiperModules }
      autoplay={ autoplay }
      className={ cn( styles.slider, className ) }
    >
      { fetching && <Loader /> }

      { ! fetching && slides?.map( ( item ) => (
        <SwiperSlide
          key={ item.key || item.id }
          className={ videos ? styles.sliderItemVideo : styles.sliderItem }
        >
          { videos ? (
            <iframe src={`https://www.youtube.com/embed/${ item.key }`} title={ item.name } { ...iframeSettings } />
          ) : (
            <PopularMovie movieDetails={ item } />
          ) }

        </SwiperSlide>
      ) ) }
    </Swiper>
  );

export default Slider;