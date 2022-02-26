import { CircularProgress, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import BlogPosts from './BlogPosts';

const Blogs = () => {
    return (
        <div>
            <Header/>
            <BlogPosts/>
        </div>
    );
};

export default Blogs;