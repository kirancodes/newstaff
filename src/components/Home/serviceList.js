import React from "react";
import worker from "../../assets/worker.png";
import hr from "../../assets/hr-manager.png";
import { NavLink } from "react-router-dom"

const serviceList = (props) => {
    return (
        <div>
            <div className="services">
                <div className="container">
                    <h1>{props.heading}</h1>
                    <p className="abt-detail">{props.content}</p>
                </div>
                <div className="card-wrapper container">
                    <div className="row">

                        <div className="col-md-3">
                            <NavLink exact={true} activeClassName='is-active' to='/service/manpower' className="" >
                                <div className="card">
                                    <div className="card-body">
                                        <img alt="worker" src={worker} className="img-fluid" />
                                        <h5 className=" text-white">Manpower Supply</h5>
                                    </div>
                                </div>
                            </NavLink>
                        </div>


                        <div className="col-md-3">
                            <NavLink exact={true} activeClassName='is-active' to='/service/hrSolutions' className="" >
                                <div className="card">
                                    <div className="card-body">
                                        <img alt="hr" src={hr} className="img-fluid" />
                                        <h5 className=" text-white">HR Solutions</h5>
                                    </div>
                                </div>
                            </NavLink>
                        </div>

                        {/* <div className="col-md-3">
                            <NavLink exact={true} activeClassName='is-active' to='/service/medical-coding' className="" >
                                <div className="card">
                                    <div className="card-body">
                                        <img src={medicalcode} className="img-fluid" />
                                        <h5 className=" text-white">Medical Coding</h5>
                                    </div>
                                </div>
                            </NavLink>
                        </div>

                        <div className="col-md-3">
                            <NavLink exact={true} activeClassName='is-active' to='/service/web-development' className="" >
                                <div className="card">
                                    <div className="card-body">
                                        <img src={softDev} className="img-fluid" />
                                        <h5 className=" text-white">Software Development</h5>
                                    </div>
                                </div>
                            </NavLink>
                        </div> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default serviceList;