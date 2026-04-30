import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="relative text-white overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/build-bg-2.png')", // replace with your image
      }}
    >
      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black/65"></div> */}

      {/* Grid Overlay Lines (optional like screenshot) */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-10 md:pt-14 pb-5">
        {/* Top Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Left Brand */}
          <div>
            <div className="mb-6 flex items-center gap-1">
                 <div>
                <Image
                  src="/bd-logo-remove.png"
                  alt="logo"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-2xl font-medium leading-none">
                  {" "}
                  Brooklyn Design
                </h2>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-white/85 max-w-sm mb-6">
              We Build Brands That Don’t Blend In. Strategy First. Design That
              Hits. Digital That Performs. Our Approach Ensures That Every
              Element Works Together To Create A Lasting Impact.
            </p>

            <p className="text-sm mb-5 text-white/80">
              No Spam, Just Sharp Ideas.
            </p>

            {/* Newsletter */}
            <div className="max-w-xs">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full rounded-md px-4 py-3 mb-3 text-black outline-none"
              />

              <button className="w-full bg-orange-600 hover:bg-orange-700 transition rounded-md py-3 font-medium">
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>

            <ul className="space-y-2 text-white/85">
              {[
                "Home",
                "About",
                "Services",
                "Case Studies",
                "Insights",
                "Contact",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-orange-400 transition cursor-pointer"
                >
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Services</h4>

            <ul className="space-y-2 text-white/85">
              {[
                "Logo Design",
                "Website Design",
                "Branding",
                "Ecommerce Solution",
                "Digital Marketing",
                "Digital Transformation",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-orange-400 transition cursor-pointer"
                >
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Head Office</h4>

            <p className="text-white/85 text-sm leading-relaxed mb-8">
              1820 Avenue Brooklyn
              <br />
              NY 11230 United States
            </p>

            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>

            <div className="space-y-3 text-white/85 text-sm mb-8">
              <p>info@thebrooklyndesign.com</p>
              <p>+1 (724) 246-4538</p>
            </div>

            <h4 className="text-xl font-semibold mb-4">Social Media</h4>

            <div className="flex gap-4">
              <a className="border border-white/30 p-2 rounded hover:border-orange-500 transition">
                <FaFacebookF size={16} />
              </a>

              <a className="border border-white/30 p-2 rounded hover:border-orange-500 transition">
                <FaInstagram size={16} />
              </a>

              <a className="border border-white/30 p-2 rounded hover:border-orange-500 transition">
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-white/20 mt-10 pt-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 text-sm text-white/70">
            <p>© 2026 Brooklyn Design. All Right Reserved.</p>

            <div className="flex gap-8">
              <a className="hover:text-orange-400 transition">Privacy Policy</a>

              <a className="hover:text-orange-400 transition">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
