import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import EventRegister from "../../Components/EventosRegistro/EventosRegistro";
import Footer from "../../Components/Footer/Footer";

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
