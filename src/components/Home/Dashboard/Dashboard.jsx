import { Box, Button, Card, CardActions, CardContent, Container, Grid, ListItemIcon, Typography } from '@mui/material';
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
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import WcIcon from '@mui/icons-material/Wc';

import Home from '../Home/Home';
import Post from '../Home/Posts/Post';
import UserPhotos from './UserPhotos';
import BookModal from '../Home/Modal/BookModal';
import BlogModal from '../Home/Modal/BlogModal';
const Dashboard = () => {
    const{user} = useAuth();

    const {userId} = useParams();

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

    // useEffect(() => {
    //     newFunc();
    // }, []);

    useEffect(()=>{
        axios.get(`/api/users/${userId}`)
            .then(function (response){
                // console.log('singleUser');
                console.log(response.data.email);
                setNewSingleUser(response.data);

                axios.get(`/api/inventories?email=${response.data.email}`)
                .then(function (response){
                setPosts(response.data.reverse());
        })
            })
            // console.log(newSingleUser.email);
        
    }, []);

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

    // User Time Line

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        
    }, [])

    const [openBlogModal, setOpenBlogModal] = useState(false);
    const handleBlogModalOpen = () => setOpenBlogModal(true);
    const handleBlogModalClose = () => setOpenBlogModal(false);

    const [openBookModal, setOpenBookModal] = useState(false);
    const handleBookModalOpen = () => setOpenBookModal(true);
    const handleBookModalClose = () => setOpenBookModal(false);

    return (
        <div style={{ backgroundColor: '#262626', height: '100vh'}}>
            <Header/>
            <Box sx={{ padding: '5px', backgroundColor: '#262626'}}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Card sx={{ minWidth: '250px', border: '1px solid #575757', borderRadius: '5px', backgroundColor: ' #575757', marginLeft: '10%', marginTop: '5%' }}>
                            
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
                                    { newSingleUser.email===user.email && <ListItemIcon>
                                        <Typography sx={{ fontSize: 16, color: 'white' }} color="text.secondary" gutterBottom>
                                            <EmailRoundedIcon/> {newSingleUser.email}
                                        </Typography>
                                    </ListItemIcon>}
                                    <br />
                                    { newSingleUser.email===user.email && <>


                                    <ListItemIcon>
                                        {newSingleUser.work && <Typography sx={{ fontSize: 16, color: 'white' }} color="text.secondary" gutterBottom>
                                            <BusinessCenterIcon/> Works at {newSingleUser.work}
                                        </Typography>}
                                        {!newSingleUser.work && <Typography sx={{ fontSize: 16, color: '#E9E9E9' }} color="text.secondary" gutterBottom>
                                            <BusinessCenterIcon/> <span>Update where do you work...</span>
                                        </Typography>}
                                    </ListItemIcon>
                                    <br />


                                    <ListItemIcon>
                                        {newSingleUser.city && <Typography sx={{ fontSize: 16, color: 'white' }} color="text.secondary" gutterBottom>
                                            <HomeWorkIcon/> Lives in {newSingleUser.city}
                                        </Typography>}
                                        {!newSingleUser.city && <Typography sx={{ fontSize: 16, color: '#E9E9E9' }} color="text.secondary" gutterBottom>
                                            <HomeWorkIcon/> <span>Update where do you live...</span>
                                        </Typography>}
                                    </ListItemIcon>
                                    <br />

                                    <ListItemIcon>
                                        {newSingleUser.date && <Typography sx={{ fontSize: 16, color: 'white' }} color="text.secondary" gutterBottom>
                                            <CakeRoundedIcon/> {newSingleUser.date}
                                        </Typography>}
                                        {!newSingleUser.date && <Typography sx={{ fontSize: 16, color: '#E9E9E9' }} color="text.secondary" gutterBottom>
                                            <CakeRoundedIcon/> <span>Update Birthday...</span>
                                        </Typography>}
                                    </ListItemIcon>
                                    <br />

                                    <ListItemIcon>
                                        {newSingleUser.gender && <Typography sx={{ fontSize: 16, color: 'white' }} color="text.secondary" gutterBottom>
                                            <WcIcon/> {newSingleUser.gender}
                                        </Typography>}
                                        {!newSingleUser.gender && <Typography sx={{ fontSize: 16, color: '#E9E9E9' }} color="text.secondary" gutterBottom>
                                            <WcIcon/> <span>Update your sexual orientation...</span>
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
                                    </>}
                                    { !newSingleUser.email===user.email && <>


                                    <ListItemIcon>
                                        {newSingleUser.work && <Typography sx={{ fontSize: 20, color: 'white' }} color="text.secondary" gutterBottom>
                                            <BusinessCenterIcon/> Works at {newSingleUser.work}
                                        </Typography>}
                                    </ListItemIcon>
                                    <br />


                                    <ListItemIcon>
                                        {newSingleUser.city && <Typography sx={{ fontSize: 20, color: 'white' }} color="text.secondary" gutterBottom>
                                            <HomeWorkIcon/> Lives in {newSingleUser.city}
                                        </Typography>}
                                    </ListItemIcon>
                                    <br />

                                    <ListItemIcon>
                                        {newSingleUser.date && <Typography sx={{ fontSize: 20, color: 'white' }} color="text.secondary" gutterBottom>
                                            <CakeRoundedIcon/> {newSingleUser.date}
                                        </Typography>}
                                    </ListItemIcon>
                                    <br />

                                    <ListItemIcon>
                                        {newSingleUser.gender && <Typography sx={{ fontSize: 20, color: 'white' }} color="text.secondary" gutterBottom>
                                            <WcIcon/> {newSingleUser.gender}
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
                                    </>}
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

                    <Grid item xs={6}>
                
                    { newSingleUser.email===user.email && <Box style={{border: '1px solid #575757', borderRadius: '5px', backgroundColor: '#262626', padding: '20px', margin: '18px', color: 'white', alignItems:"center", justifyContent:"center"}}  >

                        <Card sx={{ minWidth: 200, border: '1px solid  #575757', borderRadius: '5px', backgroundColor: ' #575757' }}>
                            <CardActions>
                                <img style={{ width: '45px', height: '45px', borderRadius: '50%', padding: '25px' }} src={user.photoURL} alt="User's Photo" />
                                <Typography sx={{ fontSize: 20, color: 'white' }} color="text.secondary" gutterBottom>
                                    What's in your mind {user.displayName}?
                                </Typography>
                            </CardActions>
                            <CardActions style={{ justifyContent: 'center' }}>
                                <Button variant="text" onClick={handleBookModalOpen} style={{ borderBottom: '2px', color: 'white' }}>
                                    <Typography>
                                        Upload a Book?<br /><MenuBookRoundedIcon />
                                    </Typography>
                                </Button>

                                <BookModal
                                    singleUser={singleUser}
                                    openBookModal = {openBookModal}
                                    handleBookModalClose = {handleBookModalClose}
                                ></BookModal>

                                <span style={{ fontSize: 65, color: 'white' }}>|</span>
                                <Button variant="text" onClick={handleBlogModalOpen} style={{ borderBottom: '2px', color: 'white' }}>
                                    <Typography>
                                        Write a blog?<br /><RssFeedRoundedIcon />
                                    </Typography>
                                </Button>
                                
                                <BlogModal
                                    singleUser={singleUser}
                                    openBlogModal = {openBlogModal}
                                    handleBlogModalClose = {handleBlogModalClose}
                                ></BlogModal>
                            </CardActions>
                        </Card>
                    </Box>}

                    <Box style={{backgroundColor: '#262626', padding: '20px', color: 'white'}}>
                    <Container>
                
                    <Box
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Grid container 
                            spacing={{ xs: 2, md: 3 }} 
                            columns={{ xs: 12, sm: 12, md: 12 }}
                            className="specialCenter"
                        >
                            {
                                posts.map(post => <Post
                                    key = {post.id}
                                    post = {post}
                                ></Post>)
                            }
                        </Grid>
                    </Box>
                </Container>
            </Box>
                    </Grid>

                    <Grid item xs={3}>
                        <Box style={{backgroundColor: '#262626', padding: '20px', color: 'white'}}>
                            <Container>
                                <Typography sx={{ fontSize: 26, color: 'white' }} color="text.secondary" gutterBottom>
                                    Your Photos
                                </Typography>
                                
                                <Box
                                    direction="column"
                                    alignItems="center"
                                    justifyContent="center"
                                    sx={{border: '1px solid #575757', borderRadius: '5px',backgroundColor: '#575757'}}
                                >

                                    <Grid container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }} justifyContent="center">
                                    {
                                            posts.slice(0,10).map(post => <UserPhotos
                                                key = {post.id}
                                                post = {post}
                                            ></UserPhotos>)
                                        }
                                                                        
                                    {/* <Grid item xs={6}>
                                    1
                                    </Grid> */}
                                    
                                    </Grid>
                                    {/* <Grid container 
                                        spacing={{ xs: 3, md: 3 }} 
                                        columns={{ xs: 6, sm: 6, md: 6 }}
                                        className="specialCenter"
                                    >
                                        {
                                            posts.map(post => <UserPhotos
                                                key = {post.id}
                                                post = {post}
                                            ></UserPhotos>)
                                        }
                                    </Grid> */}
                                </Box>
                </Container>
            </Box>
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