import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPlay } from "react-icons/fa6";

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
      className="w-full h-screen flex text-white relative">
      <video
        ref={videoRef}
        loop
        src="/0001-0120.mp4"
        onClick={() => {
          if (videoRef.current) {
            videoRef.current.pause();
            setPlayPause(false);
          }
        }}
        className="w-full h-full object-cover object-bottom"></video>
      {!PlayPause && (
        <div className="bg-red-600 group absolute p-10 top-1/2 left-1/2 cursor-pointer -translate-x-1/2 -translate-y-1/2 text-5xl rounded-full hover:bg-red-700 transition-all duration-200">
          <FaPlay
            className="group-hover:scale-90 transition-all duration-200"
            onClick={() => {
              if (videoRef.current) {
                videoRef.current.play();
                setPlayPause(true);
              }
            }}
          />
        </div>
      )}
      <div className="leftSide w-1/2 h-full flex items-center uppercase justify-end pr-[0.5px] absolute bg-black left-0 top-0">
        <h1 className="tracking-widest font-GTSuper text-[14vw]">Perf</h1>
      </div>
      <div className="rightSide w-1/2 h-full flex items-center uppercase justify-start pl-[0.5px] absolute bg-black left-1/2 top-0">
        <h1 className="tracking-widest font-GTSuper text-[14vw]">umes</h1>
      </div>
    </section>
  );
};

export default VideoReveler;
