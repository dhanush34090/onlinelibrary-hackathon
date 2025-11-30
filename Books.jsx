
import React from "react";

const Books = ({ uploadedBooks, selectedSubject }) => {
  const renderUploadedBooks = (subject = null) => {
    const displaySubjects = subject ? [subject] : Object.keys(uploadedBooks);
    const foundBooks = displaySubjects.filter(
      (sub) => uploadedBooks[sub] && uploadedBooks[sub].length > 0
    );

    if (foundBooks.length === 0)
      return (
        <p style={{ color: "#888", fontStyle: "italic" }}>
          ❌ No books available for this subject.
        </p>
      );

    return foundBooks.map((sub) => (
      <div key={sub} style={{ marginBottom: 15 }}>
        <p style={{ fontWeight: "600" }}>{sub}:</p>
        <ul>
          {uploadedBooks[sub].map((book, idx) => (
            <li key={idx}>
              <a href={URL.createObjectURL(book.file)} download={book.file.name}>
                📘 {book.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <div style={{ marginTop: 30 }}>
      <h3>📚 Books</h3>
      {renderUploadedBooks(selectedSubject)}
    </div>
  );
};

export default Books;
