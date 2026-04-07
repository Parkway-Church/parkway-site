import React from 'react';
import { Link } from 'react-router-dom';

const CurrentSeries: React.FC = () => {
    return (
        <section className="relative min-h-[600px] flex items-center overflow-hidden">
            {/* Split Background */}
            <div className="absolute inset-0 flex flex-col md:flex-row">
                {/* Left Side - Blue Gradient/Image */}
                <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-900 to-blue-600 relative overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
                        alt="Blue landscape"
                    />
                </div>

                {/* Right Side - Yellow/Gold Image */}
                <div className="w-full md:w-1/2 relative bg-yellow-500">
                    <img
                        src="/images/harvest_field_verse.jpg"
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="Harvest Field Verse"
                    />
                </div>
            </div>

            {/* Skewed Divider (CSS Trick) */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-40 bg-transparent hidden md:block" style={{ transform: 'skewX(-15deg)' }}>
                {/* This is hard to perfect with just one div, simpler approach: overlapping overlay */}
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center h-full py-12">
                <div className="w-full md:w-1/2 text-white pr-0 md:pr-12 lg:pr-24">
                    <h2 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-6">
                        First<br />Things<br />First
                    </h2>
                    <p className="text-sm md:text-base opacity-90 leading-relaxed mb-8 max-w-lg">
                        When we put God first, everything else finds its place. Our priorities shift, our hearts align, and our lives begin to reflect His purpose. As we seek, trust & fully surrender to God, we begin to experience clarity where there was confusion, provision where there was lack, and direction where there was uncertainty. This is what happens when we realign our lives with God’s will.
                    </p>

                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <Link to="/sermons" className="bg-brand-red text-white py-3 px-6 font-bold uppercase tracking-wider hover:bg-red-700 transition-colors inline-block text-center">
                            Watch Our Latest Message
                        </Link>
                        <Link to="/videos" className="bg-brand-red text-white py-3 px-6 font-bold uppercase tracking-wider hover:bg-red-700 transition-colors inline-block text-center">
                            View The Playlist
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurrentSeries;
