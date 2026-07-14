import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Projects />
      <OpenSource />
      <Research />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
