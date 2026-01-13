import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainAboutPage from "./NavPages/MainAboutPage";
import MainContacts from "./NavPages/MainContacts";
import MainServices from "./NavPages/MainServices";
import CursorFollower from "./components/CurserPointer";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
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
          <Route path="/about" element={<MainAboutPage />} />
          <Route path="/services" element={<MainServices />} />
          <Route path="/contact" element={<MainContacts />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
