import { Box, Card, CardActions, CardContent, Grid, ListItemIcon, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';
import axios from 'axios';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import EditModal from './EditModal';
import CakeRoundedIcon from '@mui/icons-material/CakeRounded';
import Home from '../Home/Home';
const Dashboard = () => {
    const{user} = useAuth();

    const {userID} = useParams();

    const [databaseUser, setDatabaseUser] = useState([]);

    const [singleUser, setSingleUser] = useState([]);
    const [newSingleUser, setNewSingleUser] = useState([]);

    const newFunc = ()=>{
        axios.get(`/api/users`)
            .then(function (response){
                // setDatabaseUser(response.data.map(data=>data.email));
                setSingleUser(response.data.map(data=>data.email).find(uu=>(uu === user.email)));
            })

            // console.log(databaseUser);


            // for(let dbuser in databaseUser){
            //     console.log(databaseUser[dbuser]);
            //     if(databaseUser[dbuser] == user.email){
            //         console.log(databaseUser[dbuser]);

            
            //     }
            // }
    }

    useEffect(() => {
        newFunc();
    }, []);

    useEffect(()=>{
        axios.get(`/api/users?email=${singleUser}`)
            .then(function (response){
                // console.log('singleUser');
                // console.log(response.data);
                setNewSingleUser(response.data);
            })
    }, [singleUser]);

    // console.log(databaseUser);


    // useEffect(() => {
    //     for(let dbuser in databaseUser){
    //         console.log(databaseUser[dbuser]);
    //         if(databaseUser[dbuser] == user.email){
    //             console.log(databaseUser[dbuser]);

    //             axios.get(`/api/users?email=${databaseUser[dbuser]}`)
    //             .then(function (response){
    //                 console.log('singleUser');
    //                 console.log(response.data);
    //                 setSingleUser(response.data);
    //             })

    //             // axios.get(`/api/users?email=${databaseUser[dbuser]}`)
    //             // .then(function (response){
    //             //     // setSingleUser(response.data);
    //             //     console.log(response.data);
    //             // }) 
    //         }
    //     }
    // }, [])

//    console.log('photoURL')
//    console.log(singleUser.photoUrl)

    const [openEditProfile, setOpenEditProfile] = useState(false);
    const handleEditProfileOpen = () => setOpenEditProfile(true);
    const handleEditProfileClose = () => setOpenEditProfile(false);

    return (
        <div>
            <Header/>
            <Box sx={{ padding: '5px', height: '100vh', backgroundColor: '#262626'}}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Card sx={{ minWidth: '100%', border: '1px solid  #575757', borderRadius: '5px', backgroundColor: ' #575757', marginLeft: '10%', marginTop: '5%' }}>
                            
                            <CardActions>
                                {/* {user.photoURL && <img style={{width: '45px', height: '45px', border: '1px solid red', borderRadius: '50%', padding: '25px', margin: 'auto'}} src={user.photoURL} alt="User's Photo" />} */}

                                {/* <img style={{width: '100px', height: '100px', border: '1px solid red', borderRadius: '50%', padding: '', margin: 'auto'}} src={singleUser.photoUrl} alt="User's Photo" /> */}

                                {newSingleUser.photoUrl && <img style={{width: '100px', height: '100px', border: '1px solid red', borderRadius: '50%', padding: '', margin: 'auto'}} src={singleUser.photoUrl} alt="User's Photo" />}

                                {!newSingleUser.photoUrl && <img style={{width: '100px', height: '100px', border: '1px solid red', borderRadius: '50%', padding: '', margin: 'auto'}} src='http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png' alt="User's Photo" />}


                                {/* <img style={{width: '145px', height: '145px', border: '1px solid red', borderRadius: '50%', padding: '', margin: 'auto'}} src='http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png' alt="User's Photo" /> */}
                                
                            </CardActions>
                            <CardActions style={{justifyContent: 'left'}}>                             
                                <Box sx={{textAlign: 'left'}}>
                                    <ListItemIcon>
                                        <Typography sx={{ fontSize: 20, color: 'white' }} color="text.secondary" gutterBottom>
                                            <AccountCircleRoundedIcon/> {newSingleUser.displayName}
                                        </Typography>
                                    </ListItemIcon>
                                    <br />
                                    <ListItemIcon>
                                        <Typography sx={{ fontSize: 20, color: 'white' }} color="text.secondary" gutterBottom>
                                            <EmailRoundedIcon/> {newSingleUser.email}
                                        </Typography>
                                    </ListItemIcon>
                                    <br />
                                    <ListItemIcon>
                                        {newSingleUser.date && <Typography sx={{ fontSize: 20, color: 'white' }} color="text.secondary" gutterBottom>
                                            <CakeRoundedIcon/> {newSingleUser.date}
                                        </Typography>}
                                        {!newSingleUser.date && <Typography sx={{ fontSize: 16, color: '#E9E9E9' }} color="text.secondary" gutterBottom>
                                            <CakeRoundedIcon/> <span>Update Birthday...</span>
                                        </Typography>}
                                    </ListItemIcon>
                                    <br />
                                    
                                    <ListItemIcon>
                                        <button onClick={handleEditProfileOpen} style={{backgroundColor: 'transparent', border: '0px'}}>
                                            <Typography sx={{ fontSize: 16, color: '#E9E9E9' }} gutterBottom>
                                                <DriveFileRenameOutlineRoundedIcon/> Edit Details...
                                            </Typography>
                                        </button>
                                        <EditModal
                                            
                                            databaseUser={databaseUser}
                                            singleUser={newSingleUser}
                                            openEditProfile = {openEditProfile}
                                            handleEditProfileClose = {handleEditProfileClose}

                                        ></EditModal>

                                        
                                    </ListItemIcon>
                                    <br />
                                    
                                    <Typography sx={{ fontSize: 15, color: 'white' }} color="text.secondary" gutterBottom>
                                        {/* <a href="{bookDriveUrl}">Download the Book</a> */}
                                    </Typography>

                                </Box>
                            </CardActions>
                            <CardContent>
                                
                            </CardContent>
                            <CardActions style={{justifyContent: 'center'}}>
                                
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={8}>
                        hello
                    </Grid>
                </Grid>
            </Box>
            {/* <Home

                                            singleUser={newSingleUser}

                                        ></Home> */}
        </div>
    );
};

export default Dashboard;