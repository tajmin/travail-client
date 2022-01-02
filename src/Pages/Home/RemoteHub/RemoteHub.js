import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupIcon from '@mui/icons-material/Group';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PaidIcon from '@mui/icons-material/Paid';


const RemoteHub = () => {
    return (
        <Container style={{marginTop: "40px"}}>
            <Grid container spacing={2}>
                <Grid item xs={12} style={{textAlign: "center"}}>
                    <Grid>
                    <Typography variant='h4' style={{fontWeight: 600}}>
                        Why RemoteHub?
                    </Typography>
                    </Grid>
                </Grid>
                <Grid>
                    <Box sx={{ width: '100%', my: 5 }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{textAlign: "left"}}>
                            <Grid item xs={12} md={3}>
                                <KeyboardCommandKeyIcon sx={{ color: '#8E2CF7', fontSize: 50}}/>
                                <Typography variant='h5' sx={{my: 3}} style={{fontWeight: 600}}>
                                    Free Job Posting
                                </Typography>
                                <Typography variant='h6' sx={{color: "#656C6C"}}>
                                    Post an unlimited number of your open vacancies absolutely for free.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <MarkEmailReadIcon sx={{ color: '#0B7806', fontSize: 50 }}/>
                                <Typography variant='h5' sx={{my: 3}} style={{fontWeight: 600}}>
                                    Talent Marketplace
                                </Typography>
                                <Typography variant='h6' sx={{color: "#656C6C"}}>
                                    Post jobs and review applications, or browse and order available services.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <SearchIcon sx={{ color: 'blue', fontSize: 50 }}/>
                                <Typography variant='h5' sx={{my: 3}} style={{fontWeight: 600}}>
                                    All Types of Jobs
                                </Typography>
                                <Typography variant='h6' sx={{color: "#656C6C"}}>
                                    From full-time and part-time jobs, to contract, internship, freelance, and volunteering.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <LocationOnIcon sx={{ color: '#0B7806', fontSize: 50 }}/>
                                <Typography variant='h5' sx={{my: 3}} style={{fontWeight: 600}}>
                                    All Locations
                                </Typography>
                                <Typography variant='h6' sx={{color: "#656C6C"}}>
                                    From remote in any location to specific regions, countries, and non-remote jobs.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Typography>
                                    <ThumbUpIcon sx={{ color: '#A5DA58', fontSize: 50 }}></ThumbUpIcon>
                                </Typography>
                                <Typography variant='h5' sx={{my: 3}} style={{fontWeight: 600}}>
                                    Smart Matching
                                </Typography>
                                <Typography variant='h6' sx={{color: "#656C6C"}}>
                                    Receive recommendations about the best candidates for yours jobs.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <GroupIcon sx={{ color: '#49D10E ', fontSize: 50 }}/>
                                <Typography variant='h5' sx={{my: 3}} style={{fontWeight: 600}}>
                                    Power of Networking
                                </Typography>
                                <Typography variant='h6' sx={{color: "#656C6C"}}>
                                    Expand your network to find more candidates or jobs throug introductions.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <EmojiObjectsIcon sx={{ color: '#F6640B', fontSize: 50 }}/>
                                <Typography variant='h5' sx={{my: 3}} style={{fontWeight: 600}}>
                                    Creativity Showcase
                                </Typography>
                                <Typography variant='h6' sx={{color: "#656C6C"}}>
                                    Browse portfolios to find the best talent, ideas and professional feedback.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <PaidIcon sx={{ color: '#49D10E', fontSize: 50 }}/>
                                <Typography variant='h5' sx={{my: 3}} style={{fontWeight: 600}}>
                                    Integrated Payments
                                </Typography>
                                <Typography variant='h6' sx={{color: "#656C6C"}}>
                                    Pay contractors and freelancers on RemoteHub with a sate escrow option.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default RemoteHub;