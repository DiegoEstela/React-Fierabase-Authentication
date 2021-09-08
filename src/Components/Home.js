import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";

export const Home = () => {
  const [Error, setError] = useState("");

  const { currentUser, logout } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      setError("server error");
    }
  };
  return (
    <div className="card">
      <div className="card-header">
        {Error && <p className="error"> {Error}</p>}
        <img
          src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"
          alt="user"
          className="user-photo"
        />
      </div>
      <div className="card-body">
        <h1>Bienvenido</h1>
        <p>{currentUser.email}</p>
        <button className="logout-button" onClick={handleLogout}>
          Salir
        </button>
      </div>
    </div>
  );
};
