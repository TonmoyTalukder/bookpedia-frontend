import axios from "axios"
import { useEffect, useState } from "react";
import useAuth from "./useAuth";



const useUserInfo = () => {
    const [getUserMail, setGetUserMail] = useState([]);
    const [singleUserInfo, setSingleUserInfo] = useState([]);
    const{user} = useAuth();
    // console.log(user.email);

    const newFunc = ()=>{
        // console.log('New Func Enter');

        axios.get('/api/users')
            .then(function (response){
                // console.log(response.data.map(data=>data.email));
                setGetUserMail(response.data.map(data=>data.email).find(uu=>(uu === user.email)));
                // console.log(response.data.map(data=>data.email).find(uu=>(uu === user.email)));
            })
    }
    // console.log('Before Func Hit');

    useEffect(() => {
        // console.log('New Func Hit');

        newFunc();
    }, [newFunc]);

    // console.log('getUserMail');
    // console.log(getUserMail);

    useEffect(()=>{
        axios.get(`/api/users?email=${getUserMail}`)
            .then(function (response){
                // console.log('singleUser');
                // console.log(response.data);
                setSingleUserInfo(response.data);
            })
    }, [getUserMail]);

    // useEffect(()=>{
    //     // axios.get(`/api/users?email=${getUserMail}`)
    //     //     .then(function (response){
    //     //         // console.log('singleUser');
    //     //         // console.log(response.data);
    //     //         setSingleUserInfo(response.data);
    //     //     })
    // }, []);

    // console.log('singleUserInfo');
    // console.log(singleUserInfo);

    return {
        singleUserInfo
    }
}

export default useUserInfo;