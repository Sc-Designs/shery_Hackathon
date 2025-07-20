import React, { useEffect, useRef, useState } from 'react'
import gsap,{Expo} from "gsap"
import { useGSAP } from "@gsap/react";
import { useDispatch } from 'react-redux';
import { completeAnimation } from '../Store/Reducers/AnimationEnd';
const Loader = () => {
  const revelBox = useRef(null)
  const [number, setnumber] = useState(0)
  const dispatch = useDispatch();

  useGSAP(()=>{
    if(revelBox.current){
      gsap.to(revelBox.current, {
        x: 800,
        duration: 2,
        ease: "sine.inOut",
      });
    }
  })
  useEffect(() => {
    gsap.to(".line", {
      width: `${number}%`,
      duration: 0.2,
      ease: "Power1.out",
    });
  }, [number]);
  useEffect(() => {
    const count = setInterval(() => {
      setnumber((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(count);
        reveler();
        return 100;
      });
    }, 25);
    return () => clearInterval(count);
  }, []);

  const reveler = ()=>{
    const tl = gsap.timeline({
      onComplete:()=>{
        dispatch(completeAnimation(true));
      }
    });
    tl.to(".hide", {
      width: "100%",
      duration: 1.2,
      ease: Expo.easeInOut,
    })
      .to(".line", {
        display: "none",
      })
      .to(
        ".logo",
        {
          opacity: 0,
          duration: 0.5,
        },
        "a"
      )
      .to(
        ".timer",
        {
          opacity: 0,
          duration: 0.5,
        },
        "a"
      )
      .to(
        ".logo",
        {
          display: "none",
        },
        "b"
      )
      .to(
        ".timer",
        {
          display: "none",
        },
        "b"
      )
      .to(".hide", {
        height: "100%",
        delay: 0.2,
      }).to(".main",{
        background:"transparent",
        duration:0.1
      })
      .to(".hide", {
        left: "100%",
        duration: 1,
        ease: Expo.easeInOut,
      })
      .to(".main",{
        top:"-100%"
      })

  }
  return (
    <div className="main w-full h-screen bg-black fixed z-[99999]">
      <img
        src="/OG_logo.png"
        className="logo h-80 w-80 md:w-full md:h-full relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 object-cover md:scale-40"
        alt=""
      />
      <div className='line bg-white absolute h-[1.5px] top-1/2 left-0 -translate-y-1/2'></div>
      <div className='hide w-0 bg-amber-400 z-20 absolute h-[1.5px] top-1/2 left-0 -translate-y-1/2'></div>
      <div
        ref={revelBox}
        className="absolute h-96 w-[40vw] bg-linear-to-r from-transparent from-10% to-35% to-black top-1/2 left-[45%] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="timer text-amber-400 absolute flex gap-x-5 justify-end w-full bottom-[5%] left-[45%] -translate-x-1/2">
        <h1 className='font-Placard text-5xl'>Smell is Loading...</h1>
        <p className='font-Placard text-5xl w-15'>{number}</p>
      </div>
    </div>
  );
}

export default Loader