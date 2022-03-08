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

const FollowingUsers = ({post}) => {
    const{singleUserInfo} = useUserInfo();
    const{id, followingUserId, followingUserDisplayName, followingUserEmail, followingUserPhotoURL} = post;
    return (
        <Grid  item xs={6} >
                <Box style={{border: "0px solid red", backgroundColor: '#575757', textAlign: 'center', marginTop: '0px'}} sx={{ alignItems: 'center' }} >
                    <Card sx={{ border: "0px solid yellow", minWidth: 100, boxShadow: 0, backgroundColor: ' #575757' }}>
                        
                        <CardContent> 
                        <a style={{textDecoration: "none"}} href={`/user/${followingUserId}`}>
                            <CardActions style={{justifyContent: 'left'}}>
                                <img src={followingUserPhotoURL} style={{width: '40px', height: '40px', borderRadius: '50%', padding: '', margin: 'auto'}} alt="" />

                                <Typography sx={{ fontSize: 20, color: 'white' }} color="text.secondary" gutterBottom>
                                    {followingUserDisplayName}
                                </Typography>
                            </CardActions>
                        </a>
                        </CardContent>
                            
                    </Card>
                </Box>
            </Grid>
    );
};

export default FollowingUsers;