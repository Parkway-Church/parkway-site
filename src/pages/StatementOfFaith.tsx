import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const StatementOfFaith = () => {
    const beliefs = [
        {
            title: "Confession of Faith",
            content: "We confess that Jesus is the Christ, the Son of the Living God, and proclaim him Lord and Savior of the world, requiring nothing more – and nothing less – as a basis of our life together."
        },
        {
            title: "Scripture",
            content: "We hold the centrality of scripture, recognizing that each person has the freedom – and the responsibility – to study God’s Word within the community of the church."
        },
        {
            title: "Baptism",
            content: "We practice the baptism of believers, which emphasizes that God’s grace demands a response of faith and discipleship, while also recognizing the baptism performed in other churches."
        },
        {
            title: "The Lord's Supper",
            content: "We gather for the Lord’s Supper, as often as possible, experiencing at this table the gracious, forgiving presence of Jesus Christ."
        },
        {
            title: "Covenant Community",
            content: "We structure our community around the biblical idea of covenant, emphasizing not obedience to human authority but accountability to one another because of our shared obedience to Christ."
        },
        {
            title: "Mission & Justice",
            content: "We participate in God’s mission for the world, working with partners to heal the brokenness of creation and bring justice and peace to the whole human family."
        },
        {
            title: "Christian Unity",
            content: "We hear a special calling to make visible the unity of all Christians, proclaiming that in our diversity we belong to one another because we commonly belong to Christ."
        },
        {
            title: "Witness",
            content: "We witness to the Gospel of God’s saving love for the world in Jesus Christ, while continuing to struggle with how God’s love may be known to others in different ways."
        },
        {
            title: "Ministry of Believers",
            content: "We affirm the priesthood of all believers, rejoicing in the gifts of the Holy Spirit – which include the gift of leadership – that God has given for the common good."
        },
        {
            title: "Diversity",
            content: "We celebrate the diversity of our common life, affirming our different histories, styles of worship, and forms of service."
        },
        {
            title: "The Church",
            content: "We give thanks that each congregation, where Christ is present through faith, is truly the church, affirming as well that God’s church and God’s mission stretch from our doorsteps to the ends of the earth."
        },
        {
            title: "Future Hope",
            content: "We anticipate God’s coming reign, seeking to serve the God – Creator, Redeemer, and Sustainer – whose loving dominion has no end."
        }
    ];

    return (
        <div className="bg-[#e3e3e3] min-h-screen text-brand-black pt-20">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 bg-[#e3e3e3] border-b border-gray-300">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-brand-black"
                    >
                        WHAT WE <span className="text-brand-red">BELIEVE</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                    >
                        The heartbeat of our faith is Jesus at the center of everything we believe and God’s Word shaping how we live. Here’s what guides our core beliefs.
                    </motion.p>
                </div>
            </section>

            {/* Beliefs Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 max-w-6xl mx-auto">
                        {beliefs.map((belief, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group"
                            >
                                <h3 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
                                    <span className="text-brand-red text-sm font-mono opacity-50">0{index + 1}</span>
                                    {belief.title}
                                </h3>
                                <div className="h-px w-full bg-gradient-to-r from-brand-red/50 to-transparent mb-4 transform origin-left transition-transform duration-500 group-hover:scale-x-110" />
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {belief.content}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Statement */}
            <section className="py-20 bg-[#e3e3e3]">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-brand-black">WANT TO KNOW MORE?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                            We explore these truths every week in our services and Life Groups.
                        </p>
                        <Link to="/events">
                            <button className="bg-brand-red text-white py-3 px-8 rounded font-bold hover:bg-white hover:text-brand-red transition-colors">
                                PLAN A VISIT
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default StatementOfFaith;
