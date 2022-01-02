import React, { useState } from 'react';
import jobs from '../../fakeData';
import './JobDetails.css'

const JobDetails = ({jobId}) => {

    const job = jobs.find((job)=> jobId === job.id);

    return (
        <div className="job-details-container">
           <div className="job-title">
               <h2>{job.title}</h2>
               <p>{job.company}</p>
               <p>{job.country}</p>
           </div>
        </div>
    );
};

export default JobDetails;