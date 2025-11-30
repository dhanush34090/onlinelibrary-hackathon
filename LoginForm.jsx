
import React from "react";

const LoginForm = ({ role, userid, password, setUserid, setPassword, handleLogin }) => (
  <div style={{ textAlign: "center", marginTop: 80 }}>
    <h2>Login as {role}</h2>
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        value={userid}
        onChange={(e) => setUserid(e.target.value)}
        required
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
);

export default LoginForm;
