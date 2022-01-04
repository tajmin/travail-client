import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { grey, lightGreen } from '@mui/material/colors';
import { Box } from '@mui/system';
import React from 'react';

const JobSeeker = () => {
    return (
        <Container style={{marginTop: "40px"}}>
            <Grid container spacing={2}>
                <Grid item xs={12} style={{textAlign: "center"}}>
                    <Grid>

                    <Typography gutterBottom
                    sx={{ fontWeight: 'bold', color: grey[800], pt: 2 }}
                    variant="h2" component="div"
                    fontSize={{ lg: 50, xs: 30 }}>
                     For Job Seekers                   
                    </Typography>

                    <Typography variant='h4' component="div"
                    fontSize={{ lg: 20, xs: 20 }}
                    sx={{
                        fontWeight: 'medium',
                        color: grey[800],
                        mb: 8
                    }}>
                     Expand your network and portfolio, receive work <br/> recommendations, and get hired for your dream Job.
                    </Typography>

                    </Grid>
                </Grid>




                <Grid sx={{ pb: 6 }} container spacing={4}>
                    <Grid item xs={12} lg={3}>
                        <Card sx={{ '&:hover': { boxShadow: 3, backgroundColor: lightGreen[50]} }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="250"
                                image="https://image.freepik.com/free-vector/characters-people-their-social-network-illustration_53876-43271.jpg"
                            />
                            <CardContent sx={{ minHeight: '150px' }}>
                                <Typography sx={{ pb: 1.5 }} gutterBottom variant="h6" component="div">
                                Expand Your Professional Network
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                Build your professional profile, find connections, and new job opportunites
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                        <Card sx={{ '&:hover': { boxShadow: 3, backgroundColor: lightGreen[50] } }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="250"
                                image="https://image.freepik.com/free-vector/male-customer-service-work-flat-vector-illustration_110249-211.jpg"
                            />
                            <CardContent sx={{ minHeight: '150px' }}>
                                <Typography sx={{ pb: 1.5 }} gutterBottom variant="h6" component="div">
                                Post Services and Portfolios
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                Showcase your creativity, experience, skills, and post projects.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                        <Card sx={{ '&:hover': { boxShadow: 3, backgroundColor: lightGreen[50] } }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="250"
                                image="https://image.freepik.com/free-vector/online-assistant-user-help-frequently-asked-questions-call-center-worker-cartoon-character-woman-working-hotline_335657-2336.jpg"
                            />
                            <CardContent sx={{ minHeight: '150px' }}>
                                <Typography sx={{ pb: 1.5 }} gutterBottom variant="h6" component="div">
                                Apply for Your Dream Jobs
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                Get recommendations for the jobs that match your interests and skills.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                        <Card sx={{ '&:hover': { boxShadow: 3, backgroundColor: lightGreen[50] } }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="250"
                                image="https://image.freepik.com/free-vector/hotline-operators-consult-customers-with-headsets-computers-flat-modern-design-illustration_566886-17.jpg"
                            />
                            <CardContent sx={{ minHeight: '150px' }}>
                                <Typography sx={{ pb: 1.5 }} gutterBottom variant="h6" component="div">
                                Chat with Employer and Get Hired
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                Chat to discuss details, and start employment, contract, or a freelance project
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </Grid>
        </Container>
    );
};

export default JobSeeker;