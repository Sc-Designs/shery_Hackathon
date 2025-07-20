import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
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
  return (
    <>
      <div className="hidden fixed z-50 lg:flex items-center justify-between text-amber-400 w-[90%] py-2 px-4 rounded-md bg-zinc-900/40 backdrop-blur-3xl border-1 border-amber-400 top-5 left-1/2 -translate-x-1/2">
        <img src="/onlyLogo.png" className="h-10 object-cover" alt="" />
        <div className="flex gap-x-10">
          <ul className="flex gap-x-4">
            <Link>
              <li>OG Luxury</li>
            </Link>
            <Link>
              <li>OG Natural</li>
            </Link>
            <Link>
              <li>OG Science</li>
            </Link>
            <Link>
              <li>OG Beauty</li>
            </Link>
            <Link>
              <li>OG Ayurveda</li>
            </Link>
            <Link>
              <li>OG Wellness</li>
            </Link>
            <Link>
              <li>Build Your Own Box</li>
            </Link>
          </ul>

          <ul className="flex gap-x-4 items-center text-2xl">
            <Link>
              <li>
                <CiSearch />
              </li>
            </Link>
            <Link>
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
      </div>
      <div className="flex fixed z-[99] items-center justify-between text-amber-400 w-[90%] py-2 px-4 rounded-md bg-zinc-900/80 backdrop-blur-3xl border-1 border-amber-400 top-5 left-1/2 -translate-x-1/2 md:hidden">
        <HiOutlineMenuAlt4
          onClick={() => setMenuShow(true)}
          className="text-2xl"
        />
        <img src="/onlyLogo.png" className="h-7 object-cover" alt="" />
        <ul className="flex gap-x-2 text-2xl">
          <Link>
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
          className="absolute top-2 right-2 text-4xl"
        />
        <div className=" w-full h-fit">
          <h1 className="flex items-center font-Satoshi font-semibold">
            Login
          </h1>
          <h1 className="mt-5 mb-2 flex items-center font-GTSuper">
            Shop By Brand
          </h1>
          <ul className="flex flex-col gap-y-5 mb-4 text-amber-400 font-Satoshi">
            <Link className="flex items-center bg-[#240c0c] p-2 justify-between rounded">
              <li>Luxury</li>
              <MdArrowOutward />
            </Link>
            <Link className="flex items-center bg-[#240c0c] p-2 justify-between rounded">
              <li>Beauty</li>
              <MdArrowOutward />
            </Link>
            <Link className="flex items-center bg-[#240c0c] p-2 justify-between rounded">
              <li>Science</li>
              <MdArrowOutward />
            </Link>
            <Link className="flex items-center bg-[#240c0c] p-2 justify-between rounded">
              <li>Natural</li>
              <MdArrowOutward />
            </Link>
            <Link className="flex items-center bg-[#240c0c] p-2 justify-between rounded">
              <li>Ayurveda</li>
              <MdArrowOutward />
            </Link>
            <Link className="flex items-center bg-[#240c0c] p-2 justify-between rounded">
              <li>Wellness</li>
              <MdArrowOutward />
            </Link>
          </ul>
          <hr />
          <div className="my-4 flex justify-between">
            <div className="flex flex-col items-center">
              <div className="border-2 p-2 rounded-full w-fit">
                <FaGripfire className="text-4xl" />
              </div>
              <h1 className="text-sm mt-1 font-Satoshi">Bundel Offers</h1>
            </div>
            <div className="flex flex-col items-center">
              <div className="border-2 p-2 rounded-full w-fit">
                <BiSolidOffer className="text-4xl" />
              </div>
              <h1 className="text-sm mt-1 font-Satoshi">New Offers</h1>
            </div>
            <div className="flex flex-col items-center">
              <div className="border-2 p-2 rounded-full w-fit">
                <RiVerifiedBadgeFill className="text-4xl" />
              </div>
              <h1 className="text-sm mt-1 font-Satoshi">Bestsellers</h1>
            </div>
          </div>
          <h1 className="flex  items-center gap-x-2 text-xl font-Satoshi">
            <IoCallOutline className="mt-1" /> Contact Us
          </h1>
          <div className="mt-2 text-lg font-Satoshi flex items-center gap-x-3">
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