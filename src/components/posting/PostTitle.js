import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { darkModeState } from '../../atoms/recoil';
import { useLocation, Link } from 'react-router-dom';

function PostTitle({ children }) {
  const theme = useRecoilValue(darkModeState);
  const location = useLocation();

  const [currentUrl, setCurrentUrl] = useState('');
  const [leftValue, setLeftValue] = useState('0');
  const [isTransition, setIsTransition] = useState(false);

  useEffect(() => {
    setCurrentUrl(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const newLeftValue = currentUrl === '/' ? '0' : '50%';
    setLeftValue(newLeftValue);
    setIsTransition(true);

    // 트랜지션 효과가 완료된 후에 isTransition을 false로 설정
    const timeout = setTimeout(() => {
      setIsTransition(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [currentUrl]);

  const isRecentPage = currentUrl === '/recent';

  return (
    <div className={`w-[1728px] ml-auto mr-auto`}>
      <div className={`mt-6 flex justify-between items-center relative`}>
        <div className={`flex items-center`}>
          <div className={`flex relative w-[14rem]`}>
            <Link
              to="/"
              className={`flex ${
                currentUrl === '/' ? 'font-bold' : 'font-light text-[#ACACAC]'
              } w-[7rem] items-center justify-center text-[1.125rem] no-underline h-12 ${
                isTransition ? 'transition-all duration-500 ease-in-out' : ''
              }`}
            >
              <svg
                className={`mr-2`}
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path>
              </svg>
              트렌딩
            </Link>
            <Link
              to="/recent"
              className={`flex ${
                currentUrl === '/recent' ? 'font-bold' : 'font-light text-[#ACACAC]'
              } w-[7rem] items-center justify-center text-[1.125rem] no-underline h-12 ${
                isTransition ? 'transition-all duration-500 ease-in-out' : ''
              }`}
            >
              <svg
                className="mr-2"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
              </svg>
              최신
            </Link>
            <div
              className={`transition-all duration-500 ease-out w-[50%] h-[2px] absolute bottom-0 ${
                theme === 'light' ? 'bg-black' : 'bg-white'
              }`}
              style={{ left: leftValue }}
            />
          </div>
          <div>{children}</div>
        </div>
        <div className={`flex items-center justify-center cursor-pointer`}>
          <svg
            className={`cursor-pointer text-[1.5rem]`}
            stroke="currengtColor"
            fill="#868E96"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default PostTitle;