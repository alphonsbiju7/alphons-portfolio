import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"] },
    { category: "UI/UX", items: ["Figma", "Prototyping", "Wireframing", "Design Systems", "User Research"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Vite", "NPM", "Postman"] },
    { category: "Soft Skills", items: ["Communication", "Teamwork", "Problem Solving", "Creativity", "Adaptability"] },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative bg-black/40">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center"><span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonViolet">Skills</span> & Expertise</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-6 rounded-xl hover:border-neonBlue/50 transition-colors group"
                        >
                            <h3 className="text-xl font-bold mb-6 text-white group-hover:text-neonBlue transition-colors">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((item) => (
                                    <span key={item} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-default hover:text-white">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
