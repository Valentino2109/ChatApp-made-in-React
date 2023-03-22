import { useNavigate } from "react-router-dom";
import { useState } from "react";

// CSS import
import "./MainLogIn.css";

export default function MainLogin() {
  // useState for getting nickname from the input
  const [nickname, setNickname] = useState("");
  const handleNickname = (e) => {
    setNickname(e.target.value);
  };

  // Clicking on the button sends you to ChatUI && if input is empty, send alert
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (nickname.trim() === "") {
      return alert("Please enter your name!");
    }
    return navigate("/chatui", {
      state: {
        nickname,
      },
    });
  };

  // Log In with Enter key
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div id="container">
      <h2>Login</h2>
      <div id="inputbox">
        <input
          className="login-input"
          type="text"
          onChange={handleNickname}
          onKeyUp={handleEnter}
          value={nickname}
          required
        />
        <label>Enter your name</label>
      </div>
      <button className="login-button" onClick={handleSubmit}>
        Log in
      </button>
      <h6>Created by Valentino</h6>
    </div>
  );
}
