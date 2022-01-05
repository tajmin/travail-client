import './Jobs.css';
import Job from '../../components/Job/Job';
import JobDetails from '../../components/Job/JobDetails';
import React, { useEffect, useState, useMemo } from 'react'
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllJobs } from '../../redux/slices/jobSlice';


const Jobs = () => {
    const [filter, setFilter] = useState("")
    //redux and thunk
    const dispatch = useDispatch();
    const jobs = useSelector((state) => state.jobs.jobs);
    let filteredJobs = useMemo(() => jobs.filter(job => job.jobTitle.toLowerCase().includes(filter), [filter]))
    const [jobId, setJobId] = useState(null);


    useEffect(() => {
        dispatch(fetchAllJobs())
        setJobId(filteredJobs[0]?._id)
    }, [dispatch, jobs, filteredJobs]);

    // handle search job 
    const handleSearch = event => {
        if (event.target.value) {
            const searchText = event.target.value;
            setFilter(searchText.toLowerCase());
            return;
        }
    }

    const handleSetJob = (id) => {
        setJobId(id)
    }

    return (
        <>
            <h2>Find your flexible jobs here.</h2>

            <div className="search-container">
                <TextField
                    sx={{ width: "50%" }}
                    onChange={handleSearch}
                    placeholder="Search Jobs" />
            </div>

            <div className="jobsContainer">
                <div className="jobs-container-left">
                    {
                        filteredJobs.map(job => <Job key={job._id}
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