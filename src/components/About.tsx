'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Image reveal animation
            if (imageRef.current) {
                gsap.from(imageRef.current, {
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        scrub: 1,
                    },
                    scale: 0.8,
                    opacity: 0,
                });
            }

            // Content fade in
            if (contentRef.current) {
                gsap.from(contentRef.current.children, {
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: 'top 75%',
                    },
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power3.out',
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative min-h-screen flex items-center py-20"
        >
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image */}
                    <div ref={imageRef} className="relative">
                        <div className="relative aspect-square rounded-3xl overflow-hidden glass-light">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                            <Image
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&h=800&fit=crop"
                                alt="John Doe"
                                fill
                                className="object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-primary rounded-full" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-full blur-2xl opacity-50" />
                    </div>

                    {/* Content */}
                    <div ref={contentRef} className="space-y-6">
                        <div className="inline-block">
                            <span className="text-primary font-semibold text-sm tracking-wider uppercase">
                                About Me
                            </span>
                        </div>

                        <h2 className="heading-md dotted-text">
                            Turning Ideas Into{' '}
                            <span className="gradient-text dotted-text-shadow">Visual Masterpieces</span>
                        </h2>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            With over 5+ years of experience in video editing and design, I've
                            helped brands and creators bring their visions to life through
                            compelling visual storytelling.
                        </p>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            My passion lies in crafting cinematic experiences that not only look
                            stunning but also evoke emotions and drive engagement. From music
                            videos to commercial campaigns, I approach each project with
                            creativity, precision, and dedication.
                        </p>

                        <div className="grid grid-cols-3 gap-6 pt-6">
                            <div>
                                <div className="heading-sm gradient-text dotted-text">150+</div>
                                <p className="text-gray-400 text-sm mt-2">Projects Completed</p>
                            </div>
                            <div>
                                <div className="heading-sm gradient-text dotted-text">50+</div>
                                <p className="text-gray-400 text-sm mt-2">Happy Clients</p>
                            </div>
                            <div>
                                <div className="heading-sm gradient-text dotted-text">5+</div>
                                <p className="text-gray-400 text-sm mt-2">Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
