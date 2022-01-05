import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import useAuth from "../../../hooks/useAuth";



const MyApplication = () => {
    const {user} = useAuth();
    let {email} = user;
    console.log(email)
    const [applies, setApplies] = useState();
    useEffect(()=>{
        fetch(`https://pacific-lowlands-19741.herokuapp.com/applied-jobs/${email}`)
        .then(res => res.json())
        .then(data => setApplies(data))
    }, [])
    console.log(applies)
    return (
        <Container style={{margin: "56px"}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Grid 
                            style={{ 
                            height: "30px", 
                            backgroundColor: "#0B7806", 
                            marginBottom: "30px"
                            }}>
                            <Typography 
                                style={{
                                color: "white",
                                }}>
                                Applied Job
                            </Typography>
                        </Grid>
                        
                        <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {applies?.map((apply) => (
                            <Grid item xs={12} sm={12} md={12} key={apply._id}>
                                <Grid>
                                    <Grid xs={12} md={12} 
                                        style={{
                                        display: "flex", 
                                        margin: "5px"
                                        }}>
                                        <Grid xs={3} md={3} 
                                            style={{
                                            textAlign: "right", 
                                            marginRight: "15px"
                                            }}>
                                            <Typography>
                                                <HomeWorkIcon style={{color: "#13F7B5"}}/>
                                            </Typography>
                                            
                                        </Grid>
                     {/* ========== All Applied jobs ==========*/}
                                        <Grid xs={6} md={6} 
                                        style={{
                                            textAlign: "left", 
                                            display: "flex",
                                            }}>
                                            <Grid>
                                                <Typography 
                                                    style={{
                                                    fontSize: 22, 
                                                    fontWeight: 600
                                                    }}>
                                                    {apply.job.jobTitle}
                                                </Typography>
                                                <Typography 
                                                    style={{
                                                    fontSize: 20, 
                                                    fontWeight: 500
                                                    }}>
                                                    {apply.job.companyName}
                                                </Typography>
                                                <Typography 
                                                    style={{
                                                    fontSize: 14, 
                                                    fontWeight: 600
                                                    }}>
                                                    {apply.job.location}
                                                </Typography>
                                            </Grid>   
                                        </Grid>
                                        <Grid xs={3} md={3}>
                        {/*======== Details of applied job =========*/}
                                            <Link>
                                                <ArrowForwardIosIcon style={{fontSize: 16}}/>
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            ))}
                        </Grid>
                        </Box>
                    </Grid> 
                </Grid>
            </Box>
        </Container>
    );
};

export default MyApplication;