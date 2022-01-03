import React, { useEffect, useState } from 'react';
import './JobDetails.css'

const JobDetails = ({jobId}) => {
    const [job, setJob] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:2222/availableJobs/${jobId}`)
        .then(res=> res.json())
        .then(data=> {
            setJob(data);
        })
    },[jobId]);
    


    return (
        <div className="job-details-container">
           <div className="job-title">
               <h2>{job.Title}</h2>
               <p>{job.companyName}</p>
               <p>{job.location}</p>
               <p>{job.description}</p>
               <p>{job.workingHour}</p>
               <p>{job.salary}</p>
           </div>
        </div>
    );
};

export default JobDetails;