import React, { useMemo, useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

export default function PerfumeBottle({ model, position = [0, 0, 0] }) {
  const ref = useRef();
  const { scene } = useGLTF(model);
  const clonedScene = useMemo(() => clone(scene), [scene]);

  const [scale, setScale] = useState(getScale());

  useEffect(() => {
    const handleResize = () => setScale(getScale());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function getScale() {
    const width = window.innerWidth;
    if (width < 640) return 0.4;
    if (width < 1024) return 0.5;
    return 0.51;
  }

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.007;
      ref.current.rotation.z = 0.15;
    }
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      <primitive object={clonedScene} />
    </group>
  );
}
