import React from 'react'
import { darkModeState, isBase, isLoggedInState, isModal } from '../../atoms/recoil';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

function MenuWrap() {
    const theme = useRecoilValue(darkModeState);
    const setIsLoggedIn = useSetRecoilState(isLoggedInState);
    const [isOpen, setIsOpen] = useRecoilState(isModal);
    const [isBaseOpen, setIsBaseOpen] = useRecoilState(isBase);

    return (
        <div className='absolute t-[100%] mt-4 right-20'>
            <div className={`relative z-[5] w-[12rem] ${theme === 'light' ? 'bg-[#FFFFFF]' : 'bg-[#1e1e1e]'} shadow-md`} style={{ boxShadow: 'rgba(0,0,0,0.1) 0px 0px 8px' }}>
                <a className={`block text-inherit no-underline ${theme === 'light' ? 'hover:bg-[#F8F9FA]' : 'hover:bg-[#1e1e1e]'}`}>
                    <div className={`${theme === 'light' ? 'text-[#212529] hover:text-[#20C997]' : 'text-[#ececec] hover:text-[#96F2D7]'} p-3 font-medium cursor-pointer`}>내 벨로그</div>
                </a>
                <a className={`block text-inherit no-underline ${theme === 'light' ? 'hover:bg-[#F8F9FA]' : 'hover:bg-[#1e1e1e]'}`}>
                    <div className={`${theme === 'light' ? 'text-[#212529] hover:text-[#20C997]' : 'text-[#ececec] hover:text-[#96F2D7]'} p-3 font-medium cursor-pointer`}>임시 글</div>
                </a>
                <a className={`block text-inherit no-underline ${theme === 'light' ? 'hover:bg-[#F8F9FA]' : 'hover:bg-[#1e1e1e]'}`}>
                    <div className={`${theme === 'light' ? 'text-[#212529] hover:text-[#20C997]' : 'text-[#ececec] hover:text-[#96F2D7]'} p-3 font-medium cursor-pointer`}>읽기 목록</div>
                </a>
                <a className={`block text-inherit no-underline ${theme === 'light' ? 'hover:bg-[#F8F9FA]' : 'hover:bg-[#1e1e1e]'}`}>
                    <div className={`${theme === 'light' ? 'text-[#212529] hover:text-[#20C997]' : 'text-[#ececec] hover:text-[#96F2D7]'} p-3 font-medium cursor-pointer`}>설정</div>
                </a>
                <a className={`block text-inherit no-underline ${theme === 'light' ? 'hover:bg-[#F8F9FA]' : 'hover:bg-[#1e1e1e]'}`} onClick={() => {setIsLoggedIn(false); setIsBaseOpen(false); setIsOpen(false)}}>
                    <div className={`${theme === 'light' ? 'text-[#212529] hover:text-[#20C997]' : 'text-[#ececec] hover:text-[#96F2D7]'} p-3 font-medium cursor-pointer `}>로그아웃</div>
                </a>
            </div>
        </div>
    )
}

export default MenuWrap