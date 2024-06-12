import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import MainSection from "./components/MainSection/MainSection";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import ContactForm from "./components/ContactForm/ContactForm";
import Parallax from "./components/Parallax/Parallax";
import FAQ from "./components/FAQ/Faq";

function App() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <HeroSection />
      <Parallax />
      <MainSection />
      <About />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
