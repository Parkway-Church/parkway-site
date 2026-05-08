import { motion } from 'framer-motion';

const VBS = () => {
    return (
        <div className="bg-[#6B21A8] min-h-screen text-white pt-20">
            {/* Hero Section */}
            <section className="relative py-20 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white uppercase italic">
                            VBS <span className="text-yellow-400">2026</span>
                        </h1>
                        <p className="text-2xl md:text-3xl font-bold mb-8 text-white/90">
                            JUNE 8 TO 12, 2026
                        </p>
                        <div className="h-1 w-24 bg-yellow-400 mx-auto mb-12" />
                    </motion.div>

                    {/* Flyer Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 mb-12"
                    >
                        <img
                            src="/images/vbs-flyer.png"
                            alt="Vacation Bible School - Illumination Station"
                            className="w-full h-auto"
                        />
                    </motion.div>

                    {/* Description Text */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400 italic">
                            ILLUMINATION STATION
                        </h2>
                        <p className="text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto font-medium">
                            Shining a light on who Jesus really is!<br />
                            <span className="text-lg opacity-80 mt-2 block italic text-white/70 font-marker">John 8:12</span>
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-lg font-bold">
                            <span className="bg-white/10 px-6 py-2 rounded-full border border-white/20">AGES 4 TO 12</span>
                            <span className="bg-white/10 px-6 py-2 rounded-full border border-white/20 text-yellow-400">LIMITED SPACES</span>
                        </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 pb-20"
                    >
                        <a
                            href="https://forms.gle/MPqpEjyat7Ew3EsA9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-yellow-400 text-purple-900 font-black px-10 py-5 rounded-2xl hover:bg-white hover:-translate-y-1 transition-all duration-300 uppercase tracking-tighter text-xl shadow-[0_8px_0_rgb(202,138,4)] active:shadow-none active:translate-y-1"
                        >
                            Register Kids Here
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                        <a
                            href="https://forms.gle/CH1xcrSv7wkF6g5v5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 text-white border-2 border-white/20 font-bold px-10 py-5 rounded-2xl hover:bg-white hover:text-purple-900 hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider text-lg shadow-xl"
                        >
                            Volunteer Registration
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default VBS;
