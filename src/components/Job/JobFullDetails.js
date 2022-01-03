import { FavoriteBorder, LocationOn } from '@mui/icons-material';
import { Button, Card, Container, CssBaseline,  Typography } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const JobFullDetails = () => {


   



    return (
        <>
            <Typography variant="h2">
                Full Details
            </Typography>



            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={2} >
                    <Grid item xs={12} md={2}>
                        {/* <Item>
                            <Button variant="contained">Upload Your Resume</Button>
                        </Item> */}
                    </Grid>
                    <Grid item xs={12} md={7} >
                        <Item border={1}>
                            <Container align="left" sx={{ padding: "10px 50px" }}>
                                <Typography variant="h5">
                                    Front end Developer
                                </Typography>
                                <Typography variant="h6">
                                    National Processing
                                </Typography>
                                <Typography>
                                   <LocationOn/> 472 W 800 N, Orem, UT 84057
                                </Typography>
                                <Typography variant="body2">
                                    Hybrid remote
                                </Typography>
                                <Typography variant="body2">
                                    $95,000 - $106,000 a year - Full-time
                                </Typography>
                                <Typography>
                                    National Processing
                                </Typography>
                                <>
                                    <Button variant="contained" sx={{ minWidth: 200, marginRight: "10px" }}>
                                        Apply Now
                                    </Button>
                                    <FavoriteBorder sx={{ fontSize: "40px" }} />
                                </>
                            </Container>
                            <CssBaseline />

                            <Container sx={{ borderTop: "1px solid gray" }}>
                                <Typography variant="h4" sx={{ margin: "20px 0px" }}>Full Job Description</Typography>
                                <Typography align="left" variant="subtitle1">Will Consider US Based Remote Candidates.

                                    National Processing is a well-established, award-winning merchant services provider based in Orem, Utah. We provide payment processing solutions for businesses of all sizes across the country. We’re growing rapidly and are expanding our technology offerings. Come to join a fun, hard-working team and wake up every morning wanting to go to work!

                                    We own and maintain several websites, gateways, and other payment transaction software. We have several new exciting projects in the works and need a talented front end developer to join our growing team.

                                    Education/Experience/Skills:

                                    Must have an excellent sense of design
                                    Experience conceptualizing and developing user interfaces
                                    Strong CSS3, HTML5, Javascript ES6 experience and skills
                                    Ability to translate static designs into interactive and fully functional web interfaces using the latest technologies and best practices
                                    Ability to design static mockups a bonus
                                    Photoshop, Illustrator, etc. experience
                                    Well-versed in one or all of the following frameworks: Angular, Vue, React or similar
                                    Experience using CSS preprocessors like SCSS/SASS
                                    Experience with git and Github
                                    Must understand mobile-first and responsive design/development principles
                                    Ability to create light weight, efficient, bug free front-end code
                                    Some server side/back end experience preferred
                                    Building client side interfaces using Laravel framework a bonus
                                    We offer a competitive benefits package & great work environment:

                                    Competitive salary
                                    401k with full match
                                    Competitive health insurance program
                                    Paid time off program including paid holidays
                                    Casual dress code
                                    Fully stocked break room
                                    Room for growth
                                    Fun, collaborative environment
                                    Remote/Hybrid or in Office
                                    Brand new Macbook Pro
                                    $95k-$106k DOE, DOQ. Full time position.

                                    Job Type: Full-time

                                    Pay: $95,000.00 - $106,000.00 per year

                                   <Typography variant="h6">Skill Requires : </Typography>
                                    <ul>
                                        <li>React JS</li>
                                        <li>Node JS</li>
                                        <li>Vanilla Javascript JS</li>
                                        <li>MongoDB or NoSQL Database JS</li>
                                    </ul>
                                    
                                    </Typography>
                            </Container>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <>
                            <Box sx={{ maxWidth: 200, position: "sticky", top: 0 }}>
                                <Card variant="outlined">
                                    <Typography sx={{ borderBottom: 1 }}>Company Info</Typography>
                                    <Button variant="outlined" sx={{ margin: "20px 5px" }}>Follow</Button>
                                    <Typography>Get job updates from National Processing</Typography>
                                </Card>
                            </Box>
                        </>
                    </Grid>

                </Grid>
            </Box>










        </>
    );
};

export default JobFullDetails;