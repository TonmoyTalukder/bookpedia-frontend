import React, { useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button, FormControl, InputLabel, NativeSelect } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { useState } from 'react';
import axios from 'axios';

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

const EditModal = ({openEditProfile, handleEditProfileClose, singleUser}) => {
    const {id, displayName, email, photoUrl, date, gender, city, work} = singleUser;

    const initialInfo = { userName: displayName, userEmail: email, photoURL: photoUrl, birthday: date, work: work, city: city, gender: gender };


    // console.log('initial info ',initialInfo);

    const [userInfo, setUserInfo] = useState(initialInfo);
    
    

    useEffect(()=>{
      // console.log('User info ');
      // console.log(userInfo);
    }, [userInfo]);

    const handleOnBlur = (e) => {
      const field = e.target.name;
      const value = e.target.value;
    
      // console.log('User info ');
      // console.log(userInfo);

      const newInfo  = {...userInfo};
      newInfo[field] = value;
      // console.log(newInfo);
      setUserInfo({id, ...newInfo});

      // console.log('User info ',userInfo);

    }

    const handleBookingSubmit = (e) => {

        const editProfile = {
          id,
          ...userInfo
        }
        // Send data to server
        // console.log('userInfo');
        // console.log(userInfo);

        // console.log(editProfile);


        // for(let dbuser in databaseUser){
          // if(databaseUser[dbuser] === user.email){
              ////// console.log(databaseUser[dbuser]);

              axios.put(`/api/users/${id}`,{
                  id: userInfo.id,
                  displayName: userInfo.userName,
                  email: email,
                  photoUrl: userInfo.photoURL,
                  date: userInfo.birthday,
                  city: userInfo.city,
                  gender: userInfo.gender,
                  work: userInfo.work
              });
              // console.log("After Put", userInfo);

              // axios.post('/api/users', {
              //   editProfile
              // });

              // fetch(`/api/users/${id}`, {
              //   method: 'PUT',
              //   headers: {
              //     'content-type': 'application/json'
              //   },
              //   body: JSON.stringify(userInfo)
              // })
              //   .then()
              // console.log(window.location.href);

        handleEditProfileClose();
        setTimeout(`location.href = '${window.location.href}'`,1000);     
        e.preventDefault();
    }
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openEditProfile}
        onClose={handleEditProfileClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openEditProfile}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              
            </Typography>
            <form onSubmit={handleBookingSubmit}>
                
                <TextField
                    // label="Size"
                    disabled
                    sx={{width: '90%', m:1}}
                    id="outlined-size-small"
                    name = "id"
                    onBlur = {handleOnBlur}
                    value={id}
                    size="small"
                    label="ID"
                    focused
                />
                <TextField
                    // label="Size"
                    // disabled
                    sx={{width: '90%', m:1}}
                    id="outlined-size-small"
                    name = "userName"
                    onBlur = {handleOnBlur}
                    defaultValue={displayName}
                    size="small"
                    label="Name"
                    focused
                />
                <TextField
                    // label="Size"
                    disabled
                    sx={{width: '90%', m:1}}
                    id="outlined-size-small"
                    name = "userEmail"
                    onBlur = {handleOnBlur}
                    defaultValue={email}
                    size="small"
                    label="Email"
                    focused
                />
                <TextField
                    // label="Size"
                    // disabled
                    sx={{width: '90%', m:1}}
                    id="outlined-size-small"
                    name = "photoURL"
                    onBlur = {handleOnBlur}
                    defaultValue={photoUrl}
                    size="small"
                    label="Profile Picture URL"
                    focused
                />
                <TextField
                    // label="Size"
                    // disabled
                    sx={{width: '90%', m:1}}
                    id="outlined-size-small"
                    name = "birthday"
                    onBlur = {handleOnBlur}
                    type = "date"
                    defaultValue={date}
                    size="small"
                    label="Birthday"
                    focused
                />
                <FormControl
                    name = "category"
                    sx={{width: '90%', m:1}}
                >
                <InputLabel variant="standard" htmlFor="uncontrolled-native">Gender</InputLabel>
                
                  <NativeSelect
                      defaultValue={'null'}
                      inputProps={{
                          name: 'gender',
                          id: 'uncontrolled-native',
                      }}
                      label="Gender"
                      onBlur = {handleOnBlur}
                      >
                      <option value={'null'}> Null </option>
                      <option value={'Male'}>Male</option>
                      <option value={'Female'}>Female</option>
                      <option value={'Others'}>Others</option>
                  </NativeSelect>
                </FormControl>

                <TextField
                    // label="Size"
                    // disabled
                    sx={{width: '90%', m:1}}
                    id="outlined-size-small"
                    name = "city"
                    onBlur = {handleOnBlur}
                    defaultValue={city}
                    size="small"
                    label="City You Live in"
                    focused
                />

                <TextField
                    // label="Size"
                    // disabled
                    sx={{width: '90%', m:1}}
                    id="outlined-size-small"
                    name = "work"
                    onBlur = {handleOnBlur}
                    defaultValue={work}
                    size="small"
                    label="Where do you work?"
                    focused
                />
                
                {/* <TextField
                    // label="Size"
                    // disabled
                    sx={{width: '90%', m:1}}
                    id="outlined-size-small"
                    name = "photoURL"
                    defaultValue={photoUrl}
                    label="URL of Profile Picture"
                    size="small"
                    focused
                />
                <TextField
                    // label="Size"
                    // disabled
                    sx={{width: '90%', m:1}}
                    id="outlined-size-small"
                    name = "birthday"
                    defaultValue={date}
                    label="Birthday"
                    type="date"
                    size="small"
                    focused
                /> */}
                <Button type="submit" variant="contained">Submit</Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default EditModal;