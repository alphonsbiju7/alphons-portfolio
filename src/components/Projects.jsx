import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
    {
        title: "Weatherwise Pro",
        description:
            "An AI-powered weather intelligence platform built for the NASA Space Apps Challenge 2025. It transforms NASA open climate data into actionable insights through interactive dashboards, intelligent forecasts, and decision-support tools for environmental safety and planning.",
        tags: ["React", "NASA Open Data", "APIs", "Data Visualization", "Hackathon"],
        demo: "https://weatherwise-pro-1.onrender.com/",
        github: "https://github.com/alphonsbiju7/Weatherwise-Pro"
    },
    {
        title: "AR Soccer Game (HatchXR)",
        description:
            "A 3D Augmented Reality soccer game designed using HatchXR, delivering an immersive and interactive gaming experience. The project focuses on realistic 3D interactions, intuitive UI, and experimenting with emerging AR technologies.",
        tags: ["Augmented Reality", "3D Design", "HatchXR", "Interactive UX"],
        demo: "https://play.hatchxr.com/@AlphonsBiju/Soccer-template?utm_source=copy&utm_campaign=POTD&utm_medium=workspace",
        github: "#"
    },
    {
        title: "Firefighting Robot",
        description:
            "An innovative hardware–software project developed as part of a tech fest initiative. The robot is designed to assist in fire detection and response scenarios, combining electronics, programming, and teamwork to solve real-world safety challenges.",
        tags: ["Robotics", "Arduino", "Embedded Systems", "Innovation"],
        demo: "#",
        github: "#"
    }
];


const Projects = () => {
    return (
        <section id="projects" className="py-20 relative bg-black/40">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Featured <span className="text-neonBlue">Projects</span></h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-neonBlue/30"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <Folder size={40} className="text-neonBlue/80 group-hover:text-neonBlue transition-colors" />
                                <div className="flex gap-4">
                                    <a href={project.github} className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                                    <a href={project.demo} className="text-gray-400 hover:text-white transition-colors"><ExternalLink size={20} /></a>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neonBlue transition-colors">{project.title}</h3>
                            <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs font-mono text-neonBlue/80">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/alphonsbiju7" className="inline-block px-8 py-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white border border-white/10">
                        View All Projects on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
