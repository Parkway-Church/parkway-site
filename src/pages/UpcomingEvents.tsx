import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchAllSpecialEvents } from '../services/calendarService';
import type { GrapeBannerEvent } from '../services/calendarService';

const UpcomingEvents = () => {
    const [events, setEvents] = useState<GrapeBannerEvent[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAllSpecialEvents()
            .then(setEvents)
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="bg-[#111111] min-h-screen text-white pt-20">
            {/* Hero */}
            <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("/images/worship.webp")' }}
                >
                    <div className="absolute inset-0 bg-black/65" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-brand-red uppercase tracking-widest text-5xl md:text-7xl font-bold mb-3"
                    >
                        Special Events
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="text-5xl md:text-7xl font-bold tracking-tighter mb-4"
                    >
                        UPCOMING <span className="text-brand-red">EVENTS</span>
                    </motion.h1>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100px' }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-1 bg-brand-red mx-auto"
                    />
                </div>
            </section>

            {/* Event Banners */}
            <section className="py-16 px-4 max-w-6xl mx-auto space-y-10">
                {loading && (
                    Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="w-full h-[480px] rounded-3xl bg-white/5 animate-pulse" />
                    ))
                )}

                {!loading && events.length === 0 && (
                    <div className="text-center py-32 text-gray-400">
                        <p className="text-2xl font-bold mb-2">No upcoming special events</p>
                        <p className="text-sm">Check back soon — new events will appear here.</p>
                    </div>
                )}

                {!loading && events.map((event, i) => (
                    <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.12 }}
                        className="relative w-full h-[480px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl group"
                    >
                        {/* Background image */}
                        <img
                            src={event.image}
                            alt={event.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Gradient overlay — stronger on left for text legibility */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 max-w-2xl">
                            {/* Badge */}
                            <span className="inline-flex items-center gap-2 bg-brand-red/90 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full w-fit mb-5">
                                <span className="w-1.5 h-1.5 rounded-full bg-white inline-block animate-pulse" />
                                Special Event
                            </span>

                            {/* Title */}
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 drop-shadow-lg">
                                {event.title}
                            </h2>

                            {/* Meta row */}
                            <div className="flex flex-wrap items-center gap-5 mb-5 text-white/80 text-sm font-medium">
                                <span className="flex items-center gap-2">
                                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {event.date}
                                </span>
                                <span className="flex items-center gap-2">
                                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {event.time}
                                </span>
                                {event.location && (
                                    <span className="flex items-center gap-2">
                                        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {event.location}
                                    </span>
                                )}
                            </div>

                            {/* Description */}
                            {event.description && (
                                <p className="text-white/70 text-sm md:text-base leading-relaxed mb-7 max-w-xl line-clamp-3">
                                    {event.description}
                                </p>
                            )}

                            {/* CTA */}
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={event.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/40 font-bold px-8 py-3.5 rounded-xl hover:bg-white/30 transition-colors uppercase tracking-wider text-sm w-fit shadow-lg"
                                >
                                    Add to Calendar
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </a>
                                {(event.title.toLowerCase().includes('vbs') || event.title.toLowerCase().includes('vacation')) && (
                                    <>
                                        <a
                                            href="https://forms.gle/MPqpEjyat7Ew3EsA9"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-brand-red text-white font-bold px-8 py-3.5 rounded-xl hover:bg-red-700 transition-colors uppercase tracking-wider text-sm w-fit shadow-lg"
                                        >
                                            Register Kids Here
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://forms.gle/rRhLTGrddQUzugck8"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-white text-brand-black border border-white font-bold px-8 py-3.5 rounded-xl hover:bg-gray-200 transition-colors uppercase tracking-wider text-sm w-fit shadow-lg"
                                        >
                                            Volunteer registration
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </a>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </section>
        </div>
    );
};

export default UpcomingEvents;
