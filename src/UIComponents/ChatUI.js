import Input from "./Input/Input";
import Messages from "./Messages/Messages";
import { useState, useEffect, useCallback } from "react";

// CSS
import "./ChatUI.css";

export default function ChatUI() {
  // Connecting to Scaledrone
  const [drone, setDrone] = useState(null);
  useEffect(() => {
    if (drone !== null) return;
    setDrone(new window.Scaledrone("fbEWYCxtwTPuUsqf"));
  }, [drone, setDrone]);

  // Sending a message
  const handleSendMessage = useCallback(
    (message) => {
      drone.publish({
        room: "observable-room",
        message,
      });
    },
    [drone]
  );

  return (
    <div id="chat-UI">
      <div className="top-UI">ChatApp</div>
      <div className="messages-UI">
        <Messages />
      </div>
      <div className="input-UI">
        <Input sendMessage={handleSendMessage} />
      </div>
    </div>
  );
}
