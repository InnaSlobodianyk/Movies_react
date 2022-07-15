import { Route, Routes } from 'react-router-dom';

import Layout from "./components/layout/Layout";
import Lists from "./pages/Lists";
import Favourites from "./pages/Favourites";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/lists/' element={ <Lists /> } />
        <Route path='/favourites/' element={ <Favourites /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </Layout>
  );
}

export default App;
