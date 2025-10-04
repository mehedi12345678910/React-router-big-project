// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";

import { useLoaderData } from "react-router";

const PlantDetails = () => {
  // const { id } = useParams();
  // console.log(id);
  // const [plant, setPlant] = useState({});
  // useEffect(() => {
  //   // fetch(`https://openapi.programming-hero.com/api/plant/${id}`).then((res) =>
  //   //   res.json().then((data) => setPlant(data?.plants))
  //   // );
  //   //// fetch dat using axios
  //   // axios(`https://openapi.programming-hero.com/api/plant/${id}`).then((data) =>
  //   //   setPlant(data.data?.plants)
  //   // );
  // }, [id]);
  //   console.log(plant);
  // // ata main a hocce upor er sob kaj

  const { data } = useLoaderData();
  console.log(data)

  const { name, description, category, image, price,id } = data.plants
  return (
    <div className="card bg-base-100 w-[80%] mx-auto shadow-sm my-4">
      <figure className="h-[500px] overflow-hidden ">
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Description: {description}</p>
        <p>Category: {category}</p>
        <div className="card-actions justify-end">
          <button
            to={`/plant-details/${id}`}
            className="btn btn-primary btn-sm"
          >
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
