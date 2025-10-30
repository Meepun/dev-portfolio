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

<<<<<<< HEAD
## Preview

### Landing Page (Home)
![Home.png](/public/screenshots/home.png)
### Projects Page
![Projects.png](/public/screenshots/home.png)
### CV Page
![CV.png](/public/screenshots/home.png)

---

## 📁 Project Structure
=======
## Project Structure
>>>>>>> 3487914dcc2c89751eb84c409b8b08865bfea644
```bash
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
```
<<<<<<< HEAD

---
=======
>>>>>>> 3487914dcc2c89751eb84c409b8b08865bfea644

## Setup & Installation

Clone this repository and install dependencies:

### Clone the repo
```
git clone https://github.com/yourusername/your-repo-name.git
```

### Go to project folder
```
cd your-repo-name
```

### Install dependencies
```
npm install
```

### Run development server
```
npm run dev
```

Then open your browser at http://localhost:4321/

---

## 🧩 Key Components

### 🖥️ `TerminalBackground.jsx`
Creates a **fake terminal simulation** that reacts to navigation changes.  
Each page triggers lines like:
```
Orfevressu: ~/ terminate about
Orfevressu: ~/ display projects.jsx
```

### AboutMe.jsx
Profile display which showcases developer's bio, hobbies, and skills; all in one page, accessible via buttons.

### Certifications.jsx
Provides a clean display of certifications attained by the developer.

### Contact.jsx
Displays necessary contact information of the developer

### CV.jsx
In this page, users can download the developer's CV and Resume (.pdf) in order to access it.

### Home.jsx
The Landing page of the website.

### Projects.jsx
A clear cut showcase of past projects accomplished by the developer.

---

## 🎨 Styling Highlights

Tailwind CSS utility classes for rapid layout control

Glassmorphism used across sections for consistency

Drop shadows and glows accent key text (titles, buttons)

Framer Motion for scroll-triggered fades, slides, and loops

Consistent yellow-white color palette for contrast

---

## 🌐 Deployment (Netlify)
By deploying the website to Netlify, it offers seamless web interaction, fully front-end loaded without any server-side logic. This static website approach allows for a completely free website deployment on Netlify. 

---

## 🧾 License
This project is open-source under the MIT License.

---

## ✨ Author
RJ Dollesin (Orfevressu)
📧 raymondjaydollesin@gmail.com
🌐 GitHub: Meepun