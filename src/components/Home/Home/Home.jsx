import { Box, Button, Card, CardActions, CardContent, Divider, FormControlLabel, Grid, ListItem, ListItemButton, ListItemIcon, ListItemText, Radio, RadioGroup, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import Posts from './Posts/Posts';
import BookModal from './Modal/BookModal';
import BlogModal from './Modal/BlogModal';
// import BookModal from './Modals/BookModal';
// import BlogModal from './Modals/BlogModal';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Users from '../Users/Users';
import { Category } from '@mui/icons-material';
import SingleUser from '../SingleUser/SingleUser';
const Home = ({singleUser}) => {
    const { user } = useAuth();
    // console.log(user.photoURL);

    const [openBlogModal, setOpenBlogModal] = useState(false);
    const handleBlogModalOpen = () => setOpenBlogModal(true);
    const handleBlogModalClose = () => setOpenBlogModal(false);

    const [openBookModal, setOpenBookModal] = useState(false);
    const handleBookModalOpen = () => setOpenBookModal(true);
    const handleBookModalClose = () => setOpenBookModal(false);

    const [category, setCategory] = useState('');
    const handleOnClickHistory =()=> setCategory('History');
    const handleOnClickScience =()=> setCategory('Science');
    const handleOnClickNature =()=> setCategory('Nature');
    return (
        <div>
            <Posts/>
            <SingleUser/>
        </div>
    );
};

export default Home;