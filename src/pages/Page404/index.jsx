import React from "react";

const Page404 = () => {
  return (
    <>
    {/* Page 404 */}
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="font-semibold text-2xl text-secondary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Página não encontrada!
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Lamentamos, mas não conseguimos encontrar a página que procura.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary/60"
            >
              Volte para home
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Entre em contato com o suporte{" "}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page404;