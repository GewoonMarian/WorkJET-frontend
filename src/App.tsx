import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";

import UsersPage from "./pages/UserPage";
import HomePage from "./pages/HomePage";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import RecruitersPage from "./pages/RecruitersPage";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/recruiters" element={<RecruitersPage />} />

        <Route path="/logIn" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        */}
      </Routes>
    </div>
  );
}

export default App;
