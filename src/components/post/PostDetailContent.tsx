'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import UserAvatar from '../user/UserAvatar';
import CommentSection from './comments/CommentSection';

const PostDetailContent = () => {
    const router = useRouter();

    const goToUserProfile = () => router.push('/user/23');

    return (
        <section className="w-full lg:w-[70%] h-full rounded-md text-slate-100 bg-dark1">
            <div className="max-w-[90%] lg:max-w-[80%] mx-auto py-4">
                <div className="h-[25%] flex items-center gap-2 space-y-1">
                    <UserAvatar classname="w-[40px] h-[40px]" />
                    <div>
                        <h4
                            className="text-base font-semibold cursor-pointer tracking-wide hover:text-white"
                            onClick={goToUserProfile}
                        >
                            Username
                        </h4>
                        <p className="text-sm text-slate-400 cursor-pointer hover:text-white">
                            2 mins ago
                        </p>
                    </div>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl lg:text-4xl font-bold cursor-default lg:tracking-wide lg:leading-relaxed text-white">
                        Lorem ipsum dolor sit amet consec tetur adipisicing
                        elit. Error, quod! and duck the rabbit
                    </h2>
                    <div className="flex text-xs lg:text-lg text-slate-300 gap-4 mt-4">
                        <p className="p-2 border border-dark1 hover:border-slate-600 rounded-md cursor-pointer hover:bg-[#222222] hover:text-white">
                            #Typescript
                        </p>
                        <p className="p-2 border border-dark1 hover:border-slate-600 rounded-md cursor-pointer hover:bg-[#222222] hover:text-white">
                            #React
                        </p>
                        <p className="p-2 border border-dark1 hover:border-slate-600 rounded-md cursor-pointer hover:bg-[#222222] hover:text-white">
                            #Nextjs
                        </p>
                    </div>
                    <p className="mt-4 lg:text-xl lg:tracking-wide cursor-default">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam velit quis enim vel iure sed reprehenderit
                        consectetur dolorem. Saepe, veritatis?
                    </p>
                </div>
                {/* COMMENTS */}
                <CommentSection />
            </div>
        </section>
    );
};

export default PostDetailContent;
