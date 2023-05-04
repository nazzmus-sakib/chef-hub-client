import React from "react";
import contactImg from "../../assets/contact.svg";
const Contact = () => {
  return (
    <div id="contact">
      <h2 className="text-4xl font-bold text-center mt-20">Contact With US</h2>
      <p className="text-center text-gray-500 mb-14 mt-2">
        For any query You can direct contact with us via following steps
      </p>
      <div className="flex container gap-10">
        <img src={contactImg} alt="" className="w-1/2" />
        <div className="w-1/2">
          <div className="card flex-shrink-0 w-full ">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  cols="30"
                  rows="10"
                  className="resize-none input input-bordered h-48"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-control mt-6 ">
                <button className="btn btn-success w-1/3 ">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
