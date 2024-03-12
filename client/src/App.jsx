import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Leaderboards from "./pages/Leaderboards";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Rules from "./pages/Rules";
import SignIn from "./pages/SignIn";
const App = () => {
  return (
    <BrowserRouter>
      {/* Header */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leaderboards" element={<Leaderboards />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
