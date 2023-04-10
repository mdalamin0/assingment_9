import React from 'react';

const JobsFeatured = ({job}) => {
    const {id, jobTitle, companyLogo, salary, companyName} = job;
    return (
        <div>
            <h3>This is job featured list</h3>
        </div>
    );
};

export default JobsFeatured;