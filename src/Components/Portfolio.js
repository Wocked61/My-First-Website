import React from 'react';
import { Mail, Github, Linkedin, FileText, Terminal } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';

const Portfolio = () => {
  const projects = [
    {
      title: "Weather Dashboard Web App",
      description: "Created a responsive weather dashboard using OpenWeather API with geolocation and 5-day forecast features.",
      technologies: ["JavaScript", "HTML/CSS", "REST APIs"],
      github: "https://github.com/yourusername/weather-dashboard"
    },
    {
      title: "Inventory Management System",
      description: "Developed a Python-based inventory tracking system with SQLite database and REST API implementation.",
      technologies: ["Python", "Flask", "SQLite", "REST API"],
      github: "https://github.com/yourusername/inventory-system"
    }
  ];

  const skills = {
    languages: ["Python", "Java", "C++"],
    tools: ["Unity", "Visual Studio", "Git"],
    certifications: [
      "Google IT Technical Support Fundamentals",
      "Google IT Networking",
      "IC3 Digital Literacy"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Header/Hero Section */}
      <header className="max-w-4xl mx-auto px-4 text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Dylan Phan</h1>
        <p className="text-xl text-gray-600 mb-6">
          Computer Science Student at CSUF | Aspiring Software Developer
        </p>
        <div className="flex justify-center gap-4">
          <a href="mailto:dylanphan88@gmail.com" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
            <Mail size={20} /> Email
          </a>
          <a href="https://github.com/Wocked61" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
            <Github size={20} /> GitHub
          </a>
          <a href="https://linkedin.com/in/dylan-phan88" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
            <Linkedin size={20} /> LinkedIn
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Enthusiastic Computer Science student at California State University, Fullerton with a passion for software development
              and problem-solving. Currently maintaining a 3.2 GPA and expected to graduate in December 2026. Experienced in game
              testing and quality assurance, with a strong foundation in programming and technical support.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Terminal size={24} />
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>
                  <a href={project.github} className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                    <Github size={16} /> View on GitHub
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FileText size={24} />
          Skills & Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((lang, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Development Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {skills.certifications.map((cert, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    {cert}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;