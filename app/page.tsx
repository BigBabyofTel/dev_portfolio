import Header from "./components/header";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className=" bg-[#151515] text-white">
      {/** header section array with icons
       */}
      <Header />
      {/** hero section  add text and font
       */}
      <Hero />
      {/** skills section add tech stack
       */}
      <hr className="lg:w-3/4 lg:mx-auto lg:my-10 lg:py-10" />
      <Skills />

      {/** projects section add 6 slots
       */}
      <Projects />

      {/** contact section add 6 slots
       */}
      <Contact />

      <Footer />
    </main>
  );
}
