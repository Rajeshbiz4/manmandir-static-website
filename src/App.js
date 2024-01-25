import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Gallary from "./pages/gallary";
import Contact from "./pages/contact";
import Home from "./pages/home";
import PublicLayout from "./components/Layout/public-layout";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <PublicLayout>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/gallary" element={<Gallary />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PublicLayout>
      </BrowserRouter>
    </>
  );
};

export default App;
