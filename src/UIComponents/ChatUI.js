import Input from "./Input/Input";
import Messages from "./Messages/Messages";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

// CSS
import "./ChatUI.css";

// Random color for a member using hexadecimal numbers toString(16)
const randomColor = () => {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
};

export default function ChatUI() {
  // Getting username to show up as a member name
  const location = useLocation();

  const [messages, setMessages] = useState([]);
  const [drone, setDrone] = useState();
  const [member, setMember] = useState({
    username: location.state.nickname,
    color: randomColor(),
  });

  // Auto scroll on new messages
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Connecting to Scaledrone
  useEffect(() => {
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

  // Sending a message through observable-room - Scaledrone
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
        <div ref={messagesEndRef} />{" "}
      </div>
      <div className="input-UI">
        <Input handleSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}
