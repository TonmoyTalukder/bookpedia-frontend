import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleUser from './SingleUser';

const SendSingleUser = () => {
    const [allUserInfo, setAllUserInfo] = useState([]);
    useEffect(()=>{
        axios.get(`/api/users`)
    .then(function (response){
        setAllUserInfo(response.data.reverse());
    })
    }, [])
    return (
        <div>
        <Box
            direction="column"
            alignItems="center"
            justifyContent="center"
        >
            
                {
                    allUserInfo.slice(0,10).map(allUser => <SingleUser
                        key = {allUser.id}
                        allUser = {allUser}
                    ></SingleUser>)
                }
            
        </Box>
    </div>
    );
};

export default SendSingleUser;