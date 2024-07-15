import React, { useState } from 'react';
import { FaCirclePlay } from 'react-icons/fa6';
import { IoMdTrophy } from 'react-icons/io';

const MainContent = () => {
    return (
        <div className='flex justify-between mx-5 my-8'>
            <div>
                <h3 className='text-5xl font-bold'>BD PRIDE ROLEPLAY</h3>
                <h5 className='font-semibold text-2xl my-3'>What are the benefits of playing Roleplay Games?</h5>
                <ul className='list-disc ml-4 font-semibold'>
                    <li>Improves communication and language.</li>
                    <li>Develops thinking, learning & problem solving skills.</li>
                    <li>Encourages creativity and imagination.</li>
                    <li>Helps children naturally develop & use their abilities & skills.</li>
                    <li>Fosters social and emotional development.</li>
                </ul>

                <div className='mt-10'>
                    <p className='text-2xl'>5345</p>
                    <p>Members</p>
                </div>
                <div className='flex gap-5 mt-3'>
                    <button className='font-semibold text-lg'>JOIN US</button>
                    <button className='flex font-semibold text-lg gap-3 items-center'><span className='text-3xl hover:text-green-500'><FaCirclePlay /></span>WATCH NOW</button>
                </div>
            </div>
            <div className='relative'>
                <video className='px-5 w-[550px]  plays-inline' src='../../../../Video/FONT_VIdeo.mp4' autoPlay loop muted playsInline></video>
                <div className='mt-8 flex gap-5 absolute right-0'>
                    <div className='text-right'>
                        <h3 className='font-semibold text-lg'>TOP 400TH</h3>
                        <p className='text-xl'>SERVER GOLBALLY</p>
                    </div>
                    <div className='text-5xl text-yellow-500'>
                        <IoMdTrophy />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;