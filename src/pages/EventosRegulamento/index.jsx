import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import EventRegulamento from "../../Components/EventosRegulamento/EventosRegulamento";

const EventsRegulamentoPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Navbar />
      <EventRegulamento />
      <Footer />
    </div>
  );
};

export default EventsRegulamentoPage;
