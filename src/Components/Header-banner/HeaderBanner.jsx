import React from 'react';

const HeaderBanner = () => {
    return (
        <div className='my-container flex justify-between items-center' style={{ paddingBottom: '0' }}>
            <div className='w-1/2'>
                <h1 className='text-7xl font-bold'>One Step <br /> Closer To Your <span className=' text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500'>Dream Job</span></h1>
                <p className='text-lg py-7 font-semibold text-gray-500'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className='btn rounded-md'>Get Started</button>
            </div>
            <div className='w-1/2'>
                <img className='object-cover' src="P3OLGJ1 copy 1.png" alt="" />
            </div>
        </div>
    );
};

export default HeaderBanner;