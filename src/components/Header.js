import React, { Children } from 'react';
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../atoms/recoil';
import DarkModeToggle from './DarkModeToggle';
import '../page/darkmode.css';
import '../App.css';
import LoginButton from './LoginButton';
import SearchButton from './SearchButton';
import Logoh from './Logoh';

const Header = ({ children }) => {
    const theme = useRecoilValue(darkModeState);

    return (
        <div className='h-20'>
            <div className="flex h-[100%] items-center justify-between w-[1728px] mr-auto ml-auto header">
                <Logoh />
                <DarkModeToggle />
                <SearchButton />
                <LoginButton />

            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Header;