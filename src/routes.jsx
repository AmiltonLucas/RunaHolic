import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import TopAvaliados from "./Pages/TopAvaliados";
import Infantil from "./Pages/Infantil";
import Masculino from "./Pages/Masculino";
import Feminino from "./Pages/Feminino";
import Produto from "./Pages/Produto";
import SobreNos from "./Pages/SobreNós";
import Eventos from "./Pages/Eventos";
import EventRegister from "./Pages/EventosRegister";
import Page404 from "./Pages/Page404";
import AdminPage from "./Pages/Admin";
import AdminCadastro from "./Components/Admin/AdminCadastro/AdminCadastro";
import AdminConfig from "./Components/Admin/AdminConfig/AdminConfig";
import AdminRelatorios from "./Components/Admin/AdminRelatórios/AdminRelatórios";
import AdminUsers from "./Components/Admin/AdminUsers/AdminUsers";
import AdminEvents from "./Components/Admin/AdminEvents/AdminEvents";
import LojasPage from "./Pages/Lojas";
import LoginRegister from "./Pages/LoginRegister";
import PesquisaPage from "./Pages/PesquisaPage/Index";

function AppRoutes() {
  return (
    <>
      {/* Configurações de rotas apenas para superficial, algumas coisas será mudado para hooks*/}
      <BrowserRouter>
        <Routes>
          {/* Users routes */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/criarconta" element={<LoginRegister />}></Route>
          <Route path="/pesquisa" element={<PesquisaPage />}></Route>
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
