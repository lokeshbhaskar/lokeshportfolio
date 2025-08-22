import About from "../components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white">
      <Hero  />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
