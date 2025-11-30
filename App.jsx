import React, { useState } from "react";
import LoginRole from "./Components/LoginRole.jsx";
import LoginForm from "./Components/LoginForm.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import { generateSubjects, initialUsers, initialUploadedBooks } from "./utils.jsx";

const App = () => {
  const [step, setStep] = useState("chooseRole");
  const [role, setRole] = useState(null);
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState(initialUsers);
  const [uploadedBooks, setUploadedBooks] = useState(initialUploadedBooks);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState(null);

  const subjects = generateSubjects();

  const handleRoleClick = (selectedRole) => {
    setRole(selectedRole);
    setStep("enterCreds");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) =>
        u.username === userid &&
        u.password === password &&
        u.role === role &&
        (role === "admin" || u.access)
    );
    if (user) {
      setCurrentUser(user);
      setStep("dashboard");
      setUserid("");
      setPassword("");
    } else {
      alert(role === "student" ? "❌ Student access denied or invalid credentials." : "❌ Invalid credentials.");
    }
  };

  const handleLogout = () => {
    setStep("chooseRole");
    setRole(null);
    setCurrentUser(null);
    setSelectedSubject(null);
  };

  return (
    <>
      {step === "chooseRole" && <LoginRole handleRoleClick={handleRoleClick} />}
      {step === "enterCreds" && (
        <LoginForm
          role={role}
          userid={userid}
          password={password}
          setUserid={setUserid}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      )}
      {step === "dashboard" && (
        <Dashboard
          currentUser={currentUser}
          users={users}
          setUsers={setUsers}
          subjects={subjects}
          uploadedBooks={uploadedBooks}
          setUploadedBooks={setUploadedBooks}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedSubject={selectedSubject}
          setSelectedSubject={setSelectedSubject}
          handleLogout={handleLogout}
        />
      )}
    </>
  );
};

export default App;
