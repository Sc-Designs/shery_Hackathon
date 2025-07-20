import React, { useEffect, useRef, useState } from "react";
import gsap, { Expo } from "gsap";
import { useGSAP } from "@gsap/react";
import { useDispatch } from "react-redux";
import { completeAnimation } from "../Store/Reducers/AnimationEnd";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Loader = () => {
  const revelBox = useRef(null);
  const [number, setnumber] = useState(0);
  const dispatch = useDispatch();

  useGSAP(() => {
    if (revelBox.current) {
      gsap.to(revelBox.current, {
        x: 800,
        duration: 2,
        ease: "sine.inOut",
      });
    }
  });

  useEffect(() => {
    gsap.to(".line", {
      width: `${number}%`,
    });
  }, [number]);

  useEffect(() => {
    const assets = [];

    const imgElements = document.images;
    for (const img of imgElements) {
      if (img.complete) continue;
      assets.push(
        new Promise((resolve) => {
          img.addEventListener("load", resolve);
          img.addEventListener("error", resolve);
        })
      );
    }

    const videos = document.querySelectorAll("video");
    for (const video of videos) {
      if (video.readyState >= 3) continue;
      assets.push(
        new Promise((resolve) => {
          video.addEventListener("loadeddata", resolve);
          video.addEventListener("error", resolve);
        })
      );
    }

    if (document.fonts && document.fonts.ready) {
      assets.push(document.fonts.ready);
    }

    const loader = new GLTFLoader();
    const modelPaths = [
      "/Models/RedPerfume.glb",
      "/Models/BluePerfume.glb",
      "/Models/GrayPerfume.glb",
      "/Models/OrangePerfume.glb",
    ];

    modelPaths.forEach((path) => {
      assets.push(
        new Promise((resolve) => {
          loader.load(
            path,
            () => resolve(),
            undefined,
            () => resolve()
          );
        })
      );
    });

    const total = assets.length;
    let loaded = 0;

    if (total === 0) {
      setnumber(100);
      reveler();
      return;
    }

    assets.forEach((p) =>
      p.then(() => {
        loaded++;
        const percent = Math.round((loaded / total) * 100);
        setnumber(percent);

        if (percent === 100) {
          setTimeout(() => {
            reveler();
          }, 300); 
        }
      })
    );
  }, []);

  const reveler = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        dispatch(completeAnimation(true));
      },
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
      })
      .to(".main", {
        background: "transparent",
        duration: 0.1,
      })
      .to(".hide", {
        left: "100%",
        duration: 1,
        ease: Expo.easeInOut,
      })
      .to(".main", {
        top: "-100%",
      });
  };

  return (
    <div className="main w-full h-screen bg-black fixed z-[99999]">
      <img
        src="/OG_logo.png"
        className="logo h-80 w-80 md:w-full md:h-full relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 object-cover md:scale-40"
        alt=""
      />
      <div className="line bg-white absolute h-[1.5px] top-1/2 left-0 w-0 -translate-y-1/2"></div>
      <div className="hide w-0 bg-amber-400 z-20 absolute h-[1.5px] top-1/2 left-0 -translate-y-1/2"></div>
      <div
        ref={revelBox}
        className="absolute h-96 w-[40vw] bg-linear-to-r from-transparent from-10% to-35% to-black top-1/2 left-[45%] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="timer text-amber-400 absolute flex gap-x-5 justify-end w-full bottom-[5%] left-[45%] -translate-x-1/2">
        <h1 className="font-Placard text-5xl">Smell is Loading...</h1>
        <p className="font-Placard text-5xl w-15">{number}</p>
      </div>
    </div>
  );
};

export default Loader;
