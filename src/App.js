import React from 'react'
import Homepage from "./Containers/Homepage/homePage";
import Test from "./Containers/Homepage/test";
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
        <Route path="/test" element={<Test />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;