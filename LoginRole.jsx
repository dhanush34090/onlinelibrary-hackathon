
import React from "react";

const LoginRole = ({ handleRoleClick }) => (
  <div style={{ textAlign: "center", marginTop: 100 }}>
    <h1>📘 Engineering Library Portal</h1>
    <p>Select your role:</p>
    <button onClick={() => handleRoleClick("admin")}>Admin</button>
    <button onClick={() => handleRoleClick("student")}>Student</button>
  </div>
);

export default LoginRole;