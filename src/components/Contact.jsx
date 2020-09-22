import React from "react";
import "../styles/contact.css";
const Contact = () => {
  const alerting = () => {
    alert("this feature is under development!");
  };
  return (
    <>
      <div className="m-0">
        <h1 className="text-center">Contact</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto border border-1 rounded p-md-5 p-4 m-0">
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  autoComplete="off"
                  autoFocus="on"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  autoComplete="off"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  autoComplete="off"
                  placeholder="Message"
                ></textarea>
                <div className="container d-flex justify-content-center align-items-center">
                  <button
                    type="button"
                    className="btn_send text-center position-relative"
                    onClick={alerting}
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
