import { motion } from 'framer-motion';
import { leadershipData } from '../data/leadership';

const Leadership = () => {
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
                        OUR <span className="text-brand-red">LEADERSHIP</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        Meet the team dedicated to serving our church and community.
                    </motion.p>
                </div>
            </section>

            {/* Leadership Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col gap-20">
                        {leadershipData.map((leader, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={leader.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className={`flex flex-col md:flex-row gap-10 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Image Section */}
                                    <div className="w-full md:w-1/2">
                                        <div className="relative aspect-[5/4] w-full bg-gray-200 rounded-lg overflow-hidden shadow-2xl group">
                                            {leader.imageUrl ? (
                                                <img
                                                    src={leader.imageUrl}
                                                    alt={leader.name}
                                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-zinc-600">
                                                    No Image Available
                                                </div>
                                            )}
                                            {/* Decorative overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-60" />
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                                        <div className={`${isEven ? 'md:text-left' : 'md:text-left'} text-center md:text-left`}>
                                            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-brand-black">
                                                {leader.name}
                                            </h2>
                                            <h3 className="text-xl md:text-2xl text-brand-red font-semibold mb-6 uppercase tracking-wider">
                                                {leader.role}
                                            </h3>
                                            <div className="h-1 w-20 bg-gray-400 mb-6 mx-auto md:mx-0" />
                                            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
                                                {leader.bio}
                                            </p>
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

export default Leadership;
