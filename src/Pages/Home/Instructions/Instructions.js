import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Instructions = () => {
    return (
        <Container style={{marginTop: "40px"}}>
            <Grid container spacing={2}>
                <Grid item xs={12} style={{textAlign: "center"}}>
                    <Grid>
                    <Typography variant='h4' style={{fontWeight: 600}}>
                        For Employers
                    </Typography>
                    <Typography variant='h6' sx={{color: "#656C6C"}}>
                        Find the best talent for your full-time, <br/> part-time, contract, internship, or freelancer jobs in any location.
                    </Typography>
                    </Grid>
                </Grid>
                <Grid>
                    <Box sx={{ width: '100%', my: 5 }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{textAlign: "left"}}>
                            <Grid item xs={12} md={3}>
                                <img style={{width: "250px", height: "200px"}} src="https://image.shutterstock.com/image-photo/stock-vector-business-people-holding-megaphone-and-shouting-through-it-announcement-of-good-news-attention-450w-2053129028.jpg" alt="" />
                                <Typography variant='h5' sx={{my: 3}} style={{fontWeight: 600}}>
                                    Post Jobs <br/> For Free
                                </Typography>
                                <Typography variant='h6' sx={{color: "#656C6C"}}>
                                    Find professinals from around the world and across all skills
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <img style={{width: "250px", height: "200px"}} src="https://image.freepik.com/free-vector/flat-customer-support-illustration_23-2148897470.jpg" alt="" />
                                <Typography variant='h5' sx={{my: 3}} style={{fontWeight: 600}}>
                                    Browse Services and <br/> Portfolios
                                </Typography>
                                <Typography variant='h6' sx={{color: "#656C6C"}}>
                                    Choose people by their creativity and previous projects, not just resumes.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <img style={{width: "250px", height: "200px"}} src="https://image.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899207.jpg" alt="" />
                                <Typography variant='h5' sx={{my: 3}} style={{fontWeight: 600}}>
                                    Get Best Matches for <br/> Your Jobs
                                </Typography>
                                <Typography variant='h6' sx={{color: "#656C6C"}}>
                                    Get the best candidates on top of your list of job applications.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <img style={{width: "250px", height: "200px"}} src="https://image.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899174.jpg" alt="" />
                                <Typography variant='h5' sx={{my: 3}} style={{fontWeight: 600}}>
                                    Use the Power of <br/> Community
                                </Typography>
                                <Typography variant='h6' sx={{color: "#656C6C"}}>
                                    Connect and chat with other companies and remote professionals
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Instructions;