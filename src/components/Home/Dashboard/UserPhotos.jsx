import { Button, Card, CardActions, CardContent, Grid, IconButton, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import AddCommentIcon from '@mui/icons-material/AddComment';
import CategoryIcon from '@mui/icons-material/Category';
import CollectionsBookmarkRoundedIcon from '@mui/icons-material/CollectionsBookmarkRounded';
import axios from 'axios';

import useUserInfo from '../../../hooks/useUserInfo';

const UserPhotos = ({post}) => {
    const{singleUserInfo} = useUserInfo();

    const{id, type, postTitle, bookURL, authorName, blogPost, coverImageURL, category} = post;
    return (
        
            <Grid  item xs={6} 
               
            >
                <Box style={{border: "0px solid red", backgroundColor: '#575757', textAlign: 'center', marginTop: '0px'}} sx={{ alignItems: 'center' }} >
                    <Card sx={{ border: "0px solid yellow", minWidth: 100, boxShadow: 0, backgroundColor: ' #575757' }}>
                        
                        
                            {/* <img style={{width: '40%', height: '350px', marginRight: '10px'}} src={coverImageURL} alt="" /> */}
                            {/* <span style={{ fontSize: 320, color: 'white' }}>|</span> */}
                             
                        
                        <CardContent>
                        {/* <Box style={{width: '100%'}}> */}
                                
                                {bookURL && <>
                                    <a style={{textDecoration: "none"}} href={`/post/${id}`}>
                                    <img style={{width: '100%', height: '150px'}} src={coverImageURL} alt="" />
                                    </a>

                                </>}
                                {blogPost && <>
                                    <a style={{textDecoration: "none"}} href={`/post/${id}`}>
                                    <img style={{width: '100%', height: '150px'}} src={coverImageURL} alt="" />
                                    </a>

                                </>}

                            
                                    
                        </CardContent>
                            
                    </Card>
                </Box>
           
            </Grid>
    );
};

export default UserPhotos;