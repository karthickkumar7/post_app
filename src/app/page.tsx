import Post from '@/components/post/Post';

const Home = () => {
    return (
        <>
            <section className="hidden lg:inline-block w-[250px] p-2 text-slate-100">
                <ul className="">
                    <li className="px-3 py-2 hover:underline rounded-md cursor-pointer hover:contrast-75 hover:bg-indigo-900">
                        Home
                    </li>
                    <li className="px-3 py-2 hover:underline rounded-md cursor-pointer hover:contrast-75 hover:bg-indigo-900">
                        Reading list
                    </li>
                    <li className="px-3 py-2 hover:underline rounded-md cursor-pointer hover:contrast-75 hover:bg-indigo-900">
                        Listings
                    </li>
                    <li className="px-3 py-2 hover:underline rounded-md cursor-pointer hover:contrast-75 hover:bg-indigo-900">
                        Podcast
                    </li>
                </ul>
            </section>
            <section className="w-[650px] space-y-2">
                <div>
                    <ul className="py-3 px-4 flex gap-4 text-slate-300">
                        <li className="hover:text-indigo-500 cursor-pointer">
                            Relevant
                        </li>
                        <li className="hover:text-indigo-500 cursor-pointer">
                            Latest
                        </li>
                        <li className="hover:text-indigo-500 cursor-pointer">
                            Top
                        </li>
                    </ul>
                </div>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </section>
            <section className="hidden lg:inline-flex w-[292px]">1</section>
        </>
    );
};

export default Home;
