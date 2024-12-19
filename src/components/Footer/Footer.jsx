import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="w-full bg-[rgb(24,38,51)] text-gray-400 p-5 border-t-2 border-gray-800">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-10 md:gap-20 items-start md:items-center justify-between px-4">
        {/* Logo and About */}
        <div className="flex flex-col gap-5 items-center md:items-start md:border-r-[1px] md:border-[#3a3a3e] md:pr-10">
          <img
            src="i3.png"
            alt="Logo"
            className="h-[10vh] w-[30vw] md:h-[15vh] md:w-[8vw]"
          />
          <p className="text-center md:text-left w-full md:w-[20vw] text-sm md:text-base">
            Your go-to platform for creating, sharing, and discovering IT
            insights.
          </p>
          <p className="text-center md:text-left text-[10px] md:text-[12px] w-full md:w-[20vw]">
            © 2024 BlogIT. All Rights Reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h4 className="text-lg font-semibold">Links</h4>
          <ul className="flex flex-col gap-3">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Signup">Signup</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h4 className="text-lg font-semibold">Contact us</h4>
          <ul className="flex flex-col gap-3">
            <li>
              <Link to="/">support@blogit.com</Link>
            </li>
            <li>
              <Link to="/">+123 456 7890</Link>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h4 className="text-lg font-semibold">Policies</h4>
          <ul className="flex flex-col gap-3">
            <li>
              <Link to="/">Terms of Service</Link>
            </li>
            <li>
              <Link to="/">Privacy</Link>
            </li>
            <li>
              <Link to="/">Content Policy</Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center gap-5">
          <h4 className="text-lg font-semibold">Social</h4>
          <ul className="flex gap-4">
            <li>
              <Link to="/">
                <img
                  src="facebook.png"
                  alt="Facebook"
                  className="w-[7vw] h-[7vw] md:w-[3vw] md:h-[6vh]"
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  src="instagram.png"
                  alt="Instagram"
                  className="w-[7vw] h-[7vw] md:w-[3vw] md:h-[6vh]"
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  src="linkedin.png"
                  alt="LinkedIn"
                  className="w-[7vw] h-[7vw] md:w-[3vw] md:h-[6vh]"
                />
              </Link>
            </li>
            <li className='transition-transform hover:shadow-lg'>
              <Link to="/">
                <img
                  src="twitter.png"
                  alt="Twitter"
                  className="w-[7vw] h-[7vw] md:w-[3vw] md:h-[6vh]  "
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
