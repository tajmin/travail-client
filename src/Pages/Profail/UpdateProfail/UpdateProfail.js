import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { useForm } from "react-hook-form";
import { Button, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

const UpdateProfail = ({open, handleUpdateClose, user}) => {

  const initialInfo = {userName: user.displayName, email: user.email, phone: user.phone, education: user.education, experience: user.experience, skills: user.skills}
    const [users, setUsers] = useState(initialInfo);

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...users };
        newInfo[field] = value;
        setUsers(newInfo);
    }

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data)
    handleUpdateClose()
    const proced = window.confirm("Are you want to update?")
        if(proced){
            fetch(`https://pacific-lowlands-19741.herokuapp.com/users`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(users)
           
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                alert('update Successfully')
                setUsers({});               
            };
        });
      };
  };
    
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField sx={{ marginBottom: "20px" }}
              {...register("userName", { required: true })}
              placeholder='Name' 
              defaultValue= {user.displayName} 
              onBlur = {handleOnBlur}/>

              <TextField 
              sx={{ marginBottom: "20px" }}
              {...register("email")} 
              placeholder='Email'
              onBlur = {handleOnBlur}/>

              <TextField 
              sx={{ marginBottom: "20px" }}
              type="number" {...register("phone")} 
              placeholder='Phone'
              onBlur = {handleOnBlur}/>

              <TextField 
              sx={{ marginBottom: "20px" }}
              {...register("education")} 
              placeholder='Education'
              onBlur = {handleOnBlur}/>

              <TextField 
              sx={{ marginBottom: "20px" }}
              {...register("experience")} 
              placeholder='Experience'
              onBlur = {handleOnBlur}/>

              <TextField 
              sx={{ marginBottom: "20px" }}
              {...register("skills")}
              placeholder='Skills'
              onBlur = {handleOnBlur}/>
              <br/>
              <Button variant="contained" color="success" type="submit">Submit</Button>

            </form>
          </Box>
        </Fade>
      </Modal>
        </>
    );
};

export default UpdateProfail;
