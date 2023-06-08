import React from 'react'
import image from '../image/velogL.png';
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../atoms/recoil';
import '../App.css'

function Logoh() {
    const theme = useRecoilValue(darkModeState)
    return (
        <div className='1'>
            <img className={`h-6 Logoh ${theme === 'light' ? 'filter invert-[0%]' : 'filter invert-[100%]'}`} src={image} alt='' />
        </div>
    )
}

export default Logoh