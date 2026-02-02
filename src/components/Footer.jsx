import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 text-center text-gray-500 border-t border-white/5 bg-black/80 backdrop-blur-sm">
            <p>© {new Date().getFullYear()} Alphons Biju. All Rights Reserved.</p>
            <p className="text-sm mt-2">Built with <span className="text-neonBlue">React </span> <span className="text-neonViolet">& Tailwind CSS</span></p>
        </footer>
    );
};

export default Footer;
