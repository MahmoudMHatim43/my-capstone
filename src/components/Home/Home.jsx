import "./home.css";
import React from "react";
import { Welcome } from "./Welcome";
import { Hero } from "./Hero";
import { Highlight } from "./Highlight";
import { Testimonials } from "./Testimonials";
import { About } from "./About";
const Home = () => {
  return (
    <>
      <Welcome />
      <Hero />
      <Highlight />
      <Testimonials />
      <About />
    </>
  );
};

export { Home };
