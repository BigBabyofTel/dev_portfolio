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
      
      <Skills />

      {/** projects section add 6 slots
       */}
      <Projects />

      {/** contact section add 6 slots
       */}
      <Contact />

      <Footer />
      <div>
        <div className="sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">sm</div>
        <div className="hidden md:block lg:hidden xl:hidden 2xl:hidden">md</div>
        <div className="hidden md:hidden lg:block xl:hidden 2xl:hidden">lg</div>
        <div className="hidden md:hidden lg:hidden xl:block 2xl:hidden">xl</div>
        <div className="hidden md:hidden lg:hidden xl:hidden 2xl:block">2xl</div>
      </div>
    </main>
  );
}
