import { LocationOn } from '@mui/icons-material';
import { Button, Card, Container, CssBaseline, TextField, Typography } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import { useForm } from "react-hook-form";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};




const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const JobFullDetails = () => {

    const { id } = useParams();
    const [job, setJob] = React.useState([]);

    const { companyName, description, jobTitle, location, salary, workingHour, } = job;

    React.useEffect(() => {
        fetch(`http://localhost:2222/availableJobs/${id}`)
            .then(res => res.json())
            .then(data => {
                setJob(data);
            })
    }, [id]);


    //modal 
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //react hook form
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // const jobdetails = job;
        // jobDetails.candidate.push(user)
        fetch('http://localhost:2222/insertApplication', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("Application submitted successfully. We will notify you soon.Till then take care bye bye.")
                    reset()
                }
            })
    };





    return (
        <>
            <Typography variant="h3" sx={{ margin: "40px 0px", borderBottom: "1px solid gray" }}>
                Full Details
            </Typography>



            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={2} >
                    <Grid item xs={12} md={2}>
                    </Grid>
                    <Grid item xs={12} md={7}  >
                        <Item border={2}>
                            <Container align="left" sx={{ padding: "10px 50px" }}>
                                <Typography variant="h5">
                                    {jobTitle}
                                </Typography>
                                <Typography variant="h6">
                                    {companyName}
                                </Typography>
                                <Typography>
                                    <LocationOn sx={{ fontSize: "16px" }} /> {location}
                                </Typography>
                                <Typography variant="body2">
                                    {workingHour}
                                </Typography>
                                <Typography variant="body2">
                                    $ {salary} a year - Full-time
                                </Typography>


                                {/*----------------------- apply job modal added--------------------- */}

                                <>
                                    <div>
                                        <Button variant="contained" sx={{ margin: "20px 0px" }} onClick={handleOpen}>Apply Now</Button>
                                        <Modal
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style}>
                                                <Typography sx={{ margin: "20px 0px" }} color="success" id="modal-modal-title" variant="h5" component="h2">
                                                    Fill the form with correct information.
                                                </Typography>


                                                {/* ---------------react hook form ------------------ */}


                                                <form onSubmit={handleSubmit(onSubmit)}>


                                                    <TextField sx={{ marginBottom: "20px" }} {...register("fullName")} fullWidth label="Full Name" id="fullWidth" />

                                                    <TextField sx={{ marginBottom: "20px" }} {...register("email")} fullWidth label="Email" id="fullWidth" />

                                                    <TextField sx={{ marginBottom: "20px" }} {...register("phone")} fullWidth label="Phone Number" id="fullWidth" />

                                                    <TextField sx={{ marginBottom: "20px" }} {...register("resume")} fullWidth label="CV or Resume Link" id="fullWidth" />

                                                    <TextField sx={{ marginBottom: "20px" }} {...register("gender")} fullWidth label="Gender" id="fullWidth" />

                                                    <TextField sx={{ marginBottom: "20px" }} {...register("expectedSalary")} fullWidth label="Expected Salary" id="fullWidth" />




                                                    <Button variant="contained" color="success" type="submit">Submit</Button>
                                                </form>



                                            </Box>
                                        </Modal>
                                    </div>

                                </>
                                {/*---------------------- apply job modal ended ----------------------- */}

                            </Container>
                            <CssBaseline />

                            <Container sx={{ borderTop: "1px solid gray" }}>
                                <Typography variant="h4" sx={{ margin: "20px 0px" }}>Job Description</Typography>
                                <Typography align="left" variant="subtitle1">Will Consider US Based Remote Candidates.

                                    {description}

                                    Job Type: Full-time

                                    Pay: $95,000.00 - $106,000.00 per year

                                    <Typography variant="h6">Skill Requires : </Typography>
                                    <ul>
                                        <li>React JS</li>
                                        <li>Node JS</li>
                                        <li>Vanilla Javascript JS</li>
                                        <li>MongoDB or NoSQL Database JS</li>
                                    </ul>

                                </Typography>
                            </Container>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <>
                            <Box sx={{ maxWidth: 200, position: "sticky", top: 0 }}>
                                <Card variant="outlined">
                                    <Typography sx={{ borderBottom: 1 }}>Company Info</Typography>
                                    <Button variant="outlined" sx={{ margin: "20px 5px" }}>Follow</Button>
                                    <Typography>Get job updates from National Processing</Typography>
                                </Card>
                            </Box>
                        </>
                    </Grid>

                </Grid>
            </Box>










        </>
    );
};

export default JobFullDetails;