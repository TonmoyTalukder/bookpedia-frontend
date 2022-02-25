import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useUserInfo from '../../../../hooks/useUserInfo';
import Header from '../../../Shared/Header/Header';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CloudDownloadSharpIcon from '@mui/icons-material/CloudDownload';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
const SinglePost = () => {

    const{singleUserInfo} = useUserInfo();
    const {postId} = useParams();
    const [postDetails, setPostDetails] = useState([]);

    useEffect(() => {
        axios.get(`/api/inventories/${postId}`)
        .then(function (response){
            setPostDetails(response.data);
            // console.log(response.data);
        })
    }, []);

    // let urlText = postDetails.bookURL;
    
    
    // let newUrl = urlText.split("view?usp=sharing")[0].concat('preview');
    // console.log(urlText.split("view?usp=sharing")[0].concat('preview'));
    // console.log(newUrl);

    return (
        <div style={{ backgroundColor: '#262626', height: '100vh'}}>
            <Header />
            <Grid item style={{ backgroundColor: '#262626', height: '100vh'}} xs={12} sm={12} md={12} lg={12} 
                className="specialCenter"
            >
                <Box style={{ borderRadius: '5px', textAlign: 'left', marginTop: '15px'}} sx={{ alignItems: 'center' }} >
                {postDetails.bookURL && <>
                    <Card sx={{ minWidth: 700, border: '1px solid  #575757', borderRadius: '5px', backgroundColor: ' #575757' }}>

                    <Box style={{display: 'flex', justifyContent: 'center'}}>
                        <Button><a className="download-resume" style={{textDecoration: 'none', color: 'white', border: '1px solid gray', borderRadius: '5px', padding: '10px'}} href={postDetails.bookURL} download="Tonmoy Talukder Resume Junior Web Developer">    <CloudDownloadSharpIcon/> Download: {postDetails.postTitle}</a></Button>
                    </Box>
                    
                    <Box style={{display: 'flex', justifyContent: 'center'}}>

                        {/* <embed src={newUrl} alt={postDetails.postTitle} type="application/pdf" width="80%" height="1000px" /> */}

                        {
                            postDetails.bookURL &&
                                <embed src={postDetails.bookURL.split("view?usp=sharing")[0].concat('preview')} alt={postDetails.postTitle} type="application/pdf" width="80%" height="1000px" />
                        }

                        {/* <iframe src="https://drive.google.com/file/d/15REV6zmvun8wealzG1LK3ibqPbNBXz7k/view?usp=sharing" width="80%" height="500px">
                        </iframe> */}

                        {/* <p>Open a PDF file <a href="https://drive.google.com/file/d/15REV6zmvun8wealzG1LK3ibqPbNBXz7k/view?usp=sharing">example</a>.</p> */}

                        {/* <iframe src="https://drive.google.com/file/d/15REV6zmvun8wealzG1LK3ibqPbNBXz7k/preview" width="640" height="480"></iframe> */}
                    </Box>
                    

                    </Card>
                </>}
                {postDetails.blogPost && <>

                    <Box style={{display: 'flex', justifyContent: 'center'}}>
                        <Card  style={{width: '80vw', backgroundColor: ' #575757', padding: '25px'}} sx={{ Width: '60%', border: '1px solid #575757', borderRadius: '5px' }}>

                            <Box style={{display: 'flex', justifyContent: 'center'}}>
                                <img src={postDetails.photoURL} alt="" />
                            </Box>

                            <Box>
                                <Typography sx={{ fontSize: 20, color: 'white' }} color="text.secondary" gutterBottom>
                                        {postDetails.postTitle}
                                </Typography>

                                <Typography sx={{ fontSize: 16, color: 'white' }} color="text.secondary" gutterBottom>
                                        <BorderColorIcon/> {postDetails.authorName}
                                </Typography>

                                <Typography sx={{ fontSize: 14, color: 'white' }} color="text.secondary" gutterBottom>
                                        {postDetails.blogPost}
                                </Typography>
                            </Box>


                            </Card>
                    </Box>
                </>}
                </Box>
            </Grid>
        </div>
    );
};

export default SinglePost;