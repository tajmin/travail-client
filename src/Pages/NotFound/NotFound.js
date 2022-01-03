import { Button, Container, Grid } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <Grid>
            <Grid>
                <Grid style={{width:'50%', marginLeft:'25%'}}>
                    <img style={{ width: "100%"}}  src="https://image.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg" />
                </Grid>
                <NavLink to="/" style={{textDecoration:'none'}}>
                    <Button variant="contained">Go Back</Button>
                </NavLink>
            </Grid>
        </Grid>
    );
};

export default NotFound;