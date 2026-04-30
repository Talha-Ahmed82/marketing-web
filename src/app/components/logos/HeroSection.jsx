"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
// import { poppins } from "../layout";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full min-h-screen bg-white text-gray-800 relative overflow-hidden">
      {/* Top Left Gradient */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-[#DE3B00]/20 rounded-full blur-[120px]"></div>

      {/* Bottom Right Gradient */}
      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-[#DE3B00]/20 rounded-full blur-[120px]"></div>
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 md:py-6 relative z-50"
      >
        {/* Logo */}
        <div className="flex bg-transparent items-center gap-2">
          <Image
            src="/bd-logo-remove.png"
            alt="logo"
            width={32}
            height={32}
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
          />
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 1 }}
            className="text-base sm:text-lg font-semibold text-[#374550]"
          >
            Brooklyn Design
          </motion.h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium">
          <li  onClick={() => {
              router.push("/");
            }} className="cursor-pointer hover:text-[#DE3B00]">HOME</li>
          <li
            onClick={() => {
              router.push("/about");
            }}
            className="cursor-pointer hover:text-[#DE3B00]"
          >
            ABOUT
          </li>
          <li  onClick={() => {
              router.push("/logos");
            }} className="cursor-pointer hover:text-[#DE3B00]">LOGOS</li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden cursor-pointer md:flex items-center border border-gray-400 gap-2 px-4 lg:px-5 py-2 rounded-full text-sm hover:bg-gray-100 transition">
          <IoChatbubbleEllipses className="text-[#DE3B00]" size={18} />
          <span className="hidden lg:inline">Let's Talk ↗</span>
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-2xl p-6 flex flex-col gap-4 md:hidden"
          >
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li  onClick={() => {
              router.push("/");
            }} className="cursor-pointer hover:text-[#DE3B00]">HOME</li>
          <li
            onClick={() => {
              router.push("/about");
            }}
            className="cursor-pointer hover:text-[#DE3B00]"
          >
            ABOUT
          </li>
          <li  onClick={() => {
              router.push("/logos");
            }} className="cursor-pointer hover:text-[#DE3B00]">LOGOS</li>
            </ul>

            <button className="mt-4 flex cursor-pointer items-center justify-center border border-gray-400 gap-2 px-5 py-2 rounded-full text-sm hover:bg-gray-100 transition">
              <IoChatbubbleEllipses className="text-[#DE3B00]" size={18} />
              Let's Talk ↗
            </button>
          </motion.div>
        )}
      </motion.nav>

     <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 mt-6 sm:mt-10">
    
    {/* Left Content */}
    <motion.div
      className="max-w-xl w-full"
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <div className="inline-flex items-center gap-2 border px-3 sm:px-4 py-1 rounded-full text-[10px] sm:text-xs mb-4 sm:mb-6">
        <span className="w-2 h-2 bg-[#DE3B00] rounded-full"></span>
        Logo Design.
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl ubuntu-bold font-medium text-[#374550] leading-tight">
        <span className="text-[#DE3B00]">Logos</span>  With{" "}
        <br />
        Meanings
      </h1>

      <p className="mt-1 md:mt-3 text-base sm:text-lg md:text-xl font-bold text-gray-600">
        Not Just Something That Looks Good On A Screen.
      </p>

      <p className="mt-1 md:mt-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
       We Design Marks That Carry Weight, Build Recognition, and Hold Up Everywhere Your Brand Shows Up
      </p>

      <button className="mt-3 md:mt-6 bg-[#DE3B00] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm hover:bg-[#DE3B00] transition">
        Get Started ↗
      </button>

      {/* Reviews */}
      <div className="flex items-center gap-6  md:mt-6">
        <Image
          src="/logos-pic-new.png"
          alt="client1"
          width={300}
          height={300}
          className="w-[80%] sm:w-full h-auto"
        />
      </div>
    </motion.div>

    {/* Right Image */}
    <motion.div
      className="relative mt-10 lg:mt-0 w-full flex justify-center lg:block"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.1, delay: 0.4 }}
    >
      <div className="flex items-center justify-center">
        {/* <Image
          width={100}
          height={100}
          src="/rounded-logo.PNG"
          alt="circle-text"
          className="w-[18%] ml-10 sm:ml-0 sm:w-[20%] lg:w-[20%] -mt-40 md:-mt-96 h-auto animate-spin-slow"
        /> */}

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Image
            src="/logos/logos-images.png"
            alt="BD"
            width={300}
            height={300}
            className="w-[80%] mt-20 sm:mt-0 sm:w-[80%] md:w-[500px] lg:w-[500px] object-contain animate-float"
          />
        </motion.div>
      </div>

      {/* Discount Badge (Hide on small screens to avoid break) */}
      <div className="block absolute -mt-40 sm:-mt-60 md:mt-0 right-[-80px] sm:right-[-90px] md:right-[-100px] lg:right-[-140px] top-[30%] -translate-y-1/2 rotate-90 bg-[#DE3B00] text-white text-xs px-4 py-2 rounded-tr-full rounded-bl-full">
        Get upto 60% Discount
      </div>
    </motion.div>
  </div>

  {/* Social Sidebar (Hide on mobile) */}
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 1 }}
    className="flex mt-40 sm:mt-0 absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 flex-col items-center"
  >
    <div className="w-[1px] h-16 lg:h-20 bg-gray-400 mb-4"></div>

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

    <div className="w-[1px] h-16 lg:h-20 bg-gray-400 mt-4"></div>
  </motion.div>
    </div>
  );
}
