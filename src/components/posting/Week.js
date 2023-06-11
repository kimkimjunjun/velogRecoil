import React from 'react'
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../../atoms/recoil';

function Week() {
    const theme = useRecoilValue(darkModeState);
    return (
        <div className={`${theme === 'light' ? 'text-[#495057] bg-white' : 'text-[#D9D9D9] bg-[#1e1e1e]'} h-8 w-[6rem] rounded-sm flex items-center justify-between pl-2 pr-2 font-bold text-[0.875rem] cursor-pointer shadow-md`}>
            이번 주
            <svg className={`w-6 h-6`} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10l5 5 5-5z"></path>
            </svg>
        </div>
    )
}

export default Week;