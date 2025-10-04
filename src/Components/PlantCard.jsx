import React from "react";
import { Link } from "react-router";

const PlantCard = ({ plant }) => {
  const { name, image, category, price, id } = plant;
  return (
<div className="card bg-base-100 shadow-sm mt-4">
  <figure className="h-[200px] overflow-hidden">
    <img src={image} alt={name} className="w-full h-full object-cover" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Category: {category}</p>
    <div className="flex justify-between items-center">
      <p className="font-semibold">Price: {price}$</p>
      <Link to={`/plant-details/${id}`} className="btn btn-primary btn-sm">
        View Details
      </Link>
    </div>
  </div>
</div>


  );
};

export default PlantCard;
