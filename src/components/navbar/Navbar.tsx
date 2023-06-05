import Link from 'next/link';
import React from 'react';
import { HiMenu } from 'react-icons/hi';
import Searchbar from './Searchbar';
import UserAvatar from './UserAvatar';

const Navbar = () => {
    return (
        <header className="w-full h-[60px] sticky top-0 bg-dark1 text-slate-100">
            <nav className="max-w-[1200px] h-full px-4 mx-auto flex items-center justify-between">
                {/* LEFT */}
                <div className="h-full flex items-center gap-4">
                    {/* hidden in lg screen */}
                    <HiMenu className="text-3xl lg:hidden" />

                    <h2 className="font-bold p-2 border-2 rounded-md cursor-pointer border-slate-100">
                        <Link href={'/'}>POSTit</Link>
                    </h2>
                    {/* hidden in sm screen */}
                    <Searchbar />
                </div>

                {/* RIGHT */}
                {/* NOT LOGGED IN */}

                {/* LOGGED IN */}
                <div className="flex items-center gap-4">
                    {/* hidden in sm screen */}
                    <button className="hidden lg:inline-flex tracking-wide p-2 font-semibold rounded border border-indigo-400 text-indigo-400 hover:bg-indigo-500 hover:underline hover:text-slate-100">
                        Create Post
                    </button>

                    <UserAvatar />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
