import React from 'react';
import JobList from '../JobList/JobList';
import { useLoaderData } from 'react-router-dom';

const HeaderBanner = () => {
    const jobs = useLoaderData()
    return (
        <>
            <div className='my-container bg-gray-200 lg:flex justify-between items-center' style={{ paddingBottom: '0' }}>
                <div className='lg:w-1/2'>
                    <h1 className='text-7xl font-bold'>One Step <br /> Closer To Your <span className=' text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500'>Dream Job</span></h1>
                    <p className='text-lg py-7 font-semibold text-gray-500'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <button className='btn rounded-md'>Get Started</button>
                </div>
                <div className='lg:w-1/2'>
                    <img className='object-cover' src="P3OLGJ1 copy 1.png" alt="" />
                </div>
            </div>
            <div className='my-container mt-24 '>
                <h2 className='text-4xl text-center font-bold'>Job Category List</h2>
                <p className='text-lg text-center  font-semibold text-gray-500 mt-3 mb-16'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid md:grid-cols-2 lg:grid-cols-4'>
                    {
                        jobs.map(job => <JobList key={job.id} job={job}></JobList>)
                    }
                </div>
            </div>
        </>
    );
};

export default HeaderBanner;