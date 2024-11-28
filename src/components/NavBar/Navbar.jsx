"use client";
// Imports
import { Fragment, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import DarkMode from "./DarkMode";
import Logo from "../../assets/logo.png";
import Shorts from "../../assets/NavBar/shorts.jpg";
import TopCropped from "../../assets/NavBar/topcropped.jpg";
import Camisas from "../../assets/NavBar/camisas.jpeg";
import ShortMasculino from "../../assets/NavBar/shortsMasculino.jpeg";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

// Informações dentro do dropdown
const navigation = {
  categories: [
    {
      id: "women",
      name: "Feminino",
      featured: [
        {
          name: "Novos shorts",
          href: "#",
          imageSrc: Shorts,
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Top Cropped",
          href: "#",
          imageSrc: TopCropped,
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Vestuário",
          items: [
            { name: "Short de compressão", href: "#" },
            { name: "Short duplo", href: "#" },
            { name: "Top alto impacto", href: "#" },
            { name: "top a lazer", href: "#" },
            { name: "Top croped", href: "#" },
            { name: "Regata de compressão", href: "#" },
            { name: "Camisas", href: "#" },
            { name: "Leg", href: "#" },
            { name: "Jacketa", href: "#" },
            { name: "Casaco", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Acessórios",
          items: [
            { name: "Bonés", href: "#" },
            { name: "Viseiras", href: "#" },
            { name: "Meias", href: "#" },
            { name: "Óculos", href: "#" },
            { name: "Cinto porta número", href: "#" },
            { name: "Porta objetos", href: "#" },
            { name: "HeadBand", href: "#" },
            { name: "Garrafa de hidratação", href: "#" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Masculino",
      featured: [
        {
          name: "Novas Camisas",
          href: "#",
          imageSrc: Camisas,
          imageAlt: "Camisas de alta qualidade e conforto padrão RunaHolic",
        },
        {
          name: "Shorts de corrida",
          href: "#",
          imageSrc: ShortMasculino,
          imageAlt:
            "Shorts de corrida de alta qualidade e conforto padrão RunaHolic",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Vestuário",
          items: [
            { name: "Short de compressão", href: "#" },
            { name: "Short duplo", href: "#" },
            { name: "Camisas", href: "#" },
            { name: "Corta vento", href: "#" },
            { name: "Macaquinho", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Acessórios",
          items: [
            { name: "Bonés", href: "#" },
            { name: "Viseiras", href: "#" },
            { name: "Meias", href: "#" },
            { name: "Óculos", href: "#" },
            { name: "Cinto porta número", href: "#" },
            { name: "Porta objetos", href: "#" },
            { name: "HeadBand", href: "#" },
            { name: "Garrafa de hidratação", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Eventos", href: "/eventos" },
    { name: "Sobre nós", href: "/sobrenos" },
    { name: "Lojas", href: "/lojas" },
  ],
};

// Informações da LowerBar
const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Mais bem Avaliados",
    link: "/topavaliados",
  },
  {
    id: 3,
    name: "Espaço Masculino",
    link: "/masculino",
  },
  {
    id: 4,
    name: "Acessórios",
    link: "/acessorios",
  },
  {
    id: 4,
    name: "Espaço Feminino",
    link: "/feminino",
  },
];

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
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Entrar
                </a>
              </div>
              <div className="flow-root">
                <a
                  href="/criarconta"
                  className="-m-2 block p-2 font-medium text-gray-900"
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
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 dark:text-gray-100 data-[selected]:border-primary data-[selected]:text-primary dark:data-[selected]:border-secondary/60 dark:data-[selected]:text-secondary/60"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel
                    key={category.name}
                    className="space-y-10 px-4 pb-8 pt-10"
                  >
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                            <img
                              alt={item.imageAlt}
                              src={item.imageSrc}
                              className="object-cover object-center"
                            />
                          </div>
                          <a
                            href={item.href}
                            className="mt-6 block font-medium text-gray-900 dark:text-gray-100"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 z-10"
                            />
                            {item.name}
                          </a>
                          <p
                            aria-hidden="true"
                            className="mt-1 dark:text-gray-400"
                          >
                            Compre agora
                          </p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p
                          id={`${category.id}-${section.id}-heading-mobile`}
                          className="font-medium text-gray-900 dark:text-gray-100"
                        >
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-2 block p-2 text-gray-500 dark:text-gray-400"
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

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
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-white transition-colors duration-200 ease-out hover:text-gray-200 data-[open]:border-white data-[open]:text-white  dark:data-[open]:border-gray-900 dark:data-[open]:text-gray-900">
                          {category.name}
                        </PopoverButton>
                      </div>

                      <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                      >
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 top-1/2 bg-white shadow"
                        />

                        <div className="relative bg-white dark:bg-gray-800">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category.featured.map((item) => (
                                  <div
                                    key={item.name}
                                    className="group relative text-base sm:text-sm"
                                  >
                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                      <img
                                        alt={item.imageAlt}
                                        src={item.imageSrc}
                                        className="object-cover object-center"
                                      />
                                    </div>
                                    <a
                                      href={item.href}
                                      className="mt-6 block font-medium text-gray-900 dark:text-gray-100"
                                    >
                                      <span
                                        aria-hidden="true"
                                        className="absolute inset-0 z-10"
                                      />
                                      {item.name}
                                    </a>
                                    <p aria-hidden="true" className="mt-1">
                                      Compre agora
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p
                                      id={`${section.name}-heading`}
                                      className="font-medium text-gray-900 dark:text-gray-100"
                                    >
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <a
                                            href={item.href}
                                            className="hover:text-gray-800 dark:text-gray-400"
                                          >
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}

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
                  <div className="hidden sm:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 p-2 gap-2">
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
                  <div className="hidden items-center px-5 sm:flex">
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
      {/* Lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4 ">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary dark:hover:text-secondary dark:text-gray-900 duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
