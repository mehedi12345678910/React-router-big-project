// import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { data, useLoaderData } from "react-router";
import PlantCard from "../Components/PlantCard";

const Home = () => {
//   useEffect(() => {
//     fetch("https://openapi.programming-hero.com/api/plants")
//     .then((res) =>res.json()
//     .then(data=>setPlants(data?.plants))
//     );
//   }, []);
//  console.log(plants)
const { plants}=useLoaderData()
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-12">
          {plants.map(plant => (
       <PlantCard key={plant.id} plant={plant}></PlantCard>
      ))}
      </div>
    
    </div>
  );
};
export default Home;
