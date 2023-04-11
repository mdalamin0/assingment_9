import { MapPinIcon, CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { addToDb } from '../../../utilities/fakedb';

const JobDetails = () => {
    const navigate = useNavigate();
    const goBackHome = () => {
        navigate(-1)
    }
    const jobDetailsData = useLoaderData()
    const dynamic = useParams();
    const singleJob = jobDetailsData.jobs.find(job => job.id == dynamic.jobId)
    const { id, jobDescription, jobResponsibility, educationalRequirements, experiences, salary, jobTitle, contactInformation, email, location } = singleJob;

    const handleAddToJob = (id) => {
        addToDb(id)
    }

    return (
        <>
            <div className='my-container bg-gray-200 ' style={{ paddingBottom: '0' }}>
                <h3 className='text-center text-2xl font-bold '>Job Details</h3>
                <div>
                    <img className='w-4/12 md:w-3/12 lg:w-2/12' src="https://i.ibb.co/bgznCC7/Vector.png" alt="" />
                </div>
                <div className='absolute top-0 right-0'>
                    <img className='w-56' src="https://i.ibb.co/xGZKNPq/Vector-1.png" alt="" />
                </div>
            </div>
            <div className='my-container mt-20 lg:flex '>
                <div className='lg:w-3/5 mr-5'>
                    <p> <span className='font-bold'>Job Description: </span> <span className='text-sm text-gray-400'>{jobDescription}</span></p>
                    <p className='my-6'> <span className='font-bold'>Job Responsibility: </span> <span className='text-sm text-gray-400'>{jobResponsibility}</span></p>
                    <p className='font-bold'>Educational Requirements:</p>
                    <p className='text-sm text-gray-400 my-4'>{educationalRequirements}</p>

                    <p className='font-bold'>Experiences:</p>
                    <p className='text-sm text-gray-400 my-4'>{experiences}</p>
                    <button onClick={goBackHome} className='btn rounded-md'>Back to homepage</button>
                </div>
                <div className='lg:w-2/5 ms-4'>
                    <div className='bg-gray-200 p-7 rounded-md'>
                        <h3 className='text-xl font-bold'>Job Details</h3>
                        <hr className='border-2 border-gray-400 my-6' />
                        <p className=' font-semibold text-sm text-gray-400 flex items-center '>
                            <CurrencyDollarIcon className="h-5 w-5 text-gray-400 mr-2 " /> <span className='text-gray-700 mr-2'>Salary:</span> {salary} (Per Month)</p>
                        <p className='font-semibold text-sm text-gray-400 flex items-center mt-4'>
                            <CalendarDaysIcon className='h-5 w-5 text-gray mr-2'></CalendarDaysIcon>
                            <span className='text-gray-700 mr-2'>Job Title:</span> {jobTitle}
                        </p>
                        <h3 className='text-xl font-bold mt-8'>Contact Information</h3>
                        <hr className='border-2 border-gray-400 my-6' />
                        <p className='flex items-center text-gray-700 font-semibold'> <PhoneIcon className='w-5 h-5 text-gray-400 mr-2'></PhoneIcon> Phone: <span className='text-sm ms-2'>{contactInformation.phone}</span></p>
                        <p className='flex items-center text-gray-700 font-semibold my-4'> <EnvelopeIcon className='w-5 h-5 text-gray-400 mr-2'></EnvelopeIcon> Email: <span className='text-sm ms-2'>{contactInformation.email}</span></p>
                        <p className='flex items-center text-gray-700 font-semibold'> <MapPinIcon className='w-5 h-5 text-gray-400 mr-2'></MapPinIcon> Address: <span className='text-sm ms-2'>{location}</span></p>
                    </div>
                    <button onClick={() => handleAddToJob(id)} className='btn rounded-md w-full mt-6'>Apply Now</button>
                </div>
            </div>
        </>
    );
};

export default JobDetails;