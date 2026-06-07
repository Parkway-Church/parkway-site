import { motion } from 'framer-motion';
import { User, Quote } from 'lucide-react';
import { eldersData } from '../data/elders';

const Elders = () => {
    return (
        <div className="bg-[#e3e3e3] min-h-screen text-brand-black pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-[#e3e3e3] border-b border-gray-300">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase"
                    >
                        Circle of <span className="text-brand-red">Elders</span>
                    </motion.h1>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100px" }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="h-1 bg-brand-red mx-auto mb-6"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-600 max-w-2xl mx-auto text-lg"
                    >
                        Guided by faith, wisdom, and prayer, our Circle of Elders serves to shepherd the spiritual life of our congregation.
                    </motion.p>
                </div>
            </section>

            {/* Elders Grid Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {eldersData.map((elder, index) => (
                            <motion.div
                                key={elder.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                {/* Photo / Placeholder Section */}
                                <div className="w-full md:w-2/5 aspect-[4/5] md:aspect-auto bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center relative overflow-hidden shrink-0 group">
                                    {elder.imageUrl ? (
                                        <img
                                            src={elder.imageUrl}
                                            alt={elder.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-400 p-6">
                                            <div className="bg-white/10 p-5 rounded-full mb-3 backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                                <User size={48} className="text-zinc-300" />
                                            </div>
                                            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Photo Coming Soon</span>
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="p-8 flex flex-col justify-between w-full relative">
                                    {/* Quote Icon Background */}
                                    <div className="absolute top-4 right-4 text-brand-red/5 pointer-events-none">
                                        <Quote size={80} />
                                    </div>

                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold text-brand-black mb-1">
                                            {elder.name}
                                        </h3>
                                        <p className="text-xs uppercase tracking-widest text-brand-red font-bold mb-6">
                                            Elder
                                        </p>
                                        <p className="text-gray-600 italic leading-relaxed relative text-base pl-4 border-l-2 border-brand-red/40">
                                            {elder.quote}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Elders;
