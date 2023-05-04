import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import ShowRecipies from "./ShowRecipies";

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
    <div className="container mt-20 ">
      <div className="card card-side bg-base-100 shadow-xl flex">
        <figure className="w-2/5">
          <img src={picture} alt="Movie" className="h-full" />
        </figure>
        <div className="card-body w-3/5">
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
        <div className="grid grid-cols-3 gap-5 mt-10 mb-5">
          {recipes.map((recipe) => (
            <ShowRecipies recipe={recipe}></ShowRecipies>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
