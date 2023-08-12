import React from "react";
import Base from "../Base/Base";
import "./style/quote.css"

const Quote = () => {
    return (
        <Base>
            <div className="quote-wrapper">
                <div className="container">
                    <h1 className="text-center">Request A Quote</h1>
                    {/* <p className="text-center">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney</p> */}
                    <div className="col-md-6 m-auto">
                        <form>
                            <input type="text" className="form-control" placeholder="Name" />
                            <input type="text" className="form-control" placeholder="Phone Number" />
                            <input type="text" className="form-control" placeholder="Email" />
                            <select className="form-select" aria-label="Default select example">
                                <option selected>I'm Intrested In </option>
                                <option value="1">Medical Transcription</option>
                                <option value="2">Medical Scribing</option>
                                <option value="3">Medical coding</option>
                                <option value="3">Software Development</option>
                            </select>
                            <input type="text" className="form-control" placeholder="Organisation" />
                            <textarea name="Text1" className="form-control" cols="30" rows="2" placeholder="Message" ></textarea>
                            <button>Send Quote</button>
                        </form>
                    </div>
                </div>
            </div>
        </Base>
    )
}

export default Quote;