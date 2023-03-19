import React, { useState } from "react";

// CSS input
import "./Input.css";

export default function Input({ handleSendMessage }) {
  const [text, setText] = useState("");

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleInputChange();
    }
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleButtonSend = (e) => {
    handleSendMessage(text);
    setText("");
  };

  return (
    <div>
      <input
        className="chat-input"
        value={text}
        type="text"
        placeholder="Message..."
        onKeyUp={handleEnter}
        onChange={handleInputChange}
      />
      <button className="chat-button" onClick={handleButtonSend}>
        SEND
      </button>
    </div>
  );
}
