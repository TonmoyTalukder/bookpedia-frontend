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
        <div>
            <Grid item xs={12} sm={12} md={12} lg={12} 
                className="specialCenter"
            >
                <Box style={{border: '1px solid  #575757', borderRadius: '5px', backgroundColor: ' #575757', textAlign: 'left', marginTop: '15px'}} sx={{ alignItems: 'center' }} >
                    <Card sx={{ minWidth: 100, border: '1px solid #575757', borderRadius: '5px', backgroundColor: ' #575757' }}>
                        
                        
                            {/* <img style={{width: '40%', height: '350px', marginRight: '10px'}} src={coverImageURL} alt="" /> */}
                            {/* <span style={{ fontSize: 320, color: 'white' }}>|</span> */}
                             
                        
                        <CardContent>
                        {/* <Box style={{width: '100%'}}> */}
                                
                                {bookURL && <>
                                    <a style={{textDecoration: "none"}} href={`/post/${id}`}>
                                    <img style={{width: '100%', height: '350px'}} src={coverImageURL} alt="" />
                                    </a>

                                </>}
                                {blogPost && <>
                                    <a style={{textDecoration: "none"}} href={`/post/${id}`}>
                                    <img style={{width: '100%', height: '350px'}} src={coverImageURL} alt="" />
                                    </a>

                                </>}

                            
                                    
                        </CardContent>
                            
                    </Card>
                </Box>
           
            </Grid>
        </div>
    );
};

export default UserPhotos;