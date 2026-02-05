import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const JourneyKids: React.FC = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);

    return (
        <div className="bg-white min-h-screen overflow-hidden font-sans text-brand-black selection:bg-yellow-300">

            {/* HERO SECTION - Playful & Colorful */}
            <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
                {/* Abstract Background Shapes */}
                <motion.div style={{ y: y1 }} className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute top-[-10%] left-[-10%] w-[50vh] h-[50vh] bg-blue-400 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[60vh] h-[60vh] bg-yellow-400 rounded-full blur-[100px]" />
                    <div className="absolute top-[40%] left-[60%] w-[40vh] h-[40vh] bg-brand-red rounded-full blur-[100px]" />
                </motion.div>

                {/* Main Content */}
                <div className="relative z-10 text-center px-4">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.6 }}
                    >
                        <h1 className="font-marker text-7xl md:text-9xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-brand-red to-yellow-500 drop-shadow-sm mb-4">
                            JOURNEY KIDS
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="font-sans text-2xl md:text-3xl font-bold text-gray-700 tracking-wide"
                    >
                        WHERE FUN MEETS FAITH!
                    </motion.p>
                </div>

                {/* Wavy Divider Bottom */}
                <div className="absolute bottom-0 left-0 w-full leading-none rotate-180 text-brand-red">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] fill-current text-white"><path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path></svg>
                </div>
            </section>

            {/* WELCOME SECTION */}
            <section className="py-20 px-4 bg-white relative">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="md:w-1/2"
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-yellow-300 rounded-[2rem] rotate-3 opacity-50"></div>
                            <img
                                src="https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Kids playing"
                                className="relative rounded-[2rem] shadow-xl w-full object-cover h-[400px] rotate-[-2deg] border-4 border-white"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="md:w-1/2 text-center md:text-left"
                    >
                        <h2 className="font-marker text-5xl md:text-6xl text-brand-red mb-6">WELCOME!</h2>
                        <p className="text-xl text-gray-600 leading-relaxed mb-6 font-medium">
                            Welcome to Parkway Kids, where faith is fun, creativity is encouraged, and a little mess means learning is happening. In a safe and joyful environment, children explore God’s love through hands-on activities, music, and stories.
                        </p>
                        <button className="bg-yellow-400 text-brand-black font-bold py-3 px-8 rounded-full shadow-[0_4px_0_rgb(202,138,4)] hover:shadow-[0_2px_0_rgb(202,138,4)] hover:translate-y-[2px] transition-all text-lg uppercase tracking-wide">
                            Plan A Visit
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* AGE GROUPS - Cards */}
            <section className="py-24 bg-blue-50 relative overflow-hidden">
                {/* Decorative Dots */}
                <div className="absolute top-10 left-10 w-8 h-8 rounded-full bg-brand-red opacity-50"></div>
                <div className="absolute bottom-20 right-20 w-12 h-12 rounded-full bg-yellow-400 opacity-50"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="font-marker text-5xl text-center text-blue-900 mb-16">OUR CLASSES</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Elementary Card */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-[3rem] p-8 shadow-xl border-4 border-brand-red relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 bg-brand-red text-white rounded-bl-[2rem] font-bold">
                                K - 5TH GRADE
                            </div>
                            <h3 className="font-marker text-4xl text-brand-red mb-4 mt-4">ELEMENTARY</h3>
                            <p className="text-gray-600 mb-6 font-medium text-lg">
                                High-energy worship, interactive lessons, and small groups designed to help kids grow in faith.
                            </p>
                            <div className="bg-blue-50 rounded-2xl p-6 text-blue-800 font-bold border-2 border-blue-200 border-dashed">
                                <p>SUNDAYS @ 10:30 AM
                                </p>
                            </div>
                        </motion.div>

                        {/* The Park Youth Card - Custom Motif */}
                        <Link to="/youth">
                            <motion.div
                                whileHover={{ scale: 1.02, rotate: 1 }}
                                className="bg-brand-black rounded-[3rem] p-8 shadow-[0_0_30px_#FF10F0] border-4 border-neon-pink relative overflow-hidden h-full group cursor-pointer"
                            >
                                {/* Graffiti Background Effect */}
                                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/wall-4-light.png')]"></div>

                                <div className="absolute top-0 right-0 p-4 bg-neon-pink text-black rounded-bl-[2rem] font-graffiti text-xl transform">
                                    6TH - 12TH
                                </div>

                                <h3 className="font-graffiti text-5xl text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-neon-yellow to-neon-pink mb-4 mt-4 drop-shadow-sm">
                                    THE PARK YOUTH
                                </h3>

                                <p className="text-gray-300 mb-6 font-marker text-lg tracking-wide">
                                    TOO OLD FOR KIDS? <br />
                                    <span className="text-neon-yellow">LEVEL UP.</span>
                                </p>

                                <div className="bg-zinc-900/80 rounded-2xl p-6 text-neon-green font-graffiti border-2 border-neon-green border-dashed backdrop-blur-sm group-hover:bg-zinc-800 transition-colors">
                                    <p className="mb-2">SUNDAYS @ 11:30 AM</p>
                                    <div className="flex items-center gap-2 text-white font-sans text-sm font-bold uppercase tracking-wider">
                                        Enter The Park <span>→</span>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JourneyKids;
