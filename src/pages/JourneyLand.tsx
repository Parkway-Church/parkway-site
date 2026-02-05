import React from 'react';
import { motion } from 'framer-motion';

const JourneyLand: React.FC = () => {
    return (
        <div className="bg-[#fff9f0] min-h-screen overflow-hidden font-sans text-brand-black selection:bg-purple-300">

            {/* HERO SECTION - Finger Painted Style */}
            <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
                {/* Paint Splatter Backgrounds */}
                <div className="absolute inset-0 z-0 opacity-80">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute top-[-20%] left-[-20%] w-[80vw] h-[80vw] fill-red-400 mix-blend-multiply opacity-50 animate-pulse">
                        <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.3C87.4,-33.5,90.1,-18,88.4,-3.3C86.7,11.4,80.7,25.3,71.8,37.3C62.9,49.3,51.1,59.3,37.8,66.8C24.5,74.3,9.7,79.3,-4.2,86.6C-18.1,93.9,-31.1,103.5,-42.6,99.2C-54.1,94.9,-64,76.7,-71,60.1C-78,43.5,-82.1,28.5,-80.6,14.6C-79.1,0.7,-72,-12.1,-63.5,-22.9C-55,-33.7,-45.1,-42.5,-34.2,-51.2C-23.3,-59.9,-11.5,-68.5,1.7,-71.4C14.9,-74.3,29.8,-71.5,44.7,-76.4Z" transform="translate(100 100)" />
                    </svg>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] fill-yellow-400 mix-blend-multiply opacity-50">
                        <path d="M41.7,-73.4C54.1,-65.1,64.6,-54.6,73.1,-42.6C81.6,-30.6,88.1,-17.1,87.3,-3.9C86.5,9.4,78.4,22.4,68.8,33.5C59.2,44.6,48.1,53.8,36.5,61.9C24.9,70,12.8,77,-0.7,78.2C-14.2,79.4,-29.7,74.8,-42.9,67.1C-56.1,59.4,-67,48.6,-74.6,35.8C-82.2,23,-86.5,8.2,-83.4,-5.2C-80.3,-18.6,-69.7,-30.6,-58.5,-40.8C-47.3,-51,-35.5,-59.4,-23.4,-67.8C-11.3,-76.2,1.1,-84.6,13.6,-84.6C26.1,-84.6,38.7,-76.2,51.3,-67.7L41.7,-73.4Z" transform="translate(100 100)" />
                    </svg>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute top-[20%] right-[20%] w-[40vw] h-[40vw] fill-blue-400 mix-blend-multiply opacity-50">
                        <path d="M45.7,-78.3C58.9,-71.3,69.3,-59.6,76.3,-46.8C83.3,-34,86.9,-20.1,85.3,-6.9C83.7,6.3,76.9,18.8,68.3,29.8C59.7,40.8,49.3,50.3,37.8,57.4C26.3,64.5,13.7,69.2,0.8,67.8C-12.1,66.4,-25.3,58.9,-37.2,51.1C-49.1,43.3,-59.7,35.2,-67.3,24.8C-74.9,14.4,-79.5,1.7,-77.4,-10.1C-75.3,-21.9,-66.5,-32.8,-56.3,-41.8C-46.1,-50.8,-34.5,-57.9,-22.6,-65.7C-10.7,-73.5,1.5,-82,14.5,-82C27.5,-82,40.5,-73.5,45.7,-78.3Z" transform="translate(100 100)" />
                    </svg>
                </div>

                <div className="relative z-10 text-center px-4">
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        transition={{ type: "spring", bounce: 0.7 }}
                    >
                        <h1 className="font-marker text-8xl md:text-[10rem] leading-none text-brand-red drop-shadow-[5px_5px_0px_#FFD700] mb-6">
                            JOURNEY<br />
                            <span className="text-blue-500 drop-shadow-[5px_5px_0px_#FF10F0]">LAND</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="inline-block bg-white p-6 rotate-3 shadow-[8px_8px_0px_rgba(0,0,0,0.2)] border-4 border-dashed border-gray-300 rounded-[2rem]"
                    >
                        <p className="font-graffiti text-3xl md:text-5xl text-purple-600">
                            Create. Play. Grow.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ARTISTIC WELCOME */}
            <section className="py-24 px-4 bg-[#fff9f0] relative">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        initial={{ rotate: -5, opacity: 0 }}
                        whileInView={{ rotate: -2, opacity: 1 }}
                        className="md:w-1/2 relative"
                    >
                        {/* Paint strokes behind image */}
                        <div className="absolute -top-10 -left-10 w-full h-full bg-green-300 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] opacity-60"></div>
                        <div className="absolute -bottom-10 -right-10 w-full h-full bg-orange-300 rounded-[70%_30%_30%_70%/70%_70%_30%_30%] opacity-60"></div>

                        <img
                            src="https://images.unsplash.com/photo-1596464716127-f9a0859b4afd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Kids painting"
                            className="relative w-full h-[400px] object-cover rounded-[2rem] border-[8px] border-white shadow-xl"
                        />
                    </motion.div>

                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="font-marker text-6xl text-brand-red mb-8">
                            <span className="relative inline-block">
                                MESSY
                                <svg className="absolute w-full h-4 -bottom-1 left-0 text-yellow-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
                                </svg>
                            </span>
                            IS GOOD!
                        </h2>
                        <p className="font-sans text-xl text-gray-700 leading-relaxed mb-8">
                            Big fun. Big faith. Little hands.<br /> Journey Land at Parkway Christian Church is where kids learn about God through movement, creativity, and joy because messy moments often make the best memories.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full font-bold font-marker text-lg border-2 border-red-200 rotate-2">Crafts</span>
                            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-bold font-marker text-lg border-2 border-blue-200 -rotate-3">Music</span>
                            <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full font-bold font-marker text-lg border-2 border-green-200 rotate-1">Stories</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CLASSROOMS - Paint Pots Style */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4">
                    <h2 className="font-marker text-6xl text-center mb-16 text-gray-800">DROP OFF ZONES</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Nursery */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-pink-50 p-8 rounded-[3rem] border-4 border-pink-300 text-center relative shadow-[0_10px_20px_rgba(255,192,203,0.3)] h-full flex flex-col justify-center"
                        >
                            <div className="w-24 h-24 bg-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-white shadow-md">
                                <span className="text-3xl">👶</span>
                            </div>
                            <h3 className="font-marker text-3xl text-pink-500 mb-2">NURSERY</h3>
                            <p className="font-bold text-gray-500 mb-4">0 - 2 YEARS</p>
                            <p className="text-gray-600">Cuddles, lullabies, and God's love for our tiniest treasures. <br />In Room 1.</p>
                        </motion.div>

                        {/* Joined Toddlers & Pre-K Group */}
                        <div className="md:col-span-2 relative p-2 md:p-6 border-4 border-dashed border-gray-300 rounded-[3.5rem] bg-white/50">
                            {/* Optional Group Label can go here if requested later */}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Toddlers */}
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-blue-50 p-8 rounded-[3rem] border-4 border-blue-300 text-center relative shadow-[0_10px_20px_rgba(173,216,230,0.3)]"
                                >
                                    <div className="w-24 h-24 bg-blue-400 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-white shadow-md">
                                        <span className="text-3xl">🎨</span>
                                    </div>
                                    <h3 className="font-marker text-3xl text-blue-500 mb-2">TODDLERS</h3>
                                    <p className="font-bold text-gray-500 mb-4">2 - 3 YEARS</p>
                                    <p className="text-gray-600">First steps in faith with coloring, bubbles, and play.</p>
                                </motion.div>

                                {/* Preschool */}
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-green-50 p-8 rounded-[3rem] border-4 border-green-300 text-center relative shadow-[0_10px_20px_rgba(144,238,144,0.3)]"
                                >
                                    <div className="w-24 h-24 bg-green-400 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-white shadow-md">
                                        <span className="text-3xl">🚀</span>
                                    </div>
                                    <h3 className="font-marker text-3xl text-green-500 mb-2">PRE-K</h3>
                                    <p className="font-bold text-gray-500 mb-4">4 - 5 YEARS</p>
                                    <p className="text-gray-600">Getting ready for big school with big Bible stories!</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default JourneyLand;
