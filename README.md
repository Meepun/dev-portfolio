# 🌐 Orfevressu – Developer Portfolio

A visually immersive and interactive **developer portfolio** built with **Astro**, **React**, **Tailwind CSS**, and **Framer Motion**.  
This project showcases creative use of animations, a terminal-inspired background, and clean UI transitions to reflect both technical skill and aesthetic precision.

---

## Tech Stack

- **Astro** – Static site generator for fast, lightweight builds  
- **React** – Dynamic interactivity for reusable UI components  
- **Tailwind CSS** – Utility-first styling for rapid design iteration  
- **Framer Motion** – Smooth animations and page transitions  
- **Lucide Icons** – Modern iconography for a minimalist interface  

---

## Project Structure
public/ # pngs, jpgs, svgs., etc.
├── assets/ # pdfs (e.g. CV, Resume)
└── projects/ # Assets for projects page

src/ # Source Code
├── components/
│ ├── App.jsx # Landing Page
│ ├── TerminalBackground.jsx # Simulated terminal commands background
│ ├── layouts/
│ ├── Navbar.jsx
│ ├── Footer.jsx 
│ └── screens/ # Different page views
│    ├── AboutMe.jsx
│    ├── Certifications.jsx
│    ├── Contact.jsx
│    ├── CV.jsx
│    ├── Home.jsx
│    └── Projects.jsx
│
├── pages/
│ ├── index.astro # Loader for the SPA
│
└── styles/ 
   └── global.css # Tailwind base styles and custom layers

## Setup & Installation

Clone this repository and install dependencies:

# Clone the repo
git clone https://github.com/yourusername/your-repo-name.git

# Go to project folder
cd your-repo-name

# Install dependencies
npm install

# Run development server
npm run dev


Then open your browser at http://localhost:4321/

