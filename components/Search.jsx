import React from 'react';
import {MagnifyingGlassIcon} from "@heroicons/react/16/solid";

const Search = () => {
    return (
        <>
            <div className="flex items-center justify-center pb-6">
                <div className="relative w-full max-w-md">
                    <MagnifyingGlassIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"/>
                    <input
                        type="text"
                        placeholder="Search Pal..."
                        className="w-full dark:bg-gray-800 dark:text-gray-300 py-2 pl-10 pr-4 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

        </>
    );
};

export default Search;