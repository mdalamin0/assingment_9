import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const AppliedJob = ({ job }) => {
    const { id, companyLogo, jobTitle, companyName, remoteOrOnsite, fulltimeOrPartTime, location, salary } = job;
    return (
        <>
            <div className=' mt-6 lg:flex justify-between items-center border-2 rounded-md p-7'>

                <div className='md:flex items-center'>
                    <img src={companyLogo} className='rounded md:w-56 bg-gray-400 py-20 px-9 me-4' alt="" />
                    <div>
                        <h2 className='mt-8 text-2xl font-semibold'>{jobTitle}</h2>
                        <p className='text-xl my-1 text-gray-400'>{companyName}</p>
                        <div className='flex my-4'>
                            <button className='btn-outlined mr-4'>{remoteOrOnsite}</button>
                            <button className='btn-outlined'>{fulltimeOrPartTime}</button>
                        </div>
                        <div className='flex my-3 '>
                            <p className='text-sm text-gray-400 font-semibold mr-8 flex items-center'>
                                <MapPinIcon className="h-5 w-5 text-gray-400 mr-2" /> {location} </p>
                            <p className='text-sm text-gray-400 font-semibold flex items-center'> <CurrencyDollarIcon className="h-5 w-5 text-gray-400 mr-2" /> Salary: {salary} </p>
                        </div>
                    </div>

                </div>


                <div>
                    <Link to={`/job details/${id}`}>
                        <button className='btn rounded-md mt-2'>View Details</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default AppliedJob;