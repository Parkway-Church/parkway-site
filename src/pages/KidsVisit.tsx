import React from 'react';
import { motion } from 'framer-motion';

const KidsVisit: React.FC = () => {
    return (
        <div className="bg-white min-h-screen font-sans text-brand-black">
            {/* Hero Section */}
            <section className="relative py-20 bg-blue-500 text-white overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-marker text-5xl md:text-7xl mb-6 drop-shadow-lg"
                    >
                        YOUR FIRST VISIT
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl max-w-3xl mx-auto font-medium opacity-90"
                    >
                        We’re so excited you’re considering visiting Parkway Kids!
                    </motion.p>
                </div>
                {/* Decorative bubbles */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-32 translate-y-32" />
            </section>

            {/* Introduction */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-[2rem] shadow-xl border-4 border-yellow-400 relative"
                    >
                        <p className="text-xl text-gray-700 leading-relaxed font-medium">
                            Our heart is to create a safe, joyful, and welcoming environment where children can grow in their faith, build friendships, and experience the love of God in a meaningful way.
                        </p>
                        <p className="text-xl text-gray-700 leading-relaxed font-medium mt-6">
                            At Parkway Christian Church, families worship together at the beginning of service. During worship, we have a special Children’s Moment, and around 10:30 AM, children in Kindergarten through 5th grade are dismissed with their teacher to their classes while parents remain in worship and enjoy the rest of the service.
                        </p>
                        <p className="text-xl text-gray-700 leading-relaxed font-bold mt-6 text-blue-600">
                            We also offer nursery care for families with babies and younger children.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Experience & Safety Grid */}
            <section className="py-16 bg-gray-50 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Experience */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 rounded-[3rem] shadow-lg border-b-8 border-brand-red"
                    >
                        <h2 className="font-marker text-4xl text-brand-red mb-8">WHAT KIDS EXPERIENCE</h2>
                        <ul className="space-y-4">
                            {[
                                "Bible-based lessons",
                                "Fun activities",
                                "Interactive games",
                                "Encouraging friendships",
                                "A caring and welcoming environment"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-xl font-bold text-gray-700">
                                    <span className="text-yellow-500 text-2xl">★</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 text-gray-600 italic font-medium">
                            Our goal is to help children learn about Jesus in ways that are engaging, meaningful, and age-appropriate.
                        </p>
                    </motion.div>

                    {/* Safety */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 rounded-[3rem] shadow-lg border-b-8 border-blue-500"
                    >
                        <h2 className="font-marker text-4xl text-blue-600 mb-8">SAFETY & CARE</h2>
                        <p className="text-lg text-gray-600 mb-8 font-medium">
                            Your child’s safety matters to us. Parkway Kids is led by caring volunteers who are committed to creating a positive and secure environment for every child.
                        </p>
                        <div className="space-y-6">
                            {[
                                { title: "Background-checked volunteers", icon: "🛡️" },
                                { title: "Caring and attentive teachers", icon: "👩‍🏫" },
                                { title: "Safe and welcoming classrooms", icon: "🏫" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl border-2 border-blue-100">
                                    <span className="text-3xl">{item.icon}</span>
                                    <span className="text-xl font-bold text-blue-900">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Service Information */}
            <section className="py-20 px-4 bg-yellow-400">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-marker text-5xl mb-12 text-white drop-shadow-md">SERVICE INFORMATION</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="bg-white p-8 rounded-3xl shadow-xl">
                            <h3 className="font-bold text-gray-500 uppercase tracking-widest mb-4">When</h3>
                            <p className="text-2xl font-bold text-brand-black mb-2">Sunday Worship Service: 10:00 AM</p>
                            <p className="text-xl font-bold text-brand-red">Children’s Dismissal: Around 10:30 AM</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-xl">
                            <h3 className="font-bold text-gray-500 uppercase tracking-widest mb-4">Classes</h3>
                            <p className="text-2xl font-bold text-brand-black mb-2">Kindergarten – 5th Grade</p>
                            <p className="text-lg text-gray-600 font-medium italic">Nursery Care Available for Babies & Younger Children</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Questions & Contact */}
            <section className="py-20 px-4 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="font-marker text-4xl text-gray-900 mb-6">QUESTIONS?</h2>
                    <p className="text-xl text-gray-600 mb-12 font-medium">
                        We would love to help make your first visit comfortable and easy for your family.
                    </p>
                    
                    <div className="bg-gray-50 p-10 rounded-[2rem] border-4 border-dashed border-gray-300">
                        <address className="not-italic">
                            <p className="text-2xl font-bold text-brand-black mb-2">Parkway Christian Church</p>
                            <p className="text-lg text-gray-600 mb-6 font-medium">
                                1200 S Flamingo Rd<br />
                                Davie, FL 33325
                            </p>
                            
                            <div className="space-y-4">
                                <a href="tel:9544760020" className="block text-2xl font-bold text-brand-red hover:scale-105 transition-transform">
                                    954-476-0020
                                </a>
                                <a href="mailto:info@parkwaychristianchurch.org" className="block text-xl font-bold text-blue-600 hover:scale-105 transition-transform underline">
                                    info@parkwaychristianchurch.org
                                </a>
                            </div>
                        </address>
                    </div>

                    <motion.p 
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="mt-16 font-marker text-3xl text-brand-red rotate-[-2deg]"
                    >
                        We can’t wait to welcome your family to Parkway Kids!
                    </motion.p>
                </div>
            </section>
        </div>
    );
};

export default KidsVisit;
