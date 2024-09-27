import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import TopAvaliados from "./pages/TopAvaliados";
import Infantil from "./pages/Infantil";
import Masculino from "./pages/Masculino";
import Feminino from "./pages/Feminino";
import Productoverviews from "./pages/Overviews";
import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";
import AdminCadastro from "./components/Admin/AdminCadastro/AdminCadastro";
import AdminConfig from "./components/Admin/AdminConfig/AdminConfig";
import AdminRelatorios from "./components/Admin/AdminRelatórios/AdminRelatórios";
import AdminUsers from "./components/Admin/AdminUsers/AdminUsers";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        {/* Users routes */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/topavaliados" element={<TopAvaliados />}></Route>
          <Route path="/infantil" element={<Infantil />}></Route>
          <Route path="/masculino" element={<Masculino />}></Route>
          <Route path="/feminino" element={<Feminino />}></Route>
          <Route path="/produto" element={<Productoverviews />}></Route>
        </Routes>
        {/* Admin routes */}
        <Routes>
          <Route path="/admin" element={<AdminDashboard />}></Route>
          <Route path="/admin/cadastro" element={<AdminCadastro />}></Route>
          <Route path="/admin/config" element={<AdminConfig />}></Route>
          <Route path="/admin/relatorios" element={<AdminRelatorios />}></Route>
          <Route path="/admin/users" element={<AdminUsers />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
