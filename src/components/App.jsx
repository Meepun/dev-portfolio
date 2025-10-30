import { useState, useEffect, useRef } from "react";
import Footer from "./layout/Footer.jsx";
import Navbar from "./layout/Navbar.jsx";
import Home from "./screens/Home.jsx";
import AboutMe from "./screens/AboutMe.jsx";
import CV from "./screens/CV.jsx";
import Projects from "./screens/Projects.jsx";
import Contact from "./screens/Contact.jsx";
import Certifications from "./screens/Certifications.jsx";
import TerminalBackground from "./TerminalBackground.jsx";

export default function App() {
  const [page, setPage] = useState("home");
  const mainRef = useRef(null);

  // useState Logic for Page Rendering
  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "about":
        return <AboutMe />;
      case "cv":
        return <CV />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      case "certifications":
        return <Certifications />;
      default:
        return <Home />;
    }
  };

  // Scrollable Pages Logic
  const scrollablePages = ["projects", "certifications"];
  const isScrollable = scrollablePages.includes(page);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, [page]);

  // Modular Page Rendering
  return (
    <div className="relative flex flex-col h-screen bg-gray-900 text-white">
      <TerminalBackground page={page} />
      <Navbar page={page} setPage={setPage} />

      <main
        ref={mainRef}
        className={`flex-1 flex justify-center transition-all duration-300 ${
          isScrollable
            ? "overflow-y-auto items-start custom-scrollbar"
            : "overflow-hidden items-center"
        }`}
      >
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
}
