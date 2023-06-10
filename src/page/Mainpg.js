import React from 'react';
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../atoms/recoil';
import DarkModeToggle from '../components/DarkModeToggle';
import './darkmode.css';
import '../App.css';
import Header from '../components/Header';
import PostTitle from '../components/posting/PostTitle';

const Mainpg = () => {
  const theme = useRecoilValue(darkModeState);

  return (
    <div className='h-20'>
      <Header>
        <PostTitle/>
      </Header>
    </div>
  );
};

export default Mainpg;