import { ListItem, ListItemButton, ListItemIcon, Typography } from '@mui/material';
import React from 'react';

const User = ({allUser}) => {
    const{id, photoUrl, displayName, email} = allUser;

    return (
        <a style={{textDecoration: "none"}} href={`/user/${id}`}>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon sx={{ color: 'white' }}>
                        {/* <img style={{width: '45px', height: '45px', borderRadius: '50%', padding: ''}}  src={photoUrl} alt="" /> */}
                        {
                            photoUrl && <img style={{width: '45px', height: '45px', borderRadius: '50%', padding: ''}}  src={photoUrl} alt="" />
                        }
                        {
                            !photoUrl && <img style={{width: '45px', height: '45px', borderRadius: '50%', padding: ''}}  src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="" />
                        }
                    </ListItemIcon>
                    <Typography variant="body1"  sx={{ color: 'white' }} color="text.secondary" gutterBottom>
                    &nbsp;&nbsp;{displayName}
                    </Typography>
                </ListItemButton>
            </ListItem>
        </a>
            
    );
};

export default User;