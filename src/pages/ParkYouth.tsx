import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParkYouth: React.FC = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);


    return (
        <div className="bg-brand-black min-h-screen overflow-hidden font-sans text-white selection:bg-neon-pink selection:text-black">

            {/* HER0 SECTION */}
            <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
                {/* Parallax Background - Sticker Bomb */}
                <motion.div
                    style={{ y: y1 }}
                    className="absolute inset-0 z-0 opacity-40"
                >
                    <div
                        className="w-full h-[120%] bg-repeat bg-center"
                        style={{
                            backgroundImage: "url('/images/park_youth/sticker_bomb_bg.png')",
                            backgroundSize: '800px'
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-black/20 via-brand-black/60 to-brand-black"></div>
                </motion.div>



                {/* Main Content */}
                <div className="relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                        className="font-graffiti text-8xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-br from-neon-green via-neon-yellow to-neon-pink drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"
                    >
                        THE<br />PARK<br />YOUTH
                    </motion.h1>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 font-marker text-2xl md:text-4xl text-neon-green tracking-widest rotate-2 bg-black/50 p-2 inline-block border-2 border-neon-pink transform -skew-x-12"
                    >
                        OWN YOUR FAITH
                    </motion.p>
                </div>
            </section>

            {/* WHO WE ARE - Taped Paper Style */}
            <section className="relative py-20 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        className="bg-white text-black p-8 transform -rotate-2 shadow-[10px_10px_0px_#FF10F0] border-4 border-black relative"
                    >
                        {/* Tape effect */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gray-200/50 rotate-1"></div>

                        <h2 className="font-graffiti text-5xl mb-6 text-neon-purple">WHO WE ARE</h2>
                        <p className="font-marker text-xl leading-relaxed">
                            We are a chaotic, energetic, and Jesus-loving community.
                            We don't do boring. We do real.
                            Come hang out, play games, and dive deep into what it means to follow Christ in a world that tries to chaotic.
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        <div className="bg-black border-2 border-neon-green p-6 rounded-3xl transform rotate-1 shadow-[0_0_20px_#39FF14]">
                            <h3 className="font-graffiti text-3xl text-neon-green mb-2">MIDDLE SCHOOL</h3>
                            <p className="font-sans text-gray-300">Wednesdays @ 6:30PM. Chaos + Truth.</p>
                        </div>
                        <div className="bg-black border-2 border-neon-yellow p-6 rounded-3xl transform -rotate-1 shadow-[0_0_20px_#FAFF00]">
                            <h3 className="font-graffiti text-3xl text-neon-yellow mb-2">HIGH SCHOOL</h3>
                            <p className="font-sans text-gray-300">Sundays @ 6:00PM. Real talk + Deep Dive.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* EVENTS - Posters */}
            <section className="py-20 bg-gradient-to-t from-brand-black to-gray-900 border-t-8 border-neon-pink">
                <div className="container mx-auto px-4">
                    <h2 className="font-graffiti text-6xl text-center mb-16 text-white drop-shadow-[5px_5px_0px_#0EA5E9]">UPCOMING HYPE</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <motion.div
                                key={item}
                                whileHover={{ y: -10 }}
                                className="bg-zinc-900 border-4 border-white p-2 relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-neon-purple/20 group-hover:bg-neon-purple/40 transition-colors"></div>
                                <div className="h-48 bg-gray-800 mb-4 flex items-center justify-center overflow-hidden">
                                    <img src="/images/park_youth/sticker_bomb_bg.png" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <div className="p-4 relative z-10">
                                    <h3 className="font-marker text-3xl text-neon-yellow mb-2">SUMMER CAMP '26</h3>
                                    <p className="text-gray-300 mb-4 font-sans">Best week of your life. Don't miss it.</p>
                                    <button className="w-full py-3 bg-neon-pink text-black font-graffiti text-xl hover:bg-white transition-colors">
                                        REGISTER NOW
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ParkYouth;
