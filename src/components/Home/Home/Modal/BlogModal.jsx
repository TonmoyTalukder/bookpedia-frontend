import { Backdrop, Box, Button, Fade, FormControl, InputLabel, MenuItem, Modal, NativeSelect, Select, TextareaAutosize, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import useUserInfo from '../../../../hooks/useUserInfo';

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

const BlogModal = ({openBlogModal, handleBlogModalClose}) => {

    const{singleUserInfo} = useUserInfo();

    // console.log(singleUserInfo.displayName);

    const initialInfo = { authorName: singleUserInfo.displayName };


    // console.log('initial info ',initialInfo);

    const [postInfo, setPostInfo] = useState(initialInfo);
    
    

    useEffect(()=>{
      // console.log('Post info ');

    }, [postInfo]);

    const handleOnBlur = (e) => {
      const field = e.target.name;
      const value = e.target.value;

      const newInfo  = {...postInfo};
      newInfo[field] = value;
      // console.log(newInfo);
      setPostInfo({...newInfo});
    }

    const handleBookingSubmit = (e) => {

        const postBook = {
          ...postInfo
        }
        // console.log(postInfo);



        axios.post(`/api/inventories/`,{
            authorName: singleUserInfo.displayName,
            authorPhotoUrl: singleUserInfo.photoUrl,
            email: singleUserInfo.email,
            postTitle: postInfo.postTitle,
            type: 'blog',
            coverImageURL: postInfo.coverImageURL,
            blogPost: postInfo.blogPost,
            category: postInfo.category
        });

        axios.post(`/api/blogs/`,{
            UserId: singleUserInfo.id,
            blogTitle: postInfo.postTitle,
            blogcoverImageURL: postInfo.coverImageURL,
            blogDetails: postInfo.blogPost
        });

        // console.log("After Put", postInfo);
        handleBlogModalClose();
        // window.location.reload(false); 
        setTimeout("location.href = '/home'",5000);     
        e.preventDefault();
    }

    const [category, setCategory] = useState('');

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBlogModal}
        onClose={handleBlogModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBlogModal}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              
            </Typography>
            <form onSubmit={handleBookingSubmit}>
                
                {/* <TextField
                    // label="Size"
                    disabled
                    sx={{width: '90%', m:1}}
                    id="outlined-size-small"
                    name = "id"
                    onBlur = {handleOnBlur}
                    value={id}
                    size="small"
                    label="ID"
                    focused
                /> */}
                <TextField
                    // label="Size"
                    disabled
                    sx={{width: '90%', m:1}}
                    id="outlined-size-small"
                    name = "authorName"
                    onBlur = {handleOnBlur}
                    defaultValue={singleUserInfo.displayName}
                    size="small"
                    label="Name"
                    focused
                />
                <TextField
                    // label="Size"
                    // disabled
                    sx={{width: '90%', m:1}}
                    id="outlined-size-small"
                    name = "postTitle"
                    onBlur = {handleOnBlur}
                    defaultValue=""
                    size="small"
                    label="Title of the post"
                    focused
                />
                {/* <TextField
                    // label="Size"
                    disabled
                    sx={{width: '90%', m:1}}
                    id="outlined-size-small"
                    name = "type"
                    onBlur = {handleOnBlur}
                    defaultValue="Book"
                    size="small"
                    label="Book"
                    focused
                /> */}
                <TextField
                    // label="Size"
                    // disabled
                    sx={{width: '90%', m:1}}
                    id="outlined-size-small"
                    name = "coverImageURL"
                    onBlur = {handleOnBlur}
                    defaultValue=""
                    size="small"
                    label="Cover Image URL"
                    focused
                />
                <TextField
                    id="outlined-textarea"
                    // label="Multiline Placeholder"
                    placeholder="What is in your mind?"
                    maxRows={6}
                    multiline
                    // // aria-label="minimum height"
                    // minRows={3}
                    // placeholder="Write the blog"
                    // style={{ width: '90%', marginLeft: 8 }}
                    // label="Size"
                    // disabled
                    sx={{width: '90%', m:1}}
                    // id="outlined-size-small"
                    name = "blogPost"
                    onBlur = {handleOnBlur}
                    defaultValue=""
                    size="small"
                    label="Write the blog"
                    focused
                />

                <FormControl
                    name = "category"
                    sx={{width: '90%', m:1}}
                >
                <InputLabel variant="standard" htmlFor="uncontrolled-native">Category</InputLabel>
                {/* <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="Category"
                    onChange={handleCategoryChange}
                >
                    <MenuItem value={'History'}>History</MenuItem>
                    <MenuItem value={'Science'}>Science</MenuItem>
                    <MenuItem value={'Nature'}>Nature</MenuItem>
                </Select> */}
                <NativeSelect
                    defaultValue={'null'}
                    inputProps={{
                        name: 'category',
                        id: 'uncontrolled-native',
                    }}
                    label="Category"
                    onBlur = {handleOnBlur}
                    >
                    <option value={'null'}> Null </option>
                    <option value={'History'}>History</option>
                    <option value={'Science'}>Science</option>
                    <option value={'Nature'}>Nature</option>
                    <option value={'Literature'}>Literature</option>
                    <option value={'OtherCategories'}>Other Categories</option>
                </NativeSelect>
                </FormControl>
                
                <Box sx={{ display: 'flex', justifyContent: 'center' }}><Button type="submit" style={{marginTop: '5px'}} variant="contained">Post</Button></Box>
            </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default BlogModal;