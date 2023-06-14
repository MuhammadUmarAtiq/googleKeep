import React from "react";

const Notes = (props) => {
  const { data, setData } = props;

  const deleteHandler = (index) => {
    const newData = data.filter((item, ind) => ind !== index);
    setData(newData);
  };

  const trashIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
    </svg>
  );

  return (
    <div style={containerStyle}>
      {data.map((item, index) => (
        <div key={index} style={cardStyle}>
          <h3 style={titleStyle}>{item.title}</h3>
          <p style={noteStyle}>{item.note}</p>
          <button type="button" style={buttonStyle} onClick={() => deleteHandler(index)}>
            {trashIcon}
          </button>
        </div>
      ))}
    </div>
  );
};

// Inline CSS styles
const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
};

const cardStyle = {
  width: "300px",
  backgroundColor: "#f5f5f5",
  borderRadius: "5px",
  padding: "10px",
  margin: "10px",
};

const titleStyle = {
  fontSize: "18px",
  marginBottom: "10px",
};

const noteStyle = {
  fontSize: "16px",
  marginBottom: "10px",
};

const buttonStyle = {
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
};

export default Notes;
