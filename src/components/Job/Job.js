import './Job.css';
import { useState } from 'react'

const Job = (props) => {
    // const [jobId, setJobId] = useState(1);
    const { id, title, country, company, type, jobDesc, salary, skills} = props.job;
    const handleSetJob = props.handleSetJob;

    return (
        <>
            <div className="job-card">
                <div className="card-top">
                    <h3>{title}</h3>
                    <span>{company}</span>
                    <span>{country}</span>
                </div>
                <div className="card-bottom">
                    <p>{jobDesc.slice(0, 200)}</p>
                    <button onClick={()=>handleSetJob(id)} className="card-button" >Learn More</button>
                </div>
            </div>
        </>
    );
};

export default Job;