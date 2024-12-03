import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import EventosUserRegisto from "../../Components/EventosUserRegistro/EventosUserRegistro";

const EventUserRegister = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Navbar />
      <EventosUserRegisto />
      <Footer />
    </div>
  );
};

export default EventUserRegister;
