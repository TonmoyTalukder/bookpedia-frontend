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

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/saved'>
            <Saved></Saved>
          </Route>
          <Route exact path='/library'>
            <Library></Library>
          </Route>
          <Route exact path='/blogs'>
            <Blogs></Blogs>
          </Route>
          
          <Route exact path='/notifications'>
            <Notification></Notification>
          </Route>
        </Switch>
        <Route exact path='/login'>
            <Login></Login>
        </Route>
        <Route exact path='/register'>
            <Register></Register>
        </Route>
      </Router>
    </div>
  );
}

export default App;
