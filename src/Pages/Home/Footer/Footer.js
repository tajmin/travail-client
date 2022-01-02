import React from 'react';
import {Button, Grid, Link, Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';


const Footer = () => {
    return (
        <Grid sx={{background: '#eeeeee', pt:2, pb:2}}>
            <Grid container spacing={2}>
                    <Grid item xs={6} md={4} lg={3}>
                        <Typography sx={{mb:2}} variant='h4' style={{ fontWeight: 600 }}>Site Name & Logo </Typography>
                        <Button><MailIcon sx={{ color: '#2196f3;', mx:1,mt:.5, fontSize: 20}}></MailIcon>jobshub@gmail.com</Button><br />
                        <Link style={{textDecoration:'none'}}>
                            <MailIcon sx={{ color: '#2196f3;',mt:.5, mx:1, fontSize: 20}}></MailIcon>jobshub@gmail.com</Link><br />
                        <Grid sx={{pt:1,mt:.5}}>
                            <FacebookIcon sx={{color:'#2979ff'}}></FacebookIcon>
                            <LinkedInIcon sx={{color:'rgb(0, 119, 181)', mx:1}}></LinkedInIcon>
                            <TwitterIcon sx={{color:'rgb(56, 161, 243)'}}></TwitterIcon>
                            <InstagramIcon sx={{color:'rgb(215, 32, 90)', mx:1}}></InstagramIcon>
                            <PinterestIcon sx={{color:'rgb(205, 33, 41)'}}></PinterestIcon>
                        </Grid>
                        <Typography sx={{fontSize:14, color:'#9e9e9e',mt:2}}>© 2022 JobsHub.com</Typography>
                    </Grid>
                    <Grid item xs={6} md={4} lg={3} >
                        <Typography sx={{color:'#757575', my:2, fontSize:20}}>General</Typography>
                        <Grid sx={{color:'#2196f3'}}>
                            <Typography sx={{mt:.5}}>Home Page</Typography>
                            <Typography sx={{mt:.5}}>Find Job</Typography>
                            <Typography sx={{mt:.5}}>Buy Service</Typography>
                            <Typography sx={{mt:.5}}>Brose Portfolios</Typography>
                            <Typography sx={{mt:.5}}>Test Ideas</Typography>
                            <Typography sx={{mt:.5}}>Join a Course</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} md={4} lg={3}>
                        <Typography sx={{color:'#757575', my:2, fontSize:20}}>Job Categories</Typography>
                        <Grid sx={{color:'#2196f3'}}>
                            <Typography sx={{mt:.5}}>Web, Mobile & It</Typography>
                            <Typography sx={{mt:.5}}>Marketing & Sales</Typography>
                            <Typography sx={{mt:.5}}>Business & Consultant</Typography>
                            <Typography sx={{mt:.5}}>Design & Creative</Typography>
                            <Typography sx={{mt:.5}}>Engineering</Typography>
                            <Typography sx={{mt:.5}}>Customer Support</Typography>
                            <Typography sx={{mt:.5}}>Writing & Translate</Typography>
                            <Typography sx={{mt:.5}}>Legal & Finance</Typography>
                        </Grid> 
                    </Grid>
                    <Grid item xs={6} md={4} lg={3}>
                        <Typography sx={{color:'#757575', my:2, fontSize:20}}>Help & Supports</Typography>
                        <Grid sx={{color:'#2196f3'}}>
                            <Typography>Help Center</Typography>
                            <Typography sx={{mt:.5}}>Community</Typography>
                            <Typography sx={{mt:.5}}>Blogs</Typography>
                            <Typography sx={{mt:.5}}>Terms & Condition</Typography>
                            <Typography sx={{mt:.5}}>Privacy & policy</Typography>
                        </Grid> 
                    </Grid>
                </Grid>
        </Grid>
    );
};

export default Footer;