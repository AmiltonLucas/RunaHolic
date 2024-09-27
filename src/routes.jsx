import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import TopAvaliados from "./pages/TopAvaliados";
import Infantil from "./pages/Infantil";
import Masculino from "./pages/Masculino";
import Feminino from "./pages/Feminino";
import Productoverviews from "./pages/Overviews";
import CadastroPage from "./pages/Cadastro";
import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";

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
          <Route path="/produto" element={<Productoverviews />}></Route>
          <Route path="/cadastro" element={<CadastroPage />}></Route>
          <Route path="/admin" element={<AdminDashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
