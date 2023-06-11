import React from 'react'
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../../atoms/recoil';

function Posting() {
    const theme = useRecoilValue(darkModeState);

    return (
        <div className={`w-[20rem] rounded-[4px] shadow-md m-5`}>
            <a className='block text-inherit no-underline hover:animate-moveUp' href='#'>
                <div className='w-full relative hover:animate-moveUp'>
                    <img className='top-0 left-0 w-full h-[170px] object-cover block' src='https://velog.velcdn.com/images/baby_dev/post/be5565ad-7362-412f-acdf-b22f1f3f276f/image.png' alt=''></img>
                </div>
            </a>
            <div className={`p-4 flex-1 ${theme === 'light' ? 'bg-white' : 'bg-[#1E1E1E]'}`}>
                <a className='block text-inherit' href='#'>
                    <h4 className='text-[1rem] font-bold m-0 text-ellipsis'>프론트엔드 ci/cd 속도 최적화 (feat. docker multi staging)</h4>
                    <div className='flex-1'>
                        <p className='break-words text-[0.875rem] h-[3.9rem] text-ellipsis'>11분 -> 1분내외? 어케했는교</p>
                    </div>
                </a>
                <div className='text-[0.75rem]'>
                    <span>2023년 5월 28일</span>
                    <span class="ml-1 mr-1">·</span>
                    <span>30개의 댓글</span>
                </div>
            </div>
        </div>
    )
}

export default Posting;