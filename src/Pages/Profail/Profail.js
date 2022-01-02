import { Button, Container, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const verticalCenter={
    display: "flex",
    alignItems: "center",
    height: 400,
}

const Profail = () => {
    return (
        <Container sx={{flexGrow: 1}}>
            <Grid container spaching={2}>
                <Grid item xs={12} md={3} style={verticalCenter}>
                    <Box style={{marginLeft: "100px"}}>
                        <Grid>
                        <img style={{width: "150px", height: "150px", borderRadius: "80px"}} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
                        </Grid>
                        <Link style={{textDecoration: "none"}}>
                        <Button>Edit Profile</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={9} style={{ ...verticalCenter, textAlign: "left"}}>
                    <Box style={{marginTop: "-40px"}}>
                        <Typography>
                            Sanaul islam
                        </Typography>
                        <Typography>
                            Web developer
                        </Typography>
                        <Typography>
                            mdsanaulislam154@gmail.com
                        </Typography>
                        <Typography>
                            Phone: 01722586777
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam debitis quo, minus necessitatibus iusto voluptatum in delectus totam quia! Explicabo amet tenetur praesentium inventore illo beatae doloribus excepturi, autem corrupti!
                </Typography>
            </Grid>
            <Grid>
                <Typography>
                    Address will add
                </Typography>
            </Grid>
        </Container>
    );
};

export default Profail;