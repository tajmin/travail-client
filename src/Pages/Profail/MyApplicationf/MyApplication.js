import * as React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';



const MyApplication = () => {
    return (
        <Container style={{margin: "56px"}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Grid style={{ height: "30px", backgroundColor: "#0B7806"}}>
                            <Typography style={{color: "white"}}>
                                My Application
                            </Typography>
                        </Grid>
                            <Grid style={{marginTop: "50px"}}>
                                <Grid xs={12} md={12} style={{display: "flex", margin: "10px"}}>
                                    <Grid xs={3} md={3} style={{}}>
                                        <Typography>
                                            Name
                                        </Typography>
                                    </Grid>
                                    <Grid xs={9} md={9} style={{textAlign: "left"}}>
                                        <Typography>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore aliquam, 
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid xs={12} md={12} style={{display: "flex", margin: "10px"}}>
                                    <Grid xs={3} md={3} style={{}}>
                                        <Typography>
                                            Name
                                        </Typography>
                                    </Grid>
                                    <Grid xs={9} md={9} style={{textAlign: "left"}}>
                                        <Typography>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore aliquam, 
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid xs={12} md={12} style={{display: "flex", margin: "10px"}}>
                                    <Grid xs={3} md={3} style={{}}>
                                        <Typography style={{fontWeight: 600}}>
                                            Name
                                        </Typography>
                                    </Grid>
                                    <Grid xs={9} md={9} style={{textAlign: "left"}}>
                                        <Typography>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore aliquam, 
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                    </Grid> 
                </Grid>
            </Box>
        </Container>
    );
};

export default MyApplication;