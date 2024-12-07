import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Modal from "../../Components/modal/Modal";

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

  const [amount, setAmount] = useState(1);

  const reviews = { href: "#", average: 4, totalCount: 117 };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
      <div className="flex flex-col gap-6 lg:w-2/4">
        <img
          src={activeImg}
          alt=""
          className="w-full h-full aspect-square object-cover rounded-xl"
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

      {/* ABOUT */}
      <div className="flex flex-col gap-4 lg:w-2/4 m-8">
        <div>
          <span className="text-primary dark:text-secondary font-semibold">
            Special Sneaker
          </span>
          <h1 className="text-3xl font-bold">Nike Invincible 3</h1>
        </div>
        <p className="text-gray-700">
          Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi
          chilometri, Invincible 3 offre un livello di comfort elevatissimo
          sotto il piede per aiutarti a dare il massimo oggi, domani e oltre.
          Questo modello incredibilmente elastico e sostenitivo, è pensato per
          dare il massimo lungo il tuo percorso preferito e fare ritorno a casa
          carico di energia, in attesa della prossima corsa.
        </p>
        <h2 className="sr-only ">Product information</h2>
        <p className="text-3xl tracking-tight text-gray-900 dark:text-gray-200">
          {product.price}
        </p>
        <div>
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
        <form className="mt-2">
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
        <Modal />
      </div>
    </div>
  );
};

export default TestPage;
