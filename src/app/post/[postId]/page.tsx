import PostDetailContent from '@/components/post/PostDetailContent';
import PostDetailRight from '@/components/post/PostDetailRight';
import PostDetailSideBar from '@/components/post/PostDetailSideBar';

import { TbHeartPlus } from 'react-icons/tb';
import { BiComment } from 'react-icons/bi';
import { MdOutlineBookmarkBorder } from 'react-icons/md';

const page = () => {
    return (
        <>
            {/* hidden sm screen */}
            <PostDetailSideBar />

            <PostDetailContent />

            {/* hidden sm screen */}
            <PostDetailRight />

            {/* hidden in lg screen */}
            <section className="fixed bottom-0 lg:hidden w-full h-[50px] gap-4 flex items-center justify-between px-16 bg-dark2 text-slate-200">
                <div className="flex items-center gap-2">
                    <TbHeartPlus className="text-2xl" />
                    <p>23</p>
                </div>
                <div className="flex items-center gap-2">
                    <BiComment className="text-2xl" />
                    <p>38</p>
                </div>
                <div className="flex items-center">
                    <MdOutlineBookmarkBorder className="text-2xl" />
                </div>
            </section>
        </>
    );
};

export default page;
