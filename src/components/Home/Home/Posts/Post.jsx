import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const Post = ({post}) => {
    const{user} = useAuth();
    const{id, type, title, bookDriveUrl, authorName, blogDetails, coverImageUrl} = post;

    // if(bookDriveUrl == 'null'){
        
    // }

    return (
        <div>
            <Grid item xs={12} sm={12} md={12} lg={12} 
                className="specialCenter"
            >
                <Box style={{border: '1px solid  #575757', borderRadius: '5px', backgroundColor: ' #575757', textAlign: 'left', marginTop: '15px'}} sx={{ alignItems: 'center' }} >
                    <Card sx={{ minWidth: 700, border: '1px solid  #575757', borderRadius: '5px', backgroundColor: ' #575757' }}>
                        
                        <CardActions>
                            <img style={{width: '45px', height: '45px', borderRadius: '50%', padding: '25px'}} src={user.photoURL} alt="User's Photo" />
                            
                            <Typography sx={{ fontSize: 20, color: 'white' }} color="text.secondary" gutterBottom>
                                <BorderColorIcon/> {authorName}
                            </Typography>
                        </CardActions>
                        <CardActions style={{justifyContent: 'left'}}>
                            <img style={{width: '140px', height: '200px'}} src={coverImageUrl} alt="" />
                            <span style={{ fontSize: 120, color: 'white' }}>|</span>
                             
                            <Box>
                                <Typography sx={{ fontSize: 35, color: 'white' }} color="text.secondary" gutterBottom>
                                    {title}
                                </Typography>
                                <br />
                                
                                <Typography sx={{ fontSize: 15, color: 'white' }} color="text.secondary" gutterBottom>
                                    <a href="{bookDriveUrl}">Download the Book</a>
                                </Typography>
                                <Typography sx={{ fontSize: 15, color: 'white' }} color="text.secondary" gutterBottom>
                                    {blogDetails}
                                </Typography>
                            </Box>
                        </CardActions>
                        <CardContent>
                            
                                
                            
                        </CardContent>
                        <CardActions style={{justifyContent: 'center'}}>
                            
                        </CardActions>
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