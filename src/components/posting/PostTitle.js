import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { darkModeState } from '../../atoms/recoil'

function PostTitle() {
    const theme = useRecoilValue(darkModeState);

    return (
        <div className={`w-[1728px] ml-auto mr-auto`}>
            <div className={`mt-6 flex justify-between items-center relative`}>
                <div className={`flex items-center`}>
                    <div className={`flex relative w-[14rem]`}>
                        <a className={`flex active:text-black active:font-bold w-[7rem] items-center justify-center text-[1.125rem] no-underline h-12`} href="/"><svg className={`mr-2`} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></svg>트렌딩</a>
                        <a className={`flex active:text-black active:font-bold w-[7rem] items-center justify-center text-[1.125rem] no-underline h-12`} href="/recent"><svg className='mr-2' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>최신</a>
                        <div className={`left-0 w-[50%] h-[2px] absolute bottom-0 ${theme === 'light' ? 'bg-black' : 'bg-white'}`} />
                    </div>
                    <div className={`${theme === 'light' ? 'text-[#495057] bg-white' : 'text-[#D9D9D9] bg-[#1e1e1e]'} h-8 w-[6rem] rounded-sm flex items-center justify-between pl-2 pr-2 font-bold text-[0.875rem] cursor-pointer shadow-md`}>
                        이번 주
                        <svg className={`w-6 h-6`} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"></path></svg>
                    </div>
                </div>
                <div className={`flex items-center justify-center cursor-pointer`}>
                    <svg className={`cursor-pointer text-[1.5rem]`} stroke="currentColor" fill="#868E96" stroke-width="0" viewBox="0 0 24 24" class="more" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                </div>
            </div>
        </div>
    )
}

export default PostTitle;