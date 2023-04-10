import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const assignmentMarks = [
        {
            id: 1,
            assignmentNo: 1,
            assignment_Mark: 60,
            assignment_Name: "Assignment-1",
        },
        {
            id: 2,
            assignmentNo: 2,
            assignment_Mark: 60,
            assignment_Name: "G3-Architects-2"
        },
        {
            id: 3,
            assignmentNo: 3,
            assignment_Mark: 60,
            assignment_Name: "Ed Tech landing p.-3"
        },
        {
            id: 4,
            assignmentNo: 4,
            assignment_Mark: 60,
            assignment_Name: "JS Problem solving-4"
        },
        {
            id: 5,
            assignmentNo: 5,
            assignment_Mark: 58,
            assignment_Name: "Geometry Genius-5"
        },
        {
            id: 6,
            assignmentNo: 6,
            assignment_Mark: 58,
            assignment_Name: "AI Universe API-6"
        },
        {
            id: 7,
            assignmentNo: 7,
            assignment_Mark: 60,
            assignment_Name: "Quiz Hero-7"
        }
    ]
    return (
        <div className='my-container'>
                <AreaChart className='mx-auto '
                    width={1000}
                    height={500}
                    data={assignmentMarks}
                >
                    <Area dataKey="assignment_Mark" stroke="blue" fill="purple"></Area>
                    <XAxis dataKey="assignment_Name"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </AreaChart>
        </div>
    );
};

export default Statistics;