import React, { useEffect, useRef, useState } from 'react'
import "./Marquee.css"
import gsap from "gsap";

const Marquee = ({side,img}) => {
    const [imgShow, setimgShow] = useState(false);
    const imgRef = useRef(null);
    const MoveBox = useRef(null)
    useEffect(()=>{
        gsap.to(`.${side}`,{
            x:side === "left" ? "-100%" : "100%",
            repeat:-1,
            duration:15,
            ease: "linear"
        })
    },[])
     useEffect(() => {
       const handleMouseMove = (e) => {
         const rect = MoveBox.current.getBoundingClientRect();
         const x = e.clientX - rect.left;
         const y = e.clientY - rect.top;

         if (imgRef.current) {
           imgRef.current.style.transform = `translate(${x}px, ${y}px)`;
         }
       };

       const box = MoveBox.current;
       if (box) {
         box.addEventListener("mousemove", handleMouseMove);
       }

       return () => {
         if (box) {
           box.removeEventListener("mousemove", handleMouseMove);
         }
       };
     }, []);
  return (
    <div
      ref={MoveBox}
      onMouseEnter={() => {
        setimgShow(true);
      }}
      onMouseLeave={() => {
        setimgShow(false);
      }}
      className="font-GTSuper text-9xl md:text-[7rem] relative z-20 flex w-full cursor-pointer">
      <img
        ref={imgRef}
        src={img}
        className={`absolute -translate-y-1/2 -translate-x-1/2 pointer-events-none left-0 w-50 h-50 rounded-full z-30 ${
          imgShow ? "opacity-100" : "opacity-0"
        }`}
        alt=""
      />
      <div
        className={`scroller flex overflow-x-auto ${
          side === "left" ? "justify-start" : "justify-end"
        }`}>
        <div className={`${side} flex gap-x-8 px-4 pointer-events-none`}>
          {["Fragrance", "Skin", "Face", "Hair", "Wellness"].map((elem, i) =>
            i % 2 === 0 ? (
              <h1 key={i} className="leading-32">
                {elem}
              </h1>
            ) : (
              <h1 key={i} className="onlyBorder leading-32">
                {elem}
              </h1>
            )
          )}
        </div>
        <div className={`${side} flex gap-x-8 px-4 pointer-events-none`}>
          {["Fragrance", "Skin", "Face", "Hair", "Wellness"].map((elem, i) =>
            i % 2 === 0 ? (
              <h1 key={i} className="onlyBorder leading-32">
                {elem}
              </h1>
            ) : (
              <h1 key={i} className='leading-32'>{elem}</h1>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Marquee