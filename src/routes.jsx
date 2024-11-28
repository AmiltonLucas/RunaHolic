import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import TopAvaliados from "./Pages/TopAvaliados";
import Masculino from "./Pages/Masculino";
import Feminino from "./Pages/Feminino";
import Produto from "./Pages/Produto";
import SobreNos from "./Pages/SobreNós";
import Eventos from "./Pages/Eventos";
import EventRegister from "./Pages/EventosRegister";
import Page404 from "./Error/Page404";
import UserPage from "./Pages/User";
import LojasPage from "./Pages/Lojas";
import LoginRegister from "./Pages/LoginRegister";
import PesquisaPage from "./Pages/PesquisaPage/Index";
import UserPessoalData from "./Components/User/UserPessoalData/UserPessoalData";
import UserAccountData from "./Components/User/UserAccountData/UserAccountData";
import UserSecurity from "./Components/User/UserSecurity/UserSecurity";
import UserCards from "./Components/User/UserCards/UserCards";
import UserLocation from "./Components/User/UserLocation/UserLocation";
import CheckoutPage from "./Pages/Checkout";
import TestPage from "./Pages/Test";
import AcessoriosPage from "./Pages/Acessorios";

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
          <Route path="/masculino" element={<Masculino />}></Route>
          <Route path="/feminino" element={<Feminino />}></Route>
          <Route path="/acessorios" element={<AcessoriosPage />}></Route>
          <Route path="/produto" element={<Produto />}></Route>
          <Route path="/fechar-pedido" element={<CheckoutPage />}></Route>
          <Route path="/eventos" element={<Eventos />}></Route>
          <Route path="/eventos/register" element={<EventRegister />}></Route>
          <Route path="/sobrenos" element={<SobreNos />}></Route>
          <Route path="/lojas" element={<LojasPage />}></Route>
          <Route path="/testetesteteste" element={<TestPage />}></Route>
          <Route path="*" element={<Page404 />}></Route>
          {/* User config routes */}
          <Route path="/user" element={<UserPage />}></Route>
          <Route
            path="/user/pessoal-data"
            element={<UserPessoalData />}
          ></Route>
          <Route path="/user/conta-data" element={<UserAccountData />}></Route>
          <Route path="/user/seguranca" element={<UserSecurity />}></Route>
          <Route path="/user/cartoes" element={<UserCards />}></Route>
          <Route path="/user/localizacao" element={<UserLocation />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
