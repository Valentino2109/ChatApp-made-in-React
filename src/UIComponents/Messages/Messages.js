// CSS import
import "./Messages.css";

export default function Messages({ nickname }) {
  return (
    <>
      <p className="text-message">{nickname}</p>
    </>
  );
}
