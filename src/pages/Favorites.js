import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Trans, useTranslation } from 'react-i18next';

import { selectorFavoritesPagination, selectorFavoritesState } from 'store/selectors/favoritesSelectors';
import { PAGINATION_TYPE, setPagination } from 'store/actions';
import { setTrendsCurrentPage } from 'store/actions/trendsActions';

import TrendcardsContainer from 'pages/Home/TrendcardsContainer';

import Loader from 'components/Loader';
import PageHeading from 'components/PageHeading';
import PageSubHeading from 'components/PageSubHeading';
import Pagination from 'components/Pagination';

import styles from 'components/layout/Layout.module.scss';

const Favorites = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { fetching: favoritesFetching, currentPage } = useSelector( selectorFavoritesState );
  const { isPaginationVisible, totalPages, movies: moviesList } = useSelector( selectorFavoritesPagination );

  useEffect( () => {
    dispatch( setTrendsCurrentPage( { fetching: false, page: 1 } ) );
  }, [] );

  const favoritesPaginationClickHandler = ( page ) => dispatch( setPagination( { type: PAGINATION_TYPE.FAVORITES, fetching: favoritesFetching, page } ) );

  return (
    <>
      <PageHeading>{ t( 'Favorite movies' ) }</PageHeading>

      { favoritesFetching
        ? <Loader />
        : (
          <>
            <div className={ styles.container }>
              { moviesList.length
                ? <TrendcardsContainer movies={ moviesList[currentPage - 1] } />
                : (
                  <div className={ styles.contentCentered }>
                    <Trans i18nKey='empty_favorites' t={ t }>
                      <PageSubHeading>You didn't mark any movie as favorite</PageSubHeading>
                      <p>Start reviewing movies:</p>
                      <Link to='/'>Trending movies of the day</Link>
                    </Trans>
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