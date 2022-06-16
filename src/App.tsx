import "./App.css";

import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { getUserWithStoredToken } from "./store/user/actions";

import NavBar from "./components/NavBar";

import UsersPage from "./pages/UserPage";
import HomePage from "./pages/HomePage";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import RecruitersPage from "./pages/RecruitersPage";
import Account from "./pages/Account/Account";
import ApplyForm from "./components/ApplyForm";
import { AppDispatch } from "./store";

import SkillForm from "./components/EditProfile/SkillForm";
import ProfileForm from "./components/EditProfile/ProfileForm";
import CertificationForm from "./components/EditProfile/CertificationForm";
import ProjectForm from "./components/EditProfile/ProjectForm";
import MessageBox from "./components/message";

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);
  return (
    <div className="App">
      <NavBar />
      <MessageBox />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/recruiters" element={<RecruitersPage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/apply" element={<ApplyForm />} />

        <Route path="/login" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />

        <Route path="skillEdit" element={<SkillForm />} />
        <Route path="profileEdit" element={<ProfileForm />} />
        <Route path="projectEdit" element={<ProjectForm />} />
        <Route path="certificationEdit" element={<CertificationForm />} />
      </Routes>
    </div>
  );
}

export default App;
