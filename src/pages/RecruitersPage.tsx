import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RecruiterCard from "../components/RecruiterCard";
import { AppDispatch } from "../store";
import { fetchRecruiters } from "../store/recruiters/action";
import { selectRecruiters } from "../store/recruiters/selectors";
import { Recruiter } from "../types";

export default function RecruitersPage() {
  const dispatch: AppDispatch = useDispatch();
  const recruiters = useSelector(selectRecruiters);

  console.log("users", recruiters);

  useEffect(() => {
    dispatch(fetchRecruiters());
  }, []);

  return (
    <div>
      <div>
        <h1>Recruiters Page</h1>
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
                        <strong style={{ color: "#066594" }}>Job Title</strong>
                        <div style={{ color: "#730404" }}>
                          {recruiter.jobTitle}
                        </div>
                      </h2>
                    </div>
                    <div
                      className="d-flex flex-row"
                      style={{
                        width: "60rem",
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
                        isRecruting={recruiter.isRecruting ? false : true}
                        jobDescription={""}
                      />
                      {/* {recruiter.isRecruting ? "red" : "false"} */}
                      <div>{recruiter.jobDescription}</div>
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
