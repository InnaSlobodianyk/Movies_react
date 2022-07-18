import Button from "../Button/Button";
import trendcardClass from "./Trendcard.module.scss";
import { imageUrl } from "../../config";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import Genre from "../Genre/Genre";

const Trendcard = ( { movie } ) => {
    const calcDate = releaseDate => {
        if (releaseDate !== '') {
            const date = new Date(releaseDate);
            return date.getFullYear();
        } else {
            return '';
        }
    };

    const limitMovieTitle = ( title, limit = 28 ) => {
        const newTitle = [];

        if(title.length > limit) {
            title.split(' ').reduce((acc, cur) => {

                if(acc + cur.length <= limit) {
                    newTitle.push(cur);
                }

                return acc + cur.length;
            }, 0);

            return `${newTitle.join(' ')}...`;
        }

        return title;
    };

    const roundRatingValue = ( rating ) => {
        return parseFloat(rating.toFixed(1));
    };

    return (
        <figure className={trendcardClass['item']} id={ `trendcard-${movie.id}`}>
            <div className={trendcardClass['thumb']}>
                <img src={imageUrl + movie.poster_path}
                     alt={movie.title}
                     className={trendcardClass['img']} />
                <div className={trendcardClass['rating']}>
                    <span>{roundRatingValue(movie.vote_average)}</span>
                </div>

                <div className={trendcardClass['description']}>
                    <div className={trendcardClass['description-heading']}>
                        <div className={trendcardClass['info']}>
                            <a href={`/movie/#${movie.id}`} className={trendcardClass['permalink']}>
                                <h3 className={trendcardClass['description-title']}>
                                    {movie.title}
                                </h3>
                            </a>
                        </div>
                    </div>

                    <div className={trendcardClass['description-content']}>
                        <p>
                            {movie.overview}
                        </p>
                    </div>

                    <a href={`/movie/#${movie.id}`} className="btn btn btn-primary">Details</a>
                </div>
            </div>

            <figcaption className={trendcardClass['heading']}>
                <div className={trendcardClass['info-wrapper']}>
                    <div className={trendcardClass['info']}>
                        <a href={`/movie/#${movie.id}`} className={trendcardClass['permalink']}>
                            <h3 className={[trendcardClass['title'], trendcardClass['title-cropped']].join(' ')}>
                                { limitMovieTitle(movie.title) }
                            </h3>
                        </a>
                        <span className={trendcardClass['release']}>
                            { calcDate(movie.release_date) }
                        </span>
                    </div>

                    <div className={trendcardClass['info-details']}>
                        <Button className={trendcardClass['icon']} data-hash={movie.id}>
                            <IoBookmarkOutline className={trendcardClass['icon-svg']} />
                        </Button>
                        {/*<button className={trendcardClass['icon']} data-hash={movie.id}>*/}
                        {/*    <IoBookmark className={trendcardClass['icon-svg']} />*/}
                        {/*</button>*/}
                    </div>
                </div>

                <ul className={trendcardClass['genres']}>
                    <Genre className={trendcardClass['genres-item']} genres={movie.genre_ids} />
                </ul>
            </figcaption>
        </figure>
    );
}

export default Trendcard;