import type { Metadata } from 'next';
import FloatingNavbar from '@/components/FloatingNavbar';
import VideoGrid from '@/components/VideoGrid';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'My Videos - John Doe',
    description: 'Explore my portfolio of video editing work including music videos, commercials, short films, and creative projects.',
};

export default function VideosPage() {
    return (
        <>
            <FloatingNavbar />
            <main className="min-h-screen pt-32 pb-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold text-sm tracking-wider uppercase">
                            Portfolio
                        </span>
                        <h1 className="heading-lg mt-4 mb-6">
                            My <span className="gradient-text">Creative Work</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            A collection of my finest video editing and design projects spanning
                            various genres and styles.
                        </p>
                    </div>

                    <VideoGrid />
                </div>
            </main>
            <Footer />
        </>
    );
}
