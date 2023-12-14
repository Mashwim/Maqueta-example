// import React from 'react';
import Header from "./Components/Header.jsx";
import Navbar from "./Components/Navbar.jsx";
import Wallpaper from "./Components/Wallpaper.jsx";
import Pokegene from "./Components/Pokegene.jsx";
import Frases from "./Components/Frases.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Pokegene />
      <Wallpaper />
      <Frases />
      <Footer />
    </>
  );
};

export default App;
