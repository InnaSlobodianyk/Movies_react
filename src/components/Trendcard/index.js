import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IoBookmark, IoBookmarkOutline, IoStar } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { addToFavorites, removeFromFavorites } from 'store/effects';

import { calcDate, imageFullUrl } from 'helpers';

import Button from 'components/Button';
import Genre from 'components/Genre';
import Label, { LABEL_SIZES, LABEL_VARIANTS } from 'components/Label';

import styles from './Trendcard.module.scss';

const Trendcard = ( { movie } ) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { id: movieId, isFavorite } = movie;

    const addToFavoriteClickHandler = () => dispatch( addToFavorites( { movie } ) );

    const removeFromFavoriteClickHandler = () => dispatch( removeFromFavorites( { movieId } ) );

    return (
      <figure className={ cn( styles.item, movie.overview ? styles.itemHoverable : '' ) } id={`trendcard-${ movieId }`}>
          <div className={ styles.thumb }>
              { movie.poster_path && (
                <img src={ imageFullUrl( { imagePath: movie.poster_path } ) }
                     className={ styles.thumbImg }
                     alt={ movie.title } />
              ) }

              <Label className={ styles.rating }>
                  <IoStar />
                  { movie.vote_average }
              </Label>
          </div>

          <figcaption className={ styles.heading }>
              <div className={ styles.headingContainer }>
                  <div className={ styles.infoWrapper }>
                      <div className={ styles.info }>
                          <Link to={ `/movie/${ movieId }` } className={ styles.permalink }>
                              <div className={ styles.title }>
                                  { movie.title }
                              </div>
                          </Link>
                          <span className={ styles.release }>
                              { calcDate( movie.release_date ) }
                          </span>
                      </div>

                      <div className={ styles.infoDetails }>
                          { isFavorite ? (
                            <Button className={ styles.icon } data-hash={ movieId } onClick={ removeFromFavoriteClickHandler } disabled={ !isFavorite }>
                                <IoBookmark className={ styles.iconSvg }/>
                            </Button>
                          ) : (
                            <Button className={ styles.icon } data-hash={ movieId } onClick={ addToFavoriteClickHandler } disabled={ isFavorite }>
                                <IoBookmarkOutline className={ styles.iconSvg }/>
                            </Button>
                          ) }
                      </div>
                  </div>

                  <Genre className={ styles.genresItem } genres={ movie.genres } variant={ LABEL_VARIANTS.bordered } labeled />

                  <Link to={ `/movie/${ movieId }` } className={ styles.btn }>
                      <Label size={ LABEL_SIZES.large }>
                          { t( 'Details' ) }
                      </Label>
                  </Link>
              </div>

              { movie.overview && (
                <div className={ styles.descriptionContent }>
                    <p>
                        { movie.overview }
                    </p>
                </div>
              ) }
          </figcaption>
      </figure>
    );
};

export default Trendcard;