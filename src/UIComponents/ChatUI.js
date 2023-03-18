import Input from "./Input/Input";
import Messages from "./Messages/Messages";
import { useState } from "react";

// CSS
import "./ChatUI.css";

export default function ChatUI() {
  const [messages, setMessages] = useState([]);
  const [member, setMember] = useState("");

  return (
    <div id="chat-UI">
      <div className="top-UI">ChatApp</div>
      <div className="messages-UI">
        <Messages />
      </div>
      <div className="input-UI">
        <Input />
      </div>
    </div>
  );
}
