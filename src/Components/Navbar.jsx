import React, {  useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { MdPersonPin } from "react-icons/md";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiFillCloseSquare } from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";
import { FaGripfire } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    const [menuShow, setMenuShow] = useState(false);
    const navigate = useNavigate();
  return (
    <>
      <div className="hidden fixed z-[999] lg:flex items-center justify-between text-zinc-200 w-[90%] py-2 px-10 rounded-full bg-zinc-700/50 backdrop-blur-2xl border-1 border-zinc-300 top-5 left-1/2 -translate-x-1/2">
        <img
          onClick={() => {
            navigate("/");
          }}
          src="/onlyLogo.png"
          className="object-cover h-10 cursor-pointer"
          alt=""
        />
        <div className="flex gap-x-10">
          <ul className="flex gap-x-4">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-amber-400 hover:text-amber-400 transition-all duration-150"
                  : "hover:text-amber-400 transition-all duration-150"
              }
              to="/product/luxury">
              <li>OG Luxury</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-amber-400 hover:text-amber-400 transition-all duration-150"
                  : "hover:text-amber-400 transition-all duration-150"
              }
              to="/product/natural">
              <li>OG Natural</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-amber-400 hover:text-amber-400 transition-all duration-150"
                  : "hover:text-amber-400 transition-all duration-150"
              }
              to="/product/science">
              <li>OG Science</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-amber-400 hover:text-amber-400 transition-all duration-150"
                  : "hover:text-amber-400 transition-all duration-150"
              }
              to="/product/beauty">
              <li>OG Beauty</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-amber-400 hover:text-amber-400 transition-all duration-150"
                  : "hover:text-amber-400 transition-all duration-150"
              }
              to="/product/ayurveda">
              <li>OG Ayurveda</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-amber-400 hover:text-amber-400 transition-all duration-150"
                  : "hover:text-amber-400 transition-all duration-150"
              }
              to="/product/wellness">
              <li>OG Wellness</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-amber-400 hover:text-amber-400 transition-all duration-150"
                  : "hover:text-amber-400 transition-all duration-150"
              }
              to="/product/deals">
              <li>Crazy Deals</li>
            </NavLink>
          </ul>

          <ul className="flex items-center text-2xl gap-x-4">
            <Link>
              <li>
                <CiSearch />
              </li>
            </Link>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-amber-400 hover:text-amber-400 transition-all duration-150"
                  : "hover:text-amber-400 transition-all duration-150"
              }
              to="/profile">
              <li>
                <MdPersonPin />
              </li>
            </NavLink>
            <Link>
              <li>
                <LiaCartArrowDownSolid />
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex fixed z-[99] items-center justify-between text-zinc-200 w-[90%] py-2 px-4 rounded-full bg-zinc-700/50 backdrop-blur-xl border-1 border-zinc-300 top-5 left-1/2 -translate-x-1/2 md:hidden">
        <HiOutlineMenuAlt4
          onClick={() => setMenuShow(true)}
          className="text-2xl"
        />
        <img
          onClick={() => navigate("/")}
          src="/onlyLogo.png"
          className="object-cover h-7"
          alt=""
        />
        <ul className="flex text-2xl gap-x-2">
          <Link to="/profile">
            <li>
              <MdPersonPin />
            </li>
          </Link>
          <Link>
            <li>
              <LiaCartArrowDownSolid />
            </li>
          </Link>
        </ul>
      </div>
      <div
        className={`sidenav fixed w-[90%] h-screen z-[9999] overflow-auto bg-amber-400 px-4 py-5 text-2xl transition-all duration-150 ${
          menuShow ? "left-0" : "left-[-100%]"
        }`}>
        <AiFillCloseSquare
          onClick={() => setMenuShow(false)}
          className="absolute text-4xl top-2 right-2 text-[#240c0c]"
        />
        <div className="w-full h-fit">
          <h1 className="flex text-[#240c0c] items-center mt-5 mb-4 font-GTSuper">
            Shop By Brand
          </h1>
          <ul className="flex flex-col mb-4 gap-y-5 text-amber-400 font-Satoshi">
            <Link
              to="/product/luxury"
              onClick={() => setMenuShow(false)}
              className="flex items-center bg-[#240c0c] p-2 justify-between rounded">
              <li>Luxury</li>
              <MdArrowOutward />
            </Link>
            <Link
              onClick={() => setMenuShow(false)}
              to="/product/beauty"
              className="flex items-center bg-[#240c0c] p-2 justify-between rounded">
              <li>Beauty</li>
              <MdArrowOutward />
            </Link>
            <Link
              onClick={() => setMenuShow(false)}
              to="/product/science"
              className="flex items-center bg-[#240c0c] p-2 justify-between rounded">
              <li>Science</li>
              <MdArrowOutward />
            </Link>
            <Link
              onClick={() => setMenuShow(false)}
              to="/product/natural"
              className="flex items-center bg-[#240c0c] p-2 justify-between rounded">
              <li>Natural</li>
              <MdArrowOutward />
            </Link>
            <Link
              to="/product/ayurveda"
              onClick={() => setMenuShow(false)}
              className="flex items-center bg-[#240c0c] p-2 justify-between rounded">
              <li>Ayurveda</li>
              <MdArrowOutward />
            </Link>
            <Link
              onClick={() => setMenuShow(false)}
              to="/product/wellness"
              className="flex items-center bg-[#240c0c] p-2 justify-between rounded">
              <li>Wellness</li>
              <MdArrowOutward />
            </Link>
          </ul>
          <hr />
          <div className="flex justify-between my-4">
            <div className="flex flex-col items-center">
              <div className="p-2 border-2 rounded-full border-[#240c0c] w-fit">
                <FaGripfire className="text-4xl text-[#240c0c]" />
              </div>
              <h1 className="mt-1 text-sm font-Satoshi text-[#240c0c]">
                Bundel Offers
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-2 border-2 rounded-full border-[#240c0c] w-fit">
                <BiSolidOffer className="text-4xl text-[#240c0c]" />
              </div>
              <h1 className="mt-1 text-sm font-Satoshi text-[#240c0c]">
                New Offers
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-2 border-2 rounded-full border-[#240c0c] w-fit">
                <RiVerifiedBadgeFill className="text-4xl text-[#240c0c]" />
              </div>
              <h1 className="mt-1 text-sm font-Satoshi text-[#240c0c]">
                Bestsellers
              </h1>
            </div>
          </div>
          <h1 className="flex items-center text-xl gap-x-2 font-Satoshi text-[#240c0c]">
            <IoCallOutline className="mt-1 text-[#240c0c]" /> Contact Us
          </h1>
          <div className="flex items-center mt-2 text-lg font-Satoshi gap-x-3 text-[#240c0c]">
            <h1>Follow us :</h1>
            <CiFacebook className="mt-1 text-xl" />
            <FaInstagram className="mt-1 text-xl" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar