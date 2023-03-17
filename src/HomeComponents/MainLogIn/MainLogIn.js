import { useNavigate } from "react-router-dom";

// CSS import
import "./MainLogIn.css";

export default function MainLogin() {
  // useState for getting nickname from the input

  // Clicking on the button sends you to ChatUI
  const navigate = useNavigate();
  const handleEnterChat = () => {
    navigate("/chatui");
  };

  // Log In with Enter key
  const handleEnter = (event) => {
    if (event.key === "Enter") {
      handleEnterChat();
    }
  };
  return (
    <div id="container">
      <h2>Login</h2>
      <div id="inputbox">
        <input type="text" onKeyUp={handleEnter} required />
        <label>Enter your name</label>
      </div>
      <button onClick={handleEnterChat}>Log in</button>
      <h6>Created by Valentino</h6>
    </div>
  );
}
