import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Navbar from '../../components/Shared/Navbar';
import Footer from '../Home/Footer/Footer';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Contact = () => {
    return (
        <Grid>
            <Navbar></Navbar>
            <Grid container spacing={1} sx={{myz:2}}  style={{ marginTop:'10px'}}>
                <Grid item md={12} lg={6} sx={{paddingBottom:'20px'}}>
                    <img sx={{pt:2, pb:-2}} style={{height:'90%'}} src="https://image.freepik.com/free-vector/hand-drawn-people-asking-questions-illustration_23-2148906555.jpg" alt="" />
                    <Typography variant='h4' style={{fontWeight: 600, color:'#ffa000'}}>Have Any Question?</Typography>
                </Grid>
                <Grid item md={12} lg={6} style={{ textAlign:'left'}}>
                    <Typography variant='h4' sx={{pt:5}} style={{fontWeight:500, color:'#1976d2'}}>Let us Know in...</Typography>
                    <Grid>
                        <MailIcon sx={{ color: '#2196f3;', mt:1, mr:1, fontSize: 30}}></MailIcon> 
                        <Typography sx={{ color: '#2196f3;', pl:1, display:'inline', fontSize: 30}}>travail@gmail.com</Typography>
                    </Grid>
                    <Grid>
                        <FacebookIcon sx={{color:'#2979ff', fontSize:30}}></FacebookIcon>
                        <Typography sx={{ color: '#2979ff;', pl:1, display:'inline', fontSize: 30}}>www.facebook.com/travail</Typography>
                    </Grid>
                    <Grid>
                        <LinkedInIcon sx={{color:'rgb(0, 119, 181)', mx:1, fontSize:30, ml:-.1}}></LinkedInIcon>
                        <Typography sx={{ color: 'rgb(0, 119, 181)', pl:1, display:'inline', fontSize: 30}}>www.linkedln.com/travail</Typography>
                    </Grid>
                    <Grid>
                        <TwitterIcon sx={{color:'rgb(56, 161, 243)', fontSize:30}}></TwitterIcon>
                        <Typography sx={{ color: 'rgb(56, 161, 243)', pl:1, display:'inline', fontSize: 30}}>www.twitter.com/travail</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Footer></Footer>
        </Grid>
    );
};

export default Contact;