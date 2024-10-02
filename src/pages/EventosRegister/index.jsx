import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import EventRegister from "../../components/EventosRegistro/EventosRegistro";
import Footer from "../../components/Footer/Footer";

const EventsRegister = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Navbar />
      <EventRegister />
      <Footer />
    </div>
  );
};

export default EventsRegister;
