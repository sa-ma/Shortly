import React, { useState, useEffect } from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import UserContext from './context/UserContext';
import { checkUser } from './services';
import Home from './containers/Home';
import Login from './containers/LogIn';

function App() {
  const [user, setUser] = useState({ isLoggedIn: false, email: '' });

  useEffect(() => {
    const fetchUserStatus = async () => {
      await checkUser(setUser);
    };
    fetchUserStatus();
  }, [user.isLoggedIn]);

  return (
    <UserContext.Provider value={user}>
      <Router>
        {user.isLoggedIn && <Redirect to={{ pathname: '/' }} />}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Login} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
