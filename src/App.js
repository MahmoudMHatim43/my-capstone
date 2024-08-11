import "./App.css";
import { Routes, Route } from "react-router-dom";
/*------------------------components------------------------*/
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./Footer/Footer";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Menu } from "./components/Menu/Menu";
import { Reserve } from "./components/Reserve/Reserve";
import { Order } from "./components/Order/Order";
import { Login } from "./components/Login/Login";
import React from "react";
/*----------------------------------------------------------*/
function App() {
  React.useEffect(() => {
    scrollAnimation();
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/reserve" element={<Reserve />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
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
export default App;
