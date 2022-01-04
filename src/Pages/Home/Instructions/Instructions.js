import { Container, Grid, Typography, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { Box } from '@mui/system';
import { grey, lightGreen } from '@mui/material/colors';
import React from 'react';

const Instructions = () => {
    return (
        <Box sx={{ backgroundColor: lightGreen[50], py: 5 }}>
            <Container maxWidth="xl" sx={{ py: 10 }}>
                <Typography gutterBottom
                    sx={{ fontWeight: 'bold', color: grey[800], pt: 2 }}
                    variant="h2" component="div"
                    fontSize={{ lg: 50, xs: 30 }}>
                    For Employers
                </Typography>

                <Typography variant='h4' component="div"
                    fontSize={{ lg: 20, xs: 20 }}
                    sx={{
                        fontWeight: 'medium',
                        color: grey[800],
                        mb: 8
                    }}>
                    Find the best talent for your full-time, part-time, <br /> contract, internship, or freelancer jobs in any location.
                </Typography>

                <Grid sx={{ pb: 6 }} container spacing={4}>
                    <Grid item xs={12} lg={3}>
                        <Card sx={{ '&:hover': { boxShadow: 3 } }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="250"
                                image="https://image.freepik.com/free-vector/multiethnic-people-talking-discuss-social-network-two-friend-men-women-speaking-couples-with-speech-bubbles-character-dialogue-concept_90220-228.jpg"
                            />
                            <CardContent sx={{ minHeight: '150px' }}>
                                <Typography sx={{ pb: 1.5 }} gutterBottom variant="h6" component="div">
                                    Post Jobs For Free
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Find professinals from around the world and across all skills
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Card sx={{ '&:hover': { boxShadow: 3 } }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="250"
                                image="https://image.freepik.com/free-vector/flat-customer-support-illustration_23-2148897470.jpg"
                            />
                            <CardContent sx={{ minHeight: '150px' }}>
                                <Typography sx={{ pb: 1.5 }} gutterBottom variant="h6" component="div">
                                    Browse Portfolios
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Choose people by their creativity and previous projects, not just resumes.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                        <Card sx={{ '&:hover': { boxShadow: 3 } }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="250"
                                image="https://image.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899207.jpg"
                            />
                            <CardContent sx={{ minHeight: '150px' }}>
                                <Typography sx={{ pb: 1.5 }} gutterBottom variant="h6" component="div">
                                    Best Matches for Jobs
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Get the best candidates on top of your list of job applications.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                        <Card sx={{ '&:hover': { boxShadow: 3 } }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="250"
                                image="https://image.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899174.jpg"
                            />
                            <CardContent sx={{ minHeight: '150px' }}>
                                <Typography sx={{ pb: 1.5 }} gutterBottom variant="h6" component="div">
                                    The Power of Community
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Connect and chat with other companies and remote professionals
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Instructions;