import { Button, Card, CardActions, CardContent, Grid, IconButton, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import useUserInfo from '../../../../hooks/useUserInfo';
import PostRating from '../Rating/PostRating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import AddCommentIcon from '@mui/icons-material/AddComment';
import CategoryIcon from '@mui/icons-material/Category';
import CollectionsBookmarkRoundedIcon from '@mui/icons-material/CollectionsBookmarkRounded';
import axios from 'axios';

const Post = ({post}) => {
    // const{user} = useAuth();
    const{singleUserInfo} = useUserInfo();

    const{id, type, postTitle, bookURL, authorName, blogPost, coverImageURL, category} = post;

//    console.log(authorName);

const handleSaveOnClick = (e) => {
    alert('Saved Successfully!');

    const postSaved = {
        userEmail: singleUserInfo.email,
        UserId: singleUserInfo.id,
        inventoryId: id
    }

    console.log('postSaved');
    console.log(postSaved);
    

    axios.post(`/api/Usersaveds/`,{
        userEmail: singleUserInfo.email,
        UserId: singleUserInfo.id,
        inventoryId: id
    });
  }


    return (
        <div>
            <Grid item xs={12} sm={12} md={12} lg={12} 
                className="specialCenter"
            >
                <Box style={{border: '1px solid  #575757', borderRadius: '5px', backgroundColor: ' #575757', textAlign: 'left', marginTop: '15px'}} sx={{ alignItems: 'center' }} >
                    <Card sx={{ minWidth: 700, border: '1px solid  #575757', borderRadius: '5px', backgroundColor: ' #575757' }}>
                        
                        <CardActions>
                            {/* <img style={{width: '45px', height: '45px', borderRadius: '50%', padding: ''}} src={singleUserInfo.photoURL} alt="User's Photo" /> */}

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
                                
                                {bookURL && <>
                                    <Typography sx={{ fontSize: 15, color: 'white' }} color="text.secondary" gutterBottom>
                                        <a style={{textDecoration: "none"}} href="{bookURL}">
                                            <Button style={{color: 'white'}} variant="outlined"> <CloudDownloadIcon/> &nbsp;&nbsp;Download the Book</Button>
                                        </a>
                                    </Typography>
                                    <a style={{textDecoration: "none"}} href={`/post/${id}`}>
                                        <Button style={{color: 'white'}} variant="outlined"> <AutoStoriesIcon/> &nbsp;&nbsp;Read Online</Button>
                                    </a>

                                </>}
                                {blogPost && <Typography sx={{ fontSize: 15, color: 'white' }} color="text.secondary" gutterBottom>
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
                                </Typography>}

                                <Typography sx={{ fontSize: 15, color: 'white', marginTop:'10px' }} color="text.secondary" gutterBottom>
                                      <CategoryIcon/>&nbsp;Category: {category}
                                </Typography>
                                <CardActions style={{justifyContent: 'center'}}>
                                    <IconButton style={{color: 'white'}} aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>

                                    <IconButton onClick={handleSaveOnClick} style={{color: 'white'}} aria-label="share">
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
                        

                        {/* <CardActions disableSpacing> */}
        
                    </Card>
                </Box>
            {/* <Card className="bgSpecial" sx={{ width: 345, backgroundColor: '#4a4a4a', color: 'white' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={img}
                            alt={city}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <LocationCityIcon></LocationCityIcon> {city}
                            </Typography>
                            <Box>
                                <List>
                                    <ListItem>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                           <ApartmentIcon></ApartmentIcon> {type}
                                        </Typography>
                                        &emsp;&emsp;&emsp;&emsp;
                                        <Typography gutterBottom variant="h6" component="div">
                                            $ {rent}
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography gutterBottom variant="body1" component="div">
                                           <LocationOnIcon></LocationOnIcon> {address.substring(0, 15)}...
                                        </Typography>   
                                    </ListItem>
                                    <ListItem>
                                        <Typography gutterBottom variant="body1" component="div">
                                            <DescriptionIcon></DescriptionIcon> {description.substring(0, 25)}...
                                        </Typography>
                                    </ListItem>
                                </List>
                            </Box>
                        </CardContent>
                        <CardActions>
                            <Link to={`/apartment-details/${_id}`}>
                                <Button style={{backgroundColor: '#4a4a4a', color: 'white'}}>Details Before Booking...</Button>
                            </Link>
                        </CardActions>
                    </Card> */}
            </Grid>
        </div>
    );
};

export default Post;