import { Box, Button } from '@mui/material';
import React from 'react';

const NotFound = () => {
    return (
        <>
        <div style={{height: '100vh', backgroundColor: '#262626', display: 'grid', justifyContent: 'center', alignItems: 'center'}}>
            
            <Box style={{width: "100%", marginTop: '100px'}}>
                <img style={{height: '150px', width: "180px"}} src="https://raw.githubusercontent.com/AuthoredByTonmoy/bookPediaImages/3bbc5010dae7e1aa831baeee146d4c5d52e3d811/s_LXY1yMsCT.svg" alt="" />
            </Box>
            <p style={{marginTop: '-400px', color: '#ababab', fontSize: '20px'}}>
            <b><br /><br />This page isn't available</b>
                <br />
                <span>The link may be broken, or the page may have been <br />removed. Check to see if the link you're trying to open is correct.</span><br /><br />
                <a style={{textDecoration: 'none'}} href="/">

                    <Button 
                        variant="contained" 
                        style={{backgroundColor: '#38B682', color: '#fffcfc'}}
                        type="submit"    
                    > Go to News Feed</Button>
                    {/* <Button style={{backgroundColor: '#38B682', color: 'white'}}>
                        Go to News Feed
                    </Button> */}
                </a>
            </p>
        </div>
        
        </>
    );
};

export default NotFound;