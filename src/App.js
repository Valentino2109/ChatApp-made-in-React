import ChatUI from "./UIComponents/ChatUI";
import HomeComponent from "./HomeComponents/HomeComponents";

// CSS import
import "./App.css";

// React router
import { Route, Routes } from "react-router-dom";

// Main function for displaying the Chat
function App() {
  return (
    <div className="intro hide-intro">
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/chatui" element={<ChatUI />} />
      </Routes>
    </div>
  );
}

export default App;
// "homepage": "https://Valentino2109.github.io/ChatApp-in-React", dodati prilikom npm run build ispod private
