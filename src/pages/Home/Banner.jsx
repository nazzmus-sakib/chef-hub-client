import React from "react";
import banner from "../../assets/banner/cool-background.svg";
import chef from "../../assets/animation data/chef.json";
import Lottie from "lottie-react";
const Banner = () => {
  return (
    <div
      className="hero min-h-[80vh] bg-fixed"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className=" text-neutral-content px-5 py-7 lg:px-[200px] lg:flex items-center lg:gap-10">
        <div className="lg:w-3/5">
          <h1 className="mb-5 text-5xl font-bold">Wellcome To Chef Hub</h1>
          <p className="mb-5 text-justify">
            Welcome to Chef Hub, where the art of cooking meets the joy of
            dining. Experience our chef's signature dishes, inspired by the
            freshest ingredients and a passion for flavor.Indulge in the flavors
            of Thai Food at Chef Hub. Our chef creates innovative dishes that
            blend traditional techniques with modern twists, resulting in a
            truly unforgettable dining experience.Savor the taste of Chef Hub,
            where every dish is a work of art. Our chef uses only the finest
            ingredients to create culinary masterpieces that are as beautiful as
            they are delicious.
          </p>
          <button className="btn btn-success">Explore More</button>
        </div>
        <div className="lg:w-2/5">
          <Lottie animationData={chef}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Banner;
