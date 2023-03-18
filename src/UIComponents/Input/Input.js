import React from "react";
import { useState } from "react";

// CSS input
import "./Input.css";

export default function Input() {
  const [text, setText] = useState("");

  return (
    <div>
      <input className="chat-input" type="text" placeholder="Message..." />
      <button className="chat-button">SEND</button>
    </div>
  );
}
