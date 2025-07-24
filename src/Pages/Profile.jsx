import React from 'react'
import Navbar from '../Components/Navbar';
import SpotlightCard from '../Components/SpotlightCard';
import { HiOutlineBanknotes } from "react-icons/hi2";
import ShinyText from '../Components/ShinyText';
import GlareButton from './../Components/GlareButton';
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import Footer from "../Components/Footer"
import Magnet from '../Components/Magnet';

const Profile = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <div className="w-full h-full px-5 lg:px-10 pt-25">
        <h1 className="text-center font-GTSuper text-6xl md:text-9xl">
          My Account
        </h1>
        <div className="flex flex-col md:flex-row justify-between mt-10 h-fit font-Satoshi">
          <div className="w-full border-white/50 md:border-r-1 md:border-b-1">
            <h1 className="pb-2 text-center border-white/50 border-b-1">
              Personal Details
            </h1>
            <div className="px-2 lg:px-5 py-4">
              <SpotlightCard className="flex flex-col text-lg md:text-base tracking-wide custom-spotlight-card gap-y-3">
                <p>Suvam Chakraborti</p>
                <p>nfgaming4523@gmail.com</p>
                <p>88, Steel Park, Durgapur-06</p>
                <p>8001165553</p>
                <p>Male</p>
              </SpotlightCard>
            </div>
          </div>
          <div className="w-full md:border-r-1 md:border-b-1 border-white/50">
            <h1 className="pb-2 text-center border-b border-white/50">
              Payment Details
            </h1>
            <div className="md:px-2 lg:px-5 py-4">
              <SpotlightCard className="flex flex-col text-lg tracking-wide custom-spotlight-card gap-y-3">
                <div className="flex items-center gap-x-4">
                  <HiOutlineBanknotes className="text-2xl text-white/70" />
                  <h1 className="text-xl">Google Pay</h1>
                </div>
                <h1 className="text-base mb-2 lg:mb-5">
                  UPI ID : &nbsp;
                  <ShinyText
                    text="ndcudhycq89adu8ud9238"
                    disabled={false}
                    speed={4}
                    className="custom-class"
                  />
                </h1>
                <GlareButton>
                  <button className="py-1">Change</button>
                </GlareButton>
                <GlareButton glareColor="#fb7575">
                  <button className="py-1 text-red-400/90">Delete</button>
                </GlareButton>
              </SpotlightCard>
            </div>
          </div>
          <div className="w-full md:border-b-1 border-white/50">
            <h1 className="pb-2 text-center border-white/50 border-b-1">
              Account Option
            </h1>
            <div className="md:px-2 lg:px-4 py-2">
              <SpotlightCard className="flex flex-col items-center text-lg tracking-wide custom-spotlight-card gap-y-5">
                <div>
                  <Magnet padding={0} disabled={false} magnetStrength={4}>
                  <button className="px-10 py-1 rounded-full cursor-pointer bg-red-400/60 hover:bg-red-400/80">
                    LogOut
                  </button>
                  </Magnet>
                </div>
                <div>
                  <Magnet padding={0} disabled={false} magnetStrength={4}>
                  <button className="px-10 py-1 rounded-full cursor-pointer bg-sky-400/60 hover:bg-sky-400/90">
                    Ask for help
                  </button>
                  </Magnet>
                </div>
                <div>
                  <Magnet padding={0} disabled={false} magnetStrength={4}>
                  <button className="px-5 py-2 md:px-10 md:py-1  rounded-full cursor-pointer bg-red-400/60 hover:bg-red-400/80">
                    Account Delete
                  </button>
                  </Magnet>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-4 px-5 font-Satoshi md:px-10">
        <h1 className="text-7xl font-Blac font-semibold">Your Order</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3 gap-2 mt-10 mb-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="px-3 py-3 w-full flex items-center justify-between bg-zinc-950 rounded-2xl">
              <div className="w-15 h-15 rounded-md overflow-hidden">
                <img
                className='w-full h-full object-cover'
                  src="https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div>
                <h1>Product Name</h1>
                <p>Product Description</p>
              </div>
              <button className='h-full px-4 text-lg border-2 rounded-xl border-white/20'>
                <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
          <button className='flex cursor-pointer items-center gap-x-2 mx-auto border-1 rounded-full text-lg font-semibold px-4 py-2 transition-all duration-200 hover:bg-zinc-200 hover:text-black'>
          <FaArrowDown />
          Load More
          <FaArrowDown />
          </button>
      </div>
          <Footer />
    </div>
  );
}

export default Profile