import React from "react";
import ProjectCards from "./ProjectCards";

function Project() {
  const projects = [
    {
      imgPath: "/Projects/EntertainMe.png",
      title: "EntertainMe",
      description:
        "An entertainment-based MERN stack app featuring Bollywood, Hollywood, Comedy Shows, and Cricket highlights.",
      ghLink: "#",
      demoLink: "#",
    },
    {
      imgPath: "/Projects/Gymnasio.png",
      title: "Gym Management System",
      description:
        "A management system for gyms with member registration, attendance, and payments.",
      ghLink: "#",
      demoLink: "#",
    },
    {
      imgPath: "/Projects/EduCare.png",
      title: "SMS Portfolio",
      description: "A portfolio website for a student management system project.",
      ghLink: "#",
      demoLink: "#",
    },
    {
      imgPath: "/Projects/chatify.png",
      title: "A Chat Application",
      description: "A real-time chat application using Socket.io and React.",
      ghLink: "#",
      demoLink: "#",
    },
    {
      imgPath: "/Projects/Concurr.png",
      title: "Currency Converter",
      description: "A web app to convert currencies using real-time exchange rates.",
      ghLink: "#",
      demoLink: "#",
    },
    {
      imgPath: "/Projects/WeatherApp.png",
      title: "Weather App",
      description: "A weather forecasting app using OpenWeatherMap API.",
      ghLink: "#",
      demoLink: "#",
    },
  ];

  return (
    <section id="projects" className="w-full bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My Recent <span className="text-purple-500">Works</span>
        </h1>
        <p className="text-center text-gray-300 mb-12">
          Here are a few projects I've worked on recently.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCards
              key={idx}
              imgPath={project.imgPath}
              title={project.title}
              description={project.description}
              ghLink={project.ghLink}
              demoLink={project.demoLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
