import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RecruiterCard from "../components/RecruiterCard";
import { AppDispatch } from "../store";
import { fetchRecruiters } from "../store/recruiters/action";
import { selectRecruiters } from "../store/recruiters/selectors";
import { Recruiter } from "../types";
import { selectToken } from "../store/user/selectors";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function RecruitersPage() {
  const dispatch: AppDispatch = useDispatch();
  const recruiters = useSelector(selectRecruiters);

  const token = useSelector(selectToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (token === null) {
      navigate("/login");
    }
  }, [token, navigate]);

  useEffect(() => {
    dispatch(fetchRecruiters());
  }, [dispatch]);

  return (
    <div>
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
                  <article className="postcard dark blue">
                    <div
                      className="container d-flex flex-row"
                      style={{ paddingTop: "2%" }}
                    >
                      <div className="col-sm-6">
                        <div>
                          <h2>
                            <div style={{ color: "#22577A" }}>
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
                            borderRadius: "7%",
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
                            <div>
                              <div>{recruiter.jobDescription}</div>
                              <div>
                                {recruiter.isRecruting ? (
                                  <p>
                                    <Button
                                      variant="success"
                                      data-toggle="collapse"
                                      href="/apply"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="collapseExample"
                                    >
                                      Apply
                                    </Button>
                                  </p>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })
            : "Loading"}
        </div>
      </div>
    </div>
  );
}
