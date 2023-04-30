import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../page/Register/index";
import { Errands } from "../page/Errands/index";
import Login from "../page/Login/index";
import WelcomeLayout from "../config/layout/WelcomeLayout";
import Welcome from "../page/Welcome/index";

function AppRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeLayout component={Welcome} />} />
        <Route path="/login" element={<Login />} />
        Login <Route path="/register" element={<Register />} />
        <Route path="/errands" element={<Errands />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
