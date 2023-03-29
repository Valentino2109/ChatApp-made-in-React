import React, { useState } from "react";

// CSS input
import "./Input.css";

export default function Input({ handleSendMessage }) {
  const [text, setText] = useState("");

  // If enter has been pressed, save a message in "text"
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleButtonSend();
    }
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleButtonSend = () => {
    if (!text.length > 0) {
      return;
    }
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
