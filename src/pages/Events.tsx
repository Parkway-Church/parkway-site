import { motion } from 'framer-motion';
import { calendarConfig } from '../config/calendar';
import { mainEvents as staticEvents } from '../data/mainEvents';


const Events = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const startDate = `${currentYear}0101`; // Start of current year
    const endDate = `${currentYear + 2}0101`; // Two years forward
    const datesParam = `&dates=${startDate}/${endDate}`;

    // Use static events directly
    const events = staticEvents;

    // Construct the Google Calendar embed URL
    const calendarSrc = `https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=${encodeURIComponent(calendarConfig.timezone)}&src=${encodeURIComponent(calendarConfig.calendarId)}&color=%230EA5E9${datesParam}&mode=MONTH`;

    return (
        <div className="bg-[#c7c7c7] min-h-screen text-brand-black pt-20">
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white"
                    >
                        UPCOMING <span className="text-brand-red">EVENTS</span>
                    </motion.h1>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100px" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-1 bg-brand-red mx-auto"
                    />
                </div>
            </section>

            {/* Featured Events Section */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">FEATURED EVENTS</h2>
                        <div className="h-1 w-20 bg-brand-red mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {events.map((event) => (
                            <motion.div
                                key={event.id}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="h-48 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 bg-brand-red text-white px-4 py-1 font-bold z-10 rounded-bl-lg">
                                        {event.date}
                                    </div>
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-brand-black mb-2 leading-tight">{event.title}</h3>
                                    <p className="text-gray-600 mb-6 flex-grow">{event.description}</p>

                                    <a
                                        href={event.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block w-full py-3 bg-brand-black text-white text-center font-bold rounded-lg hover:bg-brand-red transition-colors uppercase tracking-wider"
                                    >
                                        {event.buttonText || 'MORE DETAILS'}
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Calendar Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">CALENDAR</h2>
                        <div className="h-1 w-20 bg-brand-red mx-auto"></div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-4 md:p-8 rounded-xl shadow-2xl max-w-5xl mx-auto"
                    >
                        <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                            <iframe
                                src={calendarSrc}
                                style={{ border: 0 }}
                                width="800"
                                height="600"
                                frameBorder="0"
                                scrolling="no"
                                className="absolute top-0 left-0 w-full h-full rounded-lg"
                                title="Parkway Christian Church Calendar"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Events;
