// CSS import
import "./Messages.css";

// takes two propertires --> messages, currentMember
export default function Messages({ messages, currentMember }) {
  const showMessage = (message) => {
    const { member, text } = message;

    // Is the current message sent by a current member
    const myMessage = member.id === currentMember.id;

    // Sets the right className
    const className = myMessage ? "main-member" : "other-member";
    return (
      <>
        <li className={className}>
          <span style={{ color: member.clientData.color }}>
            <div>{member.clientData.username}</div>
          </span>
          <div>{text}</div>
        </li>
      </>
    );
  };

  // Save messages
  return <ul>{messages.map((message) => showMessage(message))}</ul>;
}
