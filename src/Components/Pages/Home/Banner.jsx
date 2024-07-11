import React from 'react';

const Banner = () => {
    return (
        <div className='relative'>
            <img className='max-w-[1170px]  w-[1170px] mx-auto' src="https://media.discordapp.net/attachments/1227348688356118558/1227349521999073290/TLMC_15.PNG.png?ex=66918d51&is=66903bd1&hm=e6c40ad23d2ea78d0e8ce145f765220a4259e08a654d890ca73fd357b1df84ab&=&format=webp&quality=lossless&width=889&height=464" alt="" />
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