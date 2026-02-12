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

    const navOpacity = useTransform(scrollY, [0, 100], [0, 1]);
    const navY = useTransform(scrollY, [0, 100], [-100, 0]);

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
        ['translateX(-50%) translateY(-100px)', 'translateX(-50%) translateY(0px)']
    );

    return (
        <>
            <motion.nav
                style={{
                    opacity: navOpacity,
                    transform: navTransform,
                }}
                className="fixed top-6 left-1/2 z-[100] transition-all duration-300 w-full max-w-fit px-4"
            >
                <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-full px-8 py-4 flex items-center justify-center gap-2 mx-auto shadow-2xl shadow-black/50 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-transparent before:rounded-full before:pointer-events-none">
                    {/* Logo */}
                    <Link href="/" className="font-display font-bold text-xl text-white mr-4">
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
                        className="md:hidden text-white ml-4"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span
                                className={`w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                                    }`}
                            />
                            <span
                                className={`w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''
                                    }`}
                            />
                            <span
                                className={`w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                    }`}
                            />
                        </div>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl p-6 z-[90] md:hidden shadow-2xl shadow-black/50"
                >
                    <div className="flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                {link.href.startsWith('#') ? (
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className={`text-base font-medium transition-all duration-200 w-full text-left px-4 py-3 rounded-lg ${activeSection === link.href.substring(1)
                                            ? 'bg-white text-black'
                                            : 'text-white/80 hover:text-white hover:bg-white/10'
                                            }`}
                                    >
                                        {link.name}
                                    </button>
                                ) : (
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 block px-4 py-3 rounded-lg"
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}
        </>
    );
}
