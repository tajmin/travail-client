import { Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import UpdateProfail from './UpdateProfail/UpdateProfail';

const verticalCenter={
    display: "flex",
    alignItems: "center",
    height: 400,
}

const Profail = () => {
    const [open, setOpen] = React.useState(false);
    const handleUpdateOpen = () => setOpen(true);
    const handleUpdateClose = () => setOpen(false);

    const {user} = useAuth();
    const [users, setUsers] = useState()
    useEffect(()=>{
        const url = ``;
        fetch(url)
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(1)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <Box sx={{flexGrow: 1}}>
                        <Grid item xs={12} md={3} style={verticalCenter}>
                            <Grid>
                                <Box>
                                    <Grid>
                                    <img style={{width: "150px", height: "150px", borderRadius: "80px"}} src={user.photoURL} alt="" />
                                    </Grid>
                                    <Link style={{textDecoration: "none"}}>
                                    <Button onClick={handleUpdateOpen}>Edit Profile</Button>
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={9} style={{ ...verticalCenter, textAlign: "left", marginLeft: "100px", marginBottom: "20px"}}>
                                <Box>
                                    <Typography variant='h4' style={{fontWeight: 600}}>
                                        <span style={{fontWeight: 400, fontSize: 16}}>Full name: </span> <br />
                                        {user.displayName}
                                    </Typography>
                                    <Typography variant='h6' style={{fontWeight: 500}}>
                                    <span style={{fontWeight: 400, fontSize: 16}}>Email: </span> <br />
                                        {user.email}
                                    </Typography>
                                    <Typography variant='h6' style={{fontWeight: 500}}>
                                    <span style={{fontWeight: 400, fontSize: 16}}>Phone: </span> <br />
                                        {user.phoneNumber}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Container style={{textAlign: "left", border: "1px solid gray", width: "600px"}}>
                            <Grid xs={12} md={12}>
                            <Typography variant='h5' style={{fontWeight: 600}}>
                                Name: <span style={{fontWeight:500, fontSize: 20, marginLeft: "100px"}}>user.displaName</span>
                            </Typography>
                            <Typography variant='h5' style={{fontWeight: 600}}>
                                Education: <span style={{fontWeight:500, fontSize: 20, marginLeft: "58px"}}>user.displaNamesa</span>
                            </Typography>
                            <Typography variant='h5' style={{fontWeight: 600}}>
                                Experience: <span style={{fontWeight:500, fontSize: 20, marginLeft: "45px"}}>user.displaName</span>
                            </Typography>
                            <Typography variant='h5' style={{fontWeight: 600}}>
                                Skills: <span style={{fontWeight:500, fontSize: 20, marginLeft: "105px"}}>user.displaName</span>
                            </Typography>
                            </Grid>
                        </Container>
                    </Box>
                </Grid>
                ))}
            </Grid>
        </Box>
        <UpdateProfail
            user={user}
            open={open}
            handleUpdateClose={handleUpdateClose}
        ></UpdateProfail>
        </>
    );
};

export default Profail;