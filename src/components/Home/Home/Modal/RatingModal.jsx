import { Backdrop, Box, Button, Fade, FormControl, InputLabel, MenuItem, Modal, NativeSelect, Select, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import PostRating from '../Rating/PostRating';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const RatingModal = ({openRatingModal, handleRatingModalClose, rating, id, singleUserInfo}) => {

    const [value, setValue] = useState();
    // console.log(value);
    // console.log(singleUserInfo.id);

    const [ratingInfo, setRatingInfo] = useState([]);
    const [ratingId, setRatingId] = useState([]);

    useEffect(() => {
        axios.get(`/api/Ratings?userId=${singleUserInfo.id}&&postId=${id}`)
        .then(function (response){
            // console.log(response.data.reverse().map(data=>data).filter(uu=>(uu.UserId === singleUserInfo.id)).rating);
            // console.log("SingleUserInfo");
            // console.log(singleUserInfo.id);

            // console.log('id');
            // console.log(id);

            // console.log(response.data);
            // console.log(response.data.map(data=>data).map(data=>data.rating));
            setRatingInfo(response.data.map(data=>data).map(data=>data.rating));
            setRatingId(response.data.map(data=>data).map(data=>data.id));
            // setRatingInfoCheck(response.data.reverse().map(data=>data).filter(uu=>(uu.UserId === singleUserInfo.id)));
            // console.log('ratingInfo.rating');
            // console.log(ratingInfo[0]);
            // console.log('ratingInfoCheck');
            // console.log(ratingInfoCheck);
        })
    }, [id, singleUserInfo.id])

    


    const handleRatingPost = (e) =>{

        const ratingShow = {
            rating: value,
            UserId: singleUserInfo.id,
            inventoryId: id
          }
    
          // console.log(ratingShow);

        // useEffect(() => {
            // axios.post(`/api/Ratings`,{
            //     rating: value,
            //     UserId: singleUserInfo.id,
            //     inventoryId: id
            // });
            // console.log(value);
            
        // }, [])
    
        
       
    }
    

    const handleRatingSubmit = (e) =>{

        const ratingShow = {
            rating: value,
            UserId: singleUserInfo.id,
            inventoryId: id
          }
    
        //   console.log(ratingShow);

        // useEffect(() => {
            axios.post(`/api/Ratings`,{
                rating: value,
                UserId: singleUserInfo.id,
                inventoryId: id
            });
            // console.log(value);
            // console.log(singleUserInfo.id);
            // console.log(id);
            
        // }, [])

        handleRatingModalClose();
        setTimeout("location.href = '/home'",1500);     
        e.preventDefault();
    }

    const handleClearRating = (e) =>{
       axios.delete(`/api/Ratings/${ratingId[0]}`);
       window.location.reload(false);
    }
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openRatingModal}
        onClose={handleRatingModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openRatingModal}>
          <Box sx={style}>
            {/* <Typography id="transition-modal-title" variant="h6" component="h2">
              Hello
            </Typography> */}
            {
                ratingInfo.length > 0 ?
                
                <>
                    Your rating is:

                    <>
                        <Rating name="read-only" value={ratingInfo[0]} precision={0.1} readOnly />
                    </>

                    <>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}><Button onClick={handleClearRating} style={{marginTop: '5px', backgroundColor: 'red'}} variant="contained">Clear Rating</Button></Box>
                    </>
                </>
                :
                <>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        Rate Please
                    </Typography>
                    
                    <form onSubmit={handleRatingSubmit}>

                        <Stack style={{color: 'white'}} spacing={1}>
                            <Rating 
                            value={value}
                            onChange={(event, newValue) => {
                            setValue(newValue);
                            console.log(newValue);
                            }}
                            name="half-rating" 
                            precision={0.1} />
                        </Stack>

                        {/* <Button onClick={handleRatingPost} >Rate</Button> */}

                        <Box sx={{ display: 'flex', justifyContent: 'center' }}><Button type="submit" style={{marginTop: '5px'}} variant="contained">Confirm</Button></Box>
                    </form>
                </>
            }

            {/* {
                !rating&&
                
                <>
                    Rate Please
                </>
            } */}
            
          </Box>
        </Fade>
      </Modal>
    );
};

export default RatingModal;