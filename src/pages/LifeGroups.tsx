import { motion } from 'framer-motion';
import { lifeGroupsData } from '../data/lifeGroups';

const LifeGroups = () => {
    return (
        <div className="bg-[#e3e3e3] min-h-screen text-brand-black pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-[#e3e3e3] border-b border-gray-300">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter mb-4"
                    >
                        LIFE <span className="text-brand-red">GROUPS</span>
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
                        Life is better together. Find a community where you can grow, laugh, and do life with others.
                    </motion.p>
                </div>
            </section>

            {/* Groups Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col gap-20">
                        {lifeGroupsData.map((group, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={group.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className={`flex flex-col md:flex-row gap-10 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Image Section */}
                                    <div className="w-full md:w-1/2">
                                        <div className="relative aspect-[4/3] w-full bg-gray-200 rounded-lg overflow-hidden shadow-2xl group">
                                            {group.imageUrl ? (
                                                <img
                                                    src={group.imageUrl}
                                                    alt={group.name}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-zinc-600">
                                                    No Image Available
                                                </div>
                                            )}
                                            {/* Decorative overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent opacity-60" />

                                            {/* Overlaid Details */}
                                            <div className="absolute bottom-0 left-0 p-6 text-white w-full bg-gradient-to-t from-black/80 to-transparent">
                                                <div className="flex flex-wrap gap-4 text-sm font-bold uppercase tracking-wider">
                                                    <span className="bg-brand-red px-3 py-1 rounded-full">{group.day} @ {group.time}</span>
                                                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">{group.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                                        <div className={`${isEven ? 'md:text-left' : 'md:text-left'} text-center md:text-left`}>
                                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-black">
                                                {group.name}
                                            </h2>

                                            <div className="h-1 w-20 bg-gray-400 mb-6 mx-auto md:mx-0" />

                                            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap mb-8">
                                                {group.bio}
                                            </p>

                                            <button className="bg-brand-red text-white py-3 px-8 rounded font-bold uppercase tracking-widest hover:bg-red-700 transition-colors shadow-lg transform hover:-translate-y-1">
                                                Join This Group
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LifeGroups;
