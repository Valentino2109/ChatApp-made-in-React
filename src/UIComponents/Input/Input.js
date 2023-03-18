import React from "react";
import { useState } from "react";

// CSS input
import "./Input.css";

export default function Input() {
  const [message, setMessage] = useState("");

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleInputChange = (e) => {
    setMessage("");
  };

  const handleClick = (e) => {
    setMessage("");
  };

  return (
    <div>
      <input
        className="chat-input"
        type="text"
        placeholder="Message..."
        onKeyUp={handleEnter}
        onChange={handleInputChange}
      />
      <button className="chat-button" onClick={handleClick}>
        SEND
      </button>
    </div>
  );
}
