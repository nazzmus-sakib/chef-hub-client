import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import signIn from "../../assets/animation data/signIn.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";
import GoogleAndGithub from "../shared/GoogleAndGithub";
const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    if (!email || !password) {
      setError("Please fill-up all data");
      return;
    }

    loginUser(email, password)
      .then((res) => {
        toast("Login successful✅");
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left lg:ml-24 mt-5">
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
              <p className="text-red-600 mt-2">{error}</p>
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
            <GoogleAndGithub></GoogleAndGithub>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
