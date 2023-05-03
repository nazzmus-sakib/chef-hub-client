import React, { useContext } from "react";
import signUp from "../../assets/animation data/signUp.json";
import Lottie from "lottie-react";
import { Link, Navigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";
const Register = () => {
  const { createUser, updateInfo } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.url.value;
    createUser(email, password)
      .then((res) => {
        updateInfo(res.user, name, photoUrl)
          .then()
          .catch((err) => console.log(err));
        toast("Registation successful✅");
        <Navigate to="/"></Navigate>;
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left lg:w-[500px] ml-20">
            <Lottie animationData={signUp}></Lottie>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="photo URL"
                    className="input input-bordered"
                    name="url"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
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
                    Already have an account?
                    <Link to="/login" className="link link-primary ml-2">
                      Login
                    </Link>
                  </p>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" type="submit">
                    Register
                  </button>
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
    </div>
  );
};

export default Register;
