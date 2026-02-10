import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, CreditCard } from 'lucide-react';

interface GiveModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const GiveModal: React.FC<GiveModalProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
                    >
                        {/* Modal Container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative"
                        >
                            {/* Header */}
                            <div className="bg-brand-black p-6 text-center relative">
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                                >
                                    <X size={24} />
                                </button>
                                <h2 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">
                                    Give Online
                                </h2>
                                <p className="text-gray-300 text-sm">
                                    Thank you for your generosity and support.
                                </p>
                            </div>

                            {/* Body */}
                            <div className="p-8 space-y-4">
                                <a
                                    href="https://www.paypal.com/donate/?hosted_button_id=7ZBSYHUWS6GKL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-full py-4 px-6 bg-[#0070BA] hover:bg-[#005ea6] text-white rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] shadow-lg group"
                                >
                                    <Heart className="mr-3 group-hover:animate-pulse" size={24} />
                                    Give via PayPal
                                </a>

                                <div className="text-center text-gray-400 text-sm font-medium my-2">- OR -</div>

                                <a
                                    href="https://www.eservicepayments.com/cgi-bin/Vanco_ver3.vps?appver3=wWsk24ZWJSTZKsGd1RMKlg0BDvsSG3VIWQCPJNNxD8upkiY7JlDavDsozUE7KG0nFx2NSo8LdUKGuGuF396vbZewsOHnV4Ld_dQesVjewg2XHubq5Z7ap5JVmPErc4ZeYHCKCZhESjGNQmZ5B-6dx-cgLWI1PcgQ7f1aayiwnU0=&ver=3"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-full py-4 px-6 bg-brand-red hover:bg-red-700 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] shadow-lg group"
                                >
                                    <CreditCard className="mr-3" size={24} />
                                    Give via Vanco
                                </a>
                            </div>

                            {/* Footer */}
                            <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
                                <p className="text-xs text-gray-500">
                                    Secure payment processing provided by PayPal and Vanco.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default GiveModal;
