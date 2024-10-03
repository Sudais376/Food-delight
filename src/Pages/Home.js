import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../Components/Hero";
import FeaturedDishes from "../Components/FeaturedDishes";
import Reviews from "../Components/Reviews";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Food Delight - Home</title>
      </Helmet>
      <Hero />
      <FeaturedDishes />
      <Reviews />
    </>
  );
};

export default Home;
