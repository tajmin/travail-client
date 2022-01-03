import * as React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const AllApplication = () => {
    return (
        <Container style={{margin: "56px"}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Grid style={{ height: "30px", backgroundColor: "#0B7806", marginBottom: "30px"}}>
                            <Typography style={{color: "white"}}>
                               My All Application
                            </Typography>
                        </Grid>
                        
                        <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {Array.from(Array(6)).map((_, index) => (
                            <Grid item xs={12} sm={12} md={12} key={index}>
                                <Grid>
                                    <Grid xs={12} md={12} style={{display: "flex", margin: "5px"}}>
                                        <Grid xs={3} md={3} style={{textAlign: "right", marginRight: "15px"}}>
                                            <Typography>
                                                <HomeWorkIcon style={{color: "#13F7B5"}}/>
                                            </Typography>
                                            <img style={{width: "30px", borderRadius: "45px"}} src="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/photos/term-bg-1-c98135712157fb21286eafd480f610f9.jpg" alt="" />
                                        </Grid>
                                        <Grid xs={6} md={6} style={{textAlign: "left", display: "flex"}}>
                                            <Grid>
                                                <Typography style={{fontSize: 22, fontWeight: 600}}>
                                                    Textify Al
                                                </Typography>
                                                <Typography style={{fontSize: 20, fontWeight: 500}}>
                                                    Frond-end developer
                                                </Typography>
                                                <Typography style={{fontSize: 14, fontWeight: 600}}>
                                                    Unites-state
                                                </Typography>
                                            </Grid>   
                                        </Grid>
                                        <Grid xs={3} md={3}>
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

export default AllApplication;