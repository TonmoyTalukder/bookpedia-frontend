import React, { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../../images/logo.png';
import axios from 'axios';
import { Button, Card, CardActions, Container, Divider, Grid } from '@mui/material';
import Post from '../Home/Home/Posts/Post';
import User from '../Home/Users/User';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '40ch',
      '&:focus': {
        width: '54ch',
      },
    },
  },
}));




const PostSearch = () => {

    const [posts, setPosts] = useState([]);
    const [allUserInfo, setAllUserInfo] = useState([]);

    const [postsSearched, setPostsSearched] = useState([]);
    const [allUserInfoSearched, setAllUserInfoSearched] = useState([]);


    useEffect(() => {

        axios.get('/api/inventories')
        .then(function (response){
            setPosts(response.data.reverse());
        })
        
    }, [])
    useEffect(() => {

        axios.get(`/api/users`)
        .then(function (response){
        setAllUserInfo(response.data.reverse());
    })
        
    }, [])

const handleSearch = event =>{

    // useEffect=(()=>{
        const searchText = event.target.value;
        console.log(searchText)

        if(searchText.length === 0){
            window.location.reload(false);
        }

        const matchedPosts = posts.filter(post => post.postTitle.toLowerCase().includes(searchText.toLowerCase()));

        const matchedUsers = allUserInfo.filter(user => user.displayName.toLowerCase().includes(searchText.toLowerCase()));

        setPostsSearched(matchedPosts);
        setAllUserInfoSearched(matchedUsers);
        console.log(matchedPosts);
    // }, [])    
    
}

function refreshPage() {
    window.location.reload(false);
  }
    return (
        <div style={{backgroundColor: '#262626', height: '100vh'}}>
            <span style={{width: '100%'}}>
                <a href="/" style={{textDecoration: 'none'}}>
                    <img src={Logo} style={{width: '70px'}} alt="" />
                </a>
            </span>
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{justifyContent: 'center', backgroundColor: 'black'}}>
          
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search on BookPedia"
            //   onClick={refreshPage}
              onChange={handleSearch} 
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>

    <div>
    <Typography sx={{ fontSize: 20, color: 'white' }} color="text.secondary" gutterBottom>
                    Users
                </Typography>
                <Divider/>
            <Box
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{marginTop: '5px', marginLeft: '30%'}}
            >
                
                <Grid container 
                    spacing={{ xs: 3, md: 3 }} 
                    columns={{ xs: 6, sm: 6, md: 6 }}
                    className="specialCenter"
                >
                    {
                        allUserInfoSearched.slice(0,10).map(allUser => <User
                            key = {allUser.id}
                            allUser = {allUser}
                        ></User>)
                    }
                </Grid>
            </Box>
    </div>


<div style={{backgroundColor: '#262626', marginTop: '20px'}}> 
<Typography sx={{ fontSize: 20, color: 'white' }} color="text.secondary" gutterBottom>
                    Posts
                </Typography>
                <Divider/>
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
                                postsSearched.map(post => <Post
                                    key = {post.id}
                                    post = {post}
                                    // category={category}
                                ></Post>)
                            }
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </div>    
        </div>
    );
};

export default PostSearch;