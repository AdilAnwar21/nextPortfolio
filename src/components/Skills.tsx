'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
    {
        category: 'Video Editing',
        tools: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Final Cut Pro'],
        color: 'from-purple-500 to-pink-500',
    },
    {
        category: 'Motion Graphics',
        tools: ['Adobe After Effects', 'Cinema 4D', 'Blender'],
        color: 'from-pink-500 to-cyan-500',
    },
    {
        category: 'Design Tools',
        tools: ['Adobe Photoshop', 'Illustrator', 'Figma'],
        color: 'from-cyan-500 to-purple-500',
    },
];

export default function Skills() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const cards = cardsRef.current;

        cards.forEach((card, index) => {
            if (!card) return;

            // Stacking effect: Each card pins and then gets pushed up by the next one
            // Increased spacing from 40px to 80px for better readability
            ScrollTrigger.create({
                trigger: card,
                start: `top ${100 + index * 80}px`,
                end: `+=${window.innerHeight * 0.7}`,
                pin: true,
                pinSpacing: false,
                scrub: true,
            });

            // Scale down effect as card gets pushed
            gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: `top ${100 + index * 80}px`,
                    end: `+=${window.innerHeight * 0.7}`,
                    scrub: true,
                },
                scale: 0.88 - index * 0.04,
                opacity: 0.4,
                filter: 'blur(2px)',
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="relative py-40 min-h-[200vh]"
        >
            <div className="container-custom">
                <div className="text-center mb-20 sticky top-20 z-50 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/95 to-transparent pb-8">
                    <span className="text-primary font-semibold text-sm tracking-wider uppercase">
                        My Toolkit
                    </span>
                    <h2 className="heading-md mt-4 dotted-text">
                        Skills & <span className="gradient-text dotted-text-shadow">Expertise</span>
                    </h2>
                </div>

                <div className="space-y-8 relative">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.category}
                            ref={(el) => {
                                if (el) cardsRef.current[index] = el;
                            }}
                            className="relative"
                            style={{ zIndex: skills.length - index }}
                        >
                            <div className="glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
                                <div
                                    className={`inline-block px-6 py-2 rounded-full bg-gradient-to-r ${skill.color} mb-6`}
                                >
                                    <span className="font-bold text-white text-lg">
                                        {skill.category}
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {skill.tools.map((tool, toolIndex) => (
                                        <div
                                            key={tool}
                                            className="glass-light rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300"
                                            style={{
                                                animationDelay: `${toolIndex * 0.1}s`,
                                            }}
                                        >
                                            <p className="font-semibold text-white">{tool}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Decorative gradient */}
                                <div
                                    className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br ${skill.color} rounded-full blur-3xl opacity-30 -z-10`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
