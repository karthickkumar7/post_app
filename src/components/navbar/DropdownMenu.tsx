import React from 'react';

const DropdownMenu = () => {
    return (
        <div className="absolute top-[50px] lg:top-[55px] right-0 w-[330px] lg:w-[250px] p-2 rounded-md overflow-hidden space-y-2 border border-gray-700 bg-dark1">
            <section className="group w-full px-3 py-2 rounded-md cursor-pointer hover:contrast-75 hover:bg-indigo-900">
                <h6 className="font-semibold group-hover:underline">
                    Username
                </h6>
                <p className="text-sm text-slate-400 group-hover:underline">
                    user@email.com
                </p>
            </section>
            <div className="w-full h-[1px] bg-gray-700"></div>
            <section className="group w-full">
                <p className="px-3 py-2 hover:underline rounded-md cursor-pointer hover:contrast-75 hover:bg-indigo-900">
                    Dashboard
                </p>
                <p className="px-3 py-2 hover:underline rounded-md cursor-pointer hover:contrast-75 hover:bg-indigo-900">
                    Create Post
                </p>
                <p className="px-3 py-2 hover:underline rounded-md cursor-pointer hover:contrast-75 hover:bg-indigo-900">
                    Reading list
                </p>
            </section>
            <div className="w-full h-[1px] bg-gray-700"></div>
            <section className="group w-full">
                <p className="px-3 py-2 hover:underline rounded-md cursor-pointer hover:contrast-75 hover:bg-indigo-900">
                    Sign Out
                </p>
            </section>
        </div>
    );
};

export default DropdownMenu;
