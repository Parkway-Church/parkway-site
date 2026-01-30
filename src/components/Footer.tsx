import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

// Custom X Icon component since it might be missing or to ensure exact look
const XIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-16 px-4 border-t border-gray-800">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand / Contact Area */}
                <div className="md:col-span-1 space-y-8">
                    <div>
                        <a href="/" className="text-2xl font-bold tracking-tighter uppercase block mb-6">
                            PARKWAY <span className="text-brand-red">CHRISTIAN</span> CHURCH
                        </a>
                        <p className="text-gray-400 text-sm mb-6">
                            Come, Journey With Us
                        </p>
                        <div className="flex space-x-4">
                            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors"><Facebook size={20} /></a>
                            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors"><Instagram size={20} /></a>
                            <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors"><Youtube size={20} /></a>
                            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors"><XIcon size={20} /></a>
                        </div>
                    </div>

                    {/* Contact Info Moved Here */}
                    <div>
                        <h4 className="font-bold uppercase tracking-wider mb-4 text-sm">Contact Us</h4>
                        <p className="text-sm text-gray-400 mb-2">
                            1200 S. Flamingo Rd<br />
                            Davie, FL 33325<br />
                            (954) 476-0020
                        </p>
                        <p className="text-sm text-gray-400">
                            Sundays @ 10 am
                        </p>
                    </div>
                </div>

                {/* Links Column 1: Who We Are */}
                <div>
                    <h4 className="font-bold uppercase tracking-wider mb-6">Who We Are</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><Link to="/mission" className="hover:text-white transition-colors">Our Mission</Link></li>
                        <li><Link to="/faith" className="hover:text-white transition-colors">Our Statement of Faith</Link></li>
                        <li><Link to="/leadership" className="hover:text-white transition-colors">Our Leadership Team</Link></li>
                        <li><a href="https://www.pcs-fl.net/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">School</a></li>
                    </ul>
                </div>

                {/* Links Column 2: Get Connected */}
                <div>
                    <h4 className="font-bold uppercase tracking-wider mb-6">Get Connected</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Parkway Online</a></li>
                        <li><Link to="/groups" className="hover:text-white transition-colors">Life Groups</Link></li>
                        <li><Link to="/journeyland" className="hover:text-white transition-colors">Journey Land</Link></li>
                        <li><Link to="/kids" className="hover:text-white transition-colors">Journey Kids</Link></li>
                        <li><Link to="/youth" className="hover:text-white transition-colors">The Park Youth</Link></li>
                        <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
                    </ul>
                </div>

                {/* Links Column 3: Resources */}
                <div>
                    <h4 className="font-bold uppercase tracking-wider mb-6">Resources</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><Link to="/volunteers" className="hover:text-white transition-colors">Volunteers</Link></li>
                        <li><a href="#" className="hover:text-white transition-colors">Get Connected</a></li>
                        <li><Link to="/sermons" className="hover:text-white transition-colors">Sermons</Link></li>
                        <li><Link to="/videos" className="hover:text-white transition-colors">Videos</Link></li>
                        <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
                    </ul>
                </div>

            </div>

            <div className="container mx-auto mt-16 pt-8 border-t border-gray-900 text-center text-xs text-gray-600">
                © {new Date().getFullYear()} Parkway Christian Church. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
