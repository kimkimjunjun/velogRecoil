import React from 'react'
import { darkModeState, isLoggedInState } from '../../../atoms/recoil';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Link } from 'react-router-dom';

function Write() {
    const theme = useRecoilValue(darkModeState);
    const setIsLoggedIn = useSetRecoilState(isLoggedInState);
    return (
        <div className='min-w-0 flex-1 flex flex-col relative z-1 shadow-sm'>
            <div className='h-[100%] flex flex-col relative'>
                <div className='min-h-0 pb-16 flex-1 flex flex-col'>
                    <div className='max-h-[540px] opacity-100'>
                        <div className='pt-8 pl-12 pr-12'>
                            <textarea placeholder='제목을 입력하세요' className={`${theme === 'light' ? 'bg-white' : 'bg-[#121212]'} h-[66px] block p-0 text-[2.75rem] w-[100%] resize-none outline-none font-bold`}></textarea>
                            <div className='bg-[rgb(73,80,87)] h-[6px] w-16 mt-6 mb-4 rounded-2xl'></div>
                            <div className='text-black text-[1.125rem] flex flex-wrap'>
                                <input placeholder='태그를 입력하세요' className={`${theme === 'light' ? 'bg-white text-[#212529]' : 'bg-[#121212] text-white'} inline-flex outline-none cursor-text text-[1.125rem] mb-3 min-w-[8rem] border-none `}></input>
                                <div className='block w-[100%] text-[#495057] transition-all duration-125 ease-in'></div>
                            </div>
                        </div>
                    </div>
                    <div className={`flex items-center ${theme === 'light' ? 'bg-white' : 'bg-[#121212]'} z-10 transition-all duration-125 ease-in flex-wrap mb-4 pl-12 pr-12 w-auto`}>
                        <button className='w-12 h-12 flex items-center justify-center text-[1.75rem] text-[#868e96] cursor-pointer flex-shrink-0 bg-none outline-none border-none p-0'>
                            <div className='text-[1rem] font-bold font-serif'>
                                H
                                <span className='text-[0.75rem]'>1</span>
                            </div>
                        </button>
                        <button className='w-12 h-12 flex items-center justify-center text-[1.75rem] text-[#868e96] cursor-pointer flex-shrink-0 bg-none outline-none border-none p-0'>
                            <div className='text-[1rem] font-bold font-serif'>
                                H
                                <span className='text-[0.75rem]'>2</span>
                            </div>
                        </button>
                        <button className='w-12 h-12 flex items-center justify-center text-[1.75rem] text-[#868e96] cursor-pointer flex-shrink-0 bg-none outline-none border-none p-0'>
                            <div className='text-[1rem] font-bold font-serif'>
                                H
                                <span className='text-[0.75rem]'>3</span>
                            </div>
                        </button>
                        <button className='w-12 h-12 flex items-center justify-center text-[1.75rem] text-[#868e96] cursor-pointer flex-shrink-0 bg-none outline-none border-none p-0'>
                            <div className='text-[1rem] font-bold font-serif'>
                                H
                                <span className='text-[0.75rem]'>4</span>
                            </div>
                        </button>
                        <div className='w-[1px] h-5 ml-2 mr-2 bg-[#DEE2E6]' />
                        <button className='w-12 h-12 flex items-center justify-center text-[1.75rem] text-[#868e96] cursor-pointer flex-shrink-0 bg-none outline-none border-none p-0'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"></path></svg>
                        </button>
                        <button className='w-12 h-12 flex items-center justify-center text-[1.75rem] text-[#868e96] cursor-pointer flex-shrink-0 bg-none outline-none border-none p-0'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"></path></svg>
                        </button>
                        <button className='w-12 h-12 flex items-center justify-center text-[1.75rem] text-[#868e96] cursor-pointer flex-shrink-0 bg-none outline-none border-none p-0'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"></path></svg>
                        </button>
                        <div className='w-[1px] h-5 ml-2 mr-2 bg-[#DEE2E6]' />
                        <button className='w-12 h-12 flex items-center justify-center text-[1.75rem] text-[#868e96] cursor-pointer flex-shrink-0 bg-none outline-none border-none p-0'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path></svg>
                        </button>
                        <button className='w-12 h-12 flex items-center justify-center text-[1.75rem] text-[#868e96] cursor-pointer flex-shrink-0 bg-none outline-none border-none p-0'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg>
                        </button>
                        <button className='w-12 h-12 flex items-center justify-center text-[1.75rem] text-[#868e96] cursor-pointer flex-shrink-0 bg-none outline-none border-none p-0'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path></svg>
                        </button>
                        <button className='w-12 h-12 flex items-center justify-center text-[1.75rem] text-[#868e96] cursor-pointer flex-shrink-0 bg-none outline-none border-none p-0'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></svg>
                        </button>
                    </div>
                    <div className='flex-1 min-h-0 flex flex-col'>
                        <textarea className='hidden'></textarea>
                        <div className='min-h-0 flex-1 text-[1.125rem] text-[black] font-mono'>
                            <div className='overflow-hidden relative w-1 h-0 top-1 left-12'>
                                <textarea className='absolute bottom-[-1em] p-0 w-[1000] h-[1em] outline-none' autoCorrect='off' autoCapitalize='off' spellCheck="false" tabIndex="0"></textarea>
                            </div>
                            <div className='pt-4 pl-12 pr-12'>
                                <div className='text-black text-[1.125rem] flex flex-wrap'>
                                    <input placeholder='당신의 이야기를 적어보세요...' className={`inline-flex outline-none cursor-text text-[1.125rem] mb-3 min-w-[40rem] border-none ${theme === 'light' ? 'bg-white text-[#212529]' : 'bg-[#121212] text-white'}`}></input>
                                    <div className='block w-[100%] text-[#495057] transition-all duration-125 ease-in'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`w-[975px] h-16 shadow-md fixed bottom-0 flex ${theme === 'light' ? 'bg-white' : 'bg-[#2e2e2e]'}`} style={{ boxShadow: 'rgba(0,0,0,0.2) 0px 0px 8px' }}>
                        <Link to='/'>
                            <button className={`text-[1.25rem] w-[8rem] h-10 m-3 items-center flex ${theme === 'light' ? 'hover:bg-[#E9ECEF]' : 'hover:bg-[#3e3e3e]'}`} onClick={() => setIsLoggedIn(true)}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.4em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>나가기</button>
                        </Link>
                        <div className='ml-auto p-3'>
                            <button className={`text-[#12B886] text-[1.25rem] mr-5 w-[7rem] h-10 rounded-sm font-extrabold ${theme === 'light' ? 'hover:bg-[#E9ECEF]' : 'hover:bg-[#3e3e3e]'}`}>임시저장</button>
                            <button className={`text-white bg-[#12B886] text-[1.25rem] font-extrabold w-[7rem] h-10 rounded-sm`}>출간하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Write