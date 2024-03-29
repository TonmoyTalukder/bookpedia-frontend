import { useEffect, useState } from "react";
import initializeFirebase from "../components/Shared/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";
import axios from "axios";


initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [userMail, setUserMail] = useState({});
  // const [mailCheck, setMailCheck] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (imageURL, name, email, password, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Save User to Database
        updateUser(email, imageURL, name);
        setAuthError('');
        const newUser = { email, photoURL: imageURL, displayName: name };
        setUser(newUser);
        // Send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: { name }, photoURL: { imageURL }
        }).then(() => {
        }).catch((error) => {
        });

        history.replace('/');
      })
      .catch((error) => {
        // setAuthError(error.message);
        setAuthError("Something is wrong. May be Password or Email issue. Email could be in use.");
      })
      .finally(() => setIsLoading(false));
  }

  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        // Save User to Database
        updateUser(user.email, user.photoURL, user.displayName);
        setAuthError('');
      }).catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  // Observer user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [])

  const logout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
      .finally(() => setIsLoading(false));
  }

  // Save User informations in database
  const SaveUser = (email, photoURL, displayName) => {
    const user = { email, photoURL, displayName };

    let flag = 1;
    console.log("Before from Login");
    console.log(flag);


    // useEffect(()=>{
        let getCheck = false;
        console.log(getCheck);
        axios.get('/api/users')
          .then(function (response){
              getCheck = true;
              setUserMail(response.data.map(data=>data.email));
              console.log(getCheck);
          })

          console.log(getCheck);


        if(getCheck === true){
          for(let x in userMail){
            if(userMail[x]===email){
              flag = 0;
            }
          }
    
          console.log("After Get from Login");
          console.log(flag);
    
          if(flag === 1){
            console.log("Flag in condition");
            console.log(flag);
            axios.post('/api/users', {
              email, photoURL, displayName
            });
          }
        }
      
    // }, [])

    
    // axios.get(`/api/users`)
    //     .then(function (response){
    //         setMailCheck(response.data.map(data=>data.email).find(uu=>(uu === email)));
    //         console.log(mailCheck);
    //         console.log(Object.keys(mailCheck).length);
    //         console.log('Mail');
    //     })
    
    //     if(Object.keys(mailCheck).length === 0){
    //       flag = 1;
    //     }

    // fetch('https://localhost:44373/api/users', {
    //   method: method,
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(user)
    // })
    //   .then()
  }

  const updateUser = (email, photoURL, displayName) => {
    const user = { email, photoURL, displayName };

    axios.post('/api/users', {
      email, photoURL, displayName
    });
  
    // fetch('https://localhost:44373/api/users', {
    //   method: method,
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(user)
    // })
    //   .then()
  }

  return {
    user,
    isLoading,
    authError,
    registerUser,
    loginUser,
    signInWithGoogle,
    logout
  }
}

export default useFirebase;