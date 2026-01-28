import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
    // Array of available banner images
    const bannerImages = [
        '/images/home_banner/autumn-2026-01-06-09-12-57-utc (1).jpg',
        '/images/home_banner/city-street-at-night-with-bokeh-lights-2026-01-08-02-41-38-utc (1).jpg',
        '/images/home_banner/dark-alley-city-boulevard-surrounded-by-trees-2026-01-05-22-40-46-utc (1).jpg',
        '/images/home_banner/road-into-the-distance-2026-01-07-00-28-14-utc (1).jpg',
        '/images/home_banner/road-into-the-distance-2026-01-09-11-46-17-utc (1).jpg'
    ];

    // Select random image once on mount
    const [bgImage] = React.useState(() => {
        const randomIndex = Math.floor(Math.random() * bannerImages.length);
        return bannerImages[randomIndex];
    });

    // Parallax effect
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 400]);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 w-full h-[120%] -top-[10%]"
            >
                <img
                    src={bgImage}
                    alt="Parkway Christian Church"
                    className="w-full h-full object-cover saturate-[.2]"
                />
                <div className="absolute inset-0 bg-black/40" />
            </motion.div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">

                {/* Main Title - Roboto with Frame */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="font-roboto text-brand-red text-5xl md:text-8xl font-bold uppercase tracking-widest border-4 border-brand-red px-8 py-4 mb-6 select-none bg-black/20 backdrop-blur-sm"
                >
                    Parkway Christian Church
                </motion.h1>

                {/* Subtitle - Script Font */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="font-['Dancing_Script'] text-white text-4xl md:text-6xl transform -rotate-3"
                >
                    Come, Journey With Us
                </motion.h2>

            </div>
        </section>
    );
};

export default Hero;
