import React from "react";
import serviceImg from "../../assets/service.svg";
const Services = () => {
  return (
    <div id="services">
      <h2 className="text-4xl font-bold text-center mt-20">Our Services</h2>
      <p className="text-center text-gray-500 mb-14 mt-2">
        Chef Hub: Elevate Your Dining Experience with Our Chef Services
      </p>
      <div className="flex  items-center container ">
        <div className="w-1/2">
          <p className="mb-4 text-gray-500">
            Welcome to Chef Hub, where we bring the ultimate culinary experience
            to your doorstep. Our chef services are designed to elevate your
            dining experience and leave you with a lasting impression.
          </p>
          <p className="mb-4 text-gray-500">
            Our team of experienced chefs are skilled in a wide range of
            culinary techniques and cuisines, allowing us to tailor our services
            to your preferences and dietary needs. From intimate dinners to
            large events, we provide custom menus that are tailored to your
            taste and style.
          </p>
          <p className="mb-4 text-gray-500">
            Our chef services include menu planning, grocery shopping, meal
            preparation, plating and presentation, and clean-up. We take care of
            everything, allowing you to sit back, relax, and enjoy a delicious
            meal in the comfort of your own home.
          </p>
          <p className="text-gray-500">
            At Chef Hub, we believe that food is not just about sustenance, but
            a form of art that should be savored and enjoyed. Whether it's a
            romantic dinner for two or a family gathering, our chef services
            will create an unforgettable dining experience that you and your
            guests will remember for years to come.
          </p>
        </div>

        <img src={serviceImg} alt="" className="w-1/2" />
      </div>
    </div>
  );
};

export default Services;
