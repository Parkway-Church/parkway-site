import React from 'react';

const ServiceTimes: React.FC = () => {
    return (
        <section className="bg-white text-brand-black py-12 px-4 text-center" aria-labelledby="service-times-heading">
            <div className="container mx-auto">
                <h2 id="service-times-heading" className="text-xl md:text-2xl font-bold mb-4 tracking-wider uppercase">
                    REAL PEOPLE, REAL FAITH. A REAL GOD WHO STILL CHANGES LIVES
                </h2>
                <div className="h-1 w-20 bg-brand-red mx-auto mb-6" aria-hidden="true"></div>
                
                <div className="space-y-4">
                    <article className="service-info">
                        <h3 className="text-lg md:text-xl font-semibold mb-2">
                            LA MERIENDA GRUPO DE VIDA EN ESPAÑOL LOS MARTES A LAS 7:00 PM
                        </h3>
                    </article>
                    
                    <article className="service-info">
                        <h3 className="text-lg md:text-xl font-semibold mb-2">
                            LOVE IS THE WAY LIFE GROUP THURSDAYS AT 7:00 PM
                        </h3>
                    </article>
                    
                    <article className="service-info highlight">
                        <h3 className="text-lg md:text-xl font-semibold mb-4 text-brand-red">
                            WORSHIP SERVICE SUNDAYS AT 10 AM
                        </h3>
                    </article>
                </div>

                <p className="text-gray-500 italic text-sm mt-4">
                    *All services available online as well
                </p>
                
                <address className="not-italic mt-8 text-gray-600">
                    <p>1200 S Flamingo Rd</p>
                    <p>Davie, FL 33325</p>
                </address>
            </div>
        </section>
    );
};

export default ServiceTimes;
