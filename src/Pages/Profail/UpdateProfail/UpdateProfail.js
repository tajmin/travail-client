import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const UpdateProfail = ({open, handleUpdateClose, user}) => {

    const initialInfo = {userName: user.displayName, email: user.email, phone: user.phone, education: user.education, experience: user.experience, skills: user.skills}
    const [updateInfo, setUpdatInfo] = useState(initialInfo);

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...updateInfo };
        newInfo[field] = value;
        setUpdatInfo(newInfo);
    }

    const handleEditProfile = (e) =>{
        alert("Edited")
        const userinfo = {
            ...updateInfo,
          }
          console.log(userinfo)

        handleUpdateClose()
        e.preventDefault()
    }
    
    return (
        <>
            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleUpdateClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {user.displayName}
            </Typography>
            <form onSubmit={handleEditProfile}>
                <TextField 
                sx={{width: "90%", m: 1}}
                id= "outlined-size-small"
                name= "userName"
                onBlur = {handleOnBlur}
                defaultValue= {user.displayName}
                size='small'
                >
                </TextField>
                <TextField 
                sx={{width: "90%", m: 1}}
                id= "outlined-size-small"
                name= "email"
                onBlur = {handleOnBlur}
                defaultValue= {user.email}
                size='small'
                >
                </TextField>
                <TextField 
                sx={{width: "90%", m: 1}}
                id= "outlined-size-small"
                name= "phone"
                onBlur = {handleOnBlur}
                defaultValue= "Phone"
                size='small'
                >
                </TextField>
                <TextField 
                sx={{width: "90%", m: 1}}
                id= "outlined-size-small"
                name= "education"
                onBlur = {handleOnBlur}
                defaultValue= "Education"
                size='small'
                >
                </TextField>
                <TextField 
                sx={{width: "90%", m: 1}}
                id= "outlined-size-small"
                name= "experience"
                onBlur = {handleOnBlur}
                defaultValue= "Job Experience"
                size='small'
                >
                </TextField>
                <TextField 
                sx={{width: "90%", m: 1}}
                id= "outlined-size-small"
                name= "skills"
                onBlur = {handleOnBlur}
                defaultValue= "Skills"
                size='small'
                >
                </TextField>
                <Button type='submit' variant='contained'>Edit</Button>
            </form>
          </Box>
        </Fade>
      </Modal>
        </>
    );
};

export default UpdateProfail;