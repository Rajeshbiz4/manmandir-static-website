import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import React from "react";
import NavBar from "./components/navbar";
import ContactDetailBar from "./components/contact-details-bar";
import Gallary from "./pages/gallary";
import Footer from "./components/footer";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import WhatsAppButton from "./components/whatsappButton";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <ContactDetailBar /> */}
        <NavBar />
        <WhatsAppButton />
        <div>
          {/* <Home /> */}

          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />} />
            <Route path="/gallary" element={<Gallary />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
