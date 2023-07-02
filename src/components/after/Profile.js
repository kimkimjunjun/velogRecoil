import React from 'react'
import { darkModeState } from '../../atoms/recoil';
import { useRecoilValue } from 'recoil';

function Profile() {
    const theme = useRecoilValue(darkModeState);
  return (
    <div className={`cursor-pointer flex items-center`}>
        <img className='block h-10 w-10 shadow-md rounded-[50%] ml-5 transition-all duration-125 ease-in' src='https://velog.velcdn.com/images/wnsgnl323/profile/3ba7a9cd-df01-4237-a9ba-fcb8cd688cf5/social_profile.png' alt=''/>
        <svg className={`text-[1.5rem] ml-1 ${theme === 'light' ? 'text-[#868E96] hover:text-black' : 'text-[#ACACAC] hover:text-white'} transition-all duration-125`} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"></path></svg>
    </div>
  )
}

export default Profile