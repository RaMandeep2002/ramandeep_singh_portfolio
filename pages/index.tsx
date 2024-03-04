import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experince from '../components/Experince'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contract from '../components/Contract'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Ramandeep singh portfolio</title>
      </Head>

      {/* header */}
      <Header />
      {/* hero */}
      <section id='hero' className='snap-start '>
        <Hero />
      </section>
      {/* About */}
      <section id="about" className='snap-center'>
        <About />
      </section>
      {/* Experince */}
      <section id="Experience" className="snap-center">
        <Experince />
      </section>
      {/* Skills */}
      <section id='Skills' className='snap-start'>
        <Skills />
      </section>

      <section id='Projects' className='snap-start'>
        <Projects />
      </section>

      {/* contact me */}
      <section id='Contact' className='snap-start'>
        <Contract />
      </section>
    </div>
  )
}

export default Home
