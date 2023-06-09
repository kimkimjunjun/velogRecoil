import React, { useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil';
import { isModal } from '../atoms/recoil';

function BaseModal({ children }) {
    const [isOpen, setIsOpen] = useRecoilState(isModal);
    const modalRef = useRef(null);

    const closeModal = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                closeModal();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    },[]);

    return (
        <div>
            {isOpen && (
                <div className='fixed top-0 left-0 w-[100%] h-[100%] bg-[rgba(249,249,249,0.85)] z-10 ' />
            )}
            {isOpen && (
                <div>
                {children}
                </div>
            )}
        </div>
    )
}

export default BaseModal