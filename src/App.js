import ChatUI from "./UIComponents/ChatUI";
import HomeComponent from "./HomeComponents/HomeComponents";
import React from "react";
// React router
import { Route, Routes } from "react-router-dom";

// CSS import
import "./App.css";

// Main function for displaying the Chat
export default function App() {
  return (
    <div className="intro">
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/chatui" element={<ChatUI />} />
      </Routes>
    </div>
  );
}
