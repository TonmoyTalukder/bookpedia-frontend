import { Alert, Button, Card, CardActions, CardContent, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../../../hooks/useAuth';
import AddLinkIcon from '@mui/icons-material/AddLink';

const Register = () => {

    const {user, registerUser, isLoading, authError} = useAuth();

    const history = useHistory();

    const [registrationData, setRegistrationData] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegistrationData = {...registrationData};
        newRegistrationData[field] = value;
        console.log(newRegistrationData);
        setRegistrationData(newRegistrationData);
    }


    const handleRegistrationSubmit = e => {
        if(registrationData.password !== registrationData.confirmPassword){
            alert('Your password did not match.');
            return;
        }
        registerUser(registrationData.imageURL, registrationData.name, registrationData.email, registrationData.password, history);
        e.preventDefault();
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
                                    { !isLoading && <form onSubmit={handleRegistrationSubmit}>
                                        <TextField 
                                            style={{width: '100%', paddingBottom: '12px'}}
                                            label="Profile Picture URL" 
                                            name="imageURL"
                                            onBlur={handleOnBlur} 
                                            id="margin-none" />
                                        <TextField 
                                            style={{width: '100%', paddingBottom: '12px'}}
                                            label="Name" 
                                            name="name"
                                            onBlur={handleOnBlur} 
                                            id="margin-none" />
                                        <TextField 
                                            style={{width: '100%', paddingBottom: '12px'}} 
                                            label="Email" 
                                            name="email"
                                            onBlur={handleOnBlur} 
                                            id="margin-none" />
                                        <TextField 
                                            style={{width: '100%', paddingBottom: '12px'}} 
                                            label="New Password"
                                            type="password"
                                            name="password"
                                            onBlur={handleOnBlur}
                                            id="margin-none" />
                                        <TextField 
                                            style={{width: '100%', paddingBottom: '12px'}} 
                                            label="Confirm Password"
                                            type="password"
                                            name="confirmPassword"
                                            onBlur={handleOnBlur}
                                            id="margin-none" />

                                        <Button 
                                            variant="contained" 
                                            style={{backgroundColor: '#38B682', width: '80%', paddingBottom: '10px', margin: 'auto', marginBottom: '20px'}}
                                            type="submit"    
                                        >Register</Button>
                                    </form>}
                                    {isLoading && <CircularProgress />}
                                    {user?.email && <Alert severity="success" style={{marginTop: '2px'}}>Account created successfully!</Alert>}
                                    {authError && <Alert severity="error">{authError}</Alert>}
                                </CardContent>
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