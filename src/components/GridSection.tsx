import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GridItemProps {
    title: string;
    description: string;
    linkText: string;
    link: string;
    image: string;
    delay: number;
}

const GridItem: React.FC<GridItemProps> = ({ title, description, linkText, link, image, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className="flex flex-col group"
        >
            <Link to={link} className="block">
                <div className="overflow-hidden rounded-lg mb-4 relative h-64 md:h-56 lg:h-64 cursor-pointer">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-[2px]"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <div className="border border-[#38b6ff] px-4 py-2">
                            <h3 className="text-white text-lg font-bold uppercase tracking-widest">{title}</h3>
                        </div>
                    </div>
                </div>
            </Link>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-2">{title}</h3>
            <p className="text-gray-600 mb-4 text-sm flex-grow leading-relaxed">{description}</p>
            <Link to={link} className="flex items-center text-brand-red font-bold text-sm tracking-wide group-hover:underline">
                {linkText} <ArrowRight size={16} className="ml-1" />
            </Link>
        </motion.div>
    );
};

const GridSection: React.FC = () => {
    const items = [
        {
            title: 'This Weekend',
            description: 'This is the perfect place for imperfect people to experience the presence of God. Join us in person or online.',
            linkText: 'What To Expect',
            link: '/events',
            image: 'https://images.unsplash.com/photo-1510590337019-5ef2d3977e2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Next Steps',
            description: 'We believe in the power of community. Learn how to get involved and connect with others.',
            linkText: 'Get Connected',
            link: '/mission', // Defaulting to mission/vision or similar if specific page not requested, can be updated later.
            image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Prayer',
            description: 'Prayer is our first response, not our last resort. Let us know how we can pray for you today.',
            linkText: 'How Can We Pray For You?',
            link: '#', // No clear route for prayer request yet
            image: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Groups',
            description: 'Connect Groups are a key aspect of our church community. Find the best group for you!',
            linkText: 'Find A Group',
            link: '/groups',
            image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
    ];

    return (
        <section className="bg-white py-16 px-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, index) => (
                        <GridItem key={index} {...item} delay={index * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GridSection;
