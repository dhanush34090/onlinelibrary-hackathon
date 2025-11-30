import React from "react";

const Topics = ({ subject, subjects }) => (
  <div style={{ marginTop: 20 }}>
    <h3>{subject} Topics</h3>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      {subjects[subject].map((topic) => (
        <div
          key={topic}
          style={{
            background: "#dff9fb",
            padding: "6px 12px",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          {topic}
        </div>
      ))}
    </div>
  </div>
);

export default Topics;
