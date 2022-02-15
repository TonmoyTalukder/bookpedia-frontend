import { Alert, CircularProgress, Grid, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';

import Logo from '../../../../images/logo.png';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import GoogleIcon from '@mui/icons-material/Google';

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
//   };

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

const Login = () => {

    const {user, loginUser, isLoading, signInWithGoogle, authError} = useAuth();

    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const history = useHistory();

    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = {...loginData};
        newLogInData[field] = value;
        console.log(newLogInData);
        setLoginData(newLogInData);
    }

    const handleLoginSubmit = e => {

        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
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
                        <Card sx={{ maxWidth: 375 }}>
                            <CardActionArea>
                                <Typography variant="h4" gutterBottom component="div" style={{textAlign: 'center', paddingTop: '20px'}}>
                                    <strong style={{color: '#38B682'}}>Login</strong>
                                </Typography>
                                { !isLoading && <form onSubmit={handleLoginSubmit}>
                                    <TextField 
                                        style={{width: '80%', paddingBottom: '10px', margin: 'auto'}} 
                                        label={'Email address'}
                                        name="email"
                                        onBlur={handleOnchange} 
                                        id="margin-none" 
                                    />

                                    <TextField 
                                        style={{width: '80%', paddingTop: '2px', paddingBottom: '12px', margin: 'auto'}} 
                                        label={'Password'} 
                                        type="password"
                                        name="password"
                                        onBlur={handleOnchange} 
                                        id="margin-none" 
                                    />
                                    <Button 
                                        variant="contained" 
                                        style={{backgroundColor: '#38B682', width: '80%', paddingBottom: '10px', margin: 'auto', marginBottom: '20px'}}
                                        type="submit"    
                                    >Log In</Button>
                                </form>}
                                    {isLoading && <CircularProgress />}
                                    {user?.email && <Alert severity="success" style={{marginTop: '2px'}}>Login successfully!</Alert>}
                                    {authError && <Alert severity="error">{authError}</Alert>}

                                <CardContent>
                                   
                                    <Button variant="text" style={{color: '#38B682', width: '100%', paddingTop: '1px'}}>Forgotten password?</Button>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <NavLink style={{textDecoration: 'none', color: 'white', width: '100%'}} to="/register">
                                    <Button variant="contained" style={{margin: 'auto', backgroundColor: 'gray', color: 'white', paddingTop: '0px', width: '80%'}}>
                                        Create New Account
                                    </Button>
                                </NavLink>
                            </CardActions>
                            <CardActions>
                                    <Button onClick={handleGoogleSignIn} variant="text" style={{color: '#38B682', width: '100%', paddingTop: '1px'}} startIcon={<GoogleIcon />}>
                                        Sign in with Google
                                    </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Login;