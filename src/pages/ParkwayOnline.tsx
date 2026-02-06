import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Loader2, BookOpen } from 'lucide-react';
import { bloggerConfig, type BlogPost } from '../config/blogger';

const ParkwayOnline: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    // Placeholder data to show when API is not configured
    const placeholderPosts: BlogPost[] = [
        {
            id: '1',
            title: 'Welcome to Parkway Online',
            published: new Date().toISOString(),
            updated: new Date().toISOString(),
            url: '#',
            content: 'This is a dedicated space for our church community to stay connected. We will be sharing updates, devotionals, and resources here regularly.',
            author: {
                displayName: 'Parkway Team',
                image: { url: '' }
            }
        },
        {
            id: '2',
            title: 'Weekly Devotional: Walking in Faith',
            published: new Date(Date.now() - 86400000 * 3).toISOString(),
            updated: new Date(Date.now() - 86400000 * 3).toISOString(),
            url: '#',
            content: 'Faith is the substance of things hoped for, the evidence of things not seen. Join us as we explore what it means to walk by faith in our daily lives.',
            author: {
                displayName: 'Pastor Esther',
                image: { url: '' }
            }
        },
        {
            id: '3',
            title: 'Upcoming Community Events',
            published: new Date(Date.now() - 86400000 * 7).toISOString(),
            updated: new Date(Date.now() - 86400000 * 7).toISOString(),
            url: '#',
            content: 'We have several exciting events coming up this month! From our youth retreat to the community outreach program, there are many ways to get involved.',
            author: {
                displayName: 'Events Team',
                image: { url: '' }
            }
        }
    ];

    useEffect(() => {
        const fetchPosts = async () => {
            // If no API key or Blog ID, use placeholder data
            if (!bloggerConfig.apiKey || !bloggerConfig.blogId) {
                setPosts(placeholderPosts);
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(
                    `https://www.googleapis.com/blogger/v3/blogs/${bloggerConfig.blogId}/posts?key=${bloggerConfig.apiKey}&maxResults=${bloggerConfig.maxPosts}`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }

                const data = await response.json();
                setPosts(data.items || []);
            } catch (err) {
                console.error('Error fetching blog posts:', err);
                setPosts(placeholderPosts);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    // Helper to strip HTML tags for preview
    const createSnippet = (html: string, length = 150) => {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        const text = tmp.textContent || tmp.innerText || '';
        return text.length > length ? text.substring(0, length) + '...' : text;
    };

    // Helper to format date
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="bg-[#cfcfcf] min-h-screen pt-20">
            {/* Hero Section */}
            <div className="relative bg-brand-black text-white py-20 px-4">
                <div className="container mx-auto max-w-6xl relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6"
                    >
                        Parkway <span className="text-brand-red">Online</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Connecting our community through faith, resources, and regular updates.
                    </motion.p>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto max-w-6xl px-4 py-16">
                {!bloggerConfig.apiKey && (
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 mx-auto max-w-4xl rounded shadow-sm">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <BookOpen className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-yellow-700">
                                    <strong>Setup Required:</strong> This page is currently showing placeholder content.
                                    Please configure your Blogger API credentials in <code>src/config/blogger.ts</code> to see live posts.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <Loader2 className="w-12 h-12 animate-spin text-brand-red" />
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
                            >
                                <div className="p-6 flex-grow">
                                    <div className="flex items-center text-sm text-gray-500 mb-4">
                                        <span className="bg-brand-red/10 text-brand-red px-2 py-1 rounded font-medium text-xs uppercase tracking-wide">
                                            Blog Post
                                        </span>
                                        <span className="mx-2">•</span>
                                        <time dateTime={post.published}>{formatDate(post.published)}</time>
                                    </div>

                                    <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-brand-red transition-colors">
                                        <a href={post.url} target="_blank" rel="noopener noreferrer">
                                            {post.title}
                                        </a>
                                    </h2>

                                    <div className="text-gray-600 mb-4 line-clamp-4 leading-relaxed">
                                        {createSnippet(post.content)}
                                    </div>
                                </div>

                                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 mt-auto flex justify-between items-center">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center text-white font-bold text-xs">
                                            {post.author.displayName.charAt(0)}
                                        </div>
                                        <span className="text-sm font-medium text-gray-700">{post.author.displayName}</span>
                                    </div>

                                    <a
                                        href={post.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-brand-red hover:text-red-700 font-semibold text-sm group"
                                    >
                                        Read Full Post
                                        <ExternalLink size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ParkwayOnline;
