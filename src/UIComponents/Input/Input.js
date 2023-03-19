import React from "react";

// CSS input
import "./Input.css";

export default function Input() {
  return (
    <div>
      <input className="chat-input" type="text" placeholder="Message..." />
      <button className="chat-button">SEND</button>
    </div>
  );
}
