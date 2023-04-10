import React, { useEffect, useState } from 'react';
import { getAppliedJob } from '../../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';
import { ChevronDownIcon } from '@heroicons/react/24/solid'



const AppliedJobs = () => {
    const appliedJobs = getAppliedJob();
    // const [appliedJob, setAppliedJob] = useState([]);

    const jobsData = useLoaderData();
    const savedJob = []
    for (const id in appliedJobs) {
        const addedJob = jobsData.jobs.find(job => job.id == id);
        // setAppliedJob([...appliedJob, addedJob])
        savedJob.push(addedJob)
    }
    // setAppliedJob(savedJob)
    console.log(savedJob)
    return (
        <>
            <div className='my-container bg-gray-200 ' style={{ paddingBottom: '0' }}>
                <h3 className='text-center text-2xl font-bold '>Applied Jobs</h3>
                <div>
                    <img className='w-4/12 md:w-3/12 lg:w-2/12' src="/public/Vector.png" alt="" />
                </div>
                <div className='absolute top-0 right-0'>
                    <img className='w-56' src="/public/Vector-1.png" alt="" />
                </div>
            </div>
            <div className='mt-10 my-container'>
                <div className='flex place-content-end '>
                        <button className='bg-gray-300 font-semibold py-3 px-5 rounded-md flex items-center'>Filter by <ChevronDownIcon className='h-4 w-4 ms-2'></ChevronDownIcon></button>
                    </div>
                {/* <div className="flex place-content-end dropdown dropdown-end">
                    <label tabIndex={0} className="btn m-1">Click</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div> */}
                {
                    savedJob.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
                }
            </div>
        </>
    );
};

export default AppliedJobs;