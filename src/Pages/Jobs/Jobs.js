// import React,{useState} from 'react';
import './Jobs.css';
import Job from '../../components/Job/Job';
// import jobs from '../../fakeData'
import JobDetails from '../../components/Job/JobDetails';
import { useEffect, useState } from 'react'
import { Box } from '@mui/system';
import { CircularProgress, TextField } from '@mui/material';




const Jobs = () => {

    const [jobs, setJobs] = useState([]);
    const [jobId, setJobId] = useState('');
    // products to be rendered on the UI
    const [displayJobs, setDisplayJobs] = useState([]);


    useEffect(() => {
        fetch('http://localhost:2222/availableJobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data);
                setDisplayJobs(data)
            })
    }, []);

    // handle search job 
    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedJobs = jobs.filter(job => job.jobTitle.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayJobs(matchedJobs);
    }

    const handleSetJob = (id) => {
        setJobId(id)
    }

    return (
        <>
            <h2>Find your flexible jobs here.</h2>

            <div className="search-container">
                <TextField
                    sx={{width: "50%"}}
                    onChange={handleSearch}
                    placeholder="Search Jobs" />
            </div>

            <div className="jobsContainer">
                <div className="jobs-container-left">
                    {

                        !displayJobs ? <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box> :

                            displayJobs.map(job => <Job key={job._id}
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