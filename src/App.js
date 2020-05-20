import React, { useState, useEffect } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import UserContext from './context/UserContext';
import { checkUser } from './services';
import Home from './containers/Home';
import Login from './containers/LogIn';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchUserStatus = async () => {
      await checkUser(setIsLoggedIn);
      setLoading(false);
    };
    fetchUserStatus();
  }, [isLoggedIn]);

  if (loading) {
    return (
      <div className="loader">
        <Loader type="Puff" color="#3b3054" height={100} width={100} />
      </div>
    );
  }
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
