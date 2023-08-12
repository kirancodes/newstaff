import React from "react";
import Base from "../Base/Base";
import "./style/home.css";
import banner from "../../assets/banner.jpg";
import doc from "../../assets/doc.png";
import contact from "../../assets/annie-spratt-QckxruozjRg-unsplash.jpg";
import ServiceList from "./serviceList";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Base>
      <div>
        <div className="container">
          <div className="row banner-wrapper">
            <div className="col-md-6 img-div">
              <img className="img-fluid" src={banner} alt="banner" />
            </div>
            <div className="col-md-6 content-div">
              <h1>
                Providing The Best <br /> <span>Human Capital Solutions</span>{" "}
                All Over The Globe
              </h1>
              <p>
                Quality services on various aspects of human resources and
                letting the organization specialize in its prior development to
                urge future ideas.
              </p>
              <NavLink
                exact
                to="/request-quote"
                className=""
              >
                Apply now
              </NavLink>
              {/* <div className="users-list">
                                <img src={user} className="img-fluid" />
                                <p><span>200+ </span> Happy Doctor <br /> Worldwide.</p>
                            </div> */}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="aboutus-wrapper">
            <h1>
              We Make Our Services <br />
              <span>Extraterrestrial.</span>
            </h1>
            <div className="row">
              <div className="aboutus-content d-flex">
                <div className="col-md-3">
                  <img alt="doctor" className="" src={doc} />
                </div>
                <div className="col-md-7">
                  <p>
                    We all know innovations and challenges are the corner stone
                    of business that underlays the very existence of businesses.
                    The challenges encountered in business and leadership
                    translates into a problem-solving and target driven work
                    force. With evolving business needs, EasyStaff provides the
                    cutting-edge human capital to aid in business needs.
                  </p>
                  <NavLink exact to="/about">
                    Know More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ServiceList heading="Service we render" content="" />

        <div className="contacts">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src={contact} className="img-fluid" alt="contact" />
              </div>
              <div className="col-md-6 m-md-auto">
                <h2 className="headerContact">Connect With Us</h2>
                {/* <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in , making it over 2000 years old.</p> */}
                <form>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Email"
                  />
                  <div className="txtarea">
                    <textarea
                      name="Text1"
                      className="form-control"
                      cols="30"
                      rows="2"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <button className="btn">Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Home;
