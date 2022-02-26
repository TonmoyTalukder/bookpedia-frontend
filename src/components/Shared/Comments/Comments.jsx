import React, { useState } from 'react';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { Button, Card, CardActions, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import useUserInfo from '../../../hooks/useUserInfo';
import axios from 'axios';
const Comments = ({singlePostId}) => {
    const{singleUserInfo} = useUserInfo();

    const initialInfo = { userName: singleUserInfo.displayName, userEmail: singleUserInfo.email, photoURL: singleUserInfo.photoURL };


    const [commentInfo, setCommentInfo] = useState(initialInfo);



    const handleOnClick = (e) => {
        const field = e.target.name;
        const value = e.target.value;
  
        const newInfo  = {...commentInfo};
        newInfo[field] = value;
        // console.log(newInfo);
        setCommentInfo({...newInfo});
      }

      const handleCommentSubmit = (e) => {

        const postComment = {
          ...commentInfo
        }

        axios.post(`/api/comment/`,{
            userName: singleUserInfo.displayName,
            userEmail: singleUserInfo.email,
            photoURL: singleUserInfo.photoURL,
            comment: commentInfo.comment,
        });
        // console.log("After Put", postInfo);
              
        e.preventDefault();
    }


    return (
        <div style={{ width: '100%'}}>
            <Card>

                <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
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
                    // onClick = {handleOnClick}
                    defaultValue=""
                    size="small"
                    label="Your comment"
                    focused
                />
                    </span> 
                    
                <span>
                <Button variant="contained" endIcon={<SendIcon />}>Comment</Button>
                </span>
                </CardActions>

            </Card>
            
            <Typography sx={{ fontSize: 30, color: 'white', textAlign: 'left' }} color="text.secondary" gutterBottom>
                <AddCommentIcon/> &nbsp;&nbsp;Comments
            </Typography>
            <hr style={{ color: 'white' }}  />
        </div>
    );
};

export default Comments;