import { Button, Card, CardActions, CardContent, Grid, IconButton, ListItem, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import RatingModal from '../Home/Modal/RatingModal';
const Book = ({post}) => {
    const{singleUserInfo} = useUserInfo();
    const{id, type, postTitle, bookURL, authorName, blogPost, coverImageURL, category, rating} = post;

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

      const [openRatingModal, setOpenRatingModal] = useState(false);
        const handleRatingModalOpen = () => setOpenRatingModal(true);
        const handleRatingModalClose = () => setOpenRatingModal(false);
    
      const handleRatingOnClick = (e) =>{
          alert("Rating!")
      }

      const [ratingInfo, setRatingInfo] = useState([]);

    let avgRating = 0;
    let sumRating = 0;
    let flag = 0;

    useEffect(() => {
        axios.get(`/api/Ratings?postId=${id}`)
        .then(function (response){
            // console.log('id');
            // console.log(id);
            // console.log(response.data.reverse().map(data=>data.rating));
            setRatingInfo(response.data.reverse().map(data=>data.rating));
        })
        
    }, [id])

    for (let x in ratingInfo) {
        sumRating += ratingInfo[x];
        flag += 1;
    }
    if(sumRating>0){
        avgRating = sumRating/flag;
    } else if(sumRating === 0){
        avgRating = sumRating;
    }

    return (
            <Grid item xs={6} 
                className="specialCenter"
            >
                {<Box style={{border: '1px solid  #575757', borderRadius: '5px', backgroundColor: ' #575757', textAlign: 'left', marginTop: '15px'}} sx={{ alignItems: 'center' }} >
                    <Card sx={{ border: '1px solid  #575757', borderRadius: '5px', backgroundColor: ' #575757' }}>
                        
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
                            <img style={{width: '100%', height: '350px', marginRight: '10px'}} src={coverImageURL} alt="" />
                            {/* <span style={{ fontSize: 320, color: 'white' }}>|</span> */}
                             
                            
                        </CardActions>
                        <CardContent>
                        <Box style={{width: ''}}>
                                {postTitle && <>{
                                    postTitle.length > 54? 
                                    <><Typography sx={{ fontSize: 35, color: 'white' }} color="text.secondary" gutterBottom>
                                    {postTitle.substring(0, 54)}...
                                </Typography></>
                                    
                                    :<><Typography sx={{ fontSize: 35, color: 'white' }} color="text.secondary" gutterBottom>
                                    {postTitle}
                                </Typography></>
                                    
                                }</>}
                                <Typography sx={{ fontSize: 15, color: 'white', marginTop:'10px' }} color="text.secondary" gutterBottom>
                                      <CategoryIcon/>&nbsp;Category: {category}
                                </Typography>
                                <CardActions>
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
                                    

                                </CardActions>

                                
                                <CardActions style={{}}>
                                    <IconButton style={{color: 'white'}} aria-label="add to favorites">
                                        <FavoriteIcon /> 
                                    </IconButton>
                                    <IconButton onClick={handleSaveOnClick} style={{color: 'white'}} aria-label="share">
                                        <CollectionsBookmarkRoundedIcon />
                                    </IconButton>
                                    <IconButton onClick={handleRatingModalOpen} style={{color: 'white'}} aria-label="rating">
                                        <>
                                            <Rating name="read-only" value={avgRating} readOnly />
                                        </>
                                    </IconButton>

                                    <RatingModal
                                        rating = {rating}
                                        id = {id}
                                        singleUserInfo = {singleUserInfo}
                                        openRatingModal = {openRatingModal}
                                        handleRatingModalClose = {handleRatingModalClose}
                                    ></RatingModal>
                                    <IconButton aria-label="comment">
                                    <a style={{textDecoration: "none"}} href={`/post/${id}`}>
                                                    <Button style={{color: 'white'}} variant="outlined"> <AddCommentIcon/> &nbsp;&nbsp;Add Comment</Button>
                                                </a>
                                    
                                    </IconButton>
                                </CardActions>
                            </Box>                    
                        </CardContent>
                        

                        {/* <CardActions disableSpacing> */}
        
                    </Card>
                </Box>}
            </Grid>
    );
};

export default Book;