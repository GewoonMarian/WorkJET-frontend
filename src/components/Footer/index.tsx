import React from "react";
import "./style.css";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <div>
      <div className="row px-0">
        <div className="col">
          <div className="card py-5 border-0 card-0">
            <div className="card-body ">
              <div className="form-row"></div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="card border-0">
          <div className="card-body px-5">
            <div className="row  justify-content-around mb-0 pt-5 ">
              <div className="col-xl-3 col-md-6 col-sm-6 col-12   my-auto">
                <ul className="list-unstyled mt-md-3 mt-5">
                  <li>
                    {" "}
                    <p className="mb-4">Conact us about sponsorship </p>
                  </li>
                  <li>
                    {" "}
                    <div className="card card-1 border-0">
                      {" "}
                      <div className="card-body p-0 pl-3">
                        <h6 className="mb-3">
                          <b>Ankita Mehra</b>
                        </h6>{" "}
                        <small>Ankita@gmail.com</small>
                        <br /> <small>991094697</small>{" "}
                      </div>
                    </div>{" "}
                  </li>
                </ul>{" "}
              </div>
              <div className="col-xl-3 col-md-6 col-sm-6 col-12   my-auto">
                <ul className="list-unstyled mt-md-3 mt-5">
                  <li>
                    {" "}
                    <p className="mb-4">Quries about registration contact</p>
                  </li>
                  <li>
                    {" "}
                    <div className="card card-1 border-0">
                      {" "}
                      <div className="card-body p-0 pl-3">
                        <h6 className="mb-3">
                          <b>Mahesh Pal</b>
                        </h6>{" "}
                        <small>Mahesh@gmail.com</small>
                        <br /> <small>801094697</small>{" "}
                      </div>
                    </div>{" "}
                  </li>
                </ul>{" "}
              </div>

              <div className="col-xl-auto col-md-6 col-sm-6 col-12   my-auto">
                <ul className="list-unstyled mt-md-3 mt-5">
                  <li>
                    {" "}
                    <p className="mb-4">For technical issue contact</p>
                  </li>
                  <li>
                    {" "}
                    <div className="card card-1 border-0">
                      {" "}
                      <div className="card-body p-0 pl-3">
                        <h6 className="mb-3">
                          <b>Kunal Sinha</b>
                        </h6>{" "}
                        <small>Kunal@gmail.com</small>
                        <br /> <small>771094697</small>{" "}
                      </div>
                    </div>{" "}
                  </li>
                </ul>{" "}
              </div>
            </div>
            <div className="row justify-content-around mb-0 py-5 ">
              <div className="col-xl-auto col-md-6 col-sm-6 co-12  pt-4">
                <ul className="list-unstyled">
                  <li className="mt-md-0 mt-4">We are social</li>
                  <li>
                    <a href="#" className="fa fa-facebook">
                      <BsFacebook />
                    </a>
                    <a href="#" className="fa fa-twitter">
                      <BsTwitter />
                    </a>
                    <a href="#" className="fa fa-instagram">
                      <BsInstagram />
                    </a>
                    <a href="#" className="fa fa-linkedin">
                      <BsLinkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center px-3 py-3 pt-5">
          <div className="col text-center"></div>
        </div>
      </footer>
      <hr className="colored" />
    </div>
  );
}
