import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot, useRecoilValue } from 'recoil';
import { darkModeState } from './atoms/recoil';
import DarkModeToggle from './components/DarkModeToggle';
import Mainpg from './page/Mainpg';
import Searchpg from './page/Searchpg';
import Recentpg from './page/Recentpg';
import Afterpg from './page/Loginpg/Afterpg';

const App = () => {

  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Mainpg />} />
            <Route path='/search' element={<Searchpg />} />
            <Route path='/recent' element={<Recentpg />} />
            <Route path='/login' element={<Afterpg />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;