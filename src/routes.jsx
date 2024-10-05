import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import TopAvaliados from "./pages/TopAvaliados";
import Infantil from "./pages/Infantil";
import Masculino from "./pages/Masculino";
import Feminino from "./pages/Feminino";
import Produto from "./pages/Produto";
import SobreNos from "./pages/SobreNós";
import Eventos from "./pages/Eventos";
import EventRegister from "./pages/EventosRegister";
import Page404 from "./pages/Page404";
import AdminPage from "./pages/Admin";
import AdminCadastro from "./components/Admin/AdminCadastro/AdminCadastro";
import AdminConfig from "./components/Admin/AdminConfig/AdminConfig";
import AdminRelatorios from "./components/Admin/AdminRelatórios/AdminRelatórios";
import AdminUsers from "./components/Admin/AdminUsers/AdminUsers";
import AdminEvents from "./components/Admin/AdminEvents/AdminEvents";
import LojasPage from "./pages/Lojas";

function AppRoutes() {
  return (
    <>
      {/* Configurações de rotas apenas para superficial, algumas coisas será mudado para hooks*/}
      <BrowserRouter>
        <Routes>
          {/* Users routes */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/topavaliados" element={<TopAvaliados />}></Route>
          <Route path="/infantil" element={<Infantil />}></Route>
          <Route path="/masculino" element={<Masculino />}></Route>
          <Route path="/feminino" element={<Feminino />}></Route>
          <Route path="/produto" element={<Produto />}></Route>
          <Route path="/eventos" element={<Eventos />}></Route>
          <Route path="/eventos/register" element={<EventRegister />}></Route>
          <Route path="/sobrenos" element={<SobreNos />}></Route>
          <Route path="/lojas" element={<LojasPage />}></Route>
          <Route path="*" element={<Page404 />}></Route>
          {/* Admin routes */}
          <Route path="/admin" element={<AdminPage />}></Route>
          <Route
            path="/admin/cadastro-produtos"
            element={<AdminCadastro />}
          ></Route>
          <Route
            path="/admin/cadastro-eventos"
            element={<AdminEvents />}
          ></Route>
          <Route path="/admin/config" element={<AdminConfig />}></Route>
          <Route path="/admin/relatorios" element={<AdminRelatorios />}></Route>
          <Route path="/admin/users" element={<AdminUsers />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
