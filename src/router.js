import React from "react";
import { Route, Routes } from 'react-router-dom';
import About from "./components/About/About";
import Contact from "./components/Contact/contact";
import Home from "./components/Home/home";
import Policy from "./components/Leagal/policy";
import Terms from "./components/Leagal/terms";
import Quote from "./components/Quote/auote";
import Development from "./components/Service-detail/services/development";
import MeadicalCoding from "./components/Service-detail/services/medical-coding";
import MeadicalTranscription from "./components/Service-detail/services/manpower";
import Scribing from "./components/Service-detail/services/scribing";
import Services from "./components/Services/Services";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" exact element={<About />} />
      <Route path="/services" exact element={<Services />} />
      <Route path="/service/manpower" exact element={<MeadicalTranscription />} />
      <Route path="/service/hrSolutions" exact element={<MeadicalCoding />} />
      <Route path="/service/medical-scribing" exact element={<Scribing />} />
      <Route path="/service/web-development" exact element={<Development />} />
      <Route path="/contact-us" exact element={<Contact />} />
      <Route path="/request-quote" exact element={<Quote />} />
      <Route path="/privacy-policy" exact element={<Policy />} />
      <Route path="/terms-condition" exact element={<Terms />} />
    </Routes>
  );
};

export default Router;
