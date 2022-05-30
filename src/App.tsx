import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import UsersPage from "./pages/UserPage";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/users" element={<UsersPage />} />
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        */}
      </Routes>
    </div>
  );
}

export default App;
