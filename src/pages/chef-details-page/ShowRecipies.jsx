import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import LazyLoad from "react-lazy-load";
import Rating from "react-rating";
import { toast } from "react-toastify";

const ShowRecipies = ({ recipe }) => {
  const [disable, setDisable] = useState(false);
  const { recipie_img, directions, rating, ingredients, name } = recipe;
  const handleFavourite = () => {
    toast("Added to Favourite List ✅");
    setDisable(true);
  };
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <LazyLoad>
          <img src={recipie_img} alt="Shoes" className="h-[250px]" />
        </LazyLoad>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        {ingredients.map((ingredient) => (
          <li className="list-[square] text-gray-500">{ingredient}</li>
        ))}
        <div className="mt-3">
          <p>
            <span className="font-bold">Cooking Method :</span>{" "}
            {directions.length > 250 ? directions.slice(0, 250) : directions}
            .....<sapn className="link link-warning">See more </sapn>
          </p>
        </div>
        <div className="card-actions flex justify-between mt-auto">
          <div className="flex  gap-2">
            <Rating
              className="text-lg"
              readonly
              placeholderRating={rating}
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-yellow-500"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            />
            <p>{rating}</p>
          </div>
          <div>
            <button onClick={handleFavourite} disabled={disable}>
              {disable ? (
                <FcLikePlaceholder className="text-2xl"></FcLikePlaceholder>
              ) : (
                <FcLike className="text-2xl"></FcLike>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowRecipies;
