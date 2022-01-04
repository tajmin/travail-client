import React, { useEffect, useState } from 'react';
import './JobDetails.css'

const JobDetails = ({jobId}) => {
    const [job, setJob] = useState([]);

    useEffect(() => {
        fetch(`https://pacific-lowlands-19741.herokuapp.com/availableJobs/${jobId}`)
        .then(res=> res.json())
        .then(data=> {
            setJob(data);
        })
    },[jobId]);
    


    return (
        <div className="job-details-container">
           <div className="job-title">
               <h2>{job.jobTitle}</h2>
               <p>{job.companyName}</p>
               <p>{job.location}</p>
               <p>{job.description}</p>
               <p>Office Time :{job.workingHour}</p>
               <p>Salary : {job.salary} BDT</p>
           </div>
        </div>
    );
};

export default JobDetails;