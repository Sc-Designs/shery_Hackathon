import React from 'react'

import PixelTransition from './PixelTransition';


const Card = ({ data, colorOfPixel }) => {
  return (
    <PixelTransition
      firstContent={
        <img
          src={data.pic}
          alt="default pixel transition content, Perfume!"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      }
      secondContent={
        <div className="flex flex-col items-center justify-center w-full h-full px-4 py-10 bg-zinc-950 gap-y-5">
          <h1 className="text-3xl uppercase font-GTSuper">{data.name}</h1>
          <p className="text-2xl text-center font-Satoshi text-zinc-600">
            {data.description}
          </p>
        </div>
      }
      gridSize={12}
      pixelColor={colorOfPixel}
      animationStepDuration={0.6}
      className="custom-pixel-card"
    />
  );
};

export default Card