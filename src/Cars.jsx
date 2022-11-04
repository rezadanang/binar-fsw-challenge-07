import React from "react";
import './App.css';
import FilterCars from './Components/FilterCars';
import Footer from "./Components/Footer";
import HeroFilter from "./Components/HeroFilter";
import Navigation from "./Components/Navigation";

function Cars() {
  return (
    <>
    <Navigation />
    <HeroFilter />
    <FilterCars />
    <Footer />
    </>
  );
}

export default Cars;
