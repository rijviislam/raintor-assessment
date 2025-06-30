import About from "./components/About";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import WorkProcess from "./components/WorkProcess";
import WorkTogether from "./components/WorkTogether";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <About />
      <WorkProcess />
      <WorkTogether />
    </>
  );
}
