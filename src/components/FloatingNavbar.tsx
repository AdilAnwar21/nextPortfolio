'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Videos', href: '/videos' },
    { name: 'Contact', href: '#contact' },
];

export default function FloatingNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const { scrollY } = useScroll();

    const navOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
    const navY = useTransform(scrollY, [0, 100], [0, 0]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ['hero', 'about', 'skills', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        if (href.startsWith('#')) {
            const element = document.getElementById(href.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsMobileMenuOpen(false);
    };

    // Transform to combine both Y transition and X centering
    const navTransform = useTransform(
        scrollY,
        [0, 100],
        ['translateX(-50%) translateY(0px)', 'translateX(-50%) translateY(0px)']
    );

    return (
        <>
            <motion.nav
                style={{
                    opacity: navOpacity,
                    transform: navTransform,
                }}
                className="fixed top-6 left-1/2 z-[100] transition-all duration-300 w-full px-4"
            >
                <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-full px-6 md:px-8 py-4 md:py-4 flex items-center justify-between mx-auto shadow-2xl shadow-black/50 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-transparent before:rounded-full before:pointer-events-none max-w-[calc(100%-2rem)] md:max-w-fit">
                    {/* Logo */}
                    <Link href="/" className="font-display font-bold text-xl md:text-xl text-white">
                        AA
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                {link.href.startsWith('#') ? (
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className={`text-sm font-medium transition-all duration-200 px-4 py-2 rounded-full ${activeSection === link.href.substring(1)
                                            ? 'bg-white text-black'
                                            : 'text-white/80 hover:text-white hover:bg-white/10'
                                            }`}
                                    >
                                        {link.name}
                                    </button>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-2 rounded-full inline-block"
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="fixed top-28 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] bg-white rounded-3xl p-8 z-[90] md:hidden shadow-2xl"
                >
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link, index) => {
                            const icons = {
                                'Home': (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                ),
                                'About': (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                ),
                                'Skills': (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                ),
                                'Videos': (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                ),
                                'Contact': (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                ),
                            };

                            return (
                                <div key={link.name}>
                                    {link.href.startsWith('#') ? (
                                        <button
                                            onClick={() => scrollToSection(link.href)}
                                            className={`text-lg font-medium transition-all duration-200 w-full text-left px-6 py-4 rounded-2xl flex items-center gap-4 ${activeSection === link.href.substring(1)
                                                ? 'bg-gray-100 text-black'
                                                : 'text-gray-700 hover:bg-gray-50'
                                                }`}
                                        >
                                            <span className={activeSection === link.href.substring(1) ? 'text-primary' : 'text-gray-600'}>
                                                {icons[link.name as keyof typeof icons]}
                                            </span>
                                            {link.name}
                                        </button>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-lg font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200 flex items-center gap-4 px-6 py-4 rounded-2xl"
                                        >
                                            <span className="text-gray-600">
                                                {icons[link.name as keyof typeof icons]}
                                            </span>
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            )}
        </>
    );
}
