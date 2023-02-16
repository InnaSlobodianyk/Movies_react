import { Link } from "react-router-dom";
import { IoBookmarkOutline } from "react-icons/io5";

import { calcDate, imageFullUrl } from "helpers";
import Button from "components/Button";
import Genre from "components/Genre";
import Label from "components/Label";

import styles from "./Trendcard.module.scss";

const Trendcard = ( { movie } ) => (
    <figure className={styles.item} id={`trendcard-${movie.id}`}>
        <div className={styles.thumb}>
            { movie.poster_path && (
              <img src={ imageFullUrl( { imagePath: movie.poster_path } ) }
                   alt={movie.title} />
            ) }

            <Label className={styles.rating}>
                { movie.vote_average }
            </Label>

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

                <Link to={`/movie/${movie.id}`} className={styles.btn}>
                    <Label>
                        Details
                    </Label>
                </Link>
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

            <Genre className={styles.genresItem} genres={ movie.genres } />
        </figcaption>
    </figure>
);

export default Trendcard;