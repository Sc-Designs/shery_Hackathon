import React from 'react'
import Navbar from '../Components/Navbar';
import Fotter from "../Components/Footer"
import ShinyText from '../Components/ShinyText';
import DecayCard from '../Components/DecayCard';
import { FaFacebookF } from 'react-icons/fa';
import { RiInstagramLine, RiYoutubeLine } from 'react-icons/ri';
import { FaXTwitter } from "react-icons/fa6";
const About = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Navbar />
      <div className="w-full  pt-25 pb-10 px-5 md:px-20">
        <h1 className="font-Placard text-4xl md:text-8xl border-b-1 px-5 pb-2">About Us</h1>
        <div className="md:px-10 lg:px-50 py-10 text-lg font-Satoshi">
          <ShinyText
            text={
              "Presenting OG Beauty, your one-stop destination for high-quality beauty and personal care products at prices that won't break the bank. We're dedicated to helping you look and feel your best without emptying your wallet. At OG Beauty, we believe that everyone deserves to pamper themselves, and our mission is to make quality beauty and personal care accessible to all. Our extensive range of products OG Beauty, OG Luxury, OG Science, OG Ayurveda and OG Naturals all carefully curated to provide you with effective solutions for your self-care needs at the lowest prices guaranteed."
            }
            disabled={false}
            speed={7}
            className="custom-class"
          />
        </div>
      </div>
      <div className="px-4 md:px-10 lg:px-20 flex md:gap-x-7 lg:gap-x-15">
        <div className='hidden md:block'>
        <DecayCard
          width={400}
          height={500}
          image="https://imgs.search.brave.com/ZxrsTHxOJxkr6eQR5d8jJh3VTk24FGYHIiZog8X6OGk/rs:fit:860:0:0:0/g:ce/aHR0cDovL3N0YXJz/dW5mb2xkZWQuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzEyL0FzaGlzaC1D/aGFuY2hsYW5pLTIu/anBn">
          <h2>
            Asish
            <br />
            Chanchalani
          </h2>
        </DecayCard>
        </div>
        <div>
          <h1 className="font-Placard text-5xl">Social Media : </h1>
          <div>
            <ul className="flex mt-10 gap-x-4 text-4xl">
              <a
                target="_blank"
                href="https://www.facebook.com/ogbeautyofficial/"
                className="border-1 p-4 rounded-full transition-all duration-200 hover:bg-white hover:text-black">
                <li>
                  <FaFacebookF />
                </li>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/ogbeautyofficial/"
                className="border-1 p-4 rounded-full transition-all duration-200 hover:bg-white hover:text-black">
                <li>
                  <RiInstagramLine />
                </li>
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/@ashishchanchlanivines"
                className="border-1 p-4 rounded-full transition-all duration-200 hover:bg-white hover:text-black">
                <li>
                  <RiYoutubeLine />
                </li>
              </a>
              <a
                target="_blank"
                href="https://twitter.com/ashchanchlani"
                className="border-1 p-4 rounded-full transition-all duration-200 hover:bg-white hover:text-black">
                <li>
                  <FaXTwitter />
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <Fotter />
    </div>
  );
}

export default About