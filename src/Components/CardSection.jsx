import React, { useRef } from 'react'
import Card from './Card';
import { useSelector } from 'react-redux';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';
import GlareButton from './GlareButton';
gsap.registerPlugin(ScrollTrigger);
const CardSection = () => {
    const Cards = useSelector((state) => state.preCardInfoReducer);
    const pixelColor = ["#FB2C36", "#00B8DB", "#737373","#F54900"];
  return (
    <section className="w-full min-h-screen px-10 text-white">
      <h1 className="mb-10 text-4xl font-semibold text-center font-Satoshi">
        Our Best Perfumes in 2025
      </h1>
      <div className="grid items-center grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 justify-items-center">
        {Cards.map((elem, i) => (
          <Card data={elem} key={i} colorOfPixel={pixelColor[i]} />
        ))}
      </div>
      <div className="flex justify-center my-20">
        <GlareButton>
          <Link to="/product/luxury" className="px-20 py-2 font-Satoshi">
            Shop Now
          </Link>
        </GlareButton>
      </div>
    </section>
  );
}

export default CardSection