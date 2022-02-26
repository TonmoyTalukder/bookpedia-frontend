import { CircularProgress, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Book from './Book';
const Books = () => {
    const {user, isLoading} = useAuth();
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        axios.get('/api/inventories')
        .then(function (response){
            // setPosts(response.data.reverse());
            setPosts(response.data.reverse().map(data=>data).filter(uu=>(uu.bookURL !== null)));
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
                        
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}
                            className="specialCenter"
                        >
                            { 
                                posts.map(post => <Book
                                    key = {post.id}
                                    post = {post}
                                ></Book>)
                            }
                        </Grid>
                        
                    </Box>
                </Container>
            </Box>
        </div>
    );
};

export default Books;