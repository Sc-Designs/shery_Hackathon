import React, { useState } from 'react'
import Beams from '../Components/Beams';
import { IoIosEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import GlareButton from '../Components/GlareButton';
import { Link } from 'react-router-dom';
import ShinyText from '../Components/ShinyText';

const Login = () => {
    const [passview, setpassview] = useState(false);
  return (
    <div className="w-full h-screen relative">
      <Beams
        beamWidth={2}
        beamHeight={15}
        beamNumber={12}
        lightColor="#ffffff"
        speed={2}
        noiseIntensity={1.75}
        scale={0.2}
        rotation={10}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 md:px-10 py-4 w-[90%] md:max-w-[35vw] backdrop-blur-2xl border-1 rounded-2xl border-white/50">
        <form className=" text-white font-Satoshi  flex flex-col gap-y-2 items-center">
          <h1 className="font-Satoshi font-semibold text-2xl text-center">
            Login/Signup to get exciting offers!
          </h1>
          <p className="text-center max-w-90">
            Bringing you the best of Beauty with the best of results of Naturals
            at the best prices guaranteed with Quality
          </p>
          <input
            type="email"
            className="border-1 border-white/50 outline-none rounded-full px-3 py-2 w-full mt-3 invalid:border-pink-500"
            placeholder="email"
          />
          <div className="border-1 border-white/50 rounded-full  w-full my-3 flex items-center px-3">
            <input
              type={passview ? "text" : "password"}
              placeholder="password"
              className="w-full py-2 border-none outline-none"
            />
            {passview ? (
              <IoMdEye
                onClick={() => setpassview(false)}
                className="cursor-pointer text-xl"
              />
            ) : (
              <IoIosEyeOff
                onClick={() => setpassview(true)}
                className="cursor-pointer text-xl"
              />
            )}
          </div>
          <GlareButton>
            <input
              type="submit"
              value="Login"
              className="px-30 py-1 md:py-[0.25rem] md:px-40 text-2xl cursor-pointer"
            />
          </GlareButton>
        </form>
        <div className="flex justify-between text-white mt-4 font-Satoshi">
          <ShinyText
            text="Forgate Pass?"
            disabled={false}
            speed={3}
            className="custom-class"
          />
          <ShinyText
            text="Sign in"
            disabled={false}
            speed={3}
            className="custom-class"
          />

        </div>
      </div>
    </div>
  );
}

export default Login