import React from 'react'
import Homepage from "./Containers/Homepage/homePage";
import Team from "./Containers/Team/team";
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;