import { motion } from 'framer-motion';
import { volunteersData } from '../data/volunteers';

const Volunteers = () => {
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
                        VOLUNTEER <span className="text-brand-red">TEAMS</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        Serve with us! There is a place for everyone to use their gifts.
                    </motion.p>
                </div>
            </section>

            {/* Teams Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col gap-20">
                        {volunteersData.map((team, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={team.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className={`flex flex-col md:flex-row gap-10 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Image Section */}
                                    <div className="w-full md:w-1/2">
                                        <div className="relative aspect-[3/4] md:aspect-square lg:aspect-[4/3] w-full bg-gray-200 rounded-lg overflow-hidden shadow-2xl group">
                                            {team.imageUrl ? (
                                                <img
                                                    src={team.imageUrl}
                                                    alt={team.name}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                                                {team.name}
                                            </h2>
                                            <h3 className="text-xl md:text-2xl text-brand-red font-semibold mb-6 uppercase tracking-wider">
                                                {team.role}
                                            </h3>
                                            <div className="h-1 w-20 bg-gray-400 mb-6 mx-auto md:mx-0" />
                                            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
                                                {team.bio}
                                            </p>
                                            <div className="mt-8">
                                                <a
                                                    href="https://forms.gle/rRhLTGrddQUzugck8"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block bg-brand-red text-white py-3 px-8 rounded font-bold uppercase tracking-widest hover:bg-red-700 transition-colors shadow-lg"
                                                >
                                                    Join This Team
                                                </a>
                                            </div>
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

export default Volunteers;
