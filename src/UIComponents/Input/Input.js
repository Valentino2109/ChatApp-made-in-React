import React, { useState } from "react";

// CSS input
import "./Input.css";

export default function Input({ handleSendMessage }) {
  const [text, setText] = useState("");

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleButtonSend();
    }
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleButtonSend = (e) => {
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
        onKeyUp={(e) => handleEnter(e)}
        onChange={(e) => handleInputChange(e)}
      />
      <button className="chat-button" onClick={(e) => handleButtonSend(e)}>
        SEND
      </button>
    </div>
  );
}
