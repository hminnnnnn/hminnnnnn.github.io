import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import AxJourney from "@/components/AxJourney";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <AxJourney />
        <Contact />
      </main>
      <footer className="py-6 text-center text-stone text-[12px] border-t border-sand">
        © 2026 김현민
      </footer>
    </>
  );
}
