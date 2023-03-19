import ChatUI from "./UIComponents/ChatUI";
import HomeComponent from "./HomeComponents/HomeComponents";
import React from "react";

// CSS import
import "./App.css";

// React router
import { Route, Routes } from "react-router-dom";

// Main function for displaying the Chat
function App() {
  return (
    <div className="intro">
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/chatui" element={<ChatUI />} />
      </Routes>
    </div>
  );
}

export default App;
