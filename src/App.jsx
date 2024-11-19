import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


import LoginPage from "./components/Log";
import Home from "./components/Home";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./components/profile";
import Prof from "./components/Prof";
import { useState } from "react";
import { auth } from "./components/firebase";
import Regist from "./components/Regist";
import Living from "./components/Living";
import Bedroom from "./components/Bedroom";
import Dining from "./components/Dining";
import Lighting from "./components/Lighting";
import ShoppingBag from "./components/ShoppingBag";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/Home" /> : <Home />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Regist />} />
          <Route path="/profile" element={<Prof />} />
          <Route path="/home" element={<Home />} />
          <Route path="/living" element={<Living />} />
          <Route path="/bedroom" element={<Bedroom />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/lighting" element={<Lighting />} />
          <Route path="/cart" element={<ShoppingBag />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
