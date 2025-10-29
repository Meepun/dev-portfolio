export default function Navbar({ page, setPage }) {
  return (  
    <nav className="flex justify-end gap-6 py-4 px-8 z-10">
      <button 
        onClick={() => setPage('home')} 
        className={`text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] transition duration-200 ${
          page === 'home' ? 'drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]' : ''
        }`}
      >
        Home
      </button>
      <button 
        onClick={() => setPage('about')} 
        className={`text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] transition duration-200 ${
          page === 'about' ? 'drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]' : ''
        }`}
      >
        About Me
      </button>
      <button 
        onClick={() => setPage('projects')} 
        className={`text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] transition duration-200 ${
          page === 'projects' ? 'drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]' : ''
        }`}
      >
        Projects
      </button>
      <button 
        onClick={() => setPage('certifications')} 
        className={`text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] transition duration-200 ${
          page === 'certifications' ? 'drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]' : ''
        }`}
      >
        Certifications
      </button>
      <button 
        onClick={() => setPage('cv')} 
        className={`text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] transition duration-200 ${
          page === 'cv' ? 'drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]' : ''
        }`}
      >
        Curriculum Vitae
      </button>
      <button 
        onClick={() => setPage('contact')} 
        className={`text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] transition duration-200 ${
          page === 'contact' ? 'drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]' : ''
        }`}
      >
        Contact
      </button>
    </nav>
  );
}
