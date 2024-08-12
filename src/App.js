import "./App.css";
import React, { useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Routes, Route, useLocation } from "react-router-dom";
/*------------------------components------------------------*/
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./Footer/Footer";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Menu } from "./components/Menu/Menu";
import { Reserve } from "./components/Reserve/Reserve";
import { Order } from "./components/Order/Order";
import { Login } from "./components/Login/Login";
/*----------------------------------------------------------*/
function App() {
  const location = useLocation();
  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);
  return (
    <>
      <Navbar />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
          <Routes location={location}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/reserve" element={<Reserve />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </>
  );
}
function scrollToTop() {
  window.scrollTo(0, 0);
}
export default App;
