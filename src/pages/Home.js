import React from "react";
import Navbar from "../components/Navbar";
import AddContacts from "../components/AddContacts";
import Contacts from "../components/Contacts";

const Home = () => {
  return (
    <>
      <Navbar />
      <AddContacts />
      <Contacts />
    </>
  );
};

export default Home;
