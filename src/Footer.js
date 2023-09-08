import React from "react";

const Footer = ({ length }) => {
  return (
    <footer>
      You have {length} {length === 1 ? "item" : "items"}
    </footer>
  );
};

export default Footer;
