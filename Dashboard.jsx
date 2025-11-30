import React from "react";
import SubjectsList from "./SubjectsList.jsx";
import Books from "./Books.jsx";
import AdminSection from "./AdminSection.jsx";
import Topics from "./Topics.jsx";

const Dashboard = ({
  currentUser,
  users,
  setUsers,
  subjects,
  uploadedBooks,
  setUploadedBooks,
  searchTerm,
  setSearchTerm,
  selectedSubject,
  setSelectedSubject,
  handleLogout,
}) => {
  return (
    <div style={{ padding: 20 }}>
      <h2>Welcome, {currentUser.username}</h2>
      <button onClick={handleLogout}>Logout</button>

      <input
        type="text"
        placeholder="🔍 Search subjects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: 8, width: "100%", marginTop: 10 }}
      />

      <SubjectsList
        subjects={subjects}
        searchTerm={searchTerm}
        setSelectedSubject={setSelectedSubject}
      />

      {currentUser.role === "admin" && (
        <AdminSection
          users={users}
          setUsers={setUsers}
          subjects={subjects}
          setUploadedBooks={setUploadedBooks}
          uploadedBooks={uploadedBooks}
        />
      )}

      <Books uploadedBooks={uploadedBooks} selectedSubject={selectedSubject} />

      {selectedSubject && (
        <Topics subject={selectedSubject} subjects={subjects} />
      )}
    </div>
  );
};

export default Dashboard;
