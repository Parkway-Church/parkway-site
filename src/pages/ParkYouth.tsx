import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { youthEvents as staticEvents, type YouthEvent } from '../data/youthEvents';
import { fetchUpcomingEvents, fetchSpecialEvent, type CalendarEvent, type GrapeBannerEvent } from '../services/calendarService';
import { calendarConfig } from '../config/calendar';

const ParkYouth: React.FC = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    // State for dynamic events
    const [events, setEvents] = useState<YouthEvent[] | CalendarEvent[]>(staticEvents);
    const [specialEvent, setSpecialEvent] = useState<GrapeBannerEvent | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadEvents = async () => {
            try {
                // Fetch using the youth calendar ID from config, skip 14 days ahead
                const [fetchedEvents, youthSpecialEvent] = await Promise.all([
                    fetchUpcomingEvents(3, calendarConfig.youthCalendarId, 14),
                    fetchSpecialEvent(calendarConfig.youthCalendarId)
                ]);
                setSpecialEvent(youthSpecialEvent);

                if (fetchedEvents && fetchedEvents.length > 0) {
                    // Intercept and update Yth Night to Yth Connect
                    const updatedEvents = fetchedEvents.map(event => {
                        const titleUpper = event.title.toUpperCase();
                        if (titleUpper.includes('YTH NIGHT') || titleUpper.includes('YTH CONNECT') || titleUpper.includes('YOUTH NIGHT') || titleUpper.includes('YOUTH CONNECT')) {
                            return {
                                ...event,
                                title: 'YTH CONNECT',
                                description: 'Real conversations. Real faith. Real Community.',
                                image: '/images/park_youth/yth_connect.jpg'
                            };
                        } else if (titleUpper.includes('BEACH DAY') || titleUpper.includes('YOUTH RETREAT') || titleUpper.includes('RETREAT')) {
                            return {
                                ...event,
                                title: 'YOUTH RETREAT',
                                description: 'Encounter God in a powerful way. Games - Worship - Bonfires - Late-night laughs - Life-changing moments',
                                date: 'SEPT 4-7',
                                image: '/images/park_youth/youth_retreat.png'
                            };
                        } else if (titleUpper.includes('SUMMER CAMP')) {
                            return {
                                ...event,
                                title: "SUMMER CAMP '26",
                                description: "Best week of your life. 7th grade to 10th grade",
                                date: "JULY 5-10"
                            };
                        } else if (titleUpper.includes('YOUTH GROUP')) {
                            if (event.date === 'JUN 7' || event.date === 'JUN 14') {
                                return {
                                    ...event,
                                    description: 'After Worship - Meet at 11:30 am in Room 2'
                                };
                            }
                        }
                        return event;
                    });
                    setEvents(updatedEvents);
                } else {
                    setEvents(staticEvents.slice(0, 3) as any);
                }
            } catch (error) {
                console.error('Error loading youth events:', error);
                setEvents(staticEvents.slice(0, 3) as any);
            } finally {
                setLoading(false);
            }
        };
        loadEvents();
    }, []);


    return (
        <div className="bg-brand-black min-h-screen overflow-hidden font-sans text-white selection:bg-neon-pink selection:text-black">

            {/* HER0 SECTION */}
            <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
                {/* Parallax Background - Sticker Bomb */}
                <motion.div
                    style={{ y: y1 }}
                    className="absolute inset-0 z-0 opacity-40"
                >
                    <div
                        className="w-full h-[120%] bg-repeat bg-center"
                        style={{
                            backgroundImage: "url('/images/park_youth/sticker_bomb_bg.png')",
                            backgroundSize: '800px'
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-black/20 via-brand-black/60 to-brand-black"></div>
                </motion.div>



                {/* Main Content */}
                <div className="relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                        className="font-graffiti text-8xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-br from-neon-green via-neon-yellow to-neon-pink drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"
                    >
                        THE<br />PARK<br />YOUTH
                    </motion.h1>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 font-marker text-2xl md:text-4xl text-neon-green tracking-widest rotate-2 bg-black/50 p-2 inline-block border-2 border-neon-pink transform -skew-x-12"
                    >
                        OWN YOUR FAITH
                    </motion.p>
                </div>
            </section>

            {/* WHO WE ARE - Taped Paper Style */}
            <section className="relative py-20 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        className="bg-white text-black p-8 transform -rotate-2 shadow-[10px_10px_0px_#FF10F0] border-4 border-black relative"
                    >
                        {/* Tape effect */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gray-200/50 rotate-1"></div>

                        <h2 className="font-graffiti text-5xl mb-6 text-neon-purple">WHO WE ARE</h2>
                        <p className="font-marker text-xl leading-relaxed">
                            We are a chaotic, energetic, and Jesus-loving community.
                            We don't do boring. We do real.
                            Come hang out, play games, and dive deep into what it means to follow Christ in a world that tries to chaotic.
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        <div className="bg-black border-2 border-neon-green p-6 rounded-3xl transform rotate-1 shadow-[0_0_20px_#39FF14]">
                            <h3 className="font-graffiti text-3xl text-neon-green mb-2">MIDDLE SCHOOL</h3>
                            <p className="font-sans text-gray-300">Sundays @ 11:30 AM. Chaos + Truth.</p>
                        </div>
                        <div className="bg-black border-2 border-neon-yellow p-6 rounded-3xl transform -rotate-1 shadow-[0_0_20px_#FAFF00]">
                            <h3 className="font-graffiti text-3xl text-neon-yellow mb-2">HIGH SCHOOL</h3>
                            <p className="font-sans text-gray-300">Sundays @ 11:30 AM. Real talk + Deep Dive.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* EVENTS - Posters */}
            <section className="py-20 bg-gradient-to-t from-brand-black to-gray-900 border-t-8 border-neon-pink">
                <div className="container mx-auto px-4">
                    
                    {/* Featured Special Event Banner */}
                    {specialEvent && (
                        <div className="max-w-6xl mx-auto mb-20">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative overflow-hidden border-4 border-white bg-black p-1 shadow-[10px_10px_0px_#39FF14] md:shadow-[15px_15px_0px_#39FF14] flex flex-col md:flex-row gap-8 items-center"
                            >
                                {/* Background sticker bomb pattern */}
                                <div 
                                    className="absolute inset-0 opacity-10 pointer-events-none"
                                    style={{
                                        backgroundImage: "url('/images/park_youth/sticker_bomb_bg.png')",
                                        backgroundSize: '400px'
                                    }}
                                />
                                
                                {/* Image Container */}
                                <div className="w-full md:w-1/2 h-64 md:h-80 relative overflow-hidden shrink-0 border-b-4 md:border-b-0 md:border-r-4 border-white bg-zinc-900">
                                    <img
                                        src={specialEvent.image}
                                        alt={specialEvent.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    
                                    <div className="absolute top-4 left-4 bg-neon-pink text-black font-marker text-xl px-4 py-1.5 border-2 border-black rotate-[-3deg] shadow-[3px_3px_0px_#000]">
                                        FEATURED EVENT
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="p-6 md:p-8 flex-grow flex flex-col relative z-10 w-full">
                                    <div className="flex flex-wrap items-center gap-4 mb-4 font-marker text-lg text-neon-yellow">
                                        <span className="flex items-center gap-2 bg-zinc-900 border border-neon-yellow/30 px-3 py-1 rounded-full">
                                            <svg className="w-5 h-5 text-neon-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {specialEvent.date}
                                        </span>
                                        {specialEvent.time && specialEvent.time !== 'All Day' && (
                                            <span className="flex items-center gap-2 bg-zinc-900 border border-neon-yellow/30 px-3 py-1 rounded-full">
                                                <svg className="w-5 h-5 text-neon-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                {specialEvent.time}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="font-graffiti text-4xl md:text-5xl text-neon-green mb-4 leading-none tracking-wide">
                                        {specialEvent.title}
                                    </h3>

                                    <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed font-sans max-w-2xl">
                                        {specialEvent.description}
                                    </p>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a
                                            href={specialEvent.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-8 py-3 bg-neon-pink text-black font-marker text-lg text-center hover:bg-white transition-colors border-2 border-black shadow-[4px_4px_0px_#000] active:translate-y-1 active:shadow-[1px_1px_0px_#000] uppercase"
                                        >
                                            ADD TO CALENDAR
                                        </a>
                                        {/* {!specialEvent.title.toLowerCase().includes('summer bash') && (
                                            <a
                                                href="https://fldisciplesregionalchurch.regfox.com/2026-summer-camp-grades-3-12"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-8 py-3 bg-neon-green text-black font-marker text-lg text-center hover:bg-white transition-colors border-2 border-black shadow-[4px_4px_0px_#000] active:translate-y-1 active:shadow-[1px_1px_0px_#000] uppercase"
                                            >
                                                REGISTER NOW
                                            </a>
                                        )} */}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}

                    <h2 className="font-graffiti text-6xl text-center mb-16 text-white drop-shadow-[5px_5px_0px_#0EA5E9]">UPCOMING HYPE</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {loading ? (
                            // Loading Skeletons for Youth page
                            Array.from({ length: 3 }).map((_, index) => (
                                <div key={index} className="bg-zinc-900 border-4 border-gray-700 p-2 animate-pulse flex flex-col h-[400px]">
                                    <div className="h-48 bg-gray-800 mb-4 w-full" />
                                    <div className="p-4 flex flex-col flex-grow">
                                        <div className="h-8 bg-gray-800 rounded w-3/4 mb-4" />
                                        <div className="h-4 bg-gray-800 rounded w-full mb-2" />
                                        <div className="h-4 bg-gray-800 rounded w-5/6 mb-6" />
                                        <div className="mt-auto h-12 bg-gray-800 rounded w-full" />
                                    </div>
                                </div>
                            ))
                        ) : (
                            events.map((event) => (
                                <motion.div
                                    key={event.id}
                                    whileHover={{ y: -10 }}
                                    className="bg-zinc-900 border-4 border-white p-2 relative overflow-hidden group flex flex-col h-full"
                                >
                                    <div className="absolute inset-0 bg-neon-purple/20 group-hover:bg-neon-purple/40 transition-colors pointer-events-none"></div>
                                    <div className="h-48 bg-gray-800 mb-4 flex items-center justify-center overflow-hidden relative">
                                        <img src={event.image} alt={event.title} className="w-full h-full object-contain transition-all duration-500 hover:scale-105" />
                                        {event.date && (
                                            <div className="absolute top-0 right-0 bg-neon-yellow text-black font-bold px-3 py-1 font-mono text-sm transform translate-x-1 -translate-y-1 rotate-3 border-2 border-black">
                                                {event.date}
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-4 relative z-10 flex flex-col flex-grow">
                                        <h3 className="font-marker text-3xl text-neon-yellow mb-2 leading-none">{event.title}</h3>
                                        <p className="text-gray-300 mb-6 font-sans flex-grow">{event.description}</p>
                                        <a
                                            href={event.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full py-3 bg-neon-pink text-black font-graffiti text-xl hover:bg-white transition-colors text-center inline-block"
                                        >
                                            {event.buttonText || 'REGISTER NOW'}
                                        </a>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ParkYouth;
