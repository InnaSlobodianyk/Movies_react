import { Link } from "react-router-dom";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { calcDate, limitMovieTitle, imageFullUrl } from "helpers/helpers";
import { imageUrl } from "config";

import Genre from "components/Genre/Genre";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import styles from "./Carousel.module.scss";

const Carousel = ( { slides } ) => {
  return (
    <Swiper
      modules={[ Navigation, Pagination, A11y ]}
      slidesPerView={1}
      navigation
      pagination={{
        clickable: true,
        bulletClass: `swiper-pagination-bullet ${ styles.carouselPaginationBullet }`
      }}
      className={ styles.carousel }
    >
      { slides && slides.map(slide => {
        return (
          <SwiperSlide key={ slide.id }>
            <div
              id={ slide.id }
              className={ styles.carouselItem }
              style={{ backgroundImage: slide.backdrop_path && `url(${ imageFullUrl(imageUrl, slide.backdrop_path) }` }}
            >
              <div className={ styles.carouselItemHolder }>
                <h2 className={ styles.carouselItemTitle }>{ slide.title }</h2>

                <div className={ styles.carouselItemInfo }>
                  <span className={ styles.carouselItemRelease }>
                    { calcDate( slide.release_date ) }
                  </span>

                  <Genre className={ styles.carouselItemGenre } genres={ slide.genre_ids } />
                </div>

                <p>{ limitMovieTitle(slide.overview, 360) }</p>

                <div className={ styles.rating }>
                  { slide.vote_average }
                </div>
                {/*<div className="rating">*/}
                {/*  <div className="rating__wrapper">*/}
                {/*    <div className="rating__base">${renderStarIcons(classNames.base)}</div>*/}
                {/*    <div className="rating__active"*/}
                {/*         style="width: ${calcRatingWidth(slide.vote_average)};">${renderStarIcons(classNames.active)}</div>*/}
                {/*  </div>*/}
                {/*  <span className="rating__value">${slide.vote_average}</span>*/}
                {/*</div>*/}
                <Link to={`/movie/${ slide.id }`}>Details</Link>
              </div>
            </div>
          </SwiperSlide>
        );
      }) }
    </Swiper>
  );
};

export default Carousel;