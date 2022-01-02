import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const JobSeeker = () => {
    return (
        <Container style={{marginTop: "40px"}}>
            <Grid container spacing={2}>
                <Grid item xs={12} style={{textAlign: "center"}}>
                    <Grid>
                    <Typography variant='h4' style={{fontWeight: 600}}>
                        For Job Seekers
                    </Typography>
                    <Typography variant='h6' sx={{color: "#656C6C"}}>
                        Expand your network and portfolio, receive work <br/> recommendations, and get hired for your dream Job.
                    </Typography>
                    </Grid>
                </Grid>
                <Grid>
                    <Box sx={{ width: '100%', my: 5 }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{textAlign: "left"}}>
                            <Grid item xs={12} md={3}>
                                <img style={{width: "250px", height: "200px"}} src="https://image.freepik.com/free-vector/characters-people-their-social-network-illustration_53876-43271.jpg" alt="" />
                                <Typography variant='h5' sx={{my: 3}} style={{fontWeight: 600}}>
                                    Expand Your <br/> Frofessional Network
                                </Typography>
                                <Typography variant='h6' sx={{color: "#656C6C"}}>
                                    Build your professional profile, find connections, and new job opportunites
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <img style={{width: "250px", height: "200px"}} src="https://image.freepik.com/free-vector/male-customer-service-work-flat-vector-illustration_110249-211.jpg" alt="" />
                                <Typography variant='h5' sx={{my: 3}} style={{fontWeight: 600}}>
                                    Post Services and <br/> Portfolios
                                </Typography>
                                <Typography variant='h6' sx={{color: "#656C6C"}}>
                                    Showcase your creativity, experience, skills, and post projects.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <img style={{width: "250px", height: "200px"}} src="https://image.freepik.com/free-vector/online-assistant-user-help-frequently-asked-questions-call-center-worker-cartoon-character-woman-working-hotline_335657-2336.jpg" alt="" />
                                <Typography variant='h5' sx={{my: 3}} style={{fontWeight: 600}}>
                                    Apply for Your <br/> Dream Jobs
                                </Typography>
                                <Typography variant='h6' sx={{color: "#656C6C"}}>
                                    Get recommendations for the jobs that match your interests and skills.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <img style={{width: "250px", height: "200px"}} src="https://image.freepik.com/free-vector/hotline-operators-consult-customers-with-headsets-computers-flat-modern-design-illustration_566886-17.jpg" alt="" />
                                <Typography variant='h5' sx={{my: 3}} style={{fontWeight: 600}}>
                                    Chat with Employer and <br/> Get Hired
                                </Typography>
                                <Typography variant='h6' sx={{color: "#656C6C"}}>
                                    Chat to discuss details, and start employment, contract, or a freelance project
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default JobSeeker;