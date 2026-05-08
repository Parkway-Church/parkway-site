import { motion } from 'framer-motion';

const VBS = () => {
    return (
        <div className="min-h-screen bg-[#6B21A8] text-white pt-20 relative overflow-hidden">
            {/* Animated Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        x: [-100, 100, -100],
                        y: [-100, 100, -100],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-pink-500/20 blur-[120px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [0, -90, 0],
                        x: [100, -100, 100],
                        y: [100, -100, 100],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-500/20 blur-[120px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, 50, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-yellow-500/10 blur-[100px] rounded-full"
                />
            </div>

            {/* Main Content */}
            <section className="relative py-20 px-4 z-10">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-4 text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] leading-tight" style={{ fontFamily: '"Sedgwick Ave Display", cursive' }}>
                            Vacation Bible School <span className="text-yellow-300 block md:inline md:ml-4 text-6xl md:text-9xl drop-shadow-[0_0_20px_rgba(253,224,71,0.5)]">26'</span>
                        </h1>
                        
                        <div className="flex flex-col items-center gap-2 mt-8">
                            <p className="text-3xl md:text-5xl font-black text-white bg-pink-600 px-8 py-2 rotate-1 shadow-xl rounded-sm" style={{ fontFamily: '"Permanent Marker", cursive' }}>
                                June 8-12
                            </p>
                            <p className="text-xl md:text-3xl font-bold text-yellow-300 drop-shadow-md mt-4 max-w-2xl" style={{ fontFamily: '"Permanent Marker", cursive' }}>
                                Closing Celebration Sunday 14, 2026 at 10 am.
                            </p>
                        </div>
                    </motion.div>

                    {/* Flyer Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] border-8 border-white/10 mb-16 group"
                    >
                        <img
                            src="/images/vbs-main.jpg"
                            alt="Vacation Bible School - Illumination Station"
                            className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-8 pb-20"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://forms.gle/MPqpEjyat7Ew3EsA9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-yellow-400 text-purple-900 font-black px-12 py-6 rounded-2xl transition-all duration-300 uppercase tracking-tighter text-2xl shadow-[0_10px_0_rgb(202,138,4)] hover:shadow-[0_15px_30px_rgba(253,224,71,0.4)]"
                            style={{ fontFamily: '"Permanent Marker", cursive' }}
                        >
                            Register Kids Here
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://forms.gle/CH1xcrSv7wkF6g5v5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-purple-900 font-bold px-10 py-5 rounded-2xl transition-all duration-300 uppercase tracking-wider text-xl shadow-xl hover:bg-blue-400 hover:text-white"
                            style={{ fontFamily: '"Permanent Marker", cursive' }}
                        >
                            Volunteer Registration
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default VBS;
