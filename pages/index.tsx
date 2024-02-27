import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experince from '../components/Experince'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
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

     {/* projects */}

    {/* contact me */}
    </div>
  )
}

export default Home
