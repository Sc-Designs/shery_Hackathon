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
  return (
    <section className="w-full min-h-screen text-white px-10">
      <h1 className="font-Satoshi font-semibold mb-10 text-center text-4xl">
        Our Best Perfumes in 2025
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 justify-items-center items-center gap-5">
        {Cards.map((elem, i) => (
          <Card data={elem} key={i} />
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