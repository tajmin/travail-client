import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {  Button, Container, TextField, Typography } from '@mui/material';
import useAuth from '../../hooks/useAuth';


const PostAJob = () => {
    const [jobTitle, setJobTitle] = React.useState("");
    const [companyName, setCompanyName] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [requiredSkill, setRequiredSkill] = React.useState("");
    const [workingHour, setWorkingHour] = React.useState("");
    const [salary, setSalary] = React.useState("");
    const [deadline, setDeadline] = React.useState("");
    const {email} = useAuth();


    const handlePostJob = (e) => {
        e.preventDefault();

        const jobData = {
            jobTitle,
            companyName,
            location,
            description,
            requiredSkill,
            workingHour,
            salary,
            deadline,
            createdBy: email
        }
        
        fetch('http://localhost:2222/addNewJob',{
            method : "POST",
            headers:{ 
                "content-type" : "application/json"
            },
            body: JSON.stringify(jobData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                alert("Your hiring poster successfully inserted, now you can make a little bit 'Dance Party' ")
            }           
        })
    }


    return (
        <>
            <Container sx={{ backgroundColor: "#F3F2F1" }}>
                <Typography variant="h5" sx={{marginBottom:"30px", color: "goldenrod"}}>
                    Hire an expert with TRAVAIL
                   
                </Typography>


                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item xs>

                        </Grid>
                        <Grid item xs={6}>
                            <form onSubmit={handlePostJob}>

                                <Box
                                    sx={{
                                        width: 500,
                                        maxWidth: '100%',
                                        backgroundColor: "white",
                                        marginBottom: "18px",
                                    }}
                                >
                                    <TextField required onBlur={(e) => setJobTitle(e.target.value)} fullWidth label="Job Title" id="fullWidth" />
                                </Box>
                                <Box
                                    sx={{
                                        width: 500,
                                        maxWidth: '100%',
                                        backgroundColor: "white",
                                        marginBottom: "18px",
                                    }}
                                >
                                    <TextField
                                        onBlur={(e) => setCompanyName(e.target.value)}
                                        fullWidth required label="Company Name" id="fullWidth" />
                                </Box>
                                <Box
                                    sx={{
                                        width: 500,
                                        maxWidth: '100%',
                                        backgroundColor: "white",
                                        marginBottom: "18px",
                                    }}
                                >
                                    <TextField
                                        onBlur={(e) => setLocation(e.target.value)}
                                        fullWidth required label="Location" id="fullWidth" />
                                </Box>
                                <Box
                                    sx={{
                                        width: 500,
                                        maxWidth: '100%',
                                        backgroundColor: "white",
                                        marginBottom: "18px",
                                    }}
                                >
                                    <TextField
                                        onBlur={(e) => setDescription(e.target.value)}
                                        fullWidth required label="Description" id="fullWidth" />
                                </Box>
                                <Box
                                    sx={{
                                        width: 500,
                                        maxWidth: '100%',
                                        backgroundColor: "white",
                                        marginBottom: "18px",
                                    }}
                                >
                                    <TextField
                                        onBlur={(e) => setRequiredSkill(e.target.value)}
                                        fullWidth required label="Required Skills" id="fullWidth" />
                                </Box>
                                <Box
                                    sx={{
                                        width: 500,
                                        maxWidth: '100%',
                                        backgroundColor: "white",
                                        marginBottom: "18px",
                                        display: "flex",
                                        justifyContent: 'space-between',

                                    }}
                                >
                                    <TextField
                                        onBlur={(e) => setWorkingHour(e.target.value)}
                                        fullWidth required label="Working Hour" id="fullWidth" />
                                    <TextField
                                        onBlur={(e) => setSalary(e.target.value)}
                                        fullWidth required label="Salary" id="fullWidth" />

                                </Box>
                                <Box
                                    sx={{
                                        width: 500,
                                        maxWidth: '100%',
                                        backgroundColor: "white",
                                        marginBottom: "18px",
                                    }}
                                >
                                    <TextField
                                        onBlur={(e) => setDeadline(e.target.value)}
                                        fullWidth required label="Application Deadline" id="fullWidth" />
                                </Box>
                                <Box
                                    sx={{
                                        width: 500,
                                        maxWidth: '100%',
                                        backgroundColor: "white",
                                        marginBottom: "18px",
                                    }}
                                >
                                    <Button
                                        type="submit"
                                        sx={{ width: '100%' }}
                                        variant="contained">Post</Button>
                                </Box>
                            </form>
                        </Grid>
                        <Grid item xs>

                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default PostAJob;