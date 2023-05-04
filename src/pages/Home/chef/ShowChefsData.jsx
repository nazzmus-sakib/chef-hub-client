import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
const ShowChefsData = ({ chefData }) => {
  const { id, picture, name, years_of_experience, num_recipes, likes } =
    chefData;

  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="Shoes" className="h-[250px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Experience of {years_of_experience} years</p>
        <p>Number of recipie {num_recipes}</p>

        <div className="card-actions justify-end items-center">
          <p className="flex items-center gap-2">
            <FaThumbsUp className="text-2xl text-blue-500"></FaThumbsUp>
            <span>{likes}</span>
          </p>
          <Link to={`/chef-recipies/${id}`}>
            {" "}
            <button className="btn btn-sm btn-success ">View Recipes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowChefsData;
