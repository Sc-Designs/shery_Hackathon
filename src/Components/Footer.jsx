import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="relative flex flex-col w-full py-10 mt-10 bg-zinc-950 md:flex-row md:items-start gap-y-5">
      <div className="flex flex-col items-center px-10 text-center ">
        <h1 className="text-4xl uppercase font-Placard md:text-3xl">
          Who we are
        </h1>
        <p className="mt-2 text-lg font-Satoshi md:max-w-80">
          Bringing you the best of Beauty with the best of results of Naturals
          at the best prices guaranteed with Quality.
        </p>
      </div>
      <div className="flex flex-col px-10 mt-5 md:mt-0">
        <h1 className="text-2xl uppercase font-Placard md:text-xl md:whitespace-nowrap">
          Categories
        </h1>
        <ul className="flex flex-col mt-2 ml-5 text-lg gap-y-2 font-Satoshi">
          <li>
            <Link>OG Luxury</Link>
          </li>
          <li>
            <Link>OG Natural</Link>
          </li>
          <li>
            <Link>OG Science</Link>
          </li>
          <li>
            <Link>OG Beauty</Link>
          </li>
          <li>
            <Link>OG Ayurveda</Link>
          </li>
          <li>
            <Link>OG Wellness</Link>
          </li>
          <li>
            <Link>Crazy Deals</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col px-10">
        <h1 className="text-2xl uppercase font-Placard md:text-xl md:whitespace-nowrap">
          Orders
        </h1>
        <ul className="flex flex-col mt-2 ml-5 text-lg gap-y-2 font-Satoshi">
          <li>
            <Link>Account</Link>
          </li>
          <li>
            <Link>Track Order</Link>
          </li>
          <li>
            <Link>Shipping Policy</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col px-10">
        <h1 className="text-2xl uppercase font-Placard md:text-xl md:whitespace-nowrap">
          Important Links
        </h1>
        <ul className="flex flex-col mt-2 ml-5 text-lg gap-y-2 font-Satoshi">
          <li>
            <Link>About Us</Link>
          </li>
          <li>
            <Link>Contact Us</Link>
          </li>
          <li>
            <Link>Terms & Conditions</Link>
          </li>
          <li>
            <Link>Privacy Policy</Link>
          </li>
          <li>
            <Link>Return & Refund Policy</Link>
          </li>
          <li>
            <Link>Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col px-10 my-2 text-lg gap-y-2 font-Satoshi md:mt-0">
        <h1 className="text-2xl uppercase font-Placard md:text-xl md:whitespace-nowrap">
          Follow us on:
        </h1>
        <ul className="flex ml-2 text-2xl gap-x-4">
          <li className="p-2 rounded-full bg-zinc-100 text-zinc-900">
            <Link>
              <FaFacebookF />
            </Link>
          </li>
          <li className="p-2 rounded-full bg-zinc-100 text-zinc-900">
            <Link>
              <FaInstagram />
            </Link>
          </li>
        </ul>
      </div>
      <h1 className="absolute text-center -translate-x-1/2 bottom-2 left-1/2">
        &copy; CopyRight By SC-Design
      </h1>
    </div>
  );
}

export default Footer