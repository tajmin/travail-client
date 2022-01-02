import { Box, Button, Container, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';
import jobs from "../../../fakeData"

const CurrentJob = () => {
    return (
        <Container>
            <Box style={{marginBottom: "50px"}}>
            <Typography variant='h4' style={{ fontWeight: 600, marginTop: "15px"}}>
                Current Job
            </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {jobs.map((job, id) => (
                <Grid item xs={2} sm={4} md={6} key={id} style={{borderRadius: "10px", gridGap: "5px"}}>
                    <Typography variant='h5' style={{fontWeight: 600, marginTop: "15px"}}>
                        {job.title}
                    </Typography>
                    <Typography variant='h6' style={{fontSize: 16, fontWeight: 500, marginTop: "15px"}}>
                        {job.company}
                    </Typography>
                    <Typography style={{marginTop: "15px"}}>
                        {job.jobDesc.slice(0, 200)}
                    </Typography>
                    <Link style={{textDecoration: "none", marginTop: "15px", }}>
                        <Button>Learn More <ArrowRightAltSharpIcon
                        style={{marginLeft: 10}}/></Button>
                        
                    </Link>
                </Grid>
                ))}
            </Grid>
            </Box>
        </Container>
    );
};

export default CurrentJob;