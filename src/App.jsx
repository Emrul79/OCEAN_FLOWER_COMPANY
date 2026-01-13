import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import CursorFollower from "./components/CurserPointer";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUs from "./page/AboutUs";
import Hero from "./page/Hero";
import InteractiveMap from "./page/Location";
import Services from "./page/Services";
import VisionAndClients from "./page/Vision";

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
        <main className="pt-0">
          <Hero />
          <AboutUs />
          <Services />
          <VisionAndClients />
          <InteractiveMap />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
