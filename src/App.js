import { Route, Routes } from 'react-router-dom';

import Layout from "./components/layout";
import Lists from "./pages/Lists";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/lists/' element={ <Lists /> } />
        <Route path='/favorites/' element={ <Favorites /> } />
        <Route path='/movie/:movieId' element={ <MoviePage /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </Layout>
  );
}

export default App;
