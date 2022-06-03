import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";

import UsersPage from "./pages/UserPage";
import HomePage from "./pages/HomePage";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import RecruitersPage from "./pages/RecruitersPage";
import Account from "./pages/Account";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/recruiters" element={<RecruitersPage />} />
        <Route path="/account" element={<Account />} />

        <Route path="/login" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
