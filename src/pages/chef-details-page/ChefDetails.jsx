import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import ShowRecipies from "./ShowRecipies";
import LazyLoad from "react-lazy-load";
const ChefDetails = () => {
  const chefData = useLoaderData();
  const {
    picture,
    name,
    description,
    years_of_experience,
    num_recipes,
    likes,
    recipes,
  } = chefData;
  return (
    <div className="lg:px-[200px] px-5 mt-20 ">
      <div className="card lg:card-side bg-base-100 shadow-xl lg:flex">
        <figure className="lg:w-2/5">
          <LazyLoad>
            <img src={picture} alt="Movie" className="h-full" />
          </LazyLoad>
        </figure>
        <div className="card-body lg:w-3/5">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="font-bold">
            <p>Experience of {years_of_experience} years</p>
            <p>Number of recipie {num_recipes}</p>
          </div>
          <div className="card-actions justify-end">
            <FaThumbsUp className="text-2xl text-blue-500"></FaThumbsUp>
            <span>{likes}</span>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-3xl font-bold ">
          Recipies of Chef <span className="text-3xl text-black">{name}</span>
        </h2>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-10 mb-5">
          {recipes.map((recipe, idx) => (
            <ShowRecipies recipe={recipe} key={idx}></ShowRecipies>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
