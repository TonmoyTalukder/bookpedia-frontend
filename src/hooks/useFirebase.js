import { useEffect, useState } from "react";
import initializeFirebase from "../components/Shared/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";
import axios from "axios";


initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (imageURL, name, email, password, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Save User to Database
        saveUser(email, imageURL, name);
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
        saveUser(user.email, user.photoURL, user.displayName);
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
  const saveUser = (email, photoURL, displayName) => {
    const user = { email, photoURL, displayName };

    try{

    } catch{
      
    }

    let flag = 0;

    axios.get(`/api/users?email=${email}`)
        .then(function (response){
            if(response.email === null){
              flag = 1;
            }
        })
    console.log("After Get from Login")
    if(flag === 1){
      axios.post('/api/users', {
        email, photoURL, displayName
      });
    }
  
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

    axios.put('/api/users', {
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