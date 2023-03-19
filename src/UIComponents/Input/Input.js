import React, { useState } from "react";

// CSS input
import "./Input.css";

export default function Input() {
  const [message, setMessage] = useState();

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleClick();
      setMessage();
    }
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleClick = (e) => {
    setMessage(e.target.value);
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
