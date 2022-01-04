import { Button, Container, Grid } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../../components/Shared/Navbar';

const NotFound = () => {
    return (
        <Grid>
            <Navbar></Navbar>
                <Grid>
                    <Grid style={{width:'40%', height:'20%', marginLeft:'30%', marginTop:'5px'}}>
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