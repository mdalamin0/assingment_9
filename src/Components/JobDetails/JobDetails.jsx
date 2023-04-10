import React from 'react';

const JobDetails = () => {
    return (
        <div className='my-container bg-gray-200 ' style={{paddingBottom: '0'}}>
            <h3 className='text-center text-2xl font-bold '>This is JobDetails</h3>
            <div>
                <img className='w-4/12 md:w-3/12 lg:w-2/12' src="/public/Vector.png" alt="" />
            </div>
            <div className='absolute top-0 right-0'>
                <img className='w-56' src="/public/Vector-1.png" alt="" />
            </div>
        </div>
    );
};

export default JobDetails;