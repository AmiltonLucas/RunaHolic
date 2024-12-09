import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/NavBar/Navbar";

const product = {
  // Tipo do produto
  name: "Pack básico com 6 camisas",
  price: "R$ 200",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Masculino", href: "/masculino" },
    { id: 2, name: "Camisas", href: "#" },
  ],

  //Cores do produto
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],

  // Tamanhos disponiveis (False = Sem estoque) , (True = Com estoque)
  sizes: [
    { name: "XXP", inStock: false },
    { name: "XP", inStock: false },
    { name: "P", inStock: true },
    { name: "M", inStock: true },
    { name: "G", inStock: true },
    { name: "XG", inStock: true },
    { name: "2XG", inStock: true },
    { name: "3XG", inStock: false },
  ],

  // descrição do produto
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  // Tecnologias do produto
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  // Descrição menos do produto
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

const TestPage = () => {
  const [images, setImages] = useState({
    img1: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img2: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img3: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img4: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  const reviews = { href: "#", average: 4, totalCount: 117 };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-gray-800">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              {product.breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center">
                    <a
                      href={breadcrumb.href}
                      className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      {breadcrumb.name}
                    </a>
                    <svg
                      fill="currentColor"
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      aria-hidden="true"
                      className="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>
              ))}
              <li className="text-sm">
                <a
                  href={product.href}
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600 dark:text-gray-300"
                >
                  {product.name}
                </a>
              </li>
            </ol>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:grid-cols-1 lg:gap-x-8 lg:px-8">
              <div className="hidden"></div>
              <div className="aspect-h-2 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                <img
                  src={activeImg}
                  alt=""
                  className="h-[100%] w-[100%] p-2 object-cover object-center rounded-xl lg:h-[35rem] lg:w-full "
                />
                <div className="flex flex-row justify-between h-24">
                  <img
                    src={images.img1}
                    alt=""
                    className="w-24 h-24 rounded-md cursor-pointer"
                    onClick={() => setActiveImage(images.img1)}
                  />
                  <img
                    src={images.img2}
                    alt=""
                    className="w-24 h-24 rounded-md cursor-pointer"
                    onClick={() => setActiveImage(images.img2)}
                  />
                  <img
                    src={images.img3}
                    alt=""
                    className="w-24 h-24 rounded-md cursor-pointer"
                    onClick={() => setActiveImage(images.img3)}
                  />
                  <img
                    src={images.img4}
                    alt=""
                    className="w-24 h-24 rounded-md cursor-pointer"
                    onClick={() => setActiveImage(images.img4)}
                  />
                </div>
              </div>
            </div>
            {/* ABOUT */}
            <div className="mx-auto max-w-2xl px-4 pb-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:-translate-x-10 lg:-translate-y-4 xl:-translate-x-[8rem]">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-3xl">
                  {product.name}
                </h1>
              </div>
              <div className="py-4 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8">
                <div>
                  <h3 className="sr-only">Description</h3>
                  <div className="space-y-6">
                    <p className="text-base text-gray-900  dark:text-gray-300">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 lg:row-span-3 lg:mt-0 lg:w-[10rem] lg:-translate-y-20 xl:-translate-y-10 xl:w-[20rem]">
                <h2 className="sr-only ">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900 dark:text-gray-200">
                  {product.price}
                </p>
                {/* Avaliações */}
                <div className="mt-6">
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          aria-hidden="true"
                          className={classNames(
                            reviews.average > rating
                              ? "text-yellow-400"
                              : "text-gray-200",
                            "h-5 w-5 flex-shrink-0"
                          )}
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                    <a
                      href={reviews.href}
                      className="ml-3 text-sm font-medium text-primary hover:text-primary/60 dark:text-secondary dark:hover:text-secondary/60"
                    >
                      {reviews.totalCount} reviews
                    </a>
                  </div>
                </div>
                <form className="mt-10">
                  {/* Cores disponiveis */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200">
                      Color
                    </h3>
                    <fieldset aria-label="Choose a color" className="mt-4">
                      <RadioGroup
                        value={selectedColor}
                        onChange={setSelectedColor}
                        className="flex items-center space-x-3"
                      >
                        {product.colors.map((color) => (
                          <Radio
                            key={color.name}
                            value={color}
                            aria-label={color.name}
                            className={classNames(
                              color.selectedClass,
                              "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1"
                            )}
                          >
                            <span
                              aria-hidden="true"
                              className={classNames(
                                color.class,
                                "h-8 w-8 rounded-full border border-black border-opacity-10"
                              )}
                            />
                          </Radio>
                        ))}
                      </RadioGroup>
                    </fieldset>
                  </div>
                  {/* Tamanhos disponiveis */}
                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900  dark:text-gray-200">
                        Size
                      </h3>
                      <a
                        href="#"
                        className="text-sm font-medium text-primary hover:text-primary/60 dark:text-secondary dark:hover:text-secondary/60"
                      >
                        Size guide
                      </a>
                    </div>
                    <fieldset aria-label="Choose a size" className="mt-4">
                      <RadioGroup
                        value={selectedSize}
                        onChange={setSelectedSize}
                        className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                      >
                        {product.sizes.map((size) => (
                          <Radio
                            key={size.name}
                            value={size}
                            disabled={!size.inStock}
                            className={classNames(
                              size.inStock
                                ? "cursor-pointer bg-white text-gray-900 dark:bg-gray-600 dark:text-gray-200 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200 dark:bg-gray-300 dark:text-gray-400",
                              "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6"
                            )}
                          >
                            <span>{size.name}</span>
                            {size.inStock ? (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-primary/60 dark:group-data-[checked]:border-secondary/60"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  stroke="currentColor"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                >
                                  <line
                                    x1={0}
                                    x2={100}
                                    y1={100}
                                    y2={0}
                                    vectorEffect="non-scaling-stroke"
                                  />
                                </svg>
                              </span>
                            )}
                          </Radio>
                        ))}
                      </RadioGroup>
                    </fieldset>
                    <div className="flex justify-between items-center mb-4 mt-4 text-gray-800 dark:text-gray-200">
                      <div>
                        <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                          Quantidade
                        </h2>
                        <p>!number</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="bg-primary dark:bg-secondary text-gray-200 px-2 py-1 rounded">
                          <ChevronDown />
                        </button>
                        <span>!Number</span>
                        <button className="bg-primary dark:bg-secondary text-gray-200  px-2 py-1 rounded">
                          <ChevronUp />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Adicionanr ao carrinho */}
                  <button
                    type="submit"
                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-primary dark:bg-secondary px-8 py-3 text-base font-medium text-white hover:bg-primary/70 dark:hover:bg-secondary/70  focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-secondary/50 focus:ring-offset-2"
                  >
                    Adicionar ao carrinho
                  </button>
                  <a href="/fechar-pedido">
                    <button
                      type="button"
                      className="mt-2 flex w-full items-center justify-center rounded-md border border-transparent bg-primary dark:bg-secondary px-8 py-3 text-base font-medium text-white hover:bg-primary/70 dark:hover:bg-secondary/70  focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-secondary/50 focus:ring-offset-2"
                    >
                      Comprar agora
                    </button>
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TestPage;
