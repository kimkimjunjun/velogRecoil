import React from 'react';
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../atoms/recoil';
import DarkModeToggle from '../components/DarkModeToggle';
import './darkmode.css';
import '../App.css';
import LoginButton from '../components/LoginButton';
import SearchButton from '../components/SearchButton';
import Logoh from '../components/Logoh';

const Mainpg = () => {
  const theme = useRecoilValue(darkModeState);

  return (
    <div className='h-20'>
      <div className="flex h-[100%] items-center justify-between w-[1728px] mr-auto ml-auto header">
        <Logoh/>
        <DarkModeToggle />
        <SearchButton />
        <LoginButton />
      </div>

    </div>
  );
};

export default Mainpg;