import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Login, Chat, ProfileUpdate } from "./pages/page";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        navigate('/chat');
      } else {
        navigate("/");
      }
    })
  }, [])
  return (
    <>
      <ToastContainer theme="dark"/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<ProfileUpdate />} />
      </Routes>
    </>
  );
};

export default App;
