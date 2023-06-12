import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { darkModeState, isBase, isModal, isRegi } from '../atoms/recoil';
import './login.css'
import Basemodal from '../modal/Basemodal';
import Loginmodal from '../modal/Loginmodal';
import RegiModal from '../modal/Regimodal';

function LoginButton() {
    const theme = useRecoilValue(darkModeState);
    const Regi = useRecoilValue(isRegi);
    const [isOpen, setIsOpen] = useRecoilState(isModal);
    const [isBaseOpen, setIsBaseOpen] = useRecoilState(isBase);

    const LoginClick = () => {
        setIsBaseOpen(true);
        setIsOpen(true);
    };

    return (
        <div>
            <button className={`hover:bg-[rgba(0,0,0,0.7)] ${theme === 'light' ? 'Loginw' : 'Loginb'}`} onClick={LoginClick}>로그인</button>
            <Basemodal>
                <Loginmodal />
            </Basemodal>
        </div>
    )
}

export default LoginButton