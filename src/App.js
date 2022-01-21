import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import storeImport from "./store"
import { PersistGate } from 'redux-persist/integration/react'
import Homepage from "./Containers/Homepage/homePage";
import Explore from "./Containers/Explore/Explore";
import Team from "./Containers/Team/team";
import EventPage from "./Containers/EventPage/EventPage";
import Login from "./Containers/Login/Login";
import Signup from "./Containers/Signup/Signup";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

const App = () => {
  let { store, persistor } = storeImport();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/team" element={<Team />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/event/:eventId" element={<EventPage />} />
          </Routes>
          <Footer />
        </>
      </PersistGate>
    </Provider>
  );
}

export default App;