import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const JobsFeatured = ({ job }) => {
    const { id, jobTitle, companyLogo, salary, companyName, location } = job;
    return (
        <div className='border-2 p-10 rounded-md'>
            <img className='w-36 h-10' src={companyLogo} alt="" />
            <h2 className='mt-8 text-2xl font-semibold'>{jobTitle}</h2>
            <p className='text-xl my-1 text-gray-400'>{companyName}</p>
            <div className='flex'>
                <button className='btn-outlined mr-4'>Remote</button>
                <button className='btn-outlined'>Full Time</button>
            </div>
            <div className='flex my-3 '>
                <p className='text-sm text-gray-400 font-semibold mr-8 flex items-center'>
                    <MapPinIcon className="h-5 w-5 text-gray-400 mr-2"  /> {location} </p>
                <p className='text-sm text-gray-400 font-semibold flex items-center'> <CurrencyDollarIcon className="h-5 w-5 text-gray-400 mr-2" /> Salary: {salary} </p>
            </div>
            <button className='btn rounded-md mt-2'>View Details</button>
        </div>
    );
};

export default JobsFeatured;