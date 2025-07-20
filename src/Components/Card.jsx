import React from 'react'

import PixelTransition from './PixelTransition';


const Card = ({data}) => {
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
          <div className="flex flex-col bg-zinc-950 w-full h-full gap-y-5 justify-center items-center py-10 px-4">
            <h1 className="text-3xl font-GTSuper uppercase">{data.name}</h1>
            <p className="font-Satoshi text-zinc-600 text-center text-2xl">
              {data.description}
            </p>
          </div>
        }
        gridSize={12}
        pixelColor="#ffffff"
        animationStepDuration={0.4}
        className="custom-pixel-card"
      />
  );
}

export default Card