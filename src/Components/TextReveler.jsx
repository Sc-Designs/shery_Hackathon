import React, { useEffect, useRef } from 'react'
import "./Marquee.css"
import { gsap } from 'gsap';
import { useSelector } from 'react-redux';
import { SplitText } from 'gsap/SplitText';

const TextReveler = () => {
    const textRef = useRef(null)
    const animation = useSelector((state) => state.Animation);
    useEffect(()=>{
        if(animation){
           const word = SplitText.create(textRef.current, {type:"words"});
           gsap.from(word.words, {
             rotationX: -100,
             transformOrigin: "50% 50% -160px",
             opacity: 0,
             duration: 1.2,
             ease: "power3",
             stagger: 0.25,
             color: "#000",
             filter: "blur(15px)",
           }); 
        }
    },[animation])
  return (
    <div className="text-white absolute flex z-50 md:w-full font-GTSuper top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {animation && (
      <h1 ref={textRef} className="onlyBorder text-6xl lg:text-8xl text-center leading-20 lg:leading-32 italic px-20">
        "Fragrance", "Skin", "Face", "Hair", "Wellness"
      </h1>
    )}
    </div>
  );
}

export default TextReveler