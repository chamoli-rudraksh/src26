import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./shared/Navbar.jsx";
import Footer from "./shared/Footer.jsx";
import Main from "./Home/Main.jsx";
import Event from "./Events/page/Event.jsx";
import Team from "./Team/page/Team.jsx";
import Accommodation from "./Accommodation/Accommodation.jsx";
import Contact from "./Contact/Contact.jsx";
import Register from "./Registration/Register.jsx";
import Sponsor from "./Sponsors/Sponsor.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/events" element={<Event />} />
          <Route path="/team" element={<Team />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sponsors" element={<Sponsor />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}