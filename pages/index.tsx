import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experince from "../components/Experince";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contract from "../components/Contract";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      {/* Page Metadata */}
      <Head>
        <title>Ramandeep Singh Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience Section */}
      <section id="Experience" className="snap-center">
        <Experince />
      </section>

      {/* Skills Section */}
      <section id="Skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="Projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="Contact" className="snap-start">
        <Contract />
      </section>
    </div>
  );
};

export default Home;
