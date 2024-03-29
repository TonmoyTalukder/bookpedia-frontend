import { Button, Card, CardActions, CardContent, Grid, IconButton, ListItem, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import useUserInfo from '../../../../hooks/useUserInfo';
import PostRating from '../Rating/PostRating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import AddCommentIcon from '@mui/icons-material/AddComment';
import CategoryIcon from '@mui/icons-material/Category';
import CollectionsBookmarkRoundedIcon from '@mui/icons-material/CollectionsBookmarkRounded';
import axios from 'axios';
import RatingModal from '../Modal/RatingModal';
import { ConnectingAirportsOutlined, ContentCutOutlined } from '@mui/icons-material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const Post = ({post, newSingleUser}) => {
    const{user} = useAuth();
    const{singleUserInfo} = useUserInfo();
    // console.log(singleUserInfo.email);

    const{id, type, email, postTitle, bookURL, authorName, writerName, authorPhotoUrl, blogPost, coverImageURL, category, rating} = post;

//    console.log(authorName);


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
// console.log(sumRating);
// console.log(avgRating);


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

  let [like, setLike] = useState(0);

  const [likeInfo, setLikeInfo] = useState([]);
  const [likeId, setLikeId] = useState([]);

  useEffect(() => {
    axios.get(`/api/likes?userId=${singleUserInfo.id}&&postId=${id}`)
    .then(function (response){
        
        // console.log(response.data.map(data=>data).map(data=>data.like).length);
        setLikeInfo(response.data.map(data=>data).map(data=>data.like));
        setLikeId(response.data.map(data=>data).map(data=>data.id));
        // console.log(response.data.map(data=>data).map(data=>data.id));
       
    })
}, [id, singleUserInfo.id])

    // console.log(postTitle);
    // console.log(likeInfo.length);

  const handleLike = (e) =>{

    console.log('Like API Called for', likeId[0]);

    axios.post(`/api/likes`,{
        like: 1,
        UserId: singleUserInfo.id,
        inventoryId: id
    });
    setTimeout(`location.href = '${window.location.href}'`,500);   
    // window.location.reload(false);        
  }

  const handleDisLike = (e) =>{

    console.log('Dislike API Called for', likeId[0]);

    axios.delete(`/api/likes/${likeId[0]}`);
    setTimeout(`location.href = '${window.location.href}'`,500);         
    // window.location.reload(false);      
    
  }


  const [allLikeInfo, setAllLikeInfo] = useState([]);

  let sumLikes = 0;
  
  useEffect(() => {
      axios.get(`/api/likes?postId=${id}`)
      .then(function (response){
          setAllLikeInfo(response.data.reverse().map(data=>data.like));
      })
      
  }, [id])
  
  for (let x in allLikeInfo) {
      sumLikes += allLikeInfo[x];
    }

    const handleDeletePost = (e) =>{
        console.log('Dislike API Called for', likeId[0]);

        axios.delete(`/api/inventories/${id}`);
        console.log("Clicked delte api for the post ID: ", id);

        setTimeout(`location.href = '${window.location.href}'`,500);
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
                            {/* <a style={{textDecoration: "none"}} href={`/user/${singleUserInfo.id}`}><> */}
                            {
                                authorPhotoUrl && <img style={{ width: '45px', height: '45px', borderRadius: '50%', padding: ''}}  src={authorPhotoUrl} alt="" />
                            }
                            {
                                !authorPhotoUrl && <img style={{width: '45px', height: '45px', borderRadius: '50%', padding: ''}}  src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="" />
                            }
                            
                            <Typography sx={{ fontSize: 20, color: 'white' }} color="text.secondary" gutterBottom>
                            &nbsp;{authorName}
                            </Typography>
                            {/* </></a> */}

                            {/* {newSingleUser.email===user.email && <Box style={{width: '200px', marginLeft: '40%', textAlign: 'right'}}>
                                
                                <Button sx={{ fontSize: 20, color: 'white' }} gutterBottom>
                                    X
                                </Button>
                            </Box>} */}

                            
                        </CardActions>
                        <CardActions style={{justifyContent: 'left'}}>
                            <img style={{width: '40%', height: '350px', marginRight: '10px'}} src={coverImageURL} alt="" />
                            {/* <span style={{ fontSize: 320, color: 'white' }}>|</span> */}
                             
                            <Box style={{width: '60%'}}>
                                <Typography sx={{ fontSize: 25, color: 'white' }} color="text.secondary" gutterBottom>
                                    {postTitle}
                                </Typography>
                                <br />
                                {writerName && <Typography sx={{ fontSize: 20, color: 'white' }} color="text.secondary" gutterBottom>
                                    <BorderColorIcon/> {writerName}
                                </Typography>}
                                
                                {bookURL && <>
                                    <Typography sx={{ fontSize: 15, color: 'white' }} color="text.secondary" gutterBottom>
                                        <a style={{textDecoration: "none"}} href={bookURL}>
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

                                {/* <Typography sx={{ fontSize: 15, color: 'white', marginTop:'10px' }} color="text.secondary" gutterBottom>
                                      <FavoriteIcon/>&nbsp;Like: {sumLikes}
                                </Typography> */}

                                <CardActions style={{justifyContent: 'left'}}>

                                    {
                                    
                                        likeInfo.length > 0 ?
                                        <>
                                            <IconButton onClick={handleDisLike} style={{color: 'white'}} >
                                            <ThumbUpIcon/>
                                                
                                            </IconButton>
                                            <p style={{color: 'white'}}>Liked ({sumLikes})</p>
                                        </>
                                        :
                                        <>
                                            <IconButton onClick={handleLike} style={{color: 'white'}}>
                                            <ThumbUpOutlinedIcon/>
                                            </IconButton>
                                            <p style={{color: 'white'}}>Like ({sumLikes})</p>
                                        </>
                                        
                                    }

                                    {singleUserInfo.email === email ? <Button onClick={handleDeletePost} style={{color: 'white', fontSize: 16, border: '1px solid red'}} aria-label="add to favorites">
                                        Delete Post
                                    </Button>
                                    :
                                    <></>}

                                    {/* <IconButton onClick={handleLike} style={{color: 'white'}} aria-label="add to favorites">
                                        <ThumbUpIcon/>
                                    </IconButton> */}

                                    {/* <IconButton onClick={handleDisLike} style={{color: 'white'}} aria-label="add to favorites">
                                        <ThumbUpIcon/>
                                    </IconButton> */}

                                    {/* <IconButton onClick={handleDisLike} style={{color: 'white'}} aria-label="add to favorites">
                                        <ThumbDownAltIcon/>
                                    </IconButton> */}
                                </CardActions>

                                <CardActions style={{justifyContent: 'center'}}>

                                   

                                    <IconButton onClick={handleSaveOnClick} style={{color: 'white'}} aria-label="share">
                                        <CollectionsBookmarkRoundedIcon />
                                    </IconButton>

                                    <IconButton onClick={handleRatingModalOpen} style={{color: 'white'}} aria-label="rating">
                                        <>
                                            <Rating name="read-only" value={avgRating} precision={0.1} readOnly />
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