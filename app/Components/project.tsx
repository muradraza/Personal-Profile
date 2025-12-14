'use client';

import { useState } from 'react';

const ProjectsSection = () => {
  const categories = ['All', 'No-Code Apps', 'CMS Projects', 'Wix'];

  const projects = [
    {
      category: 'CMS Projects',
      image: 'https://muradraza.com/wp-content/uploads/2025/03/cygmr-scaled.jpg',
      title: 'Change Your Game',
      desc: 'Building scalable apps without writing code using Bubble.io, Lovable.dev, Windsurf.com',
      url: 'https://www.cyg.today/',
    },
    {
      category: 'CMS Projects',
      image: 'https://muradraza.com/wp-content/uploads/2025/03/cognitoconsultantsmr-scaled.jpg',
      title: 'Cognito Consultants',
      desc: 'WordPress, Shopify, Squarespace, Wix — full website development',
      url: 'https://cognitoconsultants.com',
    },
       {
      category: 'Wix',
      image: 'https://muradraza.com/wp-content/uploads/2025/11/hollywood-associatesmr-scaled.jpg',
      title: 'Hollywood Associates',
      desc: 'Workflow automation with ChatGPT, N8N, Make, and API integrations',
      url: 'https://www.hollywood-associates.com/',
    },
    // add more projects as needed
  ];

  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects =
    activeTab === 'All'
      ? projects
      : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="bg-gray-900 py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">

        {/* Heading */}
        <h2 className="text-4xl mb-8 font-semibold text-white">🛠️ My Work</h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                activeTab === cat
                  ? 'bg-blue-500 text-white shadow'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-[8px] border border-gray-700 p-6 text-center shadow-sm hover:shadow-lg transition"
            >
              {project.image && (
                <img
                  className="rounded-[8px] mb-6 w-full h-48 object-cover"
                  src={project.image}
                  alt={project.title}
                />
              )}
              <h4 className="text-lg font-semibold text-white">{project.title}</h4>
              {/* <p className="mt-2 text-sm text-gray-300">{project.desc}</p> */}
              {project.url && (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-[4px] hover:brightness-105 transition"
                >
                  Live View
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
