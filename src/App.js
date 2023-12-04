import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import React from "react";
import Gallary from "./pages/gallary";
import Contact from "./pages/contact";
import Login from "./pages/login/login";
import Home from "./pages/home";
import PrivateLayout from './components/Layout/private-layout';
import PublicLayout from "./components/Layout/public-layout";

import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/gallary" element={<Gallary />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} /> 
          </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
