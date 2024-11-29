import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from '../pages/Home';
import News from '../pages/News';
import Selebrities from '../pages/Selebrities';
import Sports from '../pages/Sports';
import Technology from '../pages/Technology';
import Search from '../pages/Search';


function Router(){
    return(
             <Routes>
                 <Route path={'/'} element={<Home />} />
                 <Route path={'/news'} element={<News />} />
                 <Route path={'/selebrities'} element={<Selebrities />} />
                 <Route path={'/sports'} element={<Sports />} />
                 <Route path={'/technology'} element={<Technology />} />
                 <Route path={'/search/:keywordId'} element={<Search />} />
             </Routes>
    )
}

export default Router