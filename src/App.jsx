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
import { useState } from "react";
import { auth } from "./components/firebase";
import Regist from "./components/Regist";

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
            element={user ? <Navigate to="/profile" /> : <Home />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Regist />} />
          <Route path="/profile" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
