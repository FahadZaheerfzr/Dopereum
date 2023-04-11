import React from "react";
import { useState } from "react";
import { ReactSVG } from "react-svg";
import menuSvg from "../assets/menu.svg";
import {
  FaTwitter,
  FaFacebookF,
  FaTelegramPlane,
  FaYoutube,
  FaTiktok,
  FaDiscord,
} from "react-icons/fa";

export default function Header(props) {
  const {
    AboutRef,
    PassRef,
    LoyaltyRef,
    TokenRef,
    NFTRef,
    MissionRef,
    RoadmapRef,
  } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log(isMenuOpen);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (ref) => {
    console.log(ref.current);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-between items-center font-sans py-7 px-14 text-white">
      <div className="text-left font-blanka lg:text-2xl sm:text-xxl uppercase">
        Dopereum
      </div>
      <div className="text-center lg:flex hidden space-x-6">
        <p
          className="uppercase hover:cursor-pointer"
          onClick={() => handleScroll(AboutRef)}
        >
          About
        </p>
        <p
          className="uppercase hover:cursor-pointer"
          onClick={() => handleScroll(PassRef)}
        >
          NFT PUFF PASS
        </p>
        <p
          className="uppercase hover:cursor-pointer"
          onClick={() => handleScroll(LoyaltyRef)}
        >
          Loyalty Program
        </p>
        <p
          className="uppercase hover:cursor-pointer"
          onClick={() => handleScroll(TokenRef)}
        >
          Token
        </p>
        <p
          className="uppercase hover:cursor-pointer"
          onClick={() => handleScroll(NFTRef)}
        >
          NFT
        </p>
        <p
          className="uppercase hover:cursor-pointer"
          onClick={() => handleScroll(MissionRef)}
        >
          Mission and Goals
        </p>
        <p
          className="uppercase hover:cursor-pointer"
          onClick={() => handleScroll(RoadmapRef)}
        >
          Roadmap
        </p>
      </div>
      <button className="text-right bg-gradient-to-r from-mainGreen to-secondaryGreen rounded-lg text-black font-blanka px-6 font-thin py-2 text-sm hidden lg:block">
        DAPP
      </button>
      <div className="lg:hidden">
        <button onClick={handleMenu}>
          <ReactSVG src={menuSvg} />
        </button>
        {isMenuOpen && (
          <div className="absolute top-0 left-0 bg-secondaryGray rounded-lg text-white font-sans font-medium py-2 text-tiny w-full h-screen z-150" style={{zIndex: 150}}>
            {/* title on top left and cross on right top */}
            <div className="flex justify-between items-center mx-10">
              <div className="text-left font-blanka lg:text-2xl sm:text-xxl uppercase">
                Dopereum
              </div>
              <button onClick={handleMenu}>X</button>
            </div>
            <div className="mt-10">
              <p
                className="uppercase hover:cursor-pointer p-4 px-10 hover:bg-white hover:bg-opacity-20"
                onClick={() => handleScroll(AboutRef)}
              >
                About
              </p>
              <p
                className="uppercase hover:cursor-pointer p-4 px-10 hover:bg-white hover:bg-opacity-20"
                onClick={() => handleScroll(PassRef)}
              >
                NFT PUFF PASS
              </p>
              <p
                className="uppercase hover:cursor-pointer p-4 px-10 hover:bg-white hover:bg-opacity-20"
                onClick={() => handleScroll(LoyaltyRef)}
              >
                Loyalty Program
              </p>
              <p
                className="uppercase hover:cursor-pointer p-4 px-10 hover:bg-white hover:bg-opacity-20"
                onClick={() => handleScroll(TokenRef)}
              >
                Token
              </p>
              <p
                className="uppercase hover:cursor-pointer p-4 px-10 hover:bg-white hover:bg-opacity-20"
                onClick={() => handleScroll(NFTRef)}
              >
                NFT
              </p>
              <p
                className="uppercase hover:cursor-pointer p-4 px-10 hover:bg-white hover:bg-opacity-20"
                onClick={() => handleScroll(MissionRef)}
              >
                Mission and Goals
              </p>
              <p
                className="uppercase hover:cursor-pointer p-4 px-10 hover:bg-white hover:bg-opacity-20"
                onClick={() => handleScroll(RoadmapRef)}
              >
                Roadmap
              </p>
              <div className="flex flex-col px-10 space-y-4 mt-10">
                <button className="text-center bg-gradient-to-r from-mainGray to-secondaryGray rounded-lg text-white font-blanka px-6 font-thin py-2 text-base">
                  Whitepaper
                </button>
                <button className="text-center bg-gradient-to-r from-mainGreen to-secondaryGreen rounded-lg text-black font-blanka px-6 font-thin py-2 text-base">
                  DAPP
                </button>
                <div className="flex justify-center mb-8">
                  <a
                    href="#"
                    className="text-white text-base p-2 bg-white bg-opacity-20 mx-2 rounded-md"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="text-white text-base p-2 bg-white bg-opacity-20 mx-2 rounded-md"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="text-white text-base p-2 bg-white bg-opacity-20 mx-2 rounded-md"
                  >
                    <FaTelegramPlane />
                  </a>
                  <a
                    href="#"
                    className="text-white text-base p-2 bg-white bg-opacity-20 mx-2 rounded-md"
                  >
                    <FaYoutube />
                  </a>
                  <a
                    href="#"
                    className="text-white text-base p-2 bg-white bg-opacity-20 mx-2 rounded-md"
                  >
                    <FaTiktok />
                  </a>
                  <a
                    href="#"
                    className="text-white text-base p-2 bg-white bg-opacity-20 mx-2 rounded-md"
                  >
                    <FaDiscord />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
