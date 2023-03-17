import Input from "./Input/Input";
import Messages from "./Messages/Messages";

// CSS
import "./ChatUI.css";

export default function ChatUI() {
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
