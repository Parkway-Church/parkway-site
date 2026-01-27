import React from 'react';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-16 px-4 border-t border-gray-800">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Brand / Logo Area */}
                <div className="md:col-span-1">
                    <a href="/" className="text-2xl font-bold tracking-tighter uppercase block mb-6">
                        PARKWAY <span className="text-brand-red">CHRISTIAN</span> CHURCH
                    </a>
                    <p className="text-gray-400 text-sm mb-6">
                        Come, Journey With Us
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-brand-red transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-brand-red transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-brand-red transition-colors"><Youtube size={20} /></a>
                        <a href="#" className="hover:text-brand-red transition-colors"><Twitter size={20} /></a>
                    </div>
                </div>

                {/* Links Column 1 */}
                <div>
                    <h4 className="font-bold uppercase tracking-wider mb-6">Who We Are</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Our Values</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Statement of Faith</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Leadership Team</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Job Opportunities</a></li>
                    </ul>
                </div>

                {/* Links Column 2 */}
                <div>
                    <h4 className="font-bold uppercase tracking-wider mb-6">Get Connected</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Church Online</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Connect Track</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Connect Groups</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">LocalKids</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Local Yth</a></li>
                    </ul>
                </div>

                {/* Contact / Service Info */}
                <div>
                    <h4 className="font-bold uppercase tracking-wider mb-6">Contact Us</h4>
                    <p className="text-sm text-gray-400 mb-4">
                        1200 S. Flamingo Rd<br />
                        Davie, FL 33325
                    </p>
                    <p className="text-sm text-gray-400">
                        Sundays @ 10 am
                    </p>
                </div>
            </div>

            <div className="container mx-auto mt-16 pt-8 border-t border-gray-900 text-center text-xs text-gray-600">
                © {new Date().getFullYear()} Parkway Christian Church. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
