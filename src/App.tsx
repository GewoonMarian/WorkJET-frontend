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
import Account from "./pages/Account";
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

      <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
              <h5 className="h1 text-white">FB.</h5>
              <p className="small text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p className="small text-muted mb-0">
                &copy; Copyrights. All rights reserved.{" "}
                <a className="text-primary" href="#">
                  Bootstrapious.com
                </a>
              </p>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Quick links</h5>
              <ul className="list-unstyled text-muted">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Get started</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Quick links</h5>
              <ul className="list-unstyled text-muted">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Get started</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="text-white mb-3">Newsletter</h5>
              <p className="small text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <form action="#">
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-primary"
                    id="button-addon2"
                    type="button"
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
