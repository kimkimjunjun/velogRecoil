import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot, useRecoilValue } from 'recoil';
import { darkModeState } from './atoms/recoil';
import DarkModeToggle from './components/DarkModeToggle';
import Mainpg from './page/Mainpg';
import Searchpg from './page/Searchpg';
import Recentpg from './page/Recentpg';
import Afterpg from './page/Loginpg/Afterpg';
import { isLoggedInState } from './atoms/recoil';
import Searchpga from './page/Loginpg/Searchpga';
import AfterRecent from './page/Loginpg/AfterRecent';
import Write from './components/after/newwritee/Write';

const App = () => {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={isLoggedIn ? <Afterpg/> : <Mainpg />} />
            <Route path='/search' element={isLoggedIn ? <Searchpga/> : <Searchpg />} />
            <Route path='/recent' element={isLoggedIn ? <AfterRecent/> : <Recentpg />} />
            <Route path='/write' element={<Write/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;