import React from 'react'
import Navbar from '../Components/Navbar'
import Marquee from '../Components/Marquee';
import VideoReveler from './../Components/VideoReveler';
import TextRevel from '../Components/TextRevel';
import CardSection from '../Components/CardSection';
import { TfiMouse } from "react-icons/tfi";
import ThreeDView from '../Components/ThreeDView';
import TextReveler from '../Components/TextReveler';
import Beams from '../Components/Beams';

const Home = () => {

  return (
    <div className="bg-black w-full min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <section className="w-full h-screen relative">
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
        <div className="text-white flex flex-col items-center gap-y-2 absolute bottom-2 left-1/2 -translate-x-1/2 md:left-[93%] font-Satoshi">
          <TfiMouse className='text-3xl rotate-180 animate-bounce'/>
          <h1>Scroll Down</h1>
        </div>
      </section>
      <VideoReveler />
      <TextRevel />
      <CardSection />
      <ThreeDView />
    </div>
  );
}

export default Home