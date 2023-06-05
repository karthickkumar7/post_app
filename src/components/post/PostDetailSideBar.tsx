import { TbHeartPlus } from 'react-icons/tb';
import { BiComment } from 'react-icons/bi';
import { MdOutlineBookmarkBorder } from 'react-icons/md';

const PostDetailSideBar = () => {
    return (
        <section className="hidden lg:inline-block w-[5%] h-full py-8 text-slate-200">
            <div className="fixed space-y-8">
                <div className="group p-1 rounded-md space-y-2 cursor-pointer hover:bg-[#222222]">
                    <TbHeartPlus className="text-2xl group-hover:text-red-500" />
                    <p>23</p>
                </div>
                <div className="group p-1 rounded-md space-y-2 cursor-pointer hover:bg-[#222222]">
                    <BiComment className="text-2xl group-hover:text-amber-500" />
                    <p>38</p>
                </div>
                <div className="group px-1 py-2 rounded-md space-y-2 cursor-pointer hover:bg-[#222222]">
                    <MdOutlineBookmarkBorder className="text-2xl group-hover:text-indigo-400" />
                </div>
            </div>
        </section>
    );
};

export default PostDetailSideBar;
