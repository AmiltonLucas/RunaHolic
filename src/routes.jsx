import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import TopAvaliados from "./pages/TopAvaliados";
import Infantil from "./pages/Infantil";
import Masculino from "./pages/Masculino";
import Feminino from "./pages/Feminino";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/topavaliados" element={<TopAvaliados />}></Route>
          <Route path="/infantil" element={<Infantil />}></Route>
          <Route path="/masculino" element={<Masculino />}></Route>
          <Route path="/feminino" element={<Feminino />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
