import React from 'react';

const UserProfile = () => {
    return (
        <div className="w-full text-slate-200">
            <div className="w-full h-[40px] lg:h-[60px] bg-dark2"></div>
            <section className="relative w-full lg:w-[80%] py-8 mx-auto rounded-lg bg-dark1">
                <div className="p-2">
                    {/* FOLLOW */}
                    <div className="p-4 flex justify-end">
                        <button className="px-4 py-2 rounded-md font-semibold bg-indigo-600 hover:brightness-110">
                            Follow
                        </button>
                    </div>

                    {/* INFO */}
                    <div className="p-4 flex flex-col lg:items-center">
                        <h4 className="text-xl lg:text-3xl font-bold tracking-wide">
                            Username
                        </h4>
                        <p className="text-sm lg:text-base lg:max-w-[80%] lg:text-center mt-4 tracking-wide">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellat illum reiciendis odio eaque! Magni
                            corrupti ex sunt dicta, dolore consectetur.
                        </p>
                        <p className="lg:text-lg text-slate-400 lg:text-center mt-4 tracking-wide">
                            user@email.com
                        </p>
                    </div>

                    {/* STATS */}
                    <div className="p-4 flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:justify-evenly">
                        <div className="lg:text-center">
                            <p className="text-sm tracking-wider text-slate-400">
                                Posts Written
                            </p>
                            <p className="text-lg lg:text-xl font-semibold">
                                34
                            </p>
                        </div>
                        <div className="lg:text-center">
                            <p className="text-sm tracking-wider text-slate-400">
                                Following
                            </p>
                            <p className="text-lg lg:text-xl font-semibold">
                                12
                            </p>
                        </div>
                        <div className="lg:text-center">
                            <p className="text-sm tracking-wider text-slate-400">
                                Followers
                            </p>
                            <p className="text-lg lg:text-xl font-semibold">
                                2
                            </p>
                        </div>
                    </div>
                </div>

                {/* USER PROFILE */}
                <div className="absolute -top-[25px] left-[20px] lg:-top-[50px] lg:left-[50%] lg:-translate-x-[50%] ring-4 lg:ring-8 ring-dark2 w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] rounded-full bg-blue-200"></div>
            </section>

            {/* RECENT POSTS */}
            <section className="relative w-full lg:w-[80%] py-4 mx-auto mt-8 rounded-lg bg-dark1">
                {/* INFO */}
                <div className="p-4 flex flex-col lg:items-center">
                    <h4 className="text-xl lg:text-3xl font-bold tracking-wide">
                        Recent Posts
                    </h4>
                </div>

                {/* RENCENT 3 POSTS */}
                <div className="p-4 flex flex-col space-y-2 lg:space-y-0 lg:flex-row justify-evenly">
                    <p>3 recent posts</p>
                </div>
            </section>

            {/* RECENT COMMENTS */}
            <section className="relative w-full lg:w-[80%] py-4 mx-auto mt-8 rounded-lg bg-dark1">
                {/* INFO */}
                <div className="p-4 flex flex-col lg:items-center">
                    <h4 className="text-xl lg:text-3xl font-bold tracking-wide">
                        Recent Comments
                    </h4>
                </div>

                {/* STATS */}
                <div className="p-4 flex flex-col space-y-2 lg:space-y-0 lg:flex-row justify-evenly">
                    <p>3 recent comments</p>
                </div>
            </section>
        </div>
    );
};

export default UserProfile;
