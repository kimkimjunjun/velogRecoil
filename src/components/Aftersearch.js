import React, { useState } from 'react';

function AfterSearch() {
  const [inputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  return (
    <div className={`mt-[3.5rem] mr-auto ml-auto w-[768px]`}>
      <div className={`mb-6 flex items-center cursor-text h-16`} id='myDiv'>
        <svg className='ml-5 mr-5' width="24" height="24" viewBox="0 0 17 17">
          <path fill-rule="evenodd" d="M13.66 7.36a6.3 6.3 0 1 1-12.598 0 6.3 6.3 0 0 1 12.598 0zm-1.73 5.772a7.36 7.36 0 1 1 1.201-1.201l3.636 3.635c.31.31.31.815 0 1.126l-.075.075a.796.796 0 0 1-1.126 0l-3.636-3.635z" clip-rule="evenodd" fill="currentColor"></path>
        </svg>
        <input className={`flex-1 text-[1.5rem] h-8 bg-transparent border-0 outline-none`} placeholder='검색어를 입력하세요' onFocus={handleInputFocus} onBlur={handleInputBlur}></input>
      </div>
    </div>
  );
}

export default AfterSearch;