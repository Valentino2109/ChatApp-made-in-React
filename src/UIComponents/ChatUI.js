import Input from "./Input/Input";
import Messages from "./Messages/Messages";
import { useEffect, useState } from "react";

// CSS
import "./ChatUI.css";

// Random name
const aName = () => {
  return "Small wiener";
};

// Random color for a member
const randomColor = () => {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
};

export default function ChatUI() {
  const [messages, setMessages] = useState([]);
  const [drone, setDrone] = useState();
  const [member, setMember] = useState({
    username: aName(),
    color: randomColor(),
  });

  useEffect(() => {
    // Connecting to Scaledrone
    const drone = new window.Scaledrone("fbEWYCxtwTPuUsqf", {
      data: member,
    });
    drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      member.id = drone.clientId;
      setMember(member);
    });

    const room = drone.subscribe("observable-chat");
    room.on("data", (data, member) => {
      setMessages((messages) => [...messages, { member, text: data }]);
    });

    setDrone(drone);
  }, []);

  // Sending a message through observable-room
  const handleSendMessage = (message) => {
    drone.publish({
      room: "observable-chat",
      message,
    });
  };

  return (
    <div id="chat-UI">
      <div className="top-UI">ChatApp</div>
      <div className="messages-UI">
        <Messages messages={messages} currentMember={member} />
      </div>
      <div className="input-UI">
        <Input handleSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}
