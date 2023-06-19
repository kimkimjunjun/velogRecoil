import React from 'react'
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../../atoms/recoil';

function RcPosting() {
    const theme = useRecoilValue(darkModeState);

    return (
        <div className={`w-[20rem] rounded-[4px] shadow-md m-5 hover:-translate-y-2 duration-300`}>
            <a className='block text-inherit no-underline hover:animate-moveUp' href='#'>
                <div className='w-full relative'>
                    <img className='top-0 left-0 w-full h-[170px] object-cover block rounded-t-md' src='https://velog.velcdn.com/images/oilater/post/282e929a-0258-486a-b580-b915afd5e9a0/image.png' alt=''></img>
                </div>
            </a>
            <div className={`p-4 flex-1 ${theme === 'light' ? 'bg-white' : 'bg-[#1E1E1E]'}`}>
                <a className='block text-inherit' href='#'>
                    <h4 className='text-[1rem] font-bold m-0 text-ellipsis'>[자바스크립트] Symbol 핵심 정리하기</h4>
                    <div className='flex-1'>
                        <p className='break-words text-[0.875rem] h-[3.9rem] text-ellipsis overflow-hidden'>Symbol.iterator 부분이 이해가 잘 안가 이웅모님의 '모던 자바스크립트' 책을 보면서 정리한 내용입니다.Iterator 유튜브 무료 강의 (한글 자막) 이 영상을 보면서 많은 도움을 얻었어요. 필요하신 분은 참고해서 공부해보세요~!</p>
                    </div>
                </a>
                <div className='text-[0.75rem] text-[#868E96] mt-5'>
                    <span>약 1시간 전</span>
                    <span class="ml-1 mr-1">·</span>
                    <span>0개의 댓글</span>
                </div>
            </div>
        </div>
    )
}

export default RcPosting;