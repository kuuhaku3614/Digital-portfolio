import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-spacing">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Featured work presented as clear case studies."
          description="Each card highlights what the project solves, what technologies were used, and what a recruiter should notice first."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 90}>
              <ProjectCard project={project} onViewDetails={setSelectedProject} />
            </Reveal>
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
