import UserAvatar from '@/components/user/UserAvatar';
import React from 'react';

const InputBox = () => {
    return (
        <div className="w-full mt-4 flex justify-between">
            <div className="w-[10%] flex justify-center">
                <UserAvatar classname="w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] mt-2" />
            </div>
            <div className="w-[88%] lg:w-[90%] flex flex-col">
                <textarea
                    placeholder="Add to the discussion"
                    className="p-2 w-[270px] lg:w-[610px] min-h-[100px] max-h-[500px] border-2 border-slate-600 focus:border-indigo-400 rounded-md outline-none bg-dark2"
                />
                <button className="w-full lg:w-[150px] px-4 py-2 mt-2 rounded-md hover:bg-opacity-80 active:brightness-110 text-white font-semibold bg-indigo-600">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default InputBox;
