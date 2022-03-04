import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Logo from '../../../images/logo.png';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

// Menu ICON
import BungalowRoundedIcon from '@mui/icons-material/BungalowRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import CollectionsBookmarkRoundedIcon from '@mui/icons-material/CollectionsBookmarkRounded';

import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ArrowDropDownCircleRoundedIcon from '@mui/icons-material/ArrowDropDownCircleRounded';

// 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import useAuth from '../../../hooks/useAuth';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const DevelopedAppbar = ({allUser}) => {
    const{id, photoUrl, displayName, email} = allUser;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


    const {user, logout} = useAuth();

    return (
        <div>
            <Box sx={{ width: '100%', backgroundColor: 'black' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ alignItems: 'center' }} >
                    <Grid item xs={3}>
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, textAlign: 'left', alignItems: 'center' }}>
                            <img src={Logo} style={{width: '70px'}} alt="" />
                            <Paper
                                component="form"
                                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 250 }}
                                >
                                <IconButton type="submit" sx={{ p: '5px' }} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Search BookPedia"
                                />
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
                            <NavLink style={{textDecoration: 'none', color: 'white'}} to="/home">
                                <Button variant="text" style={{borderBottom: '2px', color: 'white'}}>
                                    <BungalowRoundedIcon/>
                                </Button>
                            </NavLink>

                            <NavLink style={{textDecoration: 'none', color: 'white'}} to="/library">
                                <Button variant="text" style={{borderBottom: '2px', color: 'white'}}>
                                    <MenuBookRoundedIcon/>
                                </Button>
                            </NavLink>

                            <NavLink style={{textDecoration: 'none', color: 'white'}} to="/blogs">
                                <Button variant="text" style={{borderBottom: '2px', color: 'white'}}>
                                    <RssFeedRoundedIcon/>
                                </Button>
                            </NavLink>

                            <NavLink style={{textDecoration: 'none', color: 'white'}} to="/saved">
                                <Button variant="text" style={{borderBottom: '2px', color: 'white'}}>
                                    <CollectionsBookmarkRoundedIcon/>
                                </Button>
                            </NavLink>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'right', alignItems: 'center' }}>
                        
                        {
                                user?.email ?
                                    <Button variant="text" style={{borderBottom: '2px', color: 'white'}}>
                                        <span>
                                            <img style={{width: '40px', height: '50px', borderRadius: '50% 20% / 10% 40%'}} src={user.photoURL} alt="" />
                                            {/* <img style={{width: '45px', height: '45px', borderRadius: '50%'}} src={user.photoURL} alt="" /> */}
                                        </span>
                                        <span>&emsp;{user.displayName}</span>
                                    </Button>
                                :
                                    <NavLink style={{textDecoration: 'none', color: 'white'}} to="/login">
                                        <Button variant="text" style={{borderBottom: '2px', color: 'white'}}>
                                            Login
                                        </Button>
                                    </NavLink>
                            }

                            <NavLink style={{textDecoration: 'none', color: 'white'}} to="/notifications">
                                <Button variant="text" style={{borderBottom: '2px', color: 'white'}}>
                                    <NotificationsRoundedIcon/>
                                </Button>
                            </NavLink>
                            
                            
                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                <Tooltip title="Account settings">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <Box style={{textDecoration: 'none', color: 'white'}}>
                                        <Avatar sx={{ width: 32, height: 32, backgroundColor: 'transparent' }}>
                                            <Button variant="text" style={{borderBottom: '2px', color: 'white'}}>
                                                <ArrowDropDownCircleRoundedIcon/>
                                            </Button>
                                        </Avatar>
                                    </Box>
                                    
                                </IconButton>
                                </Tooltip>
                            </Box>

                            <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                        },
                                        '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                        },
                                    },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem>
                                    <img style={{margin: 'auto', width: '40px', height: '50px', borderRadius: '50% 20% / 10% 40%'}} src={user.photoURL} alt={user.displayName} />
                                    </MenuItem>
                                    <MenuItem>


                                        <NavLink style={{textDecoration: 'none', color: 'white'}} to={`/user/${id}`}>
                                            <ListItemIcon>
                                                <Avatar /> Profile
                                            </ListItemIcon>
                                        </NavLink>

                                        
                                    </MenuItem>
                                    {/* <MenuItem>
                                        <Avatar /> My account
                                    </MenuItem> */}
                                    <Divider />
                                    {/* <MenuItem>
                                        <ListItemIcon>
                                            <PersonAdd fontSize="small" />
                                        </ListItemIcon>
                                        Add another account
                                    </MenuItem> */}
                                    {/* <MenuItem>
                                        <ListItemIcon>
                                            <Settings fontSize="small" />
                                        </ListItemIcon>
                                        Settings
                                    </MenuItem> */}
                                    <MenuItem>
                                        
                                        {/* Logout */}
                                        {
                                            user?.email ?
                                            <>
                                                <ListItemIcon>
                                                    <Logout fontSize="small" />
                                                </ListItemIcon>
                                                <Button onClick={logout} variant="text" style={{borderBottom: '2px', color: 'gray'}}>
                                                    Logout
                                                </Button>
                                            </>
                                            :
                                                <NavLink style={{textDecoration: 'none', color: 'white'}} to="/login">
                                                    <ListItemIcon>
                                                        <LoginIcon fontSize="small" />
                                                    </ListItemIcon>
                                                    <Button variant="text" style={{borderBottom: '2px', color: 'gray'}}>
                                                        Login
                                                    </Button>
                                                </NavLink>
                                        }
                                    </MenuItem>
                                </Menu>

                            
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default DevelopedAppbar;