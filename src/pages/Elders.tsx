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
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center">
                        {eldersData.map((elder, index) => (
                            <motion.div
                                key={elder.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full"
                            >
                                {/* Photo / Placeholder Section */}
                                <div className="aspect-square bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center relative overflow-hidden group shrink-0">
                                    {elder.imageUrl ? (
                                        <img
                                            src={elder.imageUrl}
                                            alt={elder.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-400 p-4">
                                            <div className="bg-white/10 p-4 rounded-full mb-2 backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                                <User size={36} className="text-zinc-300" />
                                            </div>
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Photo Coming Soon</span>
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="p-5 flex flex-col justify-between flex-grow relative">
                                    {/* Quote Icon Background */}
                                    <div className="absolute top-2 right-2 text-brand-red/5 pointer-events-none">
                                        <Quote size={40} />
                                    </div>

                                    <div className="relative z-10 flex flex-col h-full justify-between">
                                        <div>
                                            <h3 className="text-xl text-brand-black mb-0.5 line-clamp-1" style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}>
                                                {elder.name}
                                            </h3>
                                            <p className="text-[10px] uppercase tracking-widest text-brand-red font-bold mb-3">
                                                Elder
                                            </p>
                                        </div>
                                        <p className="text-gray-600 italic leading-relaxed text-sm pl-2 border-l border-brand-red/30 line-clamp-4">
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
