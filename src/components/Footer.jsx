import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaTelegramPlane,
  FaYoutube,
  FaTiktok,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-mainGreen  text-black relative bg-gradient-to-l from-secondaryGreen to-mainGreen">
      <div className="max-w-screen-lg mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3.75xl font-blanka font-bold text-center mb-8 uppercase z-150 tracking-5.91">
          don’t miss out & stay updated
        </h2>
        <div className="max-w-xl mx-auto mb-8 z-150 items-center text-center">
          <form className="flex flex-col lg:space-y-0 space-y-4 lg:flex-row items-center w-full lg:-ml-12">
            <input
              type="email"
              placeholder="Enter your email"
              className="py-3 pl-3 w-[90%] lg:w-fit pr-36 rounded-xl  lg:rounded-r-none flex-grow-1 bg-black bg-opacity-10 placeholder-white  font-catamaran text-tiny focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-mainGray to-secondaryGray font-blanka py-3 px-20 lg:py-2 lg:px-24 rounded-xl lg:text-xl text-tiny tracking-15% text-white font-normal flex-shrink-0 lg:-ml-2"
            >
              Subscribe
            </button>
          </form>
          <p className="text-tiny mt-2 text-center lg:block hidden">
            Don’t hesitate to subscribe to latest news about Dopereum token as
            well as crucial financial knowledge to become successful investors
            globally
          </p>
          <p className="text-xs mt-6 text-center block lg:hidden">
            Stay up to date with the latest news and insights in your field by
            subscribing to our newsletter. Don't miss out on exclusive content,
            special offers, and exciting announcements.
          </p>
        </div>
        <div className="flex justify-center mb-8">
          <a
            href="#"
            className="text-black text-2xl sm:text-4xl p-2 bg-white bg-opacity-20 mx-2 rounded-md"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-black text-2xl sm:text-4xl p-2 bg-white bg-opacity-20 mx-2 rounded-md"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-black text-2xl sm:text-4xl p-2 bg-white bg-opacity-20 mx-2 rounded-md"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="#"
            className="text-black text-2xl sm:text-4xl p-2 bg-white bg-opacity-20 mx-2 rounded-md"
          >
            <FaYoutube />
          </a>
          <a
            href="#"
            className="text-black text-2xl sm:text-4xl p-2 bg-white bg-opacity-20 mx-2 rounded-md"
          >
            <FaTiktok />
          </a>
          <a
            href="#"
            className="text-black text-2xl sm:text-4xl p-2 bg-white bg-opacity-20 mx-2 rounded-md"
          >
            <FaDiscord />
          </a>
        </div>
        <p className="text-center lg:text-tiny text-xs">
          © 2023. All rights reserved by Dopereum
        </p>
      </div>
    </div>
  );
};

export default Footer;
