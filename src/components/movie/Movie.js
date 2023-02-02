import { imageFullUrl } from "helpers";

import Slider from "components/Slider/Slider";
import MovieDetails from "./MovieDetails";
import Poster from "./Poster";
import MoreMovies from "./MoreMovies";
import ActorsCards from "./ActorsCards";

import styles from "./Movie.module.scss";

const Movie = ({ movieDetails }) => {
  return (
    <>
      <section className={ styles.movieReview__sectionIntro }>
        <div className={ styles.movieReview__sectionIntroInner }
             style={ movieDetails.backdrop_path
               ? { backgroundImage: `url(${ imageFullUrl({ imagePath: movieDetails.backdrop_path }) }` }
               : { backgroundColor: '#f5f6f6' } }></div>
      </section>

      <section className={ styles.movieReview }>
        <div className={ styles.movieReview__poster }>

          <Poster
            posterPath={ movieDetails.poster_path }
            movieTitle={ movieDetails.title }
          />

        </div>

        <div className={ styles.movieReview__content }>

          <MovieDetails movieDetails={ movieDetails } />

        </div>
      </section>

      <section>
        { movieDetails.videos?.results?.length > 0 && (
          <div className={styles.movieReview__section}>
            <h2 className={styles.movieReview__titleSecond}>Watch trailer</h2>

            <Slider
              className={ styles.movieReview__sliderItem }
              slides={ movieDetails.videos.results }
              navigation
            />
          </div>
        ) }

        { movieDetails.credits?.cast?.length > 0 && (
          <div className={ styles.movieReview__section }>
            <h2 className={ styles.movieReview__titleSecond }>Actors</h2>

            <ActorsCards cast={ movieDetails.credits.cast } />
          </div>
        ) }

        { movieDetails.similar?.results?.length > 0 && (
          <div className={ styles.movieReview__section }>
            <h2 className={ styles.movieReview__titleSecond }>More similar movies</h2>

            <MoreMovies movies={ movieDetails.similar.results } />
          </div>
        ) }

        { movieDetails.recommendations?.results?.length > 0 && (
          <div className={ styles.movieReview__section }>
            <h2 className={ styles.movieReview__titleSecond }>Recommended movies</h2>

            <MoreMovies movies={ movieDetails.recommendations.results } />
          </div>
        ) }
      </section>
    </>
  );
}

export default Movie;