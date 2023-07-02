import React from 'react'
import { darkModeState } from '../../atoms/recoil';
import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';

function Newwrite() {
    const theme = useRecoilValue(darkModeState);
    return (
        <Link to='/write'>
            <button className={`h-8 pl-4 pr-4 text-[1rem] rounded-2xl outline-none font-bold break-keep ${theme === 'light' ? 'bg-[white] text-black cursor-pointer border border-black hover:bg-black hover:text-white' : 'bg-[black]] text-white cursor-pointer border border-white hover:bg-white hover:text-black'} transition - all duration - 150`}>새 글 작성</button>
        </Link>
    )
}

export default Newwrite;