import React, {children} from 'react';
import { isModal } from '../atoms/recoil';
import { useRecoilState, useRecoilValue } from 'recoil'

function Basemodal() {
    const [isOpen,setIsOpen] = useRecoilState(isModal);

    const closeModal = () => {
        setIsOpen(false);
    }
  return (
    <div>
      {isOpen && <div className='ckd' onClick={closeModal} />}
      {isOpen && <div>{children}</div>}
    </div>
  )
}

export default Basemodal