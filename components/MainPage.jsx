"use client";
import React, { useState, useMemo } from 'react';
import Image from "next/image";
import data from '@/public/data.json';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const MainPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Arama işlevi: veriyi filtrele
    const filteredData = useMemo(() => {
        return data.filter(pal =>
            pal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pal.desc.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    return (
        <>
            <div className="flex items-center justify-center p-6">
                <div className="relative w-full max-w-md">
                    <MagnifyingGlassIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search Pal..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full dark:bg-gray-800 dark:text-gray-300 py-2 pl-10 pr-4 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                {filteredData.map((pal) => (
                    <div key={pal.id}
                         className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition duration-500 cursor-pointer focus:scale-105">
                        <div className="flex justify-between p-4">
                            <div className="flex flex-col">
                                <div className="flex items-start">
                                    <div
                                        className="w-8 h-8 flex items-center justify-center dark:text-white text-sm bg-blue-700 cursor-default rounded-full mr-2">
                                        {pal.id}
                                    </div>
                                    {pal.elements.map((element, index) => (
                                        <div key={index} className="w-8 h-8 mb-5 relative">
                                            <Image
                                                src={`/assets/images/${element}.png`}
                                                quality={100}
                                                alt={element}
                                                layout="fill"
                                                objectFit="contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{pal.name}</h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400">{pal.desc}</span>
                            </div>
                            <div className="w-24 h-24 relative">
                                <Image
                                    className={`mb-3 border-4 ${pal.color} ${pal.borderColor}  rounded-full shadow-lg object-cover`}
                                    src={pal.photo}
                                    quality={100}
                                    alt={pal.name}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 p-4">
                            {pal.works.map((work, index) => (
                                <div key={index} className="pt-3">
                                    <div
                                        className="flex items-center bg-gray-500 border-2 border-black rounded-full p-1 shadow-none transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-600">
                                        <div
                                            className="bg-black p-1 rounded-full inline-flex items-center justify-center mr-2 w-8 h-8">
                                            <Image
                                                className="rounded-full"
                                                src={`/assets/images/${work.work}.png`}
                                                quality={100}
                                                alt={work}
                                                width={20}
                                                height={20}
                                                objectFit="contain"
                                            />
                                        </div>
                                        <span className="text-white text-md mr-2">{work.level}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-end p-4">
                            <h5 className="mb-1 text-md text-black dark:text-white">Drops: </h5>
                            <span
                                className="px-2 mb-1 text-md font-medium text-gray-900 dark:text-gray-400">{pal.drops}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default MainPage;
