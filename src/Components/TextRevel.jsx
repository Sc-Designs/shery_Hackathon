import React, { useRef, useState } from 'react'
import gsap from "gsap"
import SplitText  from "gsap/SplitText";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(SplitText); 
gsap.registerPlugin(ScrollTrigger);
const TextRevel = () => {
  const splitText = useRef(null)
  const boxref = useRef(null);
  useGSAP(()=>{
    if(splitText.current && boxref.current){
      const words = SplitText.create(splitText.current, {type: "lines"})
      gsap.from(words.lines, {
        rotationX: -100,
        transformOrigin: "50% 50% -160px",
        opacity: 0,
        duration: 1.2,
        ease: "power3",
        stagger: 0.25,
        color: "#000",
        filter: "blur(15px)",
        scrollTrigger: {
          trigger: boxref.current,
          start: "top 60%",
          end: "top 20%",
          scrub: true,
        },
      });
    }
  })
  return (
    <section
    ref={boxref}
    className="w-full py-10 md:py-20 px-5 md:px-20 text-center flex justify-center">
      <h1
      ref={splitText}
      className="font-Placard text-5xl md:text-8xl text-white md:leading-30">
        Smell like confidence, walk like royalty — with OG Beuty by your side.
      </h1>
    </section>
  );
}

export default TextRevel