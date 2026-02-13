'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
            if (titleRef.current) {
                gsap.from(titleRef.current, {
                    y: 100,
                    opacity: 0,
                    duration: 1,
                    ease: 'power4.out',
                    delay: 0.5,
                });
            }

            // Subtitle animation
            if (subtitleRef.current) {
                gsap.from(subtitleRef.current, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: 'power4.out',
                    delay: 0.8,
                });
            }

            // Parallax effect on scroll
            if (heroRef.current) {
                gsap.to(heroRef.current, {
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: true,
                    },
                    y: 200,
                    opacity: 0.5,
                });
            }
        }, heroRef);

        return () => ctx.revert();
    }, []);

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="hero"
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0"
        >
            {/* Background gradient orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                >
                    <span className="inline-block px-4 py-2 glass rounded-full text-sm font-medium">
                        ✨ Available for freelance projects
                    </span>
                </motion.div>

                <h1
                    ref={titleRef}
                    className="heading-xl mb-6 leading-tight"
                >
                    <span className="block dotted-text-alt">John Doe</span>
                    <span className="block gradient-text dotted-text-shadow">Video Editor & Designer</span>
                </h1>

                <p
                    ref={subtitleRef}
                    className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-10"
                >
                    Crafting visual stories that captivate and inspire. Specializing in
                    cinematic video editing, motion graphics, and creative design.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button onClick={scrollToContact} className="btn-primary">
                        Let&apos;s Work Together
                    </button>
                    <a href="/videos" className="btn-secondary">
                        View My Work
                    </a>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
                        <div className="w-1 h-3 bg-white/60 rounded-full" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
