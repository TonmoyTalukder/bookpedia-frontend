import './App.css';
import Header from './components/Shared/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Saved from './components/Home/Saved/Saved';
import Library from './components/Home/Library/Library';
import Blogs from './components/Home/Blogs/Blogs';
import Login from './components/Shared/Login/Login/Login';
import Notification from './components/Home/Notification/Notification';
import Register from './components/Shared/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import useAuth from './hooks/useAuth';
import PrivateRoute from './components/Shared/Login/PrivateRoute/PrivateRoute';
import PublicRoute from './components/Shared/Login/PublicRoute/PublicRoute';
import axios from 'axios';
import Dashboard from './components/Home/Dashboard/Dashboard';




////////// START from Where //////////

//------->>>  Milestone 12, Module 71  <<<-----------
//------->>>  Video 6, Min 00:00  <<<----------------
//------->>>  To -> Module 72-2  <<<-----------------
//------->>>  6 Videos to watch  <<<-----------------

//  "proxy": "https://localhost:44373",

////////// START from Where //////////




function App() {
  // axios.get('/api/inventories')
  // .then(function (response){
  //   for(let i = 0; i<9; i++){
  //     if(response.data[i].type === 'blog')
  //     console.log(response.data[i]);
  //   }
  // })
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute exact path='/'>
              <Home></Home>
            </PrivateRoute>
            <PrivateRoute exact path='/home'>
              <Home></Home>
            </PrivateRoute>
            <PrivateRoute exact path='/saved'>
              <Saved></Saved>
            </PrivateRoute>
            <PrivateRoute exact path='/library'>
              <Library></Library>
            </PrivateRoute>
            <PrivateRoute exact path='/blogs'>
              <Blogs></Blogs>
            </PrivateRoute>
            <PrivateRoute exact path='/profile'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            
            <PrivateRoute exact path='/users/:userID'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            
            <PrivateRoute exact path='/notifications'>
              <Notification></Notification>
            </PrivateRoute>
          </Switch>
          {/* {user?.email ?
            <>
              <Route exact path='/login'>
                <Login></Login>
              </Route>
              <Route exact path='/register'>
                  <Register></Register>
              </Route>
            </>
            :
            <>
              <Route exact path='/login'>
                <Login></Login>
              </Route>
              <Route exact path='/register'>
                  <Register></Register>
              </Route>
            </>
          } */}
          <PublicRoute exact path='/login'>
              <Login></Login>
          </PublicRoute>
          <PublicRoute exact path='/register'>
              <Register></Register>
          </PublicRoute>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
