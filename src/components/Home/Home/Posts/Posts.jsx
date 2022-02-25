import { CircularProgress, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import Post from './Post';

const Posts = ({category}) => {
    const {user, isLoading} = useAuth();

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        axios.get('/api/inventories')
        .then(function (response){
            setPosts(response.data.reverse());
        })
        
        // const url = '/api/inventories';
        // fetch = (url)
        // .then(res =>res.json())
        // .then(data => console.log(data.map(data=>data.email.));
    }, [])

//     axios.get('/api/inventories')
//   .then(function (response){
//     for(let i = 0; i<9; i++){
//       if(response.data[i].type === 'blog')
//       setPosts(response.data[i]);
//     }
//   })

//     axios.get('/api/inventories')
//   .then(function (response){
//     for(let i = 0; i<9; i++){
//       if(response.data[i].type === 'blog')
//         setPosts(response.data[i]);
//     }
//   })

    if(isLoading){return <CircularProgress/>}
    return (
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
                                    category={category}
                                ></Post>)
                            }
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </div>
    );
};

export default Posts;