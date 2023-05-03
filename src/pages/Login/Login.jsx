import React, { useContext } from "react";
import Lottie from "lottie-react";
import signIn from "../../assets/animation data/signIn.json";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";

import { toast } from "react-toastify";
const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast("Login successful✅");
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left lg:ml-24">
          <Lottie animationData={signIn}></Lottie>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
              </div>
              <div>
                <p className="text-gray-500">
                  New to website?
                  <Link to="/register" className="link link-primary ml-2">
                    Register
                  </Link>
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div>
              <button className="btn btn-outline btn-success w-full my-4">
                <span>
                  <FcGoogle className="text-2xl mr-2"></FcGoogle>
                </span>
                Continue With Google
              </button>
              <button className="btn btn-outline btn-success w-full ">
                <span>
                  <FaGithub className="text-2xl mr-2 text-black"></FaGithub>
                </span>
                Continue With Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
