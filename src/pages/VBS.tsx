import { motion } from 'framer-motion';

const VBS = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#6B21A8] via-[#C026D3] to-[#2563EB] text-white pt-20 relative overflow-hidden">
            {/* Animated Background Blobs - Brighter Neon */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.4, 1],
                        rotate: [0, 180, 0],
                        x: [-200, 200, -200],
                        y: [-200, 200, -200],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-cyan-400/30 blur-[140px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1.4, 1, 1.4],
                        rotate: [0, -180, 0],
                        x: [200, -200, 200],
                        y: [200, -200, 200],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-fuchsia-500/30 blur-[140px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        x: [0, 100, 0],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[30%] left-[20%] w-[50%] h-[50%] bg-lime-400/20 blur-[120px] rounded-full"
                />
            </div>

            {/* Main Content */}
            <section className="relative py-20 px-4 z-10">
                <div className="container mx-auto max-w-6xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h1 
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] leading-tight whitespace-nowrap overflow-visible px-2" 
                            style={{ fontFamily: '"Sedgwick Ave Display", cursive' }}
                        >
                            Vacation Bible School <span className="text-yellow-300 drop-shadow-[0_0_20px_rgba(253,224,71,0.8)]">26'</span>
                        </h1>
                        
                        <div className="flex flex-col items-center gap-4 mt-10">
                            <motion.p 
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-4xl md:text-6xl font-black text-white bg-gradient-to-r from-pink-500 to-red-500 px-10 py-3 -rotate-2 shadow-[0_10px_30px_rgba(236,72,153,0.5)] rounded-lg" 
                                style={{ fontFamily: '"Permanent Marker", cursive' }}
                            >
                                June 8-12
                            </motion.p>
                            <p className="text-2xl md:text-4xl font-bold text-cyan-300 drop-shadow-[0_0_10px_rgba(103,232,249,0.8)] mt-6 max-w-3xl" style={{ fontFamily: '"Permanent Marker", cursive' }}>
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
