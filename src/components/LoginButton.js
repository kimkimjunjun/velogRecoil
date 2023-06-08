import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { darkModeState, isModal } from '../atoms/recoil';
import './login.css'
import Basemodal from '../modal/Basemodal';
import Loginmodal from '../modal/Loginmodal';

function LoginButton() {
    const theme = useRecoilValue(darkModeState);
    const [isOpen, setIsOpen] = useRecoilState(isModal);

    return (
        <div>
            <button className={`hover:bg-[rgba(0,0,0,0.7)] ${theme === 'light' ? 'Loginw' : 'Loginb'}`} onClick={() => setIsOpen(true)}>로그인</button>
            <Basemodal>
                <Loginmodal />
            </Basemodal>
        </div>
    )
}

export default LoginButton