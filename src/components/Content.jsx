import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Play } from 'lucide-react';

const Content = () => {
    return (
        <section id="content" className="py-20 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute right-0 top-20 w-1/2 h-full bg-neonViolet/5 blur-[100px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Youtube className="text-red-500" size={32} />
                            <span className="text-xl font-bold tracking-widest uppercase">Content Creation</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Sharing Knowledge on <span className="text-red-500">YouTube</span></h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            I run a tech channel called <span className="text-white font-semibold">gesgavetechy</span> where I share tutorials, coding tips, and tech reviews.
                            With over <span className="text-neonViolet font-bold">2.5K+ subscribers</span>, my mission is to make technology accessible and exciting for everyone.
                        </p>

                        <a href="https://www.youtube.com/@gesgavetechy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                            <Play size={20} fill="currentColor" /> Visit Channel
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="glass-card p-4 rounded-2xl border border-white/10 relative z-10">
                            <div className="aspect-video bg-black/50 rounded-xl overflow-hidden flex items-center justify-center relative group cursor-pointer border border-white/5">
                                {/* Placeholder for video thumbnail or just a neat visual */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-black/80" />
                                <Youtube size={64} className="text-white/80 group-hover:text-red-500 transition-colors relative z-10" />
                                <p className="absolute bottom-4 left-4 text-white font-medium z-10">Latest Tech Tutorials</p>
                            </div>
                            <div className="flex justify-between items-center mt-4 px-2">
                                <div>
                                    <h4 className="font-bold text-white">gesgavetechy</h4>
                                    <p className="text-sm text-gray-400">2.5K subscribers</p>
                                </div>
                                <button className="text-xs bg-white text-black font-semibold px-3 py-1 rounded-full uppercase">Subscribe</button>
                            </div>
                        </div>

                        {/* Decorative floaters */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-500/20 rounded-full blur-2xl animate-pulse" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Content;
