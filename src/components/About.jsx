import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-12"><span className="border-b-4 border-neonBlue pb-2">About</span> Me</h2>

                    <div className="glass-card p-8 md:p-12 rounded-2xl text-left border border-white/5 hover:border-white/10 transition-colors">
                        <p className="text-gray-300 text-lg md:text-xl leading-loose mb-6">
                            I'm <span className="text-neonBlue font-semibold">Alphons Biju</span>, a B.Tech Computer Science & Engineering student at <span className="text-white">St. Joseph’s College of Engineering & Technology, Palai</span>.
                            Currently part of an autonomous batch, I focus on building scalable web applications and intuitive user interfaces.
                        </p>
                        <p className="text-gray-300 text-lg md:text-xl leading-loose">
                            With hands-on experience in <span className="text-neonViolet font-semibold">React</span> and <span className="text-neonViolet font-semibold">Figma</span>,
                            I bridge the gap between design and code. My journey includes participating in the <span className="text-white font-semibold">NASA Space Apps Hackathon</span>,
                            completing a UI/UX internship at <span className="text-white font-semibold">The Nexus Project</span>, and creating tech content for over <span className="text-white font-semibold">2.5K subscribers</span> on YouTube.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
