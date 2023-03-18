import Input from "../Input/Input";

// CSS import
import "./Messages.css";

export default function Messages({ message }) {
  return (
    <>
      <p className="text-message">{message}</p>
    </>
  );
}
