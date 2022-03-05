import { CircularProgress, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import BlogPost from './BlogPost';

const BlogPosts = () => {
    const {user, isLoading} = useAuth();
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        axios.get('/api/inventories')
        .then(function (response){
            setPosts(response.data.reverse());
        })
        
    }, [])



    if(isLoading){return <CircularProgress/>}
    return (
        <div style={{backgroundColor: '#262626', height: '95vh'}}>
            <Box variant="scrollable" style={{backgroundColor: '#262626', padding: '20px', color: 'white'}}>
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
                            justifyContent="center"
                        >
                            {
                                posts.map(post => <BlogPost
                                    key = {post.id}
                                    post = {post}
                                ></BlogPost>)
                            }
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </div>
    );
};

export default BlogPosts;