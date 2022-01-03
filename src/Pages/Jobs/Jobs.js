// import React,{useState} from 'react';
import './Jobs.css';
import Job from '../../components/Job/Job';
import jobs from '../../fakeData'
import JobDetails from '../../components/Job/JobDetails';
import { useState } from 'react'




const Jobs = () => {

    const [jobId, setJobId] = useState(1);
    const handleSetJob = (id) => {
        setJobId(id)
    }

    return (
        <>
            <h2>Find your flexible jobs here.</h2>
            <div className="jobsContainer">
                <div className="jobs-container-left">
                    {
                        jobs.map(job => <Job key={job.id}
                            handleSetJob={handleSetJob}
                            job={job}>
                        </Job>)
                    }
                </div>
                <div className="jobs-container-right">
                    <JobDetails jobId={jobId}></JobDetails>
                </div>
            </div>
        </>
    );
};

export default Jobs;