import React, { useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import PerfumeBottle from "./PerfumeBottle";
import { Suspense } from "react";


const ThreeDView = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [cameraPos, setCameraPos] = useState([0, 0, 6]);
    const [bottlePositions, setBottlePositions] = useState([]);

   useEffect(() => {
     const handleResize = () => {
       const width = window.innerWidth;
       setWindowWidth(width);
       if (width < 640) {
         setCameraPos([0, 0, 9]);
         setBottlePositions([
           { model: "/Models/RedPerfume.glb", pos: [-1, 1.5, 1.5] },
           { model: "/Models/BluePerfume.glb", pos: [-1, -0.9, 1.9] },
           { model: "/Models/OrangePerfume.glb", pos: [1, -0.9, 1.9] },
           { model: "/Models/GrayPerfume.glb", pos: [1, 1.5, 1.5] },
         ]);
       } else {
         setCameraPos([0, 0, 6]);
         setBottlePositions([
           { model: "/Models/RedPerfume.glb", pos: [-4, -0.5, -1.5] },
           { model: "/Models/BluePerfume.glb", pos: [-0.9, -0.5, 1] },
           { model: "/Models/OrangePerfume.glb", pos: [4, -0.5, -1.5] },
           { model: "/Models/GrayPerfume.glb", pos: [0.9, -0.5, 1] },
         ]);
       }
     };

     handleResize();

     window.addEventListener("resize", handleResize);
     return () => window.removeEventListener("resize", handleResize);
   }, []);


  return (
    <div className="w-full h-[70vh] sm:h-[80vh] md:h-screen">
      <Canvas camera={{ position: cameraPos, fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Environment preset="warehouse" />

          {bottlePositions.map((position, index) => (
            <PerfumeBottle
              model={position.model}
              key={index}
              position={position.pos}
              scale={0.5}
            />
          ))}

          <OrbitControls enableRotate={true} enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeDView;
