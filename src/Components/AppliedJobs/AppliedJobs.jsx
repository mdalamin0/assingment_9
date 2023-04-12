import React, { useEffect, useState } from 'react';
import { getAppliedJob } from '../../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'



const AppliedJobs = () => {
    const savedJob = []
    const [dropdown, setDropdown] = useState(false)

    const appliedJobs = getAppliedJob();

    const jobsData = useLoaderData();

    for (const id in appliedJobs) {
        const addedJob = jobsData.jobs.find(job => job.id == id);
        savedJob.push(addedJob)
    }
    const [appliedJobData, setAppliedJobData] = useState(savedJob)
    const filterRemoteJob = () => {
        const remoteJob = savedJob.filter(job => job.remoteOrOnsite == 'Remote')
        setAppliedJobData(remoteJob)
    }
    const filterOnsiteJob = () => {
        const fullTimeJob = savedJob.filter(job => job.remoteOrOnsite == 'Onsite')
        setAppliedJobData(fullTimeJob)
    }
    return (
        <>
            <div className='my-container bg-gray-200 ' style={{ paddingBottom: '0' }}>
                <h3 className='text-center text-2xl font-bold '>Applied Jobs</h3>
                <div>
                    <img className='w-4/12 md:w-3/12 lg:w-2/12' src="https://i.ibb.co/bgznCC7/Vector.png" alt="" />
                </div>
                
            </div>
            <div className='mt-10 my-container'>

                <div className='flex place-content-end relative mb-20'>

                    <button onClick={() => setDropdown(!dropdown)} className='bg-gray-300 font-semibold py-3 px-5 rounded-md flex items-center'>Filter by {dropdown ? <ChevronUpIcon title='close menu' className='h-4 w-4 ms-2'></ChevronUpIcon> : <ChevronDownIcon title='Open menu' className='h-4 w-4 ms-2'></ChevronDownIcon>}</button>
                    <div className={`${dropdown ? 'absolute top-8 right-10 ' : 'hidden'}`}>
                        <div className='flex my-4 shadow-lg bg-gray-100 rounded-md p-8'>
                            <button onClick={filterRemoteJob} className='btn-outlined mr-4'>Remote</button>
                            <button onClick={filterOnsiteJob} className='btn-outlined'>Onsite</button>
                        </div>
                    </div>
                </div>
                {
                    appliedJobData.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
                }
            </div>
        </>
    );
};

export default AppliedJobs;