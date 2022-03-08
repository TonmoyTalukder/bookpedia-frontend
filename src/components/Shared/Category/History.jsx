import { Box, Button, Card, CardActions, CardContent, Divider, FormControlLabel, Grid, ListItem, ListItemButton, ListItemIcon, ListItemText, Radio, RadioGroup, Typography } from '@mui/material';
import axios from 'axios';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { Category } from '@mui/icons-material';
import { CircularProgress, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';

import Header from '../../Shared/Header/Header';
import BookModal from '../../Home/Home/Modal/BookModal';
import BlogModal from '../../Home/Home/Modal/BlogModal';
import useAuth from '../../../hooks/useAuth';
import CategoryPost from './CategoryPost';
import Post from '../../Home/Home/Posts/Post';
import Users from '../../Home/Users/Users';

const History = ({singleUser}) => {
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




    const {user, isLoading} = useAuth();

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        axios.get('/api/inventories')
        .then(function (response){
            setPosts(response.data.reverse().map(data=>data).filter(uu=>(uu.category === 'History')));
        })
        
    }, [])

    if(isLoading){return <CircularProgress/>}

    return (
        <div style={{height: '100vh', backgroundColor: '#262626'}}>
            <Header />
            <Box sx={{ padding: '5px', width: '100%', backgroundColor: '#262626' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ alignItems: 'flex-start', backgroundColor: '#262626' }} >
                    <Grid item xs={0} md={3}>
                        <Box style={{}}>
                            <Typography variant="h5"  sx={{ color: 'white' }} color="text.secondary" gutterBottom>
                                Category     
                            </Typography>

                            <hr style={{ color: 'white' }}  />

                            <a style={{textDecoration: "none"}} href={`/category/nature`}>
                            <ListItem disablePadding>
                                <ListItemButton >
                                    <ListItemIcon sx={{ color: 'white' }}>
                                        <DoubleArrowIcon/>
                                    </ListItemIcon>
                                    <Typography variant="body1"  sx={{ color: 'white' }} color="text.secondary" gutterBottom>
                                        Nature
                                    </Typography>
                                </ListItemButton>
                            </ListItem></a>
                            <Divider/>
                            <a style={{textDecoration: "none"}} href={`/category/history`}>
                            <ListItem disablePadding>
                                <ListItemButton onClick={handleOnClickHistory} >
                                    <ListItemIcon sx={{ color: 'white' }}>
                                        <DoubleArrowIcon/>
                                    </ListItemIcon>
                                    <Typography variant="body1"  sx={{ color: 'white' }} color="text.secondary" gutterBottom>
                                        History
                                    </Typography>
                                </ListItemButton>
                            </ListItem></a>
                            <Divider/>
                            <a style={{textDecoration: "none"}} href={`/category/science`}>
                            <ListItem disablePadding>
                                <ListItemButton onClick={handleOnClickScience} >
                                    <ListItemIcon sx={{ color: 'white' }}>
                                        <DoubleArrowIcon/>
                                    </ListItemIcon>
                                    <Typography variant="body1"  sx={{ color: 'white' }} color="text.secondary" gutterBottom>
                                        Science
                                    </Typography>
                                </ListItemButton>
                            </ListItem></a>
                            <Divider/>
                            <a style={{textDecoration: "none"}} href={`/category/literature`}>
                            <ListItem disablePadding>
                                <ListItemButton onClick={handleOnClickScience} >
                                    <ListItemIcon sx={{ color: 'white' }}>
                                        <DoubleArrowIcon/>
                                    </ListItemIcon>
                                    <Typography variant="body1"  sx={{ color: 'white' }} color="text.secondary" gutterBottom>
                                        Literature
                                    </Typography>
                                </ListItemButton>
                            </ListItem></a>
                            <Divider/>
                            <a style={{textDecoration: "none"}} href={`/category/other-categories`}>
                            <ListItem disablePadding>
                                <ListItemButton onClick={handleOnClickScience} >
                                    <ListItemIcon sx={{ color: 'white' }}>
                                        <DoubleArrowIcon/>
                                    </ListItemIcon>
                                    <Typography variant="body1"  sx={{ color: 'white' }} color="text.secondary" gutterBottom>
                                        Other Categories
                                    </Typography>
                                </ListItemButton>
                            </ListItem></a>
                            <Divider/>
                            <Typography variant="h5"  sx={{ color: 'white' }} color="text.secondary" gutterBottom>
                                Type     
                            </Typography>
                            <hr style={{ color: 'white' }}  />
                            <a style={{textDecoration: "none"}} href={`/library`}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    
                                    <ListItemIcon sx={{ color: 'white' }}>
                                        <DoubleArrowIcon/>
                                    </ListItemIcon>
                                    <Typography variant="body1"  sx={{ color: 'white' }} color="text.secondary" gutterBottom>
                                        Book
                                    </Typography>
                                </ListItemButton>
                            </ListItem></a>
                            <Divider/>
                            <a style={{textDecoration: "none"}} href={`/blogs`}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon sx={{ color: 'white' }}>
                                        <DoubleArrowIcon/>
                                    </ListItemIcon>
                                    <Typography variant="body1"  sx={{ color: 'white' }} color="text.secondary" gutterBottom>
                                        Blog
                                    </Typography>
                                </ListItemButton>
                            </ListItem></a>
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
                        </Box>

                        {/* <Posts
                            category={category}
                        /> */}

<div>
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
        </div>    

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

export default History;