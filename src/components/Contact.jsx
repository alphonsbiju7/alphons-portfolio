import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Youtube, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's <span className="text-neonBlue">Connect</span></h2>
                    <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
                        Whether you have a question, a project idea, or just want to say hi, I'd love to hear from you.
                    </p>

                    <div className="flex justify-center gap-8 mb-12">
                        <a href="alphonsbiju.tech@gmail.com" className="p-4 glass-card rounded-full hover:bg-neonBlue/10 hover:text-neonBlue transition-all border border-white/5 hover:border-neonBlue/50 hover:-translate-y-2">
                            <Mail size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/alphons-biju-05875232a/?originalSubdomain=in" className="p-4 glass-card rounded-full hover:bg-blue-600/10 hover:text-blue-500 transition-all border border-white/5 hover:border-blue-500/50 hover:-translate-y-2">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://github.com/alphonsbiju7" className="p-4 glass-card rounded-full hover:bg-gray-700/50 hover:text-white transition-all border border-white/5 hover:border-white/50 hover:-translate-y-2">
                            <Github size={24} />
                        </a>
                        <a href="https://youtube.com/@gesgavetechy?si=AEbx8xTmEE0qRIYA" className="p-4 glass-card rounded-full hover:bg-red-600/10 hover:text-red-500 transition-all border border-white/5 hover:border-red-500/50 hover:-translate-y-2">
                            <Youtube size={24} />
                        </a>
                    </div>

                    <div className="glass-card p-8 rounded-2xl max-w-lg mx-auto text-left border border-white/5">
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Name</label>
                                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-neonBlue transition-colors" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Email</label>
                                <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-neonBlue transition-colors" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Message</label>
                                <textarea rows="4" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-neonBlue transition-colors" placeholder="Hello..." />
                            </div>
                            <button className="w-full bg-gradient-to-r from-neonBlue to-neonViolet text-black font-bold py-3 rounded-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all flex justify-center items-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
