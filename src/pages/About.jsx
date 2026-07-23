import Navbar from "../Components/Navbar";
import AboutHero from "../Components/AboutHero";
import AboutStats from "../Components/AboutStats";
import Story from "../Components/Story";
import Values from "../Components/Values";
import Team from "../Components/Team";
import CTA from "../Components/CTA";

const About= () => {
  return (
    <section className="bg-[#0E0E0E] min-h-screen text-white ">
      <div className="max-w-6xl mx-auto space-y-14 px-5 py-14">
        <AboutHero />
        <AboutStats />
        <Story />
        <Values />
        <Team />
        <CTA />
      </div>
    </section>
  );
};

export default About;