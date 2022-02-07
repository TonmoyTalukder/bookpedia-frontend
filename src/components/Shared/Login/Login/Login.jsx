import { Grid, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';

import Logo from '../../../../images/logo.png';
import { NavLink } from 'react-router-dom';


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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Login = () => {

    const [loginData, setLoginData] = useState({});

    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = {...loginData};
        setLoginData(newLogInData);
    }

    const handleLoginSubmit = e => {

        e.preventDefault();
    }

    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => {
    //     setOpen(true);
    // };
    // const handleClose = () => {
    //     setOpen(false);
    // };
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
                                <form onSubmit={handleLoginSubmit}>
                                    <TextField 
                                        style={{width: '80%', paddingBottom: '10px', margin: 'auto'}} 
                                        label={'Email address'}
                                        name="email"
                                        onChange={handleOnchange} 
                                        id="margin-none" 
                                    />

                                    <TextField 
                                        style={{width: '80%', paddingTop: '2px', paddingBottom: '12px', margin: 'auto'}} 
                                        label={'Password'} 
                                        type="password"
                                        name="password"
                                        onChange={handleOnchange} 
                                        id="margin-none" 
                                    />
                                    <Button 
                                        variant="contained" 
                                        style={{backgroundColor: '#38B682', width: '80%', paddingBottom: '10px', margin: 'auto'}}
                                        type="submit"    
                                    >Log In</Button>
                                </form>

                                <CardContent>
                                   
                                    <Button variant="text" style={{color: '#38B682', width: '100%', paddingTop: '10px'}}>Forgotten password?</Button>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <NavLink style={{textDecoration: 'none', color: 'white', width: '100%'}} to="/register">
                                    <Button variant="contained" style={{margin: 'auto', backgroundColor: 'gray', color: 'white', paddingTop: '0px', width: '80%'}}>
                                        Create New Account
                                    </Button>
                                </NavLink>
                                {/* <Button  onClick={handleOpen} variant="contained" style={{margin: 'auto', backgroundColor: 'gray', color: 'white', paddingTop: '2px'}}>
                                    Create New Account
                                </Button> */}
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            {/* <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
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
                            <TextField style={{width: '100%', paddingBottom: '12px'}} label={'Name'} id="margin-none" />
                            <TextField style={{width: '100%', paddingBottom: '12px'}} label={'Email'} id="margin-none" />
                            <TextField style={{width: '100%', paddingBottom: '12px'}} label={'New Password'} id="margin-none" />
                            <TextField style={{width: '100%', paddingBottom: '12px'}} label={'Confirm Password'} id="margin-none" />
                        </CardContent>
                        <CardContent>
                            <Button variant="contained" style={{backgroundColor: '#38B682', width: '100%', paddingTop: '5px'}}>Register</Button>
                        </CardContent>
                        <CardActions>
                            <Button variant="text" style={{color: '#38B682', width: '100%', paddingTop: '2px'}}>Already Registered? Login</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Modal> */}
        </div>
    );
};

export default Login;