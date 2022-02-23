import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import Posts from './Posts/Posts';

const Home = () => {
    const { user } = useAuth();
    // console.log(user.photoURL);
    return (
        <div>
            <Header />

            <Box sx={{ padding: '5px', width: '100%', backgroundColor: '#262626' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ alignItems: 'center', backgroundColor: '#262626' }} >
                    <Grid item xs={0} md={3}>One</Grid>
                    <Grid item xs={12} md={6}>

                        <Box style={{ border: '1px solid #575757', borderRadius: '5px', backgroundColor: ' #575757', textAlign: 'left' }} sx={{ alignItems: 'center' }} >


                            <Card sx={{ minWidth: 275, border: '1px solid  #575757', borderRadius: '5px', backgroundColor: ' #575757' }}>
                                {/* <CardContent>
                                <img style={{width: '45px', height: '45px', borderRadius: '50%', padding: '25px'}} src={user.photoURL} alt="" />
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Word of the Day
                                </Typography>
                                
                            </CardContent> */}
                                <CardActions>
                                    <img style={{ width: '45px', height: '45px', borderRadius: '50%', padding: '25px' }} src={user.photoURL} alt="User's Photo" />
                                    <Typography sx={{ fontSize: 20, color: 'white' }} color="text.secondary" gutterBottom>
                                        What's in your mind {user.displayName}?
                                    </Typography>
                                </CardActions>
                                <CardActions style={{ justifyContent: 'center' }}>
                                    {/* <Button size="small">Learn More</Button> */}
                                    <Button variant="text" style={{ borderBottom: '2px', color: 'white' }}>
                                        <Typography>
                                            Upload a Book?<br /><MenuBookRoundedIcon />
                                        </Typography>
                                    </Button>
                                    <span style={{ fontSize: 65, color: 'white' }}>|</span>
                                    <Button variant="text" style={{ borderBottom: '2px', color: 'white' }}>
                                        <Typography>
                                            Write a blog?<br /><RssFeedRoundedIcon />
                                        </Typography>
                                    </Button>
                                </CardActions>
                            </Card>


                            {/* <img style={{width: '45px', height: '45px', borderRadius: '50%', padding: '25px'}} src={user.photoURL} alt="" />
                            <span style={{textAlign: 'left', marginLeft: '5px'}}>What is on your mind {user.displayName}?</span> */}
                        </Box>

                        <Posts />

                        {/* <Box style={{border: '1px solid #616865', borderRadius: '5px', backgroundColor: '#616865'}}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 2}} sx={{ alignItems: 'center' }} >
                                <Grid item xs={2} style={{border: '1px solid black'}}>
                                    <img style={{width: '45px', height: '45px', borderRadius: '50%'}} src={user.photoURL} alt="" />
                                </Grid>
                                <Grid item xs={8} style={{border: '1px solid red'}} sx={{ justifyContent: 'center' }}  >
                                    <span style={{textAlign: 'left'}}>What is on your mind {user.displayName}?</span>
                                </Grid>
                            </Grid>
                        </Box> */}

                    </Grid>
                    <Grid item xs={0} md={3}>Three</Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Home;