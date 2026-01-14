import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUsSection from "./NavPages/MainAboutPage";
import MainContacts from "./NavPages/MainContacts";
import ServicesSection from "./NavPages/MainServices";
import OurProcess from "./NavPages/OurProcess";
import CursorFollower from "./components/CurserPointer";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SingleServicePage from "./components/services/SingleServices";
import LeandingPage from "./page/LeandingPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <CursorFollower />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<LeandingPage />} />
          <Route path="/about" element={<AboutUsSection />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/services/:slug" element={<SingleServicePage />} />
          <Route path="/ourProcess" element={<OurProcess />} />
          <Route path="/contact" element={<MainContacts />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
