import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Container, Icon, Typography } from '@mui/material';
import { Box } from '@mui/system';
import bannerImage from '../../../images/banner-image.svg'
import { grey, lightGreen } from '@mui/material/colors';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <Container fixed sx={{ minHeight: '60vh', py: 8 }}>
            <Grid container sx={{ my: 10 }} spacing={8}>
                <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: { xs: 'center', lg: 'flex-start' } }}
                    item xs={12} md={6}>
                    <Typography
                        sx={{ fontWeight: 'bold', color: grey[800] }}
                        variant="h1" component="div"
                        fontSize={{ lg: 70, xs: 50 }}>
                        Travail
                    </Typography>
                    <Typography variant="h3" component="div" fontSize={{ lg: 30, xs: 20 }}
                        sx={{
                            fontWeight: 'bold',
                            color: grey[700],
                            textAlign: { xs: 'center', lg: 'left' },
                            mt: 2,
                            mb: 4
                        }}
                    >
                        Connecting Professionals With Companies. Effortlessly.
                    </Typography>
                    <Box>
                        <Button component={Link} to={'/jobs'}
                            sx={{
                                borderRadius: '1.5rem',
                                px: 2,
                                py: 1.25,
                                border: `2px solid ${lightGreen[600]}`,
                                backgroundColor: lightGreen[600],
                                '&:hover': {
                                    border: '2px solid black',
                                    backgroundColor: 'black',
                                    color: 'white'
                                }
                            }}
                            variant="contained" size="large"
                            endIcon={<Icon>search</Icon>}>
                            Browse Jobs
                        </Button>
                        <Button component={Link} to={'/postjob'}
                            variant="contained" size="large"
                            sx={{
                                ml: 2,
                                borderRadius: '1.5rem',
                                px: 2,
                                py: 1.25,
                                backgroundColor: 'white',
                                color: lightGreen[600],
                                border: `2px solid ${lightGreen[600]}`,
                                '&:hover': {
                                    border: '2px solid black',
                                    backgroundColor: 'black',
                                    color: 'white'
                                }
                            }}
                            endIcon={<Icon>post_add</Icon>}
                        >
                            Post Job
                        </Button>
                    </Box>
                </Grid>
                <Grid sx={{ overflow: 'hidden', display: 'flex', justifyContent: 'center' }} item xs={12} md={6}>
                    <img style={{ maxWidth: '90%' }} src={bannerImage} alt="interview" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;