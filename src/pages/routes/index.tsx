import React from 'react';
import {
  BrowserRouter ,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import Home from '../Home';

function Router(){
    return(
        <>
          <BrowserRouter>
             <Routes>
                 <Route path={'/'} element={<Home />} />
             </Routes>
         </BrowserRouter>
        </>  
    )
}

export default Router