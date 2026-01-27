import React from 'react';

const NextGen: React.FC = () => {
    return (
        <section className="bg-white py-20 px-4">
            <div className="container mx-auto">
                <h2 className="text-center text-3xl font-bold uppercase tracking-widest mb-16 text-brand-black">
                    Our Next Generation
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* LOCALKIDS */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-full h-80 overflow-hidden mb-6 relative group">
                            <img
                                src="https://images.unsplash.com/photo-1502086223501-68196195861b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Journey Kids"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="text-2xl font-bold uppercase mb-4">LocalKids</h3>
                        <p className="text-gray-600 mb-2 max-w-md">
                            A safe and engaging space for your children to connect with Jesus.
                        </p>
                        <p className="text-gray-500 text-sm mb-6 max-w-md">
                            Preschool only every Thursdays at 6:30 PM<br />
                            Preschool to Elementary every Sunday at 8:30, 10, 11:30 AM + 1 PM
                        </p>
                        <button className="bg-brand-black text-white px-6 py-2 uppercase font-bold text-sm tracking-wider hover:bg-gray-800 transition-colors">
                            Find Out More
                        </button>
                    </div>

                    {/* LOCALYTH */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-full h-80 overflow-hidden mb-6 relative group">
                            <img
                                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="The Park Youth"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="text-2xl font-bold uppercase mb-4">LocalYth</h3>
                        <p className="text-gray-600 mb-2 max-w-md">
                            Our Youth meet every Tuesday at 7 PM to worship, learn, and impact their community for Jesus.
                        </p>
                        <p className="text-gray-500 text-sm mb-6 max-w-md">
                            They leave equipped to make a lasting difference in their schools, families, and friendships.
                        </p>
                        <button className="bg-brand-black text-white px-6 py-2 uppercase font-bold text-sm tracking-wider hover:bg-gray-800 transition-colors">
                            Find Out More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NextGen;
