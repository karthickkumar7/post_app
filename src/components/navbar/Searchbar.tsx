import { RiSearchLine } from 'react-icons/ri';

const Searchbar = () => {
    return (
        <div className="relative hidden lg:inline-flex w-[350px] p-2 rounded-md bg-dark2 border-2 border-indigo-800 hover:border-indigo-600 focus:border-indigo-400">
            <input
                type="text"
                placeholder="Search..."
                className="w-full outline-none active:outline-none bg-inherit"
            />
            <button className="absolute right-0 top-0 p-2 flex items-center justify-center rounded-md hover:contrast-75 hover:bg-indigo-800 active:contrast-100">
                <RiSearchLine className="text-2xl" />
            </button>
        </div>
    );
};

export default Searchbar;
