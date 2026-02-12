'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (contentRef.current) {
                gsap.from(contentRef.current.children, {
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: 'top 75%',
                    },
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.15,
                    ease: 'power3.out',
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleContact = () => {
        window.location.href = 'mailto:adil@example.com';
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="relative min-h-screen flex items-center py-20"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />

            <div className="container-custom relative z-10">
                <div
                    ref={contentRef}
                    className="text-center max-w-4xl mx-auto space-y-8"
                >
                    <span className="inline-block px-4 py-2 glass rounded-full text-sm font-medium">
                        Ready to collaborate?
                    </span>

                    <h2 className="heading-lg dotted-text">
                        Let's Create Something{' '}
                        <span className="gradient-text dotted-text-shadow">Amazing Together</span>
                    </h2>

                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Have a project in mind? Whether it's a music video, commercial, or
                        creative campaign, I'd love to hear about it and bring your vision to
                        life.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                        <button onClick={handleContact} className="btn-primary">
                            Get In Touch
                        </button>
                        <a
                            href="#"
                            className="btn-secondary"
                            onClick={(e) => {
                                e.preventDefault();
                                // In a real scenario, this would trigger a download
                                alert('Demo reel download would start here!');
                            }}
                        >
                            Download Reel
                        </a>
                    </div>

                    {/* Contact info */}
                    <div className="grid md:grid-cols-3 gap-8 pt-16">
                        <div className="glass-light rounded-2xl p-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-semibold mb-2">Email</h3>
                            <p className="text-gray-400 text-sm">adil@example.com</p>
                        </div>

                        <div className="glass-light rounded-2xl p-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-semibold mb-2">Location</h3>
                            <p className="text-gray-400 text-sm">Available Worldwide</p>
                        </div>

                        <div className="glass-light rounded-2xl p-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-semibold mb-2">Response Time</h3>
                            <p className="text-gray-400 text-sm">Within 24 hours</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
