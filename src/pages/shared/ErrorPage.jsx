import React from "react";
import errorImg from "../../assets/error-404.png";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img src={errorImg} alt="" className="h-48" />
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
            {/* <span className="sr-only">Error</span> {status || 404} */}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            Page Not Found
          </p>
          <Link to="/" className="btn btn-success">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
