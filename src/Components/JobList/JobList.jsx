import React from 'react';

const JobList = ({job}) => {
    const {category, img, description} = job;
    return (
        <div className=' bg-gray-200 p-8 mr-4 mb-4'>
            <img className='object-cover w-20 h-20' src= {img} alt="" />
            <h4 className='mt-8 mb-2 text-xl font-semibold'>{category}</h4>
            <p className='text-lg font-semibold text-gray-500'>{description}</p>
        </div>
    );
};

export default JobList;