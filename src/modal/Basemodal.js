import React, { useEffect, useRef, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { darkModeState, isModal } from '../atoms/recoil';

function BaseModal({ children }) {
    const [isOpen, setIsOpen] = useRecoilState(isModal);
    const theme = useRecoilValue(darkModeState);
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
                <div className={`fixed top-0 left-0 w-[100%] h-[100%] ${theme === 'light' ? 'bg-[rgba(249,249,249,0.85)]' : 'bg-[rgba(0,0,0,0.5)]'} z-10 `} />
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