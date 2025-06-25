import Navbar from "@/sections/Navbar";
import Introduction from "@/sections/Introduction";
import Hero from "@/sections/Hero";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Services from "@/sections/Services";
import Projects from "@/sections/Projects";
import ContactSection from "@/sections/Contact";

export default function Home() {
    return <>
        <Navbar />
        <Hero />
        <Introduction />
        <Features />
        <Services />
        <Projects />
        <ContactSection />
        <Footer />
    
    </>;
}
