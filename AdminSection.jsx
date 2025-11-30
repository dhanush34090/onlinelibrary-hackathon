import React from "react";

const AdminSection = ({ users, setUsers, subjects, setUploadedBooks }) => {
  const handleUpload = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.bookName.value.trim();
    const subject = form.bookSubject.value;
    const file = form.bookFile.files[0];
    if (!name || !subject || !file) {
      alert("Please fill all fields.");
      return;
    }
    setUploadedBooks((prev) => {
      const updated = { ...prev };
      if (!updated[subject]) updated[subject] = [];
      updated[subject].push({ name, file });
      return updated;
    });
    alert(`📚 Book "${name}" uploaded under ${subject}`);
    form.reset();
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value.trim();
    const password = form.password.value.trim();
    const access = form.access.checked;
    if (!username || !password) {
      alert("Please fill all fields.");
      return;
    }
    setUsers((prev) => [...prev, { username, password, role: "student", access }]);
    alert(`✅ Student "${username}" added successfully`);
    form.reset();
  };

  const toggleAccess = (username) => {
    setUsers((prev) =>
      prev.map((u) => (u.username === username ? { ...u, access: !u.access } : u))
    );
  };

  return (
    <>
      <div style={{ marginTop: 30 }}>
        <h3>📤 Upload Book</h3>
        <form onSubmit={handleUpload}>
          <input type="text" name="bookName" placeholder="Book Name" required />
          <select name="bookSubject" required>
            <option value="">Select Subject</option>
            {Object.keys(subjects).map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>
          <input type="file" name="bookFile" required />
          <button type="submit">Upload</button>
        </form>
      </div>

      <div style={{ marginTop: 30 }}>
        <h3>👨‍🎓 Add Student</h3>
        <form onSubmit={handleAddStudent}>
          <input type="text" name="username" placeholder="Username" required />
          <input type="password" name="password" placeholder="Password" required />
          <label>
            <input type="checkbox" name="access" defaultChecked /> Access Granted
          </label>
          <button type="submit">Add Student</button>
        </form>
      </div>

      <div style={{ marginTop: 30 }}>
        <h3>🔑 Student Access Control</h3>
        {users
          .filter((u) => u.role === "student")
          .map((stu) => (
            <div key={stu.username} style={{ marginBottom: 10 }}>
              {stu.username} - Access: {stu.access ? "✅" : "❌"}
              <button
                style={{ marginLeft: 10 }}
                onClick={() => toggleAccess(stu.username)}
              >
                Toggle Access
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default AdminSection;
