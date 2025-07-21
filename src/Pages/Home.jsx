import React from 'react'
import VideoReveler from './../Components/VideoReveler';
import TextRevel from '../Components/TextRevel';
import CardSection from '../Components/CardSection';
import { TfiMouse } from "react-icons/tfi";
import TextReveler from '../Components/TextReveler';
import Beams from '../Components/Beams';
import ScrollVelocity from '../Components/ScrollVelocity';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import "../Components/Marquee.css"
import GlareButton from '../Components/GlareButton';
import { CgFramer } from "react-icons/cg";
import Navbar from '../Components/Navbar';

const Home = () => {

  return (
    <div className="bg-black w-full min-h-screen text-white overflow-x-hidden">
      <section className="w-full h-screen relative">
        <Navbar />
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={10}
        />
        <TextReveler />
        <div className="absolute w-full py-2 text-white bottom-30 flex flex-col gap-y-10 md:gap-y-5 items-center md:bottom-20">
          <h1 className="font-Satoshi text-4xl italic md:text-3xl uppercase font-bold">
            In Your Hand
          </h1>
          <GlareButton>
            <Link
              to="/product/luxury"
              className="px-28 py-2 font-Satoshi text-xl flex items-center gap-x-2">
              Grab It <CgFramer className="mt-1" />
            </Link>
          </GlareButton>
        </div>
        <div className="text-white flex flex-col items-center gap-y-2 absolute bottom-2 left-1/2 -translate-x-1/2 md:left-[93%] font-Satoshi">
          <TfiMouse className="text-3xl rotate-180 animate-bounce" />
          <h1>Scroll Down</h1>
        </div>
      </section>
      <VideoReveler />
      <TextRevel />
      <CardSection />
      <ScrollVelocity
        texts={["Fragrance", "OG Beuty"]}
        velocity={100}
        className="custom-scroll-text"
      />
      <Footer />
    </div>
  );
}

export default Home