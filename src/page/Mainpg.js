import React from 'react';
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../atoms/recoil';
import './darkmode.css';
import '../App.css';
import Header from '../components/Header';
import PostTitle from '../components/posting/PostTitle';
import BasePost from '../components/posting/BasePost';
import Posting from '../components/posting/Posting';
import Week from '../components/posting/Week';

const Mainpg = () => {
  const theme = useRecoilValue(darkModeState);

  return (
    <div className='h-20'>
      <Header>
        <PostTitle>
          <Week />
        </PostTitle>
        <BasePost>
          <Posting />
          <Posting />
          <Posting />
          <Posting />
          <Posting />
          <Posting />
          <Posting />
          <Posting />
          <Posting />
          <Posting />
        </BasePost>
      </Header>
    </div>
  );
};

export default Mainpg;