import { Button, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';
import Navbar from '../../components/Shared/Navbar';
import Footer from '../Home/Footer/Footer';


const About = () => {
    return (
        <Grid sx={{ mb:2}}>
            <Navbar></Navbar>
            <h1>About <span style={{color:'#7cb342'}}>TRAVAIL</span> </h1>
            <Grid container spacing={1} sx={{ml:2, mb:2}}  style={{textAlign: "left"}}>
                <Grid item md={12} lg={6} style={{borderRight:'2px solid #7cb342'}}>
                    <Grid container spacing={1}>
                        <Grid item md={12} lg={6}>
                            <img style={{width:'100%', height:'200px', margin:'5px', borderRadius:'10px'}} src="https://image.freepik.com/free-vector/tiny-people-searching-business-opportunities_74855-19928.jpg" alt="" />
                        </Grid>
                        <Grid item md={12} lg={6} sx={{mt:4}}>
                            <Typography variant='h5' style={{fontWeight: 600}}>A Market Place to FInd Remote Job</Typography>
                            <Typography variant='h7' style={{fontWeight: 400, color:'#757575'}}>
                                You can find your suitable remote job here in a easy way. 
                            </Typography> <br />
                            <Link style={{textDecoration: "none", marginTop: "15px", marginLeft:'-5px' }}>
                                <Button>Learn More <ArrowRightAltSharpIcon
                                style={{marginLeft: 10}}/></Button>
                        
                             </Link>
                        </Grid>
                    </Grid> 
                </Grid>
                <Grid item md={12} lg={6}>
                <Grid container spacing={1}>
                        <Grid item md={12} lg={6}>
                            <img style={{width:'100%', height:'200px', margin:'5px', borderRadius:'10px'}} src="https://image.freepik.com/free-vector/recruiting-professionals-studying-candidate-profiles_1262-21404.jpg" alt="" />
                        </Grid>
                        <Grid item md={12} lg={6} sx={{mt:4}}>
                            <Typography variant='h5' style={{fontWeight: 600}}>A Place where you can chose the perfect employee</Typography>
                            <Typography variant='h7' style={{fontWeight: 400, color:'#757575'}}>
                                You can post job here if you are looking for candidates for your company. 
                            </Typography> <br />
                            <Link style={{textDecoration: "none", marginTop: "15px", marginLeft:'-5px' }}>
                                <Button>Learn More <ArrowRightAltSharpIcon
                                style={{marginLeft: 10}}/></Button>
                        
                             </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Footer></Footer>
        </Grid>
    );
};

export default About;