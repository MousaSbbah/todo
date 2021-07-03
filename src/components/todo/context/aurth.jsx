import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

const API = process.env.REACT_APP_API || 'nope';
export const LoginContext = React.createContext();

export const LoginProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState(null);

  useEffect(() => {
    const cookieToken = cookie.load('auth');
    validateToken(cookieToken);
  },[]);

  const login = (username, password) => {
    fetch(`${API}/signin`, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: new Headers({
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      }),
    })
      .then((response) => response.json())
      .then((response) => validateToken(response.token))
      .catch(console.error);
  };

  const validateToken = (token) => {
    try {
      let user = jwt.verify(token, process.env.REACT_APP_SECRET);
      console.log('all good');
      setLoginState(true, token, user);
    } catch (e) {
      setLoginState(false, null, {});
      console.log('Token Validation Error', e);
    }
  };

  const logout = () => {
    setLoginState(false, null, {});
  };

  const signup = (username, password, email) => {
    console.log({username,password,email})
    const body = JSON.stringify({username,password,email});
    console.log("🚀 ~ file: aurth.jsx ~ line 52 ~ signup ~ body", body)
    fetch(`${API}/signup`, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
    'Content-Type': 'application/json',
  },
      body:body 
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        return validateToken(response.token);
      })
      .catch((e)=>{console.error(e);});
  };

  const setLoginState = (loggedIn, token, user) => {
    cookie.save('auth', token);
    setLoggedIn(loggedIn);
    setToken(token);
    setUser(user);
  };

  const authContext = {
    loggedIn,
    setLoggedIn,
    user,
    setUser,
    token,
    login,
    logout,
    signup
  };

  return (
    <LoginContext.Provider value={authContext}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
