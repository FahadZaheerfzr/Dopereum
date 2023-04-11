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
    <div className="bg-mainGreen  text-black relative bg-radial-gradient ">
      <div className="max-w-screen-lg mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3.75xl font-blanka font-bold text-center mb-8 uppercase z-150">
          don’t miss out & stay updated
        </h2>
        <div className="max-w-xl mx-auto mb-8 z-150 items-center text-center">
          <form className="flex flex-col space-y-5 lg:flex-row items-center w-screen">
            <input
              type="email"
              placeholder="Enter your email"
              className="py-3 px-3 rounded-l-md flex-grow-1 bg-white bg-opacity-20 placeholder-white lg:text-xl text-tiny"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-mainGray to-secondaryGray font-blanka py-2 px-28 rounded-md lg:text-xl text-tiny text-white font-semibold flex-shrink-0"
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
            className="text-black text-4xl p-2 bg-white bg-opacity-20 mx-2 rounded-md"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-black text-4xl p-2 bg-white bg-opacity-20 mx-2 rounded-md"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-black text-4xl p-2 bg-white bg-opacity-20 mx-2 rounded-md"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="#"
            className="text-black text-4xl p-2 bg-white bg-opacity-20 mx-2 rounded-md"
          >
            <FaYoutube />
          </a>
          <a
            href="#"
            className="text-black text-4xl p-2 bg-white bg-opacity-20 mx-2 rounded-md"
          >
            <FaTiktok />
          </a>
          <a
            href="#"
            className="text-black text-4xl p-2 bg-white bg-opacity-20 mx-2 rounded-md"
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
