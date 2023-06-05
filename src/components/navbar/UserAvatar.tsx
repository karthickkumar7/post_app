'use client';
import { useState } from 'react';
import DropdownMenu from './DropdownMenu';

const UserAvatar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`relative h-[35px] w-[35px] bg-slate-200 rounded-full cursor-pointer hover:ring ring-indigo-800 ${
                isOpen && 'ring-indigo-600 ring-4'
            }`}
            onClick={() => setIsOpen((pv) => !pv)}
        >
            {isOpen && <DropdownMenu />}
        </div>
    );
};

export default UserAvatar;
