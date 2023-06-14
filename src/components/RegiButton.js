import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { darkModeState, isBase, isModal, isRegi } from '../atoms/recoil';
import './login.css'
import Basemodal from '../modal/Basemodal';
import Loginmodal from '../modal/Loginmodal';
import RegiModal from '../modal/Regimodal';

function RegiButton() {
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
            <button className={`inline-block font-bold text-[#12B886] cursor-pointer`} onClick={LoginClick}>로그인</button>
            <Loginmodal />
        </div>
    )
}

export default RegiButton;