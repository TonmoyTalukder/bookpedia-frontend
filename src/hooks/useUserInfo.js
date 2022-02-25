import axios from "axios"
import { useEffect, useState } from "react";
import useAuth from "./useAuth";



const useUserInfo = () => {
    const [getUserMail, setGetUserMail] = useState([]);
    const [singleUserInfo, setSingleUserInfo] = useState([]);
    const{user} = useAuth();

    const newFunc = ()=>{
        axios.get(`/api/users`)
            .then(function (response){
                // setDatabaseUser(response.data.map(data=>data.email));
                setGetUserMail(response.data.map(data=>data.email).find(uu=>(uu === user.email)));
            })
    }

    useEffect(() => {
        newFunc();
    }, []);

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