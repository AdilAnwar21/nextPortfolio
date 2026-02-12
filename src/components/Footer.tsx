import Link from 'next/link';

const socialLinks = [
    { name: 'YouTube', href: '#', icon: 'youtube' },
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    { name: 'Behance', href: '#', icon: 'behance' },
];

const footerLinks = [
    { name: 'Home', href: '/#hero' },
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Videos', href: '/videos' },
    { name: 'Contact', href: '/#contact' },
];

export default function Footer() {
    return (
        <footer className="relative bg-dark-lighter border-t border-gray-800">
            {/* Gradient line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent" />

            <div className="container-custom py-12">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="font-display font-bold text-2xl gradient-text dotted-text-alt inline-block mb-4">
                            John Doe
                        </Link>
                        <p className="text-gray-400 text-sm">
                            Video Editor & Designer crafting visual stories that inspire and
                            captivate audiences worldwide.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-primary transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-semibold mb-4">Connect</h4>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 glass-light rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                                    aria-label={social.name}
                                >
                                    <span className="text-sm font-bold">
                                        {social.name.charAt(0)}
                                    </span>
                                </a>
                            ))}
                        </div>
                        <p className="text-gray-400 text-sm mt-4">adil@example.com</p>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} John Doe. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link
                            href="#"
                            className="text-gray-400 hover:text-primary transition-colors text-sm"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-400 hover:text-primary transition-colors text-sm"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
