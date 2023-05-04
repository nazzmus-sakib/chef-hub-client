import React, { useEffect, useState } from "react";
import ShowChefsData from "./ShowChefsData";

const ChefsData = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/chefs-data")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  });
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mt-20">Our chefs</h2>
      <p className="text-center text-gray-500 mb-20 mt-2">
        Get access to thousands of recipes from famous chefs.
      </p>
      <div className="grid lg:grid-cols-3 grid-cols-1 px-5 lg:px-[200px] gap-10">
        {chefs.map((chef) => (
          <ShowChefsData chefData={chef}></ShowChefsData>
        ))}
      </div>
    </div>
  );
};

export default ChefsData;
