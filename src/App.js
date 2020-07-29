import React, { useState, useEffect } from 'react';
import Tracker from '@asayerio/tracker';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import UserContext from './context/UserContext';
import { checkUser } from './services';
import Home from './containers/Home';
import Login from './containers/LogIn';

const tracker = new Tracker({
  projectID: 8794100460112674
});
tracker.start();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const fetchUserStatus = async () => {
      await checkUser(setIsLoggedIn);
    };
    fetchUserStatus();
  }, [isLoggedIn]);

  return (
    <UserContext.Provider value={isLoggedIn}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home setStatus={setIsLoggedIn} />
          </Route>
          <Route path="/login">
            <Login setStatus={setIsLoggedIn} />
          </Route>
          <Route path="/signup">
            <Login setStatus={setIsLoggedIn} />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
