import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { bibleQuotes, type BibleQuote } from '../data/bibleQuotes';

const QuoteBanner: React.FC = () => {
    const [quote, setQuote] = useState<BibleQuote | null>(null);

    useEffect(() => {
        // Select a random quote on mount
        const randomIndex = Math.floor(Math.random() * bibleQuotes.length);
        setQuote(bibleQuotes[randomIndex]);
    }, []);

    if (!quote) return null; // Or a loading skeleton if preferred

    return (
        <section className="relative h-96 w-full overflow-hidden flex items-center justify-center">
            {/* Background with Parallax-like fixed attachment */}
            <div
                className="absolute inset-0 bg-fixed bg-center bg-cover"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
                }}
            >
                <div className="absolute inset-0 bg-brand-black/60" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-xl md:text-2xl font-bold uppercase tracking-widest leading-relaxed mb-8"
                >
                    {quote.text}
                    <br />
                    <span className="text-brand-red mt-2 block">{quote.reference}</span>
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-brand-red text-white font-bold py-3 px-8 rounded shadow-lg hover:bg-red-700 transition-colors uppercase tracking-wider"
                >
                    I'm All In
                </motion.button>
            </div>
        </section>
    );
};

export default QuoteBanner;
