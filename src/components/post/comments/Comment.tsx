'use client';
import UserAvatar from '@/components/user/UserAvatar';
import { useRouter } from 'next/navigation';
import React from 'react';
import { RiHeart2Line } from 'react-icons/ri';

const Comment = () => {
    const router = useRouter();

    const goToUserProfile = () => router.push('/user/23');

    return (
        <article className="w-full mt-4 flex justify-between">
            <div className="w-[10%] lg:w-[10%] flex justify-center">
                <UserAvatar classname="w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] mt-2" />
                <div className=""></div>
            </div>
            <div className="w-[88%] lg:w-[90%]">
                <div className="w-full border-2 border-slate-700 rounded-md p-2">
                    <div className="flex items-center gap-2">
                        <h4
                            className="text-slate-300 text-sm lg:text-base font-semibold tracking-tight cursor-pointer hover:text-white"
                            onClick={goToUserProfile}
                        >
                            Username
                        </h4>
                        <p className="text-slate-400">&#x2022;</p>
                        <p className="text-xs text-slate-400">10 mins ago</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-sm lg:text-base text-white tracking-wide">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Accusantium ullam odit aliquam rem ipsum
                            libero.
                        </p>
                    </div>
                </div>
                <div className="flex items-center p-2 gap-4">
                    <div className="flex items-center gap-1">
                        <RiHeart2Line />
                        <span>3 likes</span>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Comment;
