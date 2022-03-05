import { Box } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import DevelopedAppbar from './DevelopedAppbar';

const Header = ({pots}) => {
    const{user} = useAuth();
    // const [allUserInfo, setAllUserInfo] = useState([]);
    // useEffect(()=>{
    //     axios.get(`/api/users`)
    //     .then(function (response){
    //         setAllUserInfo(response.data.reverse().map(data=>data).filter(uu=>(uu.email === user.email)));
    //     })
    // }, [])
    return (
        <div>
            <Box style={{padding: '0%'}}>
                    {/* {
                        allUserInfo.slice(0,10).map(allUser => <DevelopedAppbar
                            key = {allUser.id}
                            allUser = {allUser}
                            posts
                        ></DevelopedAppbar>)
                    } */}
                <DevelopedAppbar/>
            </Box>
        </div>
    );
};

export default Header;