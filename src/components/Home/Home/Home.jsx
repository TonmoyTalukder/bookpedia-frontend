import axios from 'axios';
import React from 'react';
import Header from '../../Shared/Header/Header';

const Home = () => {
    axios.get('https://localhost:44373/api/users')
  .then(function (response) {
    // handle success
    console.log(response.data[1].author);
   // console.log(response.data[1].author);
   // console.log(response.data[1].author);
  })
    return (
        <div>
            <Header/>
            Newsfeed

            
        </div>
    );
};

export default Home;