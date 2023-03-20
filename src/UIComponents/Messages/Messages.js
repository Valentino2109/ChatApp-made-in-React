// CSS import
import "./Messages.css";

export default function Messages({ messages, currentMember }) {
  const showMessage = (message) => {
    const { member, text } = message;
    const myMessage = member.id === currentMember.id;
    const className = myMessage ? "main-member" : "other-member";
    return (
      <div>
        <li className={className}>
          <span style={{ color: member.clientData.color }}>
            <div>{member.clientData.username}</div>
          </span>
          <div>{text}</div>
        </li>
      </div>
    );
  };

  return <ul>{messages.map((message) => showMessage(message))}</ul>;
}
