import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { getCurrentUser } from 'store/effects/userEffects';
import { selectorUserState } from 'store/selectors/userSelectors';

import ProtectedRoute from 'hoc/ProtectedRoute';
import PublicRoute from 'hoc/PublicRoute';

import PublicLayout from 'components/layout/PublicLayout';
import ProtectedLayout from 'components/layout/ProtectedLayout';

import Lists from 'pages/Lists';
import Favorites from 'pages/Favorites';
import NotFound from 'pages/NotFound';
import Home from 'pages/Home';
import MoviePage from 'pages/MoviePage';
import SignUpPage from 'pages/SignUpPage';
import SignInPage from 'pages/SignInPage';

const App = () => {
  const dispatch = useDispatch();
  // TODO: should not be removed????
  const userState = useSelector( selectorUserState );
  const sessionUserStatus = localStorage.getItem('user');

  useEffect( () => {
    dispatch( getCurrentUser( sessionUserStatus === 'loggedIn' ) );
  }, [userState.authenticatedUser] );

  return (
    <Routes>
      <Route element={ <PublicRoute /> }>
        <Route element={ <PublicLayout /> }>
          <Route path='/sign-up/' element={ <SignUpPage user={ sessionUserStatus === 'loggedIn' } /> } />
          <Route path='/sign-in/' element={ <SignInPage user={ sessionUserStatus === 'loggedIn' } /> } />
        </Route>
      </Route>

      <Route element={ <ProtectedRoute /> }>
        <Route element={ <ProtectedLayout /> }>
          <Route path='/' element={ <Home /> } />
          <Route path='/movie/:movieId' element={ <MoviePage /> } />
          <Route path='/favorites/' element={ <Favorites /> } />
          <Route path='/lists/' element={ <Lists /> } />
          <Route path='*' element={ <NotFound /> } />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
