import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../page/Register/index";
import { Errands } from "../page/Errands/index";
import Login from "../page/Login/index";

function AppRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        Login <Route path="/register" element={<Register />} />
        <Route path="/errands" element={<Errands />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
