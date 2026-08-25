import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Star, Code, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Fetch GitHub repos
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Arun93-TB/repos?sort=stars&per_page=12');
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching repos:', error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const scrollToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Arun Kumar
          </div>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-blue-400 transition">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition">Contact</button>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/Arun93-TB" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/arung10" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="relative text-center max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Arun Kumar</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Full Stack Developer | Open Source Enthusiast | Problem Solver
          </p>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            I build scalable web applications and contribute to open source. Passionate about clean code and innovative solutions.
          </p>
          
          <div className="flex gap-6 justify-center flex-wrap">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition transform hover:scale-105"
            >
              View My Work
            </button>
            <a 
              href="mailto:legendarunkumar47@gmail.com"
              className="px-8 py-3 border-2 border-blue-400 rounded-lg font-semibold hover:bg-blue-400/10 transition"
            >
              Get In Touch
            </a>
          </div>
          
          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-blue-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                I'm a passionate developer with expertise in building modern web applications. With a focus on creating intuitive user experiences and writing clean, maintainable code, I've contributed to various open-source projects and developed full-stack applications.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                My journey in tech has been driven by curiosity and a desire to solve real-world problems through code. I believe in continuous learning and staying updated with the latest technologies and best practices.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-8 rounded-lg border border-blue-500/30">
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-blue-400">→</span>
                  <span>Full Stack Developer with focus on modern web tech</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">→</span>
                  <span>Open Source Contributor</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">→</span>
                  <span>Problem solver and lifelong learner</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">→</span>
                  <span>Based in India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend",
                skills: ["React", "Vue.js", "JavaScript", "HTML/CSS", "Tailwind CSS", "Responsive Design"]
              },
              {
                title: "Backend",
                skills: ["Node.js", "Express", "Python", "REST APIs", "Database Design", "Authentication"]
              },
              {
                title: "Tools & Platforms",
                skills: ["Git/GitHub", "Docker", "VS Code", "Linux", "AWS", "Firebase"]
              }
            ].map((category, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-blue-500/50 transition">
                <div className="flex items-center gap-3 mb-6">
                  <Code size={24} className="text-blue-400" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
                <p className="text-slate-400">Loading projects...</p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(0, 6).map((project) => (
                <a
                  key={project.id}
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition group overflow-hidden"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold group-hover:text-blue-400 transition truncate flex-1">
                      {project.name}
                    </h3>
                    <ExternalLink size={18} className="text-slate-400 group-hover:text-blue-400 transition flex-shrink-0 ml-2" />
                  </div>
                  
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {project.description || "No description available"}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {project.language && (
                        <span className="flex items-center gap-1 text-sm text-slate-400">
                          <span className={`w-3 h-3 rounded-full ${
                            project.language === 'JavaScript' ? 'bg-yellow-400' :
                            project.language === 'Python' ? 'bg-blue-500' :
                            project.language === 'TypeScript' ? 'bg-blue-600' :
                            project.language === 'HTML' ? 'bg-orange-500' :
                            'bg-gray-400'
                          }`}></span>
                          {project.language}
                        </span>
                      )}
                    </div>
                    
                    {project.stargazers_count > 0 && (
                      <div className="flex items-center gap-1 text-slate-400 text-sm">
                        <Star size={16} className="text-yellow-400" />
                        {project.stargazers_count}
                      </div>
                    )}
                  </div>
                </a>
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <a
              href="https://github.com/Arun93-TB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition"
            >
              <Github size={20} />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg p-12 text-center">
              <p className="text-lg text-slate-300 mb-8">
                I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <a
                  href="mailto:legendarunkumar47@gmail.com"
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition"
                >
                  <Mail size={20} />
                  Email Me
                </a>
                <a
                  href="https://www.linkedin.com/in/arung10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-3 border-2 border-blue-500 hover:bg-blue-500/10 rounded-lg font-semibold transition"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Arun93-TB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-3 border-2 border-blue-500 hover:bg-blue-500/10 rounded-lg font-semibold transition"
                >
                  <Github size={20} />
                  GitHub
                </a>
              </div>
              
              <div className="text-slate-400">
                <p className="mb-2">Email: <span className="text-blue-400">legendarunkumar47@gmail.com</span></p>
                <p>Location: India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2024 Arun Kumar. Built with React & Tailwind CSS.</p>
          <p className="mt-2 text-sm">All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
