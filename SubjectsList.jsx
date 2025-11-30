import React from "react";

const SubjectsList = ({ subjects, searchTerm, setSelectedSubject }) => {
  const filteredSubjects = Object.keys(subjects).filter((sub) =>
    sub.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: 10,
        maxHeight: "400px",
        overflowY: "scroll",
        marginTop: 20,
      }}
    >
      {filteredSubjects.length > 0 ? (
        filteredSubjects.map((sub) => (
          <div
            key={sub}
            onClick={() => setSelectedSubject(sub)}
            style={{
              background: "#ecf0f1",
              padding: 12,
              borderRadius: 6,
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            {sub}
          </div>
        ))
      ) : (
        <div style={{ gridColumn: "1 / -1", textAlign: "center", color: "#888" }}>
          ❌ No subjects found for "<strong>{searchTerm}</strong>"
        </div>
      )}
    </div>
  );
};

export default SubjectsList;
