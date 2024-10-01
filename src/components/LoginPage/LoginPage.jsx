// importações necessárias
import React from "react";
import Cover_Image from "../../assets/women/women.png";
import Google from "../../assets/google.png";

const LoginPage = () => {
  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[20%] left-[10%] flex flex-col">
          {/* Informações de textos a esquerda */}
          <h1 className="text-4xl text-white font-bold my-4">
            Lorem ipsum, dolor sit amet consectetur
          </h1>
          <p className="text-xl text-white font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/* background */}
        <img
          src={Cover_Image}
          className="w-full h-full object-cover bg-primary"
        />
      </div>
        {/* Seção de login */}
      <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
        <h1 className="w-full max-w-[500px] mx-auto text-xl text-[#060606] font-semibold mr-auto">
          Interactive Brand
        </h1>

        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-semibold mb-2">Login</h3>
            <p className="text-base mb-2">
              Welcome Back! Please enter your details
            </p>
          </div>
            {/* Input de email */}
          <div className="w-full flex flex-col">
            <input
              type="email"
              placeholder="email"
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
            {/* Inpunt de senha */}
            <input
              type="password"
              placeholder="password"
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
          </div>
            {/* Btn lembre de mim */}
          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p className="text-sm">Lembre de mim por 30 dias</p>
            </div>
              {/* Esqueceu sua senha? */}
            <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
              Esqueceu sua senha ?
            </p>
          </div>
            {/* Btn de login */}
          <div className="w-full flex flex-col my-4">
            <button className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
              Entrar
            </button>
            {/* Btn de registrar */}
            <button className="w-full text-[#060606] my-2 font-semibold bg-white border border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
              Registra-se
            </button>
          </div>

          <div className="w-full flex items-center justify-center relative py-2">
            <div className="w-full h-[1px] bg-black"></div>
            <p className="text-lg absolute text-black-80 bg-[#f5f5f5]">or</p>
          </div>
          {/* Btn de logar com google */}
          <div className="w-full text-[#060606] my-2 font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
            <img src={Google} className="h-6 mr-2" />
            Entre com conta Google
          </div>
            {/* Não tem conta? */}
          <div className="w-full flex items-center justify-center">
            <p className="text-sm font-normal text-[#060606]">
              Não tem uma conta?{" "}
              <span className="font-semibold underline underline-offset-2">
                Entre de graça!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
