import { useState } from 'react';
import Footer from './layout/Footer.jsx';
import Navbar from './layout/Navbar.jsx';
import Home from './screens/Home.jsx';
import AboutMe from './screens/AboutMe.jsx';
import CV from './screens/CV.jsx';
import Projects from './screens/Projects.jsx';
import Contact from './screens/Contact.jsx';
import Certifications from './screens/Certifications.jsx';
import TerminalBackground from './TerminalBackground.jsx';

//UseState Page Rendering
export default function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home': return <Home />;
      case 'about': return <AboutMe />;
      case 'cv': return <CV />;
      case 'projects': return <Projects />;
      case 'contact': return <Contact />;
      case 'certifications' : return <Certifications />;
      default: return <Home />;
    }
  };

  return (
    <div className="relative flex flex-col h-screen bg-gray-900 text-white overflow-hidden">
      <TerminalBackground page={page} />
        <Navbar page={page} setPage={setPage} />

      <main className="flex-1 flex items-center justify-center overflow-hidden">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
}
