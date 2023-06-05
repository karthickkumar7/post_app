'use client';
import { useRouter } from 'next/navigation';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';
import { MdOutlineBookmarkBorder } from 'react-icons/md';
import UserAvatar from '@/components/user/UserAvatar';

const Post = () => {
    const router = useRouter();

    const goToPostDetail = () => router.push('/post/23');
    const goToUserProfile = () => router.push('/user/23');

    return (
        <article className="w-full h-[250px] p-1 flex overflow-hidden bg-dark1 text-slate-200 rounded-md active:ring ring-slate-600">
            {/* hidden in sm screen */}
            <section className="hidden w-[15%] lg:w-[10%] h-full p-1 lg:flex justify-end">
                <UserAvatar classname="w-[35px] h-[35px]" />
            </section>

            <section className="w-full lg:w-[90%] h-full p-1">
                {/* hidden sm screen */}
                <div className="hidden lg:inline-block h-[25%] space-y-1">
                    <h4
                        className="text-sm font-semibold tracking-wide cursor-pointer text-slate-300 hover:text-white"
                        onClick={goToUserProfile}
                    >
                        Username
                    </h4>
                    <p className="text-xs text-slate-400 cursor-pointer hover:text-white">
                        2 mins ago
                    </p>
                </div>

                {/* hidden lg screen */}
                <div className="lg:hidden h-[25%] flex items-center gap-2 space-y-1">
                    <UserAvatar classname="w-[35px] h-[35px]" />
                    <div>
                        <h4
                            className="text-sm font-semibold tracking-wide cursor-pointer hover:text-white"
                            onClick={goToUserProfile}
                        >
                            Username
                        </h4>
                        <p className="text-xs text-slate-400 cursor-pointer hover:text-white">
                            2 mins ago
                        </p>
                    </div>
                </div>
                <div className="w-full h-[75%]">
                    {/* max 90 chars */}
                    <h2
                        className="text-lg lg:text-2xl font-bold cursor-pointer text-white hover:text-indigo-300 active:brightness-110"
                        onClick={goToPostDetail}
                    >
                        Lorem ipsum dolor sit amet consec tetur adipisicing
                        elit. Error, quod! and duck the rabbit
                    </h2>
                    <div className="flex text-xs lg:text-sm text-slate-300 gap-4 mt-2">
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
                    <div className="flex items-center justify-between text-sm text-slate-200 mt-4">
                        <div className="flex items-center gap-2">
                            <div className="p-2 flex items-center gap-1 hover:border-slate-600 rounded-md cursor-pointer hover:bg-[#222222] hover:text-white">
                                <AiOutlineHeart className="text-lg" />
                                <span>89</span>
                            </div>
                            <div className="p-2 flex items-center gap-1 hover:border-slate-600 rounded-md cursor-pointer hover:bg-[#222222] hover:text-white">
                                <BiComment className="text-lg" />
                                <span>89</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center h-[30px] mr-2 rounded-md cursor-pointer hover:bg-slate-700 px-2">
                                <MdOutlineBookmarkBorder className="text-lg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
};

export default Post;
