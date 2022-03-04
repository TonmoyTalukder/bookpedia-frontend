import { Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Comment = ({postedComment}) => {
    const{id, comment, User} = postedComment;
    return (
            <Grid item xs={12} sm={12} md={12} lg={12} 
                className="specialCenter"
            >
                <Box style={{border: '1px solid  #575757', borderRadius: '5px', backgroundColor: ' #575757', textAlign: 'left', marginTop: '15px'}} sx={{ alignItems: 'center' }} >
                    <Card sx={{ width: '100%', border: '1px solid  #575757', borderRadius: '5px', backgroundColor: ' #575757' }}>
                        
                        <CardActions>

                            
                            <Typography sx={{ fontSize: 20, color: 'white' }} color="text.secondary" gutterBottom>
                                {User.displayName}
                            </Typography>
                        </CardActions>
                        <CardActions style={{justifyContent: 'left'}}>
                            
                            <Box style={{width: '60%'}}>
                                
                                 
                                

                                <Typography sx={{ fontSize: 15, color: 'white', marginTop:'10px' }} color="text.secondary" gutterBottom>
                                      {comment}
                                </Typography>
                                <CardActions style={{justifyContent: 'center'}}>
                                    
                                </CardActions>
                            </Box>
                        </CardActions>
                        <CardContent>
                                                        
                        </CardContent>
                        

        
                    </Card>
                </Box>

            </Grid>
    );
};

export default Comment;