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
import DotGrid from '../Components/DotGrid';
import FlowingMenu from '../Components/FlowingMenu';
import { useSelector } from 'react-redux';

const Home = () => {
  const Cards = useSelector((state) => state.preCardInfoReducer);
  return (
    <div className="w-full min-h-screen overflow-x-hidden text-white bg-black">
      <section className="relative w-full h-screen">
        <Navbar />
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#171717"
          activeColor="#F0B100"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
        <TextReveler />
        <div className="absolute flex flex-col items-center w-full py-2 text-white bottom-30 gap-y-10 md:gap-y-5 md:bottom-20">
          <h1 className="text-4xl italic font-bold uppercase font-Satoshi md:text-3xl">
            In Your Hand
          </h1>
          <GlareButton>
            <Link
              to="/product/luxury"
              className="flex items-center py-2 text-xl px-28 font-Satoshi gap-x-2">
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
      <div className="relative h-96">
        <FlowingMenu items={Cards} />
      </div>
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