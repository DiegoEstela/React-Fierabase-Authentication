import React, { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../Firebase";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = (props) => {
  const [currentUser, setcurrentUser] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setcurrentUser(user);
    });
  }, []);

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPasword(email, password);
  };
  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };
  const logout = () => auth.signOut();

  const value = { signup, login, logout, currentUser };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
