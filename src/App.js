import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import "./index.css";
import AboutPage from "./components/AboutPage";
import WhyPage from "./components/why";
import TechnologiesPage from "./components/TechnologiesPage";
import Contact from "./components/contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
        <Home/>
        <AboutPage/>
        <WhyPage/>
        <TechnologiesPage/>
        <Contact/>
        <Footer/>
    </div>
  );
};

export default App;
