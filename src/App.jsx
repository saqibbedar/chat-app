import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import { Login, Chat, ProfileUpdate } from "./pages/page";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<ProfileUpdate />} />
      </Routes>
    </>
  );
};

export default App;
