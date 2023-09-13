import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { getCurrentUser } from 'store/effects/userEffects';

import Layout from 'components/layout';
import Lists from 'pages/Lists';
import Favorites from 'pages/Favorites';
import NotFound from 'pages/NotFound';
import Home from 'pages/Home';
import MoviePage from 'pages/MoviePage';
import SignUpPage from 'pages/SignUpPage';
import SignInPage from 'pages/SignInPage';

const App = () => {
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch( getCurrentUser() );
  }, [] );

  return (
    <Layout>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/lists/' element={ <Lists /> }/>
        <Route path='/favorites/' element={ <Favorites /> }/>
        <Route path='/movie/:movieId' element={ <MoviePage /> }/>
        <Route path='/sign-up/' element={ <SignUpPage /> }/>
        <Route path='/sign-in/' element={ <SignInPage /> }/>
        <Route path='*' element={ <NotFound /> }/>
      </Routes>
    </Layout>
  );
};

export default App;
