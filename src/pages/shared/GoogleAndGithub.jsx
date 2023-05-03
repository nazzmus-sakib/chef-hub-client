import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const GoogleAndGithub = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        toast("Login successful✅");
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then((res) => {
        toast("Login successful✅");
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      <button
        className="btn btn-outline btn-success w-full my-4"
        onClick={handleGoogleLogin}
      >
        <span>
          <FcGoogle className="text-2xl mr-2"></FcGoogle>
        </span>
        Continue With Google
      </button>
      <button
        className="btn btn-outline btn-success w-full "
        onClick={handleGithubLogin}
      >
        <span>
          <FaGithub className="text-2xl mr-2 text-black"></FaGithub>
        </span>
        Continue With Github
      </button>
    </div>
  );
};

export default GoogleAndGithub;
