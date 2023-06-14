import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();

  const footerStyle = {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    backgroundColor: "#f5f5f5",
    textAlign: "center",
    padding: "10px 0",
  };

  const textStye = {
    fontSize: "14px",
  };

  return (
    <>

      <div style={footerStyle}>
        <p style={textStye}>© {date} - Google Keep</p>
      </div>
    </>
  );
};

export default Footer;
