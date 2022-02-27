import React, { useEffect, useState } from 'react';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { CircularProgress, Button, Card, CardActions, TextField, Typography, Box, Container, Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import useUserInfo from '../../../hooks/useUserInfo';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import Comment from './Comment';
import SingleComment from './SingleComment';

const Comments = ({singlePostId}) => {
    const{singleUserInfo} = useUserInfo();
    const {user, isLoading} = useAuth();

    console.log(singleUserInfo)

    const initialInfo = { User: singleUserInfo, UserId: singleUserInfo.id, postId: singlePostId, photoURL: singleUserInfo.photoURL};

    // console.log(initialInfo);


    const [commentInfo, setCommentInfo] = useState();

    // console.log('commentInfo');
    // console.log(commentInfo);

    const handleOnClick = (e) => {
        const field = e.target.name;
        const value = e.target.value;
  
        const newInfo  = {...commentInfo};
        newInfo[field] = value;
        console.log(newInfo);
        setCommentInfo({...newInfo});
      }

    //   console.log(commentInfo);

      const handleCommentSubmit = (e) => {

        const postComment = {
            User: singleUserInfo,
            UserId: singleUserInfo.id,
            postId: singlePostId,
            photoURL: singleUserInfo.photoUrl,
            comment: commentInfo.comment,
        }
        // console.log(singleUserInfo);
        // console.log('postComment');
        // console.log(postComment);

        axios.post(`/api/comments/`,{
            User: singleUserInfo,
            UserId: singleUserInfo.id,
            postId: singlePostId,
            photoURL: singleUserInfo.photoURL,
            comment: commentInfo.comment,
        });
        // console.log("After Put", postInfo);
              
        e.preventDefault();
    }


    // Show Comment

    const [showCommentInfo, setShowCommentInfo] = useState();


    const newFunc = ()=>{
        console.log('New Func Enter');
        console.log(singlePostId);

        axios.get('/api/comments')
            .then(function (response){
                // console.log(response.data.map(data=>data.email));
                setShowCommentInfo(response.data.reverse().map(data=>data).filter(comment => (comment.postId === singlePostId)));
                console.log(response.data.reverse());
                // console.log(response.data.map(data=>data.email).find(uu=>(uu === user.email)));
            })
    }

    useEffect(()=>{
        if(singlePostId !== null){
            newFunc();
        }
    }, [])

    console.log('singlePostId');
    console.log(singlePostId);
    console.log('showCommentInfo');
    console.log(showCommentInfo);

    if(isLoading){return <CircularProgress/>}

    return (
        <div style={{ width: '100%'}}>
            <Card>

                <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
                <form onSubmit={handleCommentSubmit} style={{display: 'flex', alignItems: 'center'}}>
                    <span>
                        <TextField
                            id="outlined-textarea"
                            // label="Multiline Placeholder"
                            placeholder="Write your comment..."
                            maxRows={6}
                            multiline
                            // // aria-label="minimum height"
                            // minRows={3}
                            // placeholder="Write the blog"
                            style={{ width: '600px' }}
                            // label="Size"
                            // disabled
                            sx={{width: '90%', m:1}}
                            // id="outlined-size-small"
                            name = "comment"
                            onInput = {handleOnClick}
                            defaultValue=""
                            size="small"
                            label="Your comment"
                            focused
                        />
                    </span> 
                    
                    <span>
                        <Button type="submit" variant="contained" endIcon={<SendIcon />}>Comment</Button>
                        
                    </span>
                </form>
                </CardActions>

            </Card>
            
            <Typography sx={{ fontSize: 30, color: 'white', textAlign: 'left' }} color="text.secondary" gutterBottom>
                <AddCommentIcon/> &nbsp;&nbsp;Comments
            </Typography>
            <hr style={{ color: 'white' }}  />

            <Box variant="scrollable" style={{backgroundColor: '#262626', padding: '20px', color: 'white'}}>
                <Container>
                
                    <Box
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Grid container 
                            spacing={{ xs: 2, md: 3 }} 
                            columns={{ xs: 12, sm: 12, md: 12 }}
                            className="specialCenter"
                        >
                            {/* {
                                showCommentInfo.map(postedComment => <Comment
                                    key = {postedComment.id}
                                    postedComment = {postedComment}
                                ></Comment>)
                            } */}
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </div>
    );
};

export default Comments;