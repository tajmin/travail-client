import { Button, Container, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import UpdateProfail from './UpdateProfail/UpdateProfail';
import { lightGreen } from '@mui/material/colors';

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
    let {email} = user;
    
    const [users, setUsers] = useState()
    const url = `https://pacific-lowlands-19741.herokuapp.com/users/${email}`;
    useEffect(()=>{  
        fetch(url)
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    console.log(users)

    return (
        <>
        <Container sx={{ flexGrow: 1 , mx: 6}}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(1)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <Box sx={{flexGrow: 1}}>
                        <Grid item xs={12} md={3} style={verticalCenter}>
                            <Grid>
                                <Box>
                                    <Grid>
                                    <img style={{
                                        width: "150px", 
                                        height: "150px", 
                                        borderRadius: "80px"
                                        }}
                                         src={user.photoURL} alt="" />
                                    </Grid>
                                    <Link style={{textDecoration: "none"}}>
                                    <Button 
                                    sx={{backgroundColor: lightGreen[800]}} variant='contained' 
                                    onClick={handleUpdateOpen}
                                    >
                                        Edit Profile</Button>
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
                        <Container style={{textAlign: "left", width: "600px"}}>
                            <Grid xs={12} md={12}>
                            <Typography variant='h5' style={{fontWeight: 600}}>
                            Education: <span style={{fontWeight:500, fontSize: 20, marginLeft: "70px"}}>{users?.education}</span>
                            </Typography>
                            <Typography variant='h5' style={{fontWeight: 600}}>
                            Experience: <span style={{fontWeight:500, fontSize: 20, marginLeft: "58px"}}>{users?.experience}</span>
                            </Typography>
                            </Grid>
                        </Container>
                    </Box>
                </Grid>
                ))}
            </Grid>
        </Container>
        <UpdateProfail
            user={user}
            open={open}
            handleUpdateClose={handleUpdateClose}
        ></UpdateProfail>
        </>
    );
};

export default Profail;