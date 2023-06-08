import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot, useRecoilValue } from 'recoil';
import { darkModeState } from './atoms/recoil';
import DarkModeToggle from './components/DarkModeToggle';
import Mainpg from './page/Mainpg';

const App = () => {

  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Mainpg />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;