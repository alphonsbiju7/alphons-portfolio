import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import profileImg from '../assets/alphons.jpg';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Glows */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-neonBlue/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-neonViolet/20 rounded-full blur-[100px] animate-pulse delay-1000" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-neonBlue font-medium tracking-widest uppercase mb-4 text-sm md:text-base">Hello, I'm</h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight font-sans">
                        Alphons <span className="gradient-text">Biju</span>
                    </h1>
                    <h3 className="text-xl md:text-2xl text-gray-300 mb-6 font-light flex flex-wrap items-center gap-3">
                        <span className="text-neonBlue">•</span>
                        <span>Frontend Developer</span>
                        <span className="text-neonBlue">•</span>
                        <span>UI/UX Designer</span><br></br>
                        <span className="text-neonBlue">•</span>
                        <span>Tech Creator</span>
                    </h3>
                    <p className="text-gray-400 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
                        Building fast, beautiful, and meaningful digital experiences. Passionate about innovation, hackathons, and real-world problem solving.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#projects" className="group relative px-8 py-3 bg-transparent border border-neonBlue text-neonBlue font-semibold overflow-hidden rounded-full transition-all hover:bg-neonBlue hover:text-black hover:shadow-[0_0_20px_rgba(0,243,255,0.5)]">
                            <span className="relative z-10 flex items-center gap-2">
                                View Projects <ArrowRight size={18} />
                            </span>
                        </a>
                        <a href="#contact" className="px-8 py-3 bg-white/5 text-white font-semibold rounded-full hover:bg-white/10 transition-all border border-white/10 hover:border-white/20 backdrop-blur-sm">
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center mt-10 md:mt-0"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-neonBlue to-neonViolet rounded-full blur-[2px] opacity-100 p-1 animate-spin-slow" style={{ animationDuration: '10s' }}></div>
                        <div className="absolute inset-1 bg-darkBg rounded-full flex items-center justify-center overflow-hidden border-4 border-darkBg z-10">
                            <img
                                src={profileImg}
                                alt="Alphons Biju"
                                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 scale-105"
                            />
                        </div>

                        {/* Floating cards */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-2 glass-card p-4 rounded-xl border border-white/10 z-20"
                        >
                            <span className="text-neonBlue font-bold text-xl">2.5K+</span>
                            <p className="text-xs text-gray-400">Subscribers</p>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-10 -left-6 glass-card p-3 rounded-xl border border-white/10 flex items-center gap-3 z-20"
                        >
                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" x2="22" y1="12" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white">React Dev</p>
                                <p className="text-[10px] text-gray-400">Expertise</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
