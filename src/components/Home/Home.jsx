import "./home.css";
import React, { useEffect } from "react";
import { Welcome } from "./Welcome";
import { Hero } from "./Hero";
import { Highlight } from "./Highlight";
import { Testimonials } from "./Testimonials";
import { About } from "./About";
const Home = () => {
  useEffect(() => {
    scrollAnimation();
  }, []);
  return (
    <>
      <Welcome />
      <Hero />
      <Highlight />
      <Testimonials />
      <About />
    </>
  );
  function scrollAnimation() {
    const hiddenEl = document.querySelectorAll(".observe-hide");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("observe-show");
        }
      });
    });
    hiddenEl.forEach((el) => observer.observe(el));
  }
};

export { Home };
