import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Code } from 'lucide-react';

const experiences = [
    {
        role: "UI/UX Design Intern",
        company: "The Nexus Project (IEDC Bootcamp)",
        period: "1 Month[June 2025]",
        description: "Designed user-centric interfaces, created wireframes and prototypes, and collaborated with developers to implement responsive designs for real-world applications.",
        icon: <Briefcase size={20} />
    },
    {
        role: "Hackathon Participant",
        company: "NASA Space Apps Hackathon",
        period: "2025",
        description: "Collaborated in a high-pressure environment to solve global challenges using space data. Developed a prototype solution focused on environmental sustainability.",
        icon: <Award size={20} />
    },
    {
        role: "Web Developer",
        company: "Personal & Academic Projects",
        period: "2024 - Present",
        description: "Built various web applications using React, Tailwind CSS, and modern web technologies. Focus on performance optimization and creating intuitive user experiences.",
        icon: <Code size={20} />
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">My <span className="text-neonViolet">Journey</span></h2>

                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-8 rounded-2xl flex flex-col md:flex-row gap-6 hover:shadow-[0_0_30px_rgba(188,19,254,0.15)] transition-all border border-white/5 hover:border-neonViolet/30 group"
                        >
                            <div className="flex-shrink-0">
                                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-neonViolet group-hover:bg-neonViolet group-hover:text-white transition-all duration-300 border border-white/10">
                                    {exp.icon}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-neonBlue transition-colors">{exp.role}</h3>
                                <h4 className="text-white/80 text-lg mb-2">{exp.company}</h4>
                                <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
