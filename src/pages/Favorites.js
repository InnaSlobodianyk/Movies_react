import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectorFavoritesState } from 'store/selectors/favoritesSelectors';
import { PAGINATION_TYPE, setPagination } from 'store/actions';

import TrendcardsContainer from 'pages/Home/TrendcardsContainer';

import Loader from 'components/Loader';
import PageHeading from 'components/PageHeading';
import PageSubHeading from 'components/PageSubHeading';
import Pagination from 'components/Pagination';

import { getSlicedFavorites } from 'helpers';

import styles from 'components/layout/Layout.module.scss';

const Favorites = () => {
  const dispatch = useDispatch();
  const { fetching: favoritesFetching, favoriteMovies, currentPage } = useSelector( selectorFavoritesState );
  const pageSize = 20;
  const isPaginationVisible = favoriteMovies?.length > pageSize;
  const totalPages = Math.ceil( favoriteMovies?.length / pageSize );
  const moviesList = getSlicedFavorites( { favorites: favoriteMovies, pageSize } );
  const paginationType = PAGINATION_TYPE.FAVORITES;

  const favoritesPaginationClickHandler = ( page ) => dispatch( setPagination( { type: paginationType, fetching: favoritesFetching, page } ) );

  return (
    <>
      <PageHeading>Favorite movies</PageHeading>

      { favoritesFetching
        ? <Loader />
        : (
          <>
            <div className={ styles.container }>
              { favoriteMovies?.length
                ? <TrendcardsContainer movies={ moviesList[currentPage - 1] } />
                : (
                  <div className={ styles.contentCentered }>
                    <PageSubHeading>You didn't mark any movie as favorite</PageSubHeading>
                    <p>Start reviewing movies:</p>
                    <Link to='/'>Trending movies of the day</Link>
                  </div>
                )
              }
            </div>

            { isPaginationVisible && (
              <Pagination
                totalPages={ totalPages }
                currentPage={ currentPage }
                onPageChange={ favoritesPaginationClickHandler }
              />
            ) }
          </>
        ) }
    </>
  );
}

export default Favorites;