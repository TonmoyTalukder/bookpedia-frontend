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

const BlogPost = ({post}) => {
    const{singleUserInfo} = useUserInfo();

    const{id, type, postTitle, bookURL, authorName, blogPost, coverImageURL, category} = post;
    return (
        <div>
            <Grid item xs={12} sm={12} md={12} lg={12} 
                className="specialCenter"
            >
                {blogPost && <Box style={{border: '1px solid  #575757', borderRadius: '5px', backgroundColor: ' #575757', textAlign: 'left', marginTop: '15px'}} sx={{ alignItems: 'center' }} >
                    <Card sx={{ minWidth: 700, border: '1px solid  #575757', borderRadius: '5px', backgroundColor: ' #575757' }}>
                        
                        <CardActions>

                            {
                                singleUserInfo.photoURL && <img style={{width: '45px', height: '45px', borderRadius: '50%', padding: ''}}  src={singleUserInfo.photoURL} alt="" />
                            }
                            {
                                !singleUserInfo.photoURL && <img style={{width: '45px', height: '45px', borderRadius: '50%', padding: ''}}  src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="" />
                            }
                            
                            <Typography sx={{ fontSize: 20, color: 'white' }} color="text.secondary" gutterBottom>
                                <BorderColorIcon/> {authorName}
                            </Typography>
                        </CardActions>
                        <CardActions style={{justifyContent: 'left'}}>
                            <img style={{width: '40%', height: '350px', marginRight: '10px'}} src={coverImageURL} alt="" />
                            {/* <span style={{ fontSize: 320, color: 'white' }}>|</span> */}
                             
                            <Box style={{width: '60%'}}>
                                <Typography sx={{ fontSize: 35, color: 'white' }} color="text.secondary" gutterBottom>
                                    {postTitle}
                                </Typography>
                                <br />
                                
                                 <Typography sx={{ fontSize: 15, color: 'white' }} color="text.secondary" gutterBottom>
                                    {
                                        blogPost.length > 108? 
                                            <>
                                                {blogPost.substring(0, 108)}...
                                                <a style={{textDecoration: "none"}} href={`/post/${id}`}>
                                                    <Button style={{color: 'white'}} variant="outlined"> <AutoStoriesIcon/> &nbsp;&nbsp;Read More</Button>
                                                </a>
                                            </>
                                            :
                                            <>
                                                {blogPost}
                                            </>
                                    }
                                </Typography>

                                <Typography sx={{ fontSize: 15, color: 'white', marginTop:'10px' }} color="text.secondary" gutterBottom>
                                      <CategoryIcon/>&nbsp;Category: {category}
                                </Typography>
                                <CardActions style={{justifyContent: 'center'}}>
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
                        </CardActions>
                        <CardContent>
                                                        
                        </CardContent>
                        

        
                    </Card>
                </Box>}

            </Grid>
        </div>
    );
};

export default BlogPost;