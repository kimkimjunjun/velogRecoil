import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { darkModeState } from '../atoms/recoil';
import image from '../image/velogL.png';
import '../App.css';

const DarkModeToggle = () => {

  const [theme, setTheme] = useRecoilState(darkModeState);

  // 컴포넌트가 마운트될 때 로컬 스토리지에서 테마 설정 불러오기
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // 테마 변경 함수
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // 테마 설정 로컬 스토리지에 저장
  };

  useEffect(() => {
    // theme 값이 변경되면 body 요소의 클래스명도 업데이트
    if (theme === 'dark') {
      document.body.style.transition = 'background-color 0.2s ease-in-out';
      document.body.style.backgroundColor = '#121212';

    } else {
      document.body.style.transition = 'background-color 0.2s ease-in-out';
      document.body.style.backgroundColor = 'white';
    }

    document.body.classList.toggle('light', theme === 'light');
    document.body.classList.toggle('dark', theme === 'dark');

  }, [theme]);

  const iconFill = theme === 'light' ? 'black' : 'white';

  return (
      <button className={`flex items-center justify-center bg-[transparent] border-[transparent] ml-auto w-10 h-10 rounded-full ${theme === 'light' ? 'hover:bg-[rgba(0,0,0,0.1)]' : 'hover:bg-[rgba(255,255,255,0.1)]'}`} onClick={toggleTheme}>
        {theme === 'dark' ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill={iconFill}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.6144 14.6145C19.787 14.8653 18.9093 15.0001 18 15.0001C13.0294 15.0001 9 10.9707 9 6.00013C9 5.09088 9.13484 4.21311 9.3856 3.38574C5.69007 4.50583 3 7.93883 3 12.0001C3 16.9707 7.02944 21.0001 12 21.0001C16.0613 21.0001 19.4943 18.3101 20.6144 14.6145Z"
            ></path>
          </svg>
        )
          : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill={iconFill}>
              <path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z"></path>
            </svg>
          )}
      </button>
  );
}
export default DarkModeToggle;
