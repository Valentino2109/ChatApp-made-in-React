// CSS import
import "./Messages.css";

export default function Messages({ messages, currentMember }) {
  const showMessage = (message) => {
    const { member, text } = message;
    const myMessage = member.id === currentMember.id;
    const className = myMessage ? "main-member other-member" : "other-member";
    return (
      <li className={className}>
        <span
          className="avatar"
          style={{ backgroundColor: member.clientData.color }}
        />
        <>
          <div>{member.clientData.username}</div>
          <div>{text}</div>
        </>
      </li>
    );
  };

  return <ul>{messages.map((message) => showMessage(message))}</ul>;
}
