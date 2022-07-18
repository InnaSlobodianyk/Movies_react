import { Route, Routes } from 'react-router-dom';

import Layout from "./components/layout/Layout";
import Lists from "./pages/Lists";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/lists/' element={ <Lists /> } />
        <Route path='/favorites/' element={ <Favorites /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </Layout>
  );
}

export default App;
