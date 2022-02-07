import { Button, Card, CardActions, CardContent, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'white',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
//   };

const Register = () => {

    const [addingSuccess, setAddingSuccess] = useState(false);

    const initialInfo = {firstName: '', surName: '', email: '', password: '', datee: '', gender: ''};

    const [addingInfo, setAddingInfo] = useState(initialInfo);

    // const handleOnBlur = e => {
    //     const field = e.target.name;
    //     const value = e.target.value;
    //     const newInfo = {...addingInfo};
    //     newInfo[field] = value;
    //     // console.log(newInfo);
    //     setAddingInfo(newInfo);
    // }


    const [registrationData, setRegistrationData] = useState({});

    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newRegistrationData = {...registrationData};
        newRegistrationData[field] = value;
        setRegistrationData(newRegistrationData);
    }

    useEffect( () =>{
        const url = '/api/users/'
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
    }, [])


    const handleRegistrationSubmit = e => {

        // // Collect Data
        // const apartment = {
        //     ...addingInfo
        // }
        // // Send to the Server
        // // console.log(apartment);
        // fetch('https://localhost:44373/api/users', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(apartment)
        // })
        // .then(res => res.json())
        // .then(data => {
        //     if(data.insertedId){
        //         setAddingSuccess(true);
        //         setAddingInfo(initialInfo);
        //         e.target.reset();
        //     }
        // });
        // e.preventDefault();

        // e.preventDefault();
    }
    return (
        <div>
            <Box style={{width: '100vw', height: '100vh'}}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
                    <Grid item xs={6} sx={{justifyContent: 'center', alignItems: 'center'}}>
                        <Box style={{width: '65%', margin: 'auto'}}>
                            <img src="https://i.ibb.co/QJbcxYd/icon.png" alt="" />
                            <Typography variant="h2" gutterBottom component="div" style={{textAlign: 'left'}}>
                                <strong style={{color: '#38B682'}}>bookpedia</strong>
                            </Typography>
                            <Typography variant="h5" gutterBottom component="div" style={{textAlign: 'left'}}>
                                BookPedia helps you connect and share with the people in your literary life.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        
                        <Box>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardContent>
                                    <Typography variant="h3" gutterBottom component="div">
                                        Sign Up
                                    </Typography>
                                    <Typography variant="caption" gutterBottom component="div">
                                        It's quick and easy.
                                    </Typography>
                                </CardContent>
                                <CardContent>
                                <form onSubmit={handleRegistrationSubmit}>
                                    <TextField 
                                        style={{width: '100%', paddingBottom: '12px'}}
                                        label={'Name'} 
                                        name="firstName"
                                        onChange={handleOnchange} 
                                        id="margin-none" />
                                    <TextField 
                                        style={{width: '100%', paddingBottom: '12px'}} 
                                        label={'Email'} 
                                        name="email"
                                        onChange={handleOnchange} 
                                        id="margin-none" />
                                    <TextField 
                                        style={{width: '100%', paddingBottom: '12px'}} 
                                        label={'New Password'} 
                                        type="password"
                                        name="password"
                                        onChange={handleOnchange}
                                        id="margin-none" />
                                    <TextField 
                                        style={{width: '100%', paddingBottom: '12px'}} 
                                        label={'Confirm Password'} 
                                        type="password"
                                        name="ConfirmPassword"
                                        onChange={handleOnchange}
                                        id="margin-none" />

                                    <Button 
                                        variant="contained" 
                                        style={{backgroundColor: '#38B682', width: '80%', paddingBottom: '10px', margin: 'auto'}}
                                        type="submit"    
                                    >Register</Button>
                                    </form>
                                </CardContent>
                                {/* <CardContent>
                                    <Button variant="contained" style={{backgroundColor: '#38B682', width: '100%', paddingTop: '5px'}}>Register</Button>
                                </CardContent> */}
                                <CardActions>
                                        <NavLink style={{textDecoration: 'none', color: 'white', width: '100%'}} to="/login">
                                            <Button variant="text" style={{color: '#38B682', width: '80%', paddingTop: '2px'}}>Already Registered? Login</Button>
                                        </NavLink>
                                    
                                </CardActions>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            
        </div>
    );
};

export default Register;