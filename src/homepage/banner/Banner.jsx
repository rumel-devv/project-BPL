import React from 'react';
import bannerBg from '../../assets/bg-shadow.png'
import bannerImg from '../../assets/banner-main.png'

const Banner = () => {
    return (
        <div  className="bg-cover bg-center w-full md:w-10/11 mx-auto h-100 flex items-center justify-center mt-3 rounded-md" style={{ backgroundImage: `url(${bannerBg}`}} >
        <div className='flex flex-col items-center space-y-3 p-3 text-center'>
             <img className='w-40' src={bannerImg} alt='Banner image'></img>
            <h1 className='text-3xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <h3 className='text-xl'>Beyond Boundaries Beyond Limits</h3>
            <button className='bg-[#E7FE29] py-1.5 px-4 rounded-md font-bold'>Claim Free Credit</button>
        </div>
        </div>

       
    );
};

export default Banner;