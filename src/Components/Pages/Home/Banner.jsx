import React from 'react';

const Banner = () => {
    return (
        <div className='relative'>
            <video className='px-5  plays-inline' src='../../../../Video/FONT_VIdeo.mp4' autoPlay loop muted playsInline></video>
            <div className='absolute top-56  left-[510px] text-center space-y-8'>
                <h3 className='font-extrabold text-[#42f566] text-7xl'>BD</h3>
                <h3 className='font-extrabold text-[#42f566] text-7xl'>PRIDE</h3>
                <p className='font-bold text-5xl text-white bg-green-600 px-3 py-2'>ROLE PLAY</p>
                <button className='bg-emerald-700 text-white font-semibold text-lg px-8 py-2 rounded-lg'>PLAY</button>
            </div>
        </div>
    );
};

export default Banner;