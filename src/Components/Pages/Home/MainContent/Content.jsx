import React from 'react';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { FaDatabase } from 'react-icons/fa6';
import { IoGameControllerSharp } from 'react-icons/io5';
import { RiTeamFill } from 'react-icons/ri';

const Content = () => {
    return (
        <div className='flex justify-between items-center mx-5 my-10'>
            <div>
                <h3 className='text-2xl font-medium'>FEATURES THAT</h3>
                <h1 className='text-5xl font-bold mt-4'>MAKES HALKA GORIB UNIQUE</h1>
                <div className='mt-5 grid grid-cols-2 gap-5'>
                    <div>
                        <p className='text-5xl'><RiTeamFill /></p>
                        <h3 className='font-semibold text-2xl mt-3'>Management Team</h3>
                        <p className='mt-1 max-w-72'>Our Support Team is there for you to provide support & fair gameplay.</p>
                    </div>
                    <div>
                        <p className='text-5xl'><AiFillSafetyCertificate /></p>
                        <h3 className='font-semibold text-2xl mt-3'>Safe Guard</h3>
                        <p className='mt-1  max-w-72'>We protect our game server from hackers & keep player's information secured.</p>
                    </div>
                    <div>
                        <p className='text-5xl'><IoGameControllerSharp /></p>
                        <h3 className='font-semibold text-2xl mt-3'>Gamemode</h3>
                        <p className='mt-1  max-w-72'>Gamemode is highly customized in details to achieve a real life simulation experience.</p>
                    </div>
                    <div>
                        <p className='text-5xl'><FaDatabase /></p>
                        <h3 className='font-semibold text-2xl mt-3'>Player Capacity</h3>
                        <p className='mt-1  max-w-72'>150+ players can enjoy the virtual reality experience together. More people, more fun, more roleplay scenario.</p>
                    </div>
                </div>
            </div>
            <div>
                <video className='px-5 w-[600px] plays-inline' src='../../../../Video/FONT_VIdeo.mp4' autoPlay loop muted playsInline></video>
            </div>
        </div>
    );
};

export default Content;