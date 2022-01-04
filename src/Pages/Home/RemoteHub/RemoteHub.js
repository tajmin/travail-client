import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
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
import { grey, lightGreen } from '@mui/material/colors';


const RemoteHub = () => {
    return (
        <Box sx={{ backgroundColor: lightGreen[50], py: 5 }}>
            <Container maxWidth="xl" sx={{ py: 10 }}>
            <Typography gutterBottom
                    sx={{ fontWeight: 'bold', color: grey[800], pt: 2 }}
                    variant="h2" component="div"
                    fontSize={{ lg: 50, xs: 30 }}>
                    Why Travail?
                </Typography>

                <Grid sx={{ pb: 6 }} container spacing={4}>
                    <Grid item xs={12} lg={3}>
                        <Card sx={{ '&:hover': { boxShadow: 3 } }}>
                        <KeyboardCommandKeyIcon sx={{ color: '#8E2CF7', fontSize: 50}}/>
                            <CardContent sx={{ minHeight: '150px' }}>
                                <Typography sx={{ pb: 1.5 }} gutterBottom variant="h6" component="div">
                                    Free Job Posting
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Post an unlimited number of your open vacancies absolutely for free.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Card sx={{ '&:hover': { boxShadow: 3 } }}>
                        <MarkEmailReadIcon sx={{ color: '#0B7806', fontSize: 50 }}/>
                            <CardContent sx={{ minHeight: '150px' }}>
                                <Typography sx={{ pb: 1.5 }} gutterBottom variant="h6" component="div">
                                    Talent Marketplace
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Post jobs and review applications, or browse and order available services.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Card sx={{ '&:hover': { boxShadow: 3 } }}>
                            <SearchIcon sx={{ color: 'blue', fontSize: 50 }}/>
                            <CardContent sx={{ minHeight: '150px' }}>
                                <Typography sx={{ pb: 1.5 }} gutterBottom variant="h6" component="div">
                                    All Types of Jobs
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    From full-time and part-time jobs, to contract, internship, freelance, and volunteering.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Card sx={{ '&:hover': { boxShadow: 3 } }}>
                            <LocationOnIcon sx={{ color: '#0B7806', fontSize: 50 }}/>
                            <CardContent sx={{ minHeight: '150px' }}>
                                <Typography sx={{ pb: 1.5 }} gutterBottom variant="h6" component="div">
                                    All Locations
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    From remote in any location to specific regions, countries, and non-remote jobs.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Card sx={{ '&:hover': { boxShadow: 3 } }}>
                            <ThumbUpIcon sx={{ color: '#A5DA58', fontSize: 50 }}/>
                            <CardContent sx={{ minHeight: '150px' }}>
                                <Typography sx={{ pb: 1.5 }} gutterBottom variant="h6" component="div">
                                    Smart Matching
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Receive recommendations about the best candidates for yours jobs.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Card sx={{ '&:hover': { boxShadow: 3 } }}>
                            <GroupIcon sx={{ color: '#49D10E ', fontSize: 50 }}/>
                            <CardContent sx={{ minHeight: '150px' }}>
                                <Typography sx={{ pb: 1.5 }} gutterBottom variant="h6" component="div">
                                    Power of Network
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Expand your network to find more candidates or jobs throug introductions.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Card sx={{ '&:hover': { boxShadow: 3 } }}>
                            <EmojiObjectsIcon sx={{ color: '#F6640B', fontSize: 50 }}/>
                            <CardContent sx={{ minHeight: '150px' }}>
                                <Typography sx={{ pb: 1.5 }} gutterBottom variant="h6" component="div">
                                    Creativity Showcase
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Browse portfolios to find the best talent, ideas and professional feedback.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Card sx={{ '&:hover': { boxShadow: 3 } }}>
                            <PaidIcon sx={{ color: '#49D10E', fontSize: 50 }}/>
                            <CardContent sx={{ minHeight: '150px' }}>
                                <Typography sx={{ pb: 1.5 }} gutterBottom variant="h6" component="div">
                                    Integreated Payments
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Pay contractors and freelancers on RemoteHub with a sate escrow option.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default RemoteHub;