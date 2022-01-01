import React from 'react';

import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const verticalCenter={
    display: "flex",
    alignItems: "center",
    height: 400,
}

const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{...verticalCenter, textAlign: "left"}} xs={12} md={6}>
                    <Box>
                        <Typography variant='h3' sx={{ my:3, fontWeight: 500}}>
                        Remote <br/>
                        Job Service Community
                        </Typography>
                        <Typography variant='h6' sx={{fontSize: 14, color: "#656C6C"}}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde ab velit et nisi eveniet, dignissimos animi repellendus eaque rem dolores!
                        </Typography>
                        <Typography variant='h5' style={{marginTop: "15px"}}>
                            <Button variant='contained' style={{backgroundColor: "#65F7EC", marginRight: "10px", borderRadius: "30px"}}>Post Job for Free</Button>
                            or
                            <Button variant='contained' style={{backgroundColor: "#65F7EC", marginLeft: "10px", borderRadius: "30px"}}>Post Job for Free</Button>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                <img style={{width: "400px"}} src="https://cdn.w600.comps.canstockphoto.com/job-target-drawing_csp9499104.jpg" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;