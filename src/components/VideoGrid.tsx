'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import VideoModal from './VideoModal';
// Sample video data - in a real app, this would come from a CMS or API
const videos = [
    {
        id: 1,
        title: 'Epic Music Video',
        category: 'Music Video',
        thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'A cinematic music video featuring stunning visuals and creative transitions.',
    },
    {
        id: 2,
        title: 'Product Commercial',
        category: 'Commercial',
        thumbnail: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=600&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'High-end product commercial with sleek motion graphics.',
    },
    {
        id: 3,
        title: 'Short Film',
        category: 'Short Film',
        thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Narrative short film with color grading and visual effects.',
    },
    {
        id: 4,
        title: 'Brand Story',
        category: 'Commercial',
        thumbnail: 'https://images.unsplash.com/photo-1574267432664-12510935e5ac?w=800&h=600&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Corporate brand storytelling with dynamic editing.',
    },
    {
        id: 5,
        title: 'Live Concert',
        category: 'Music Video',
        thumbnail: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Multi-cam live concert edit with color correction.',
    },
    {
        id: 6,
        title: 'Documentary',
        category: 'Documentary',
        thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Documentary-style storytelling with interviews and b-roll.',
    },
];

const categories = ['All', 'Music Video', 'Commercial', 'Short Film', 'Documentary'];

export default function VideoGrid() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);

    const filteredVideos =
        selectedCategory === 'All'
            ? videos
            : videos.filter((video) => video.category === selectedCategory);

    return (
        <>
            {/* Category Filter */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-3 rounded-full font-medium transition-all ${selectedCategory === category
                                ? 'bg-gradient-to-r from-primary to-secondary text-white'
                                : 'glass text-gray-300 hover:bg-white/10'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Video Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredVideos.map((video, index) => (
                    <motion.div
                        key={video.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group cursor-pointer"
                        onClick={() => setSelectedVideo(video)}
                    >
                        <div className="relative aspect-video rounded-2xl overflow-hidden glass-light">
                            {/* Thumbnail */}
                            <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                        <svg
                                            className="w-8 h-8 text-white ml-1"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Category Badge */}
                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 glass text-xs font-semibold rounded-full">
                                    {video.category}
                                </span>
                            </div>
                        </div>

                        {/* Video Info */}
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                {video.title}
                            </h3>
                            <p className="text-gray-400 text-sm line-clamp-2">
                                {video.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Video Modal */}
            {selectedVideo && (
                <VideoModal
                    video={selectedVideo}
                    onClose={() => setSelectedVideo(null)}
                />
            )}
        </>
    );
}
