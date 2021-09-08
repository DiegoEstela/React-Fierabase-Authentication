import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../Context/AuthContext";

export const Login = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      history.push("/");
    } catch (error) {
      setError("Credenciales Incorrectas");
      setTimeout(() => setError(""), 2000);
    }
  };
  return (
    <div className="card">
      <div className="card-header">
        {error && <p className="error">{error}</p>}
        <h1>Log In</h1>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" onChange={handleEmail} />
          <input
            type="password"
            placeholder="Password"
            onChange={handlePassword}
          />
          <input type="submit" value="Log In" />
        </form>
        <p>
          Todavia no tenes usuario? <Link to="/signup">Sign Up</Link>{" "}
        </p>
      </div>
    </div>
  );
};
