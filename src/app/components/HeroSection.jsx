import React from "react";
import Image from "next/image";
import { poppins } from "../layout";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800 relative overflow-hidden">
      {/* Top Left Gradient */}
<div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-[#DE3B00]/20 rounded-full blur-[120px]"></div>

{/* Bottom Right Gradient */}
<div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-[#DE3B00]/20 rounded-full blur-[120px]"></div>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6">
        <div className="flex items-center gap-2">
          <Image
            src="/bd-logo.PNG"
            alt="logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
          <h1 className="font-semibold text-[#374550] text-lg">
            Brooklyn Design
          </h1>
        </div>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li className="cursor-pointer hover:text-[#DE3B00]">HOME</li>
          <li className="cursor-pointer hover:text-[#DE3B00]">ABOUT</li>
          <li className="cursor-pointer hover:text-[#DE3B00]">SERVICES</li>
          <li className="cursor-pointer hover:text-[#DE3B00]">PORTFOLIO</li>
          <li className="cursor-pointer hover:text-[#DE3B00]">PRICING</li>
        </ul>

        <button className="border flex border-gray-400 gap-2 px-5 py-2 rounded-full text-sm hover:bg-[#DE3B00] hover:text-white transition">
          <IoChatbubbleEllipses className="text-[#DE3B00]" size={18} />
          Let's Talk ↗
        </button>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 mt-10">
        {/* Left Content */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 border px-4 py-1 rounded-full text-xs mb-6">
            <span className="w-2 h-2 bg-[#DE3B00] rounded-full"></span>
            Built loud. Designed sharp.
          </div>

          <h1
            className={`text-5xl font-semibold ${poppins.variable} text-[#374550]`}
          >
            Not For <span className="text-[#DE3B00]">Brands</span>
            <br />
            That <span className="text-[#DE3B00]">Play It Safe.</span>
          </h1>

          <p className="mt-4 text-xl font-bold text-gray-600">
            From Brooklyn, Where Average Doesn’t Survive.
          </p>

          <p className="mt-4 text-sm text-gray-700 leading-relaxed">
            Brooklyn Designs Is Where Bold Ideas Get Structure. We Build Brands
            That Carry Weight And Digital Experiences That Actually Perform. No
            Trends, No Filler, Just Work That Earns Attention And Keeps It.
          </p>

          <button className="mt-6 bg-[#DE3B00] text-white px-6 py-3 rounded-full text-sm hover:bg-[#DE3B00] transition">
            Book a Free Strategy Call ↗
          </button>

          {/* Reviews */}
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Image
              src="/logos-pic-new.png"
              alt="client1"
              width={300}
              height={300}
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mt-10 lg:mt-0">
          <div className="flex">
            <Image
              width={100}
              height={100}
              src="/rounded-logo.PNG"
              alt="circle-text"
              className="w-[20%] h-full animate-spin-slow"
            />
            <Image
              src="/bd-pic.png" // replace with your image path
              alt="BD"
              width={300}
              height={300}
              className="w-[80%] lg:w-[500px] object-contain animate-float"
            />
          </div>

          {/* Discount Badge */}
          <div className="absolute right-[-140px] top-[30%] -translate-y-1/2 rotate-90 bg-[#DE3B00] text-white text-xs px-4 py-2 rounded-tr-full rounded-bl-full">
            Get upto 60% Discount
          </div>
        </div>
      </div>

      {/* Social Icons */}
      {/* Social Sidebar */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col items-center">
        {/* Top Line */}
        <div className="w-[1px] h-20 bg-gray-400 mb-4"></div>

        {/* Icons */}
        <div className="flex flex-col items-center gap-4 text-gray-600">
          <a href="#" className="hover:text-[#DE3B00] transition">
            <TiSocialFacebook size={16} />
          </a>

          <a href="#" className="hover:text-[#DE3B00] transition">
            <FaInstagram size={16} />
          </a>

          <a href="#" className="hover:text-[#DE3B00] transition">
            <FaTwitter size={16} />
          </a>
        </div>

        {/* Bottom Line */}
        <div className="w-[1px] h-20 bg-gray-400 mt-4"></div>
      </div>
    </div>
  );
}
