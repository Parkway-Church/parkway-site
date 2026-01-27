import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setActiveSection(activeSection === section ? null : section);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-black/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <a href="/" className="text-2xl font-bold tracking-tighter uppercase">
                    PARKWAY <span className="text-brand-red">CHRISTIAN</span> CHURCH
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide">
                    {/* Who We Are Dropdown */}
                    <div className="relative group">
                        <a href="#" className="hover:text-brand-red transition-colors flex items-center gap-1">
                            WHO WE ARE
                        </a>
                        <div className="absolute top-full left-0 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform -translate-y-2 group-hover:translate-y-0">
                            <div className="bg-brand-black/95 backdrop-blur-md border md:border-t-2 border-brand-red py-2 shadow-xl rounded-b-md">
                                <a href="#" className="block px-6 py-3 text-white hover:bg-brand-red/20 hover:text-brand-red transition-colors">Our Mission</a>
                                <a href="#" className="block px-6 py-3 text-white hover:bg-brand-red/20 hover:text-brand-red transition-colors">Our Statement of Faith</a>
                                <a href="#" className="block px-6 py-3 text-white hover:bg-brand-red/20 hover:text-brand-red transition-colors">Our Leadership Team</a>
                                <a href="#" className="block px-6 py-3 text-white hover:bg-brand-red/20 hover:text-brand-red transition-colors">School</a>
                            </div>
                        </div>
                    </div>

                    {/* Get Connected Dropdown */}
                    <div className="relative group">
                        <a href="#" className="hover:text-brand-red transition-colors flex items-center gap-1">
                            GET CONNECTED
                        </a>
                        <div className="absolute top-full left-0 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform -translate-y-2 group-hover:translate-y-0">
                            <div className="bg-brand-black/95 backdrop-blur-md border md:border-t-2 border-brand-red py-2 shadow-xl rounded-b-md">
                                <a href="#" className="block px-6 py-3 text-white hover:bg-brand-red/20 hover:text-brand-red transition-colors">Parkway Online</a>
                                <a href="#" className="block px-6 py-3 text-white hover:bg-brand-red/20 hover:text-brand-red transition-colors">Life Groups</a>
                                <a href="#" className="block px-6 py-3 text-white hover:bg-brand-red/20 hover:text-brand-red transition-colors">Journey Land</a>
                                <a href="#" className="block px-6 py-3 text-white hover:bg-brand-red/20 hover:text-brand-red transition-colors">Journey Kids</a>
                                <a href="#" className="block px-6 py-3 text-white hover:bg-brand-red/20 hover:text-brand-red transition-colors">The Park Youth</a>
                                <a href="#" className="block px-6 py-3 text-white hover:bg-brand-red/20 hover:text-brand-red transition-colors">Events</a>
                            </div>
                        </div>
                    </div>
                    {/* Resources Dropdown */}
                    <div className="relative group">
                        <a href="#" className="hover:text-brand-red transition-colors flex items-center gap-1">
                            RESOURCES
                        </a>
                        <div className="absolute top-full left-0 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform -translate-y-2 group-hover:translate-y-0">
                            <div className="bg-brand-black/95 backdrop-blur-md border md:border-t-2 border-brand-red py-2 shadow-xl rounded-b-md">
                                <a href="#" className="block px-6 py-3 text-white hover:bg-brand-red/20 hover:text-brand-red transition-colors">Volunteers</a>
                                <a href="#" className="block px-6 py-3 text-white hover:bg-brand-red/20 hover:text-brand-red transition-colors">Get Connected</a>
                                <a href="#" className="block px-6 py-3 text-white hover:bg-brand-red/20 hover:text-brand-red transition-colors">Sermons</a>
                                <a href="#" className="block px-6 py-3 text-white hover:bg-brand-red/20 hover:text-brand-red transition-colors">Gallery</a>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="hover:text-brand-red transition-colors">GIVE</a>
                    <button className="bg-brand-red px-6 py-2 rounded text-white font-bold hover:bg-red-700 transition-colors">
                        LIVE
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-brand-red">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-brand-black/95 backdrop-blur-md md:hidden flex flex-col items-center py-8 space-y-6 shadow-xl max-h-[85vh] overflow-y-auto"
                    >
                        <div className="flex flex-col items-center space-y-4 w-full">
                            {/* Who We Are Mobile */}
                            <div className="w-full flex flex-col items-center">
                                <button
                                    onClick={() => toggleSection('who-we-are')}
                                    className="flex items-center justify-center gap-2 text-lg font-semibold text-brand-red/80 uppercase tracking-widest text-sm mb-2 w-full"
                                >
                                    Who We Are
                                    <ChevronDown
                                        size={16}
                                        className={`transform transition-transform duration-200 ${activeSection === 'who-we-are' ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {activeSection === 'who-we-are' && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden flex flex-col items-center space-y-3"
                                        >
                                            <a href="#" className="text-base text-gray-300 hover:text-brand-white pt-2" onClick={() => setIsOpen(false)}>Our Mission</a>
                                            <a href="#" className="text-base text-gray-300 hover:text-brand-white" onClick={() => setIsOpen(false)}>Our Statement of Faith</a>
                                            <a href="#" className="text-base text-gray-300 hover:text-brand-white" onClick={() => setIsOpen(false)}>Our Leadership Team</a>
                                            <a href="#" className="text-base text-gray-300 hover:text-brand-white" onClick={() => setIsOpen(false)}>School</a>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        <div className="w-16 h-px bg-white/20 my-2"></div>

                        <div className="flex flex-col items-center space-y-4 w-full">
                            {/* Get Connected Mobile */}
                            <div className="w-full flex flex-col items-center">
                                <button
                                    onClick={() => toggleSection('get-connected')}
                                    className="flex items-center justify-center gap-2 text-lg font-semibold text-brand-red/80 uppercase tracking-widest text-sm mb-2 w-full"
                                >
                                    Get Connected
                                    <ChevronDown
                                        size={16}
                                        className={`transform transition-transform duration-200 ${activeSection === 'get-connected' ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {activeSection === 'get-connected' && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden flex flex-col items-center space-y-3"
                                        >
                                            <a href="#" className="text-base text-gray-300 hover:text-brand-white pt-2" onClick={() => setIsOpen(false)}>Parkway Online</a>
                                            <a href="#" className="text-base text-gray-300 hover:text-brand-white" onClick={() => setIsOpen(false)}>Life Groups</a>
                                            <a href="#" className="text-base text-gray-300 hover:text-brand-white" onClick={() => setIsOpen(false)}>Journey Land</a>
                                            <a href="#" className="text-base text-gray-300 hover:text-brand-white" onClick={() => setIsOpen(false)}>Journey Kids</a>
                                            <a href="#" className="text-base text-gray-300 hover:text-brand-white" onClick={() => setIsOpen(false)}>The Park Youth</a>
                                            <a href="#" className="text-base text-gray-300 hover:text-brand-white" onClick={() => setIsOpen(false)}>Events</a>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        <div className="w-16 h-px bg-white/20 my-2"></div>
                        <div className="flex flex-col items-center space-y-4 w-full">
                            {/* Resources Mobile */}
                            <div className="w-full flex flex-col items-center">
                                <button
                                    onClick={() => toggleSection('resources')}
                                    className="flex items-center justify-center gap-2 text-lg font-semibold text-brand-red/80 uppercase tracking-widest text-sm mb-2 w-full"
                                >
                                    Resources
                                    <ChevronDown
                                        size={16}
                                        className={`transform transition-transform duration-200 ${activeSection === 'resources' ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {activeSection === 'resources' && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden flex flex-col items-center space-y-3"
                                        >
                                            <a href="#" className="text-base text-gray-300 hover:text-brand-white pt-2" onClick={() => setIsOpen(false)}>Volunteers</a>
                                            <a href="#" className="text-base text-gray-300 hover:text-brand-white" onClick={() => setIsOpen(false)}>Get Connected</a>
                                            <a href="#" className="text-base text-gray-300 hover:text-brand-white" onClick={() => setIsOpen(false)}>Sermons</a>
                                            <a href="#" className="text-base text-gray-300 hover:text-brand-white" onClick={() => setIsOpen(false)}>Gallery</a>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        <div className="w-16 h-px bg-white/20 my-2"></div>
                        <a href="#" className="text-lg font-semibold hover:text-brand-red" onClick={() => setIsOpen(false)}>GIVE</a>
                        <button className="bg-brand-red px-8 py-3 rounded text-white font-bold hover:bg-red-700 transition-colors w-3/4">
                            LIVE
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
