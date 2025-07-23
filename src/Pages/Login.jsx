import React, { useState } from 'react'
import Beams from '../Components/Beams';
import { IoIosEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import GlareButton from '../Components/GlareButton';
import { useForm } from "react-hook-form"


const Login = () => {
    const [passview, setpassview] = useState(false);
    const [slide, setslide] = useState(false);
    const {
      register: registerSignup,
      handleSubmit: handleSubmitSignup,
      reset: resetSignup,
      formState: { errors: errorsSignup },
    } = useForm();
    const {
      register: registerLogin,
      handleSubmit: handleSubmitLogin,
      reset: resetLogin,
      formState: { errors: errorsLogin },
    } = useForm();

  const Register = (data)=>{
    console.log(data);
    resetSignup();
  }
  const Login = (data)=>{
    console.log(data);
    resetLogin();
  }
  
  return (
    <div className="w-full h-screen">
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
      <div className="fixed flex-col-reverse hidden px-5 py-10 overflow-hidden -translate-x-1/2 -translate-y-1/2 md:flex md:flex-row top-1/2 gap-x-15 gap-y-10 left-1/2 md:px-10 backdrop-blur-2xl border-1 rounded-2xl border-white/50">
        <div
          className={`absolute ${
            slide ? "left-[50%]" : "left-0"
          }  z-20 flex flex-col items-center -translate-x-0 transition-all duration-200 top-0 justify-center w-1/2 h-full text-white bg-zinc-900`}>
          <h1 className="-mb-10 text-9xl font-Satoshi">OG</h1>
          <p className="italic text-8xl font-Satoshi">Luxury</p>
        </div>
        <div>
          <form
            onSubmit={handleSubmitSignup(Register)}
            className="flex flex-col items-center text-white font-Satoshi gap-y-2">
            <h1 className="text-2xl font-semibold text-center font-Satoshi">
              Signup to get exciting offers!
            </h1>
            <p className="text-center max-w-90">
              Bringing you the best of Beauty with the best of results of
              Naturals at the best prices guaranteed with Quality
            </p>
            <input
              {...registerSignup("name", {
                required: "Name is required!",
                maxLength: {
                  value: 20,
                  message: "Name Should be in 20 Charecter.",
                },
              })}
              type="text"
              className="w-full px-3 py-2 mt-3 rounded-full outline-none border-1 border-white/50 invalid:border-pink-500"
              placeholder="name"
            />
            {errorsSignup.name && (
              <p className="text-[#FF3B30] font-Satoshi">
                {errorsSignup.name.message}
              </p>
            )}
            <input
              {...registerSignup("email", {
                required: "email is required!",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              className="w-full px-3 py-2 mt-3 rounded-full outline-none border-1 border-white/50 invalid:border-pink-500"
              placeholder="email"
            />
            {errorsSignup.email && (
              <p className="text-[#FF3B30] font-Satoshi">
                {errorsSignup.email.message}
              </p>
            )}
            <div className="flex items-center w-full px-3 my-3 rounded-full border-1 border-white/50">
              <input
                {...registerSignup("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Password must be at least 8 characters and include uppercase, lowercase, number, and special character",
                  },
                })}
                type={passview ? "text" : "password"}
                placeholder="password"
                className="w-full py-2 border-none outline-none"
              />
              {passview ? (
                <IoMdEye
                  onClick={() => setpassview(false)}
                  className="text-xl cursor-pointer"
                />
              ) : (
                <IoIosEyeOff
                  onClick={() => setpassview(true)}
                  className="text-xl cursor-pointer"
                />
              )}
            </div>
            {errorsSignup.password && (
              <p className="text-[#FF3B30] font-Satoshi">
                {errorsSignup.password.message}
              </p>
            )}
            <GlareButton>
              <input
                type="submit"
                value="SignUp"
                className="px-30 py-1 md:py-[0.25rem] md:px-40 text-2xl cursor-pointer"
              />
            </GlareButton>
          </form>
          <div className="flex justify-between mt-4 text-white font-Satoshi">
            <h1 className="font-Satoshi">Forgate Pass?</h1>
            <h1
              onClick={() => setslide(false)}
              className="cursor-pointer font-Satoshi">
              Login
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <form
            onSubmit={handleSubmitLogin(Login)}
            className="flex flex-col items-center text-white font-Satoshi gap-y-2">
            <h1 className="text-2xl font-semibold text-center font-Satoshi">
              Login to get exciting offers!
            </h1>
            <p className="text-center max-w-90">
              Bringing you the best of Beauty with the best of results of
              Naturals at the best prices guaranteed with Quality
            </p>
            <input
              {...registerLogin("email", {
                required: "email is required!",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              className="w-full px-3 py-2 mt-3 rounded-full outline-none border-1 border-white/50 invalid:border-pink-500"
              placeholder="email"
            />
            {errorsLogin.email && (
              <p className="text-[#FF3B30] font-Satoshi">
                {errorsLogin.email.message}
              </p>
            )}
            <div className="flex items-center w-full px-3 my-3 rounded-full border-1 border-white/50">
              <input
                {...registerLogin("password", {
                  required: "Password is required",
                })}
                type={passview ? "text" : "password"}
                placeholder="password"
                className="w-full py-2 border-none outline-none"
              />
              {passview ? (
                <IoMdEye
                  onClick={() => setpassview(false)}
                  className="text-xl cursor-pointer"
                />
              ) : (
                <IoIosEyeOff
                  onClick={() => setpassview(true)}
                  className="text-xl cursor-pointer"
                />
              )}
            </div>
            {errorsLogin.password && (
              <p className="text-[#FF3B30] font-Satoshi">
                {errorsLogin.password.message}
              </p>
            )}
            <GlareButton>
              <input
                type="submit"
                value="Login"
                className="px-30 py-1 md:py-[0.25rem] md:px-40 text-2xl cursor-pointer"
              />
            </GlareButton>
          </form>
          <div className="flex justify-between mt-4 text-white font-Satoshi">
            <h1 className="font-Satoshi">Forgate Pass?</h1>
            <h1
              onClick={() => setslide(true)}
              className="cursor-pointer font-Satoshi">
              Sign In
            </h1>
          </div>
        </div>
      </div>
      <div className="fixed flex flex-col px-5 py-10 overflow-hidden -translate-x-1/2 -translate-y-1/2 md:flex-row top-1/2 gap-x-15 gap-y-10 md:hidden left-1/2 backdrop-blur-2xl border-1 rounded-2xl border-white/50">
        <div className={`${slide ? "hidden" : "block"}`}>
          <form
            onSubmit={handleSubmitLogin(Login)}
            className="flex flex-col items-center text-white font-Satoshi gap-y-2">
            <h1 className="text-2xl font-semibold text-center font-Satoshi">
              Login to get exciting offers!
            </h1>
            <p className="text-center max-w-90">
              Bringing you the best of Beauty with the best of results of
              Naturals at the best prices guaranteed with Quality
            </p>
            <input
              {...registerLogin("email", {
                required: "email is required!",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              className="w-full px-3 py-2 mt-3 rounded-full outline-none border-1 border-white/50 invalid:border-pink-500"
              placeholder="email"
            />
            {errorsLogin.email && (
              <p className="text-[#FF3B30] font-Satoshi">
                {errorsLogin.email.message}
              </p>
            )}
            <div className="flex items-center w-full px-3 my-3 rounded-full border-1 border-white/50">
              <input
                {...registerLogin("password", {
                  required: "Password is required",
                })}
                type={passview ? "text" : "password"}
                placeholder="password"
                className="w-full py-2 border-none outline-none"
              />
              {passview ? (
                <IoMdEye
                  onClick={() => setpassview(false)}
                  className="text-xl cursor-pointer"
                />
              ) : (
                <IoIosEyeOff
                  onClick={() => setpassview(true)}
                  className="text-xl cursor-pointer"
                />
              )}
            </div>
            {errorsLogin.password && (
              <p className="text-[#FF3B30] font-Satoshi">
                {errorsLogin.password.message}
              </p>
            )}
            <GlareButton>
              <input
                type="submit"
                value="Login"
                className="px-30 py-1 md:py-[0.25rem] md:px-40 text-2xl cursor-pointer"
              />
            </GlareButton>
          </form>
          <div className="flex justify-between mt-4 text-white font-Satoshi">
            <h1 className="font-Satoshi">Forgate Pass?</h1>
            <h1
              onClick={() => setslide(true)}
              className="cursor-pointer font-Satoshi">
              Sign In
            </h1>
          </div>
        </div>
        <div className={`${slide ? "block" : "hidden"}`}>
          <form
            onSubmit={handleSubmitSignup(Register)}
            className="flex flex-col items-center text-white font-Satoshi gap-y-2">
            <h1 className="text-2xl font-semibold text-center font-Satoshi">
              Signup to get exciting offers!
            </h1>
            <p className="text-center max-w-90">
              Bringing you the best of Beauty with the best of results of
              Naturals at the best prices guaranteed with Quality
            </p>
            <input
              {...registerSignup("name", {
                required: "Name is required!",
                maxLength: {
                  value: 20,
                  message: "Name Should be in 20 Charecter.",
                },
              })}
              type="text"
              className="w-full px-3 py-2 mt-3 rounded-full outline-none border-1 border-white/50 invalid:border-pink-500"
              placeholder="name"
            />
            {errorsSignup.name && (
              <p className="text-[#FF3B30] font-Satoshi">
                {errorsSignup.name.message}
              </p>
            )}
            <input
              {...registerSignup("email", {
                required: "email is required!",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              className="w-full px-3 py-2 mt-3 rounded-full outline-none border-1 border-white/50 invalid:border-pink-500"
              placeholder="email"
            />
            {errorsSignup.email && (
              <p className="text-[#FF3B30] font-Satoshi">
                {errorsSignup.email.message}
              </p>
            )}
            <div className="flex items-center w-full px-3 my-3 rounded-full border-1 border-white/50">
              <input
                {...registerSignup("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Password must be at least 8 characters and include uppercase, lowercase, number, and special character",
                  },
                })}
                type={passview ? "text" : "password"}
                placeholder="password"
                className="w-full py-2 border-none outline-none"
              />
              {passview ? (
                <IoMdEye
                  onClick={() => setpassview(false)}
                  className="text-xl cursor-pointer"
                />
              ) : (
                <IoIosEyeOff
                  onClick={() => setpassview(true)}
                  className="text-xl cursor-pointer"
                />
              )}
            </div>
            {errorsSignup.password && (
              <p className="text-[#FF3B30] font-Satoshi">
                {errorsSignup.password.message}
              </p>
            )}
            <GlareButton>
              <input
                type="submit"
                value="SignUp"
                className="px-30 py-1 md:py-[0.25rem] md:px-40 text-2xl cursor-pointer"
              />
            </GlareButton>
          </form>
          <div className="flex justify-between mt-4 text-white font-Satoshi">
            <h1 className="font-Satoshi">Forgate Pass?</h1>
            <h1
              onClick={() => setslide(false)}
              className="cursor-pointer font-Satoshi">
              Login
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login