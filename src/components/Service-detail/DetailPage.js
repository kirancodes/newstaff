import React from "react";
import Base from "../Base/Base";
import "./style/detailpage.css";

const DetailPage = ({ heading, subheading, image, content, features }) => {
    return (
        <Base>
            <div className="detail-wrapper">
                <div className="container">
                    <h1>{heading}</h1>
                    <h4 className="text-gray">{subheading}</h4>
                    <img src={image} className="img-fluid" alt="medical transcription" />
                    {content}
                </div>
            </div>

            {/* <div className="key-features">
                <div className="container">
                    <h1>Our Features</h1>
                    <ul className="">
                        {features}
                    </ul>
                </div>
            </div> */}
        </Base>
    )
}

export default DetailPage;