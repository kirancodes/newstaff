import React from "react";
import Base from "../Base/Base";
import contactus from "../../assets/contactus.jpg";
import "./style/contact.css";
import { HiMail } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillPhone } from "react-icons/ai";

const Contact = () => {
  return (
    <Base>
      <div className="contacts">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img alt="contact" src={contactus} className="img-fluid" />
            </div>
            <div className="col-md-6 m-md-auto p-md-4">
              <h2>Get In Touch With Us</h2>
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
      <div class="row infos contacts">
        <div class="col-md-6 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1500">
          <h6>OVERSEAS</h6>
          <p class="mb-0">Amor Business Solutions INC</p>
          <p>PO Box # 17 <br></br>Woodworth<br></br> WI 53194 USA</p>
          <a href="tel:+1(262)3089894">+1 (262) 308 9894</a>
        </div>
        <div class="col-md-6 aos-init aos-animate" data-aos="fade-left" data-aos-duration="1500">
          <h6>DOMESTIC</h6>
          <p class="mb-0">Amor Business Solutions LLP</p>
          <p>1st Floor, C K Tower, <br></br> Opp. Sreekrishnapuram Bus Stand,<br></br>Sreekrishnapuram, Palakkad,<br></br> Kerala,India
            679 513</p>
          <a href="tel:+919946666230">+91 994 666 6230</a> <br></br>
          <a href="tel:+918921159464">+91 892 115 9464</a>
        </div>
      </div>
      <div className="container social-wrap">
        <ul>
          <li>
            <a href="tel:+919946666230" target="blank">
              <AiFillPhone />
            </a>
          </li>
          <li>
            <a href="mailto:amorbusinesssolution@gmail.com" target="blank">
              <HiMail />
            </a>
          </li>
          <li>
            <a href="https://wa.me/+919946666230" target="blank">
              <IoLogoWhatsapp />
            </a>
          </li>
          {/* <li><a href="https://www.facebook.com/Amor-Business-Soltions-100704915742891/" target="blank"><AiFillFacebook /></a></li>
                    <li><a href="https://www.instagram.com/amorbusinesssolutions/" target="blank"><AiFillInstagram /></a></li> */}
        </ul>
      </div>
    </Base>
  );
};

export default Contact;
