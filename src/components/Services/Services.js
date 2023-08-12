import React, { useState } from "react";
import Base from "../Base/Base";
import ServiceList from "../Home/serviceList";
import "./style/services.css";

const Services = () => {
  const [counting, setCounting] = useState(150);

  let timesRun = counting;
  let interval = setInterval(function () {
    if (timesRun === 154) {
      clearInterval(interval);
    } else {
      setCounting((timesRun += 1));
    }
  }, 1600);

  return (
    <Base>
      <div className="serviceList">
        <ServiceList
          heading={
            <>
              Our <span>Concern</span> Is Your Satisfaction{" "}
            </>
          }
          content="Knowing  what our customers want most and what our company does best, we focus on where those two meet"
        />
        <h2 className="text-center text-capitalize">
          We have <span>{counting}+</span> happy Customers,{" "}
          <span> Still Counts. </span>
        </h2>
      </div>
    </Base>
  );
};

export default Services;
