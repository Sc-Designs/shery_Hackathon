import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPlay } from "react-icons/fa6";
import Magnet from "./Magnet";

gsap.registerPlugin(ScrollTrigger);

const VideoReveler = () => {
  const boxReveler = useRef(null);
  const videoRef = useRef(null);
  const [PlayPause, setPlayPause] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: boxReveler.current,
          start: "top 10%",
          end: "top 10%",
          scrub: false,
        },
      });

      tl.to(".leftSide", {
        left: "-50%",
        duration: 0.9,
        ease: "circ.in",
      }).to(
        ".rightSide",
        {
          left: "100%",
          duration: 0.9,
          ease: "circ.in",
        },
        "<"
      );
    },
    { scope: boxReveler }
  );

  return (
    <section
      ref={boxReveler}
      className="relative flex w-full h-screen text-white overflow-hidden">
      <img
        src="/collection.jpg"
        className={`absolute w-full h-full object-cover transition-opacity duration-200 ${PlayPause ? "opacity-0" : "opacity-100"}`}
        alt=""
      />
      <video
        ref={videoRef}
        src="/Og_Add.mp4"
        onClick={() => {
          if (videoRef.current) {
            videoRef.current.pause();
            setPlayPause(false);
          }
        }}
        onEnded={() => setPlayPause(false)}
        className="object-cover object-bottom w-full h-full"></video>
      {!PlayPause && (
        <div className="absolute p-10 text-5xl transition-all duration-200 -translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full cursor-pointer group top-1/2 left-1/2 hover:bg-red-700">
          <FaPlay
            className="transition-all duration-200 group-hover:scale-90"
            onClick={() => {
              if (videoRef.current) {
                videoRef.current.play();
                setPlayPause(true);
              }
            }}
            />
        </div>
      )}
      <div className="leftSide w-1/2 h-full flex items-center justify-end z-20 pr-[0.5px] absolute bg-black left-0 top-0">
        <h1 className="tracking-widest font-Blac text-[14vw]">Perf</h1>
      </div>
      <div className="rightSide w-1/2 h-full flex items-center justify-start z-20 pl-[0.5px] absolute bg-black left-1/2 top-0">
        <h1 className="tracking-widest font-Blac text-[14vw]">umes</h1>
      </div>
    </section>
  );
};

export default VideoReveler;
