import { Link } from "react-router-dom";
import { IoBookmarkOutline } from "react-icons/io5";

import { imageUrl } from "config";
import { calcDate, roundRatingValue } from "helpers/helpers";
import Button from "components/Button/Button";
import Genre from "components/Genre/Genre";

import styles from "./Trendcard.module.scss";

const Trendcard = ( { movie } ) => {
    const ratingRounded = roundRatingValue(movie.vote_average);

    return (
        <figure className={styles.item} id={`trendcard-${movie.id}`}>
            <div className={styles.thumb}>
                <img src={imageUrl + movie.poster_path}
                     alt={movie.title}
                     className={styles.img} />
                <div className={styles.rating}>
                    <span>{ratingRounded}</span>
                </div>

                <div className={styles.description}>
                    <div className={styles.descriptionHeading}>
                        <div className={styles.info}>
                            <Link to={`/movie/${movie.id}`} className={styles.permalink}>
                                <div className={styles.descriptionTitle}>
                                    {movie.title}
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.descriptionContent}>
                        <p>
                            {movie.overview}
                        </p>
                    </div>

                    <Link to={`/movie/${movie.id}`} className="btn btn btn-primary">Details</Link>
                </div>
            </div>

            <figcaption className={styles.heading}>
                <div className={styles.infoWrapper}>
                    <div className={styles.info}>
                        <Link to={`/movie/${movie.id}`} className={styles.permalink}>
                            <div className={styles.title}>
                                { movie.title }
                            </div>
                        </Link>
                        <span className={styles.release}>
                            { calcDate(movie.release_date) }
                        </span>
                    </div>

                    <div className={styles.infoDetails}>
                        <Button className={styles.icon} data-hash={movie.id}>
                            <IoBookmarkOutline className={styles.iconSvg} />
                        </Button>
                        {/*<button className={styles['icon']} data-hash={movie.id}>*/}
                        {/*    <IoBookmark className={styles['icon-svg']} />*/}
                        {/*</button>*/}
                    </div>
                </div>

                <ul className={styles.genres}>
                    <Genre className={styles.genresItem} genres={movie.genre_ids} />
                </ul>
            </figcaption>
        </figure>
    );
}

export default Trendcard;