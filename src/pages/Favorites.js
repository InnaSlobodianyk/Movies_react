import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectorFavoritesPagination, selectorFavoritesState } from 'store/selectors/favoritesSelectors';
import { PAGINATION_TYPE, setPagination } from 'store/actions';

import TrendcardsContainer from 'pages/Home/TrendcardsContainer';

import Loader from 'components/Loader';
import PageHeading from 'components/PageHeading';
import PageSubHeading from 'components/PageSubHeading';
import Pagination from 'components/Pagination';

import styles from 'components/layout/Layout.module.scss';

const Favorites = () => {
  const dispatch = useDispatch();
  const { fetching: favoritesFetching, favoriteMovies, currentPage } = useSelector( selectorFavoritesState );
  const { isPaginationVisible, totalPages, movies: moviesList } = useSelector( selectorFavoritesPagination );

  const favoritesPaginationClickHandler = ( page ) => dispatch( setPagination( { type: PAGINATION_TYPE.FAVORITES, fetching: favoritesFetching, page } ) );

  return (
    <>
      <PageHeading>Favorite movies</PageHeading>

      { favoritesFetching
        ? <Loader />
        : (
          <>
            <div className={ styles.container }>
              { favoriteMovies.length
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