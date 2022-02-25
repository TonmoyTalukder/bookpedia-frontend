import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import User from './User';

const Users = () => {
    const [allUserInfo, setAllUserInfo] = useState([]);
    useEffect(()=>{
        axios.get(`/api/users`)
    .then(function (response){
        setAllUserInfo(response.data);
    })
    }, [])
    return (
        <div>
            <Box
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Grid container 
                    spacing={{ xs: 2, md: 3 }} 
                    columns={{ xs: 12, sm: 12, md: 12 }}
                    className="specialCenter"
                >
                    {
                        allUserInfo.map(allUser => <User
                            key = {allUser.id}
                            allUser = {allUser}
                        ></User>)
                    }
                </Grid>
            </Box>
        </div>
    );
};

export default Users;