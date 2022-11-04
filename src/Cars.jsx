import React from "react";
import './App.css';
import FilterCars from './Components/FilterCars';
import HeroFilter from "./Components/HeroFilter";
import Navigation from "./Components/Navigation";

function Cars() {
  return (
    <>
    <Navigation />
    <HeroFilter />
    <FilterCars />
    </>
  );
}

export default Cars;
