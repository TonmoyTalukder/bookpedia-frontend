import { CircularProgress, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import SavedPost from './SavedPost';

const Saved = () => {
    const {user, isLoading} = useAuth();
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        axios.get(`/api/Usersaveds?email=${user.email}`)
        .then(function (response){
            // setPosts(response.data.reverse());
            console.log(response.data.reverse());
            setPosts(response.data);
        })
        
    }, [])
    if(isLoading){return <CircularProgress/>}

    return (
        <div>
            <Header/>
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
                                posts.map(post => <SavedPost
                                    key = {post.id}
                                    post = {post}
                                ></SavedPost>)
                            }
                        </Grid>
                        
                    </Box>
                </Container>
            </Box>
        </div>
    );
};

export default Saved;