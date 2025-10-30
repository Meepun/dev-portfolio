import { motion } from "framer-motion";

export default function Projects() {
  // Constant for containing each project information
  const projects = [
    {
      title: "IConsult",
      description: `
A consultation webapp developed in my first year with a team of 3 for Gen AI Hackathon. Implemented with Claude AI and developed using Amazon Web Services. Serves as a smart health consultation app. This was my first project involved in machine learning.`,
      image: "/projects/IConsult.gif",
    },
    {
      title: "Comparative Study: Counting Sort VS Strand Sort Algorithms",
      description: `
A case study conducted in my 2nd year of college in collaboration with me as the Lead Researcher. The study's objective was to know the efficiency of both Counting Sort and Strand Sort algorithms in a grade evaluation use-case. 

We assessed the consistency of the resulting data based on time complexity, space complexity, and stability, with existing studies. We tested the difference in performance between Strand Sort and Counting Sort in terms of runtime and memory efficiency by developing a Flask web app with a SQLAlchemy database, and then analyzed the results using statistical tools.`,
      image: "/projects/comparative-study.png",
    },
    {
      title: "Personal Daily Tracker",
      description: `
An object-oriented programming project developed in collaboration with me as the Project Lead. Its purpose is for users to be able to track their daily progress, expenditures, and other aspects in a calendar format. The Java application allows you to record for any date and for any year. It has user authentication and a dedicated SQL database to support distinct user records which utilizes JavaScript's useState function. 

The application allows for seamless tracking of the users' daily life whatever aspect they want to record, whether it be monthly expenses, workout progress, or even for software development sprint progress — the freedom is yours!`,
      image: "/projects/personaldailytracker.png",
    },
    {
      title: "Efficiency of Naive Bayes Classifiers in Sentiment Analysis",
      description: `
Another case study which evaluates the efficiency of the Multinomial Naive Bayes (MNB) classifier in performing sentiment analysis across emotionally charged and technical subreddits on Reddit. Findings suggested that while MNB proves effective for standardized datasets, its performance on social media text is hindered by linguistic unpredictability, such as slang, sarcasm, and domain-specific jargon. These findings underscore the algorithm's limitations in generalizing to diverse online communities and highlight the need for domain adaptation to improve sentiment analysis in real-world applications.`,
      image: "/projects/naivebayes.png",
    },
    {
      title: "GAD Information Management System",
      description: `
A community-based project for a barangay. I served as one of the app's front-end devs in a team of 3, in charge of statistical displays which was very API heavy, so my work became more fullstack. 

It is a project for the Gender and Development Office so that the staff that would be using this project would find it easier to handle resident data by automating certain tasks like summarization and compilation of statistics. The app streamlines data procedures which gives the office more time in thinking up programs for the community; to put their work where it's worth and to not waste unnecessary efforts on tedious data processing.`,
      image: "/projects/GAD-IMS.gif",
    },
    {
      title: "Kakampster",
      description: `
A mobile application developed in a team of 14 for AppCon 2024 where the app qualified for the Top 100. I served as the team's Lead Designer for this project and the one to conceptualize the idea of a Multi-purpose Disaster Response Application. The application contains a built-in forum, an environmental conditions status display which updates in realtime, a live map of recent disasters in the nearby area (flood, landslide, fire outbreak, car collision, etc.) in order to spread awareness in a streamlined process.

It also contains other useful features such as a SOS button for emergencies which reaches out immediately to emergency response teams in the nearby areas. The core function of the application is for users to be able to apply for volunteering and be a "Kakampster", an ally in times of disaster.`,
      image: "/projects/kakampster.png",
    },
    {
      title: "Portfolio Website (Orfevressu.dev)",
      description: `
A personal portfolio built with Astro + React + TailwindCSS, featuring dynamic page transitions and a terminal-inspired animated background.
Designed to showcase web development, game dev, and creative projects in an interactive, modern way.`,
      image: "/projects/dev-portfolio.png",
    },
  ];

  return (
    <section
      className="p-8 h-screen text-white scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-transparent"
      style={{ scrollbarGutter: "stable", scrollBehavior: "smooth" }}
    >
      <h1 className="text-4xl text-center font-bold mt-10 mb-10">Projects</h1>

      {/* Slide in Animation for Project Containers */}
      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg border border-white/10 hover:bg-white/10 transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          > 
          {/* Image Insert */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-64 h-40 object-cover rounded-lg border border-yellow-400 shadow-md"
            />

            {/* Project Container Structure */}
            <div className="text-left max-w-2xl">
              <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 text-justify leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
