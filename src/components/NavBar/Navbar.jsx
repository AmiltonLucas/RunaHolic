"use client";
// Imports
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  PopoverGroup,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import DarkMode from "./DarkMode";
import Logo from "../../assets/logo.png";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

// Informações dentro do dropdown
const navigation = {
  pages: [
    { name: "Masculino", href: "/masculino" },
    { name: "Feminino", href: "/feminino" },
    { name: "Acessórios", href: "/acessorios" },
    { name: "Eventos", href: "/eventos" },
    { name: "Sobre nós", href: "/sobrenos" },
    { name: "Lojas", href: "/lojas" },
  ],
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Menu Mobile */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white dark:bg-gray-900 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            {/* Login de conta mobile sem tá logado */}
            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a
                  href="/login"
                  className="-m-2 block p-2 font-medium text-gray-100"
                >
                  Entrar
                </a>
              </div>
              <div className="flow-root">
                <a
                  href="/criarconta"
                  className="-m-2 block p-2 font-medium text-gray-100"
                >
                  Crie uma conta
                </a>
              </div>
            </div>

            {/* Login de conta mobile logado */}
            <a href="/user">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    alt=""
                    src={user.imageUrl}
                    className="h-10 w-10 rounded-full"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-gray-600 dark:text-gray-100">
                    {user.name}
                  </div>
                  <div className="text-sm font-medium leading-none text-gray-400 dark:text-gray-300">
                    {user.email}
                  </div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
            </a>

            {/* Links */}

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a
                    href={page.href}
                    className="-m-2 block p-2 font-medium text-gray-900 dark:text-gray-100"
                  >
                    {page.name}
                  </a>
                </div>
              ))}
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-primary/80 dark:bg-secondary">
        {/* informação no topo da navbar */}
        <p className="flex h-10 items-center justify-center px-4 text-sm font-mediu text-white sm:px-6 lg:px-8">
          Frete gratís apartir de R$ 450
        </p>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md p-2 text-gray-50 lg:hidden "
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>

              {/* Logomarca */}
              <div className="ml-4 flex lg:ml-0">
                <a href="/">
                  <span className="sr-only">Your Company</span>
                  <img src={Logo} className="h-8 w-auto" />
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden md:ml-8 md:block md:self-stretch z-10">
                <div className="flex h-full space-x-8">
                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium hover:text-white text-gray-100 dark:hover:text-gray-400"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                {/* Login desktop quando deslogado*/}
                <div className="ml-auto flex items-center">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 p-2 gap-2">
                    <a
                      href="/login"
                      className="text-sm font-medium text-gray-200 hover:text-gray-300"
                    >
                      Entrar
                    </a>
                    <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                    <a
                      href="/criarconta"
                      className="text-sm font-medium text-gray-200 hover:text-gray-300"
                    >
                      Crie uma conta
                    </a>
                  </div>
                </div>

                {/* Login desktop quando logado*/}
                <a href="/user">
                  <div className="hidden items-center px-5 lg:flex">
                    <div className="flex-shrink-0">
                      <img
                        alt=""
                        src={user.imageUrl}
                        className="h-10 w-10 rounded-full"
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-200 dark:text-white">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-2 flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon aria-hidden="true" className="h-6 w-6" />
                    </button>
                  </div>
                </a>

                <div className="ml-5">
                  <DarkMode />
                </div>

                {/* Carrinho */}
                <div>
                  {/* Botão do Carrinho */}
                  <div className="ml-4 flow-root lg:ml-6">
                    <button
                      onClick={() => setIsOpen(true)}
                      className="group -m-2 flex items-center p-2"
                    >
                      <ShoppingBagIcon
                        aria-hidden="true"
                        className="h-6 w-6 flex-shrink-0 hover:text-gray-200 text-gray-100 dark:hover:text-gray-300"
                      />
                      <span className="ml-2 text-sm font-medium hover:text-gray-200 text-gray-100 dark:hover:text-gray-300">
                        0
                      </span>
                      <span className="sr-only">items in cart, view bag</span>
                    </button>
                  </div>

                  {/* Modal do Carrinho */}
                  <Dialog
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    className="relative z-10"
                  >
                    <div
                      className="fixed inset-0 bg-black/30"
                      aria-hidden="true"
                    />
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                      <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-6">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Seu carrinho
                        </Dialog.Title>
                        <Dialog.Description className="mt-2 text-sm text-gray-500">
                          Você ainda não tem nenhum item no carrinho.
                        </Dialog.Description>
                        <button
                          onClick={() => setIsOpen(false)}
                          className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
                        >
                          Fechar
                        </button>
                      </Dialog.Panel>
                    </div>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
