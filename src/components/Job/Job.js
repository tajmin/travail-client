import './Job.css';
import { Link } from 'react-router-dom';

const Job = (props) => {
    const {companyName,description,jobTitle,location,salary,_id} = props?.job;
    const handleSetJob = props.handleSetJob;

    return (
        <>
            <div className="job-card">
                <div className="card-top">
                    <Link to={`/fullDetails/${_id}`}>
                    <h3>{jobTitle}</h3>
                    </Link>
                    <h5>{companyName}</h5> 
                    <small>Location : {location}</small>
                    <p>Salary : {salary} BDT</p>
                </div>
                <div className="card-bottom">
                    <p>{description.slice(0, 200)}...</p>
                    <button onClick={()=>handleSetJob(_id)} className="card-button" >Learn More</button>
                </div>
            </div>
        </>
    );
};

export default Job;