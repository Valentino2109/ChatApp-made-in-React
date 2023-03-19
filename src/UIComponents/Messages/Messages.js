import Input from "../Input/Input";
import MainLogin from "../../HomeComponents/MainLogIn/MainLogIn";

// CSS import
import "./Messages.css";

export default function Messages({ nickname }) {
  return (
    <>
      <p className="text-message">{nickname}</p>
    </>
  );
}
