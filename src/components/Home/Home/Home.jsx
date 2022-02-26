import { Box, Button, Card, CardActions, CardContent, Divider, FormControlLabel, Grid, ListItem, ListItemButton, ListItemIcon, ListItemText, Radio, RadioGroup, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import Posts from './Posts/Posts';
import BookModal from './Modal/BookModal';
import BlogModal from './Modal/BlogModal';
// import BookModal from './Modals/BookModal';
// import BlogModal from './Modals/BlogModal';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Users from '../Users/Users';
import { Category } from '@mui/icons-material';
const Home = ({singleUser}) => {
    const { user } = useAuth();
    // console.log(user.photoURL);

    const [openBlogModal, setOpenBlogModal] = useState(false);
    const handleBlogModalOpen = () => setOpenBlogModal(true);
    const handleBlogModalClose = () => setOpenBlogModal(false);

    const [openBookModal, setOpenBookModal] = useState(false);
    const handleBookModalOpen = () => setOpenBookModal(true);
    const handleBookModalClose = () => setOpenBookModal(false);

    const [category, setCategory] = useState('');
    const handleOnClickHistory =()=> setCategory('History');
    const handleOnClickScience =()=> setCategory('Science');
    const handleOnClickNature =()=> setCategory('Nature');
    return (
        <div>
            <Header />

            <Box sx={{ padding: '5px', width: '100%', backgroundColor: '#262626' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ alignItems: 'flex-start', backgroundColor: '#262626' }} >
                    <Grid item xs={0} md={3}>

                        <Box style={{}}>
                            <Typography variant="h5"  sx={{ color: 'white' }} color="text.secondary" gutterBottom>
                                Category     
                            </Typography>

                            <hr style={{ color: 'white' }}  />

                            {/* <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="All"
                                name="radio-buttons-group"
                                color="white"
                            >
                                <FormControlLabel value="All" control={<Radio />} label="All" />
                                <FormControlLabel value="History" control={<Radio />} label="History" />
                                <FormControlLabel value="Science" control={<Radio />} label="Science" />
                                <FormControlLabel value="Nature" control={<Radio />} label="Nature" />
                            </RadioGroup> */}
                            <ListItem disablePadding>
                                <ListItemButton onClick={handleOnClickNature} >
                                    <ListItemIcon sx={{ color: 'white' }}>
                                        <DoubleArrowIcon/>
                                    </ListItemIcon>
                                    <Typography variant="body1"  sx={{ color: 'white' }} color="text.secondary" gutterBottom>
                                        Nature
                                    </Typography>
                                </ListItemButton>
                            </ListItem>
                            <Divider/>
                            <ListItem disablePadding>
                                <ListItemButton onClick={handleOnClickHistory} >
                                    <ListItemIcon sx={{ color: 'white' }}>
                                        <DoubleArrowIcon/>
                                    </ListItemIcon>
                                    <Typography variant="body1"  sx={{ color: 'white' }} color="text.secondary" gutterBottom>
                                        History
                                    </Typography>
                                </ListItemButton>
                            </ListItem>
                            <Divider/>
                            <ListItem disablePadding>
                                <ListItemButton onClick={handleOnClickScience} >
                                    <ListItemIcon sx={{ color: 'white' }}>
                                        <DoubleArrowIcon/>
                                    </ListItemIcon>
                                    <Typography variant="body1"  sx={{ color: 'white' }} color="text.secondary" gutterBottom>
                                        Science
                                    </Typography>
                                </ListItemButton>
                            </ListItem>
                            <Divider/>
                            <Typography variant="h5"  sx={{ color: 'white' }} color="text.secondary" gutterBottom>
                                Type     
                            </Typography>
                            <hr style={{ color: 'white' }}  />
                            <ListItem disablePadding>
                                <ListItemButton>
                                    {/* <ListItemText primary="History" /> */}
                                    <ListItemIcon sx={{ color: 'white' }}>
                                        <DoubleArrowIcon/>
                                    </ListItemIcon>
                                    <Typography variant="body1"  sx={{ color: 'white' }} color="text.secondary" gutterBottom>
                                        Book
                                    </Typography>
                                </ListItemButton>
                            </ListItem>
                            <Divider/>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    {/* <ListItemText primary="History" /> */}
                                    <ListItemIcon sx={{ color: 'white' }}>
                                        <DoubleArrowIcon/>
                                    </ListItemIcon>
                                    <Typography variant="body1"  sx={{ color: 'white' }} color="text.secondary" gutterBottom>
                                        Blog
                                    </Typography>
                                </ListItemButton>
                            </ListItem>
                            <Divider/>
                            <Box style={{marginTop: '10px'}}>
                            <a style={{textDecoration: "none"}} href="/space">
                                <Button style={{color: 'white'}} variant="outlined"> <NoteAddIcon/> &nbsp;&nbsp;Create a Space</Button>
                            </a>
                            </Box>
                            
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={6}>

                        <Box style={{ border: '1px solid #575757', borderRadius: '5px', backgroundColor: ' #575757', textAlign: 'left' }} sx={{ alignItems: 'center' }} >


                            <Card sx={{ minWidth: 275, border: '1px solid  #575757', borderRadius: '5px', backgroundColor: ' #575757' }}>
                                {/* <CardContent>
                                <img style={{width: '45px', height: '45px', borderRadius: '50%', padding: '25px'}} src={user.photoURL} alt="" />
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Word of the Day
                                </Typography>
                                
                            </CardContent> */}
                                <CardActions>
                                    <img style={{ width: '45px', height: '45px', borderRadius: '50%', padding: '25px' }} src={user.photoURL} alt="User's Photo" />
                                    <Typography sx={{ fontSize: 20, color: 'white' }} color="text.secondary" gutterBottom>
                                        What's in your mind {user.displayName}?
                                    </Typography>
                                </CardActions>
                                <CardActions style={{ justifyContent: 'center' }}>
                                    {/* <Button size="small">Learn More</Button> */}
                                    <Button variant="text" onClick={handleBookModalOpen} style={{ borderBottom: '2px', color: 'white' }}>
                                        <Typography>
                                            Upload a Book?<br /><MenuBookRoundedIcon />
                                        </Typography>
                                    </Button>

                                    {/* <BookModal
                                            
                                            // databaseUser={databaseUser}
                                            singleUser={singleUser}
                                            openBookModal = {openBookModal}
                                            handleBookModalClose = {handleBookModalClose}

                                    ></BookModal> */}

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
                                    {/* <BlogModal
                                            
                                            // databaseUser={databaseUser}
                                            singleUser={singleUser}
                                            openBlogModal = {openBlogModal}
                                            handleBlogModalClose = {handleBlogModalClose}

                                    ></BlogModal> */}
                                    <BlogModal
                                        singleUser={singleUser}
                                        openBlogModal = {openBlogModal}
                                        handleBlogModalClose = {handleBlogModalClose}
                                    ></BlogModal>
                                </CardActions>
                            </Card>


                            {/* <img style={{width: '45px', height: '45px', borderRadius: '50%', padding: '25px'}} src={user.photoURL} alt="" />
                            <span style={{textAlign: 'left', marginLeft: '5px'}}>What is on your mind {user.displayName}?</span> */}
                        </Box>

                        <Posts
                            category={category}
                        />

                        {/* <Box style={{border: '1px solid #616865', borderRadius: '5px', backgroundColor: '#616865'}}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 2}} sx={{ alignItems: 'center' }} >
                                <Grid item xs={2} style={{border: '1px solid black'}}>
                                    <img style={{width: '45px', height: '45px', borderRadius: '50%'}} src={user.photoURL} alt="" />
                                </Grid>
                                <Grid item xs={8} style={{border: '1px solid red'}} sx={{ justifyContent: 'center' }}  >
                                    <span style={{textAlign: 'left'}}>What is on your mind {user.displayName}?</span>
                                </Grid>
                            </Grid>
                        </Box> */}

                    </Grid>
                    <Grid item xs={0} md={3}>
                        <Box style={{marginTop: '20px'}}>
                            <Typography variant="h5" style={{}} sx={{ color: 'white' }} color="text.secondary" gutterBottom>
                               New 10 BookPedia Users    
                            </Typography>

                            <hr style={{ marginBottom: '20px', color: 'white' }}  />
                            <Users/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Home;