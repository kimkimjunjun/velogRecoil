import React from 'react'
import { darkModeState } from '../atoms/recoil';
import { useRecoilValue } from 'recoil';

function SearchButton() {
    const theme = useRecoilValue(darkModeState);

  return (
    <button className={`flex items-center justify-center mr-3 w-10 h-10 rounded-full ${theme === 'light' ? 'hover:bg-[rgba(0,0,0,0.1)]' : 'hover:bg-[rgba(255,255,255,0.1)]'}`}>
        <svg width="17" height="17" viewBox="0 0 17 17"><path fill-rule="evenodd" d="M13.66 7.36a6.3 6.3 0 1 1-12.598 0 6.3 6.3 0 0 1 12.598 0zm-1.73 5.772a7.36 7.36 0 1 1 1.201-1.201l3.636 3.635c.31.31.31.815 0 1.126l-.075.075a.796.796 0 0 1-1.126 0l-3.636-3.635z" clip-rule="evenodd" fill="currentColor"></path></svg>
    </button>
  )
}

export default SearchButton