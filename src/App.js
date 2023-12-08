import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Gallary from "./pages/gallary";
import Contact from "./pages/contact";
import Login from "./pages/login/login";
import Home from "./pages/home";
// import PrivateLayout from './components/Layout/private-layout';
import PublicLayout from "./components/Layout/public-layout";

import "./App.css";

const App = () => {

  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>

      <BrowserRouter>
        <PublicLayout >
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/gallary" element={<Gallary />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </PublicLayout>

        {/* <PrivateLayout >
          <Routes>
            <Route path="/dashboard" element={<Login />} />
          </Routes>
        </PrivateLayout> */}
      </BrowserRouter>

    </>
  );
};

export default App;
