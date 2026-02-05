import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Globe, BookOpen, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import { missionQuotes } from '../data/missionQuotes';

const OurMission = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuoteIndex((prev) => (prev + 1) % missionQuotes.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const values = [
        {
            icon: <Heart className="w-8 h-8 text-brand-red" />,
            title: "Unconditional Love",
            description: "Love in action, not just words."
        },
        {
            icon: <BookOpen className="w-8 h-8 text-brand-red" />,
            title: "Jesus First",
            description: "The center of everything we do."
        },
        {
            icon: <Users className="w-8 h-8 text-brand-red" />,
            title: "Authentic Community",
            description: "Growing together in faith, relationships, and purpose."
        },
        {
            icon: <Globe className="w-8 h-8 text-brand-red" />,
            title: "Global Impact",
            description: "Stronger together, United in Christ, Rich in diversity."
        }
    ];

    return (
        <div className="bg-[#c7c7c7] min-h-screen text-brand-black pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
                        backgroundPosition: 'center 30%'
                    }}
                >
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-7xl md:text-9xl font-bold tracking-tighter mb-4 text-white"
                    >
                        OUR <span className="text-brand-red">MISSION</span>
                    </motion.h1>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100px" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-1 bg-brand-red mx-auto"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="text-2xl md:text-4xl font-semibold text-white mt-6 tracking-wide"
                    >
                        Growing faith. Building community. Living like Jesus.
                    </motion.p>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-20 md:py-32 bg-[#c7c7c7]">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <motion.div {...fadeIn}>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-600 tracking-widest uppercase mb-8">Why We Exist</h2>
                        <p className="text-3xl md:text-5xl font-bold leading-tight">
                            "To walk with <span className="text-brand-red">people</span> through real life and point them to the <span className="text-brand-red">HOPE</span> <br />found in <span className="text-brand-red">JESUS</span>."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-20 bg-[#d4d4d4]">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1543666170-496a77d33b28?auto=format&fit=crop&q=80&w=1000"
                                alt="Community worship"
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">OUR <span className="text-brand-red">VISION</span></h2>
                            <p className="text-lg text-gray-800 leading-relaxed mb-6">
                                We see a church that is vibrant, diverse, and passionate about God. A place where everyone is welcome, nobody is perfect, and anything is possible.
                            </p>
                            <p className="text-lg text-gray-800 leading-relaxed mb-8">
                                Faith that’s alive. Love that’s real. People who care.
                            </p>
                            <div className="flex gap-4">
                                <Link to="/faith">
                                    <button className="bg-brand-red px-8 py-3 rounded font-bold hover:bg-white hover:text-brand-red transition-colors">
                                        READ OUR BELIEFS
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-[#c7c7c7]">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4">CORE <span className="text-brand-red">VALUES</span></h2>
                        <p className="text-gray-700">The principles that guide us every day.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-white/50 p-8 rounded-xl border border-black/5 hover:border-brand-red/50 transition-colors group"
                            >
                                <div className="mb-6 bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-brand-red/10 transition-colors">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-brand-red">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        {/* Quotes Carousel */}
                        <div className="h-32 mb-8 relative">
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={currentQuoteIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                                >
                                    <p className="text-white/90 text-xl italic font-serif max-w-2xl mx-auto">
                                        "{missionQuotes[currentQuoteIndex].text}"
                                    </p>
                                    <p className="text-white/70 font-bold mt-2 text-sm uppercase tracking-widest">
                                        — {missionQuotes[currentQuoteIndex].author}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">SEE FOR YOURSELF</h2>

                        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
                            The best way to understand our mission is to experience it. Join us this Sunday.
                        </p>
                        <Link to="/events">
                            <button className="bg-white text-brand-red px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors uppercase tracking-widest shadow-xl pointer-events-auto">
                                Plan Your Visit
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default OurMission;
