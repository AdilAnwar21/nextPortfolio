import FloatingNavbar from '@/components/FloatingNavbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <FloatingNavbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
