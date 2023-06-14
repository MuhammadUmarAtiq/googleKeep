import React, { useState } from "react";
import Notes from "./Notes";

const CreateNode = () => {
  const [data, setData] = useState([]);
  const [expand, setExpand] = useState(false);
  const [text, setText] = useState({
    title: "",
    note: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };
  
  const submitHandler = () => {
    setData([...data, text]);
    setText({ title: "", note: "" });
  };
  
  const open = () => {
    setExpand(true);
  };
  
  const close = () => {
    setExpand(false);
  };

return (
  <>
      <div style={containerStyle}>
        {expand ? (
          <input
            type="text"
            value={text.title}
            name="title"
            placeholder="Title"
            autoComplete="off"
            onChange={changeHandler}
            style={inputStyle}
          />
        ) : null}

        <textarea
          name="note"
          value={text.note}
          rows=""
          column=""
          placeholder="Take a note..."
          onChange={changeHandler}
          onDoubleClick={close}
          onClick={open}
          style={textareaStyle}
        ></textarea>
        {expand ? (
          <button class="btn btn-dark" onClick={submitHandler} style={buttonStyle}>
            Add note
          </button>
        ) : null}
      </div>
      <Notes data={data} setData={setData} />
    </>
  );
};

// Inline CSS styles
const containerStyle = {
  marginBottom: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const inputStyle = {
  marginBottom: "10px",
  padding: "10px",
  width: "300px",
  fontSize: "18px",
  border:"none"
  // border: "1px solid #ccc",
  // borderRadius: "5px",
};

const textareaStyle = {
  resize: "none",
  border: "1px solid #ccc",
  padding: "10px",
  borderRadius: "5px",
  width: "300px",
  height: "120px",
  fontSize: "16px",
};

const buttonStyle = {
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  fontSize: "18px",
  cursor: "pointer",
  marginTop: ".5rem"
};

export default CreateNode;