import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RecruiterCard from "../components/RecruiterCard";
import { AppDispatch } from "../store";
import { fetchRecruiters } from "../store/recruiters/action";
import { selectRecruiters } from "../store/recruiters/selectors";
import { Recruiter } from "../types";
import SearchForm from "../components/SearchBar";
import ApplyForm from "../components/ApplyForm";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

export default function RecruitersPage() {
  const dispatch: AppDispatch = useDispatch();
  const recruiters = useSelector(selectRecruiters);

  useEffect(() => {
    dispatch(fetchRecruiters());
  }, [dispatch]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        {recruiters
          ? recruiters.map((recruiter: Recruiter) => {
              return (
                <div
                  className="container d-flex flex-row"
                  style={{ paddingTop: "2%" }}
                >
                  <div className="col-sm-6">
                    <div>
                      <h2>
                        <div style={{ color: "#730404" }}>
                          {recruiter.jobTitle}
                        </div>
                      </h2>
                    </div>
                    <div
                      className="d-flex flex-row"
                      style={{
                        width: "60rem",
                        height: "20rem",
                        backgroundColor: "#212529",
                        boxShadow: "5px 40px 60px #26ff04",
                        color: "#52be67",
                      }}
                    >
                      <RecruiterCard
                        jobTitle={recruiter.jobTitle}
                        name={recruiter.name}
                        email={recruiter.email}
                        location={recruiter.location}
                        imageUrl={recruiter.imageUrl}
                        isRecruting={recruiter.isRecruting}
                        jobDescription={""}
                      />

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {recruiter.jobDescription}

                        <a href="/apply">Apply</a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : "Loading"}
      </div>
    </div>
  );
}
