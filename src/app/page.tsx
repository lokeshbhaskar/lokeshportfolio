import About from "../components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <main className="px-2 md:px-10 py-1 md:py-4">
      <Hero  />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
