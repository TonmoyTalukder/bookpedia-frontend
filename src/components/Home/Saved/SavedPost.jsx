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

import useUserInfo from '../../../hooks/useUserInfo';
import PostRating from '../Home/Rating/PostRating';

const SavedPost = ({post}) => {
    const{singleUserInfo} = useUserInfo();
    const{id, userEmail, User, UserId, inventory, inventoryId} = post;

    return (
        <Grid item xs={6} 
                className="specialCenter"
            >
                <Box style={{border: '1px solid  #575757', borderRadius: '5px', backgroundColor: ' #575757', textAlign: 'left', marginTop: '15px'}} sx={{ alignItems: 'center' }} >
                    <Card sx={{ border: '1px solid  #575757', borderRadius: '5px', backgroundColor: ' #575757' }}>
                        
                        <CardActions>
                            {/* <img style={{width: '45px', height: '45px', borderRadius: '50%', padding: ''}} src={singleUserInfo.photoURL} alt="User's Photo" /> */}

                            {
                                inventory.authorPhotoUrl && <img style={{ width: '45px', height: '45px', borderRadius: '50%', padding: ''}}  src={inventory.authorPhotoUrl} alt="" />
                            }
                            {
                                !inventory.authorPhotoUrl && <img style={{width: '45px', height: '45px', borderRadius: '50%', padding: ''}}  src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="" />
                            }
                            
                            <Typography sx={{ fontSize: 20, color: 'white' }} color="text.secondary" gutterBottom>
                                  &nbsp; {inventory.authorName}
                            </Typography>
                        </CardActions>
                        <CardActions style={{justifyContent: 'left'}}>
                            <img style={{width: '100%', height: '350px', marginRight: '10px'}} src={inventory.coverImageURL} alt="" />
                            {/* <span style={{ fontSize: 320, color: 'white' }}>|</span> */}
                             
                            
                        </CardActions>
                        <CardContent>
                        <Box style={{width: ''}}>
                                {inventory.postTitle && <>{
                                    inventory.postTitle.length > 54? 
                                    <><Typography sx={{ fontSize: 35, color: 'white' }} color="text.secondary" gutterBottom>
                                    {inventory.postTitle.substring(0, 54)}...
                                </Typography></>
                                    
                                    :<><Typography sx={{ fontSize: 35, color: 'white' }} color="text.secondary" gutterBottom>
                                    {inventory.postTitle}
                                </Typography></>
                                    
                                }</>}


{inventory.writerName && <Typography sx={{ fontSize: 20, color: 'white' }} color="text.secondary" gutterBottom>
                                    <BorderColorIcon/> {inventory.writerName}
                                </Typography>}



                                <Typography sx={{ fontSize: 15, color: 'white', marginTop:'10px' }} color="text.secondary" gutterBottom>
                                      <CategoryIcon/>&nbsp;Category: {inventory.category}
                                </Typography>
                                <CardActions>
                                    {inventory.bookURL&&<>
                                    <Typography sx={{ fontSize: 12, color: 'white' }} color="text.secondary" gutterBottom>
                                        <a style={{textDecoration: "none"}} href="{bookURL}">
                                            <Button sx={{ fontSize: 12, color: 'white' }} style={{color: 'white'}} variant="outlined"> <CloudDownloadIcon/> &nbsp;&nbsp;Download the Book</Button>
                                        </a>
                                    </Typography>
                                    <Typography sx={{ fontSize: 12, color: 'white' }} color="text.secondary" gutterBottom>
                                        <a style={{textDecoration: "none"}} href={`/post/${id}`}>
                                            <Button sx={{ fontSize: 12, color: 'white' }} style={{color: 'white'}} variant="outlined"> <AutoStoriesIcon/> &nbsp;&nbsp;Read Online</Button>
                                        </a>
                                    </Typography>
                                    </>}
                                    {inventory.blogPost&&<Typography sx={{ fontSize: 15, color: 'white' }} color="text.secondary" gutterBottom>
                                    {
                                        inventory.blogPost.length > 108? 
                                            <>
                                                {inventory.blogPost.substring(0, 108)}...
                                                <a style={{textDecoration: "none"}} href={`/post/${id}`}>
                                                    <Button style={{color: 'white'}} variant="outlined"> <AutoStoriesIcon/> &nbsp;&nbsp;Read More</Button>
                                                </a>
                                            </>
                                            :
                                            <>
                                                {inventory.blogPost}
                                            </>
                                    }
                                </Typography>}
                                </CardActions>

                                
                                <CardActions style={{}}>
                                    <IconButton style={{color: 'white'}} aria-label="add to favorites">
                                        <FavoriteIcon /> 
                                    </IconButton>
                                    <IconButton  style={{color: 'white'}} aria-label="share">
                                        <CollectionsBookmarkRoundedIcon />
                                    </IconButton>
                                    <IconButton style={{color: 'white'}} aria-label="rating">
                                        <PostRating/>
                                    </IconButton>
                                    <IconButton aria-label="comment">
                                    <a style={{textDecoration: "none"}} href={`/post/${id}`}>
                                                    <Button style={{color: 'white'}} variant="outlined"> <AddCommentIcon/> &nbsp;&nbsp;Add Comment</Button>
                                                </a>
                                    
                                    </IconButton>
                                </CardActions>
                            </Box>                    
                        </CardContent>        
                    </Card>
                </Box>
            </Grid>
    );
};

export default SavedPost;