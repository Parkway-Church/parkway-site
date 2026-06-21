import { motion } from 'framer-motion';
import type { GrapeBannerEvent } from '../services/calendarService';

interface Props {
    event: GrapeBannerEvent;
}

const GrapeEventBanner = ({ event }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl shadow-2xl max-w-6xl mx-auto"
        >
            {/* Background image with overlay */}
            <div className="absolute inset-0">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#6B21A8]/95 via-[#7E22CE]/85 to-[#6B21A8]/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
                {/* Left: label + title + meta */}
                <div className="flex-1 text-white">
                    <span className="inline-block bg-white/20 border border-white/40 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                        Featured Event
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-3">{event.title}</h3>
                    <div className="flex items-center gap-4 mb-4 text-white/80 text-sm font-medium">
                        <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {event.date}
                        </span>
                        <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {event.time}
                        </span>
                    </div>
                    {event.description && (
                        <p className="text-white/75 text-sm leading-relaxed max-w-xl">{event.description}</p>
                    )}
                </div>

                {/* Right: CTA */}
                <div className="shrink-0 flex flex-col sm:flex-row gap-4">
                    <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white/20 text-white border border-white/40 font-bold rounded-xl hover:bg-white/30 transition-colors uppercase tracking-wider text-sm shadow-lg text-center"
                    >
                        {event.buttonText || 'Add to Calendar'}
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default GrapeEventBanner;
