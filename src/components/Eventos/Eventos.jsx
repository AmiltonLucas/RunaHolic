// importações necessárias
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const EventCard = ({ event }) => (
  <div className="bg-white rounded-lg shadow-md p-4 dark:bg-gray-600 dark:text-gray-900">
    {/* Cada event. busca as informações na const events e coloca automaticamente aqui */}
    <img
      src={event.image}
      alt={event.title}
      className="w-full h-40 object-cover rounded-t-lg"
    />
    <h3 className="text-lg font-semibold mt-2 dark:text-gray-200">{event.title}</h3>
    <p className="text-sm text-gray-400 dark:text-gray-300">{event.organizer}</p>
    <p className="text-sm text-gray-400 dark:text-gray-300">{event.date}</p>
    <p className="text-sm text-gray-400 dark:text-gray-300">{event.location}</p>
    <a href="/eventos/register">
      <button className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary/60 transition dark:bg-secondary">
        Saiba mais
      </button>
    </a>
  </div>
);

const EventsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 9;

  // const com os eventos
  const events = [
    {
      id: 1,
      title: "1ª CORRIDA PROANIMAL",
      organizer: "Paulo Jeferson",
      date: "06 de outubro de 2024",
      location: "MOSSORO / RN",
      image: "/api/placeholder/400/320",
    },
    {
      id: 2,
      title: "2ª CORRIDA DO VINHO",
      organizer: "Ulemas Bolt",
      date: "12 de outubro de 2024",
      location: "Araruna-PB",
      image: "/api/placeholder/400/320",
    },
    {
      id: 3,
      title: "1ª Etapa Copa Central",
      organizer: "Andson da Silva Alves",
      date: "13 de outubro de 2024",
      location: "Afonso Bezerra / RN",
      image: "/api/placeholder/400/320",
    },
    // ... add more events here
  ];

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const totalPages = Math.ceil(events.length / eventsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 h-[100%] dark:bg-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-8 text-center">Eventos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-800">
        {currentEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      {/* Paginação */}
      <div className="flex justify-center mt-8">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="mx-2 p-2 bg-primary text-white rounded disabled:bg-gray-300 dark:bg-secondary dark:disabled:bg-gray-300"
        >
          <ChevronLeft />
        </button>
        <span className="mx-4 self-center">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="mx-2 p-2 bg-primary text-white rounded disabled:bg-gray-300 dark:bg-secondary dark:disabled:bg-gray-300"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default EventsPage;
