import React from "react";
import { useState } from "react";
import { ReactSVG } from "react-svg";
import menuSvg from "../assets/menu.svg";
import {
  FaTwitter,
  FaTelegramPlane,
  FaYoutube,
  FaTiktok,
  FaMediumM,
  FaInstagram,
} from "react-icons/fa";
import { formatAddress } from "../utils/formatAddress";
import { useModal } from "react-simple-modal-provider";
import { useEthers } from "@usedapp/core";
import ClickAwayListener from "react-click-away-listener";

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
  const { open: openModal } = useModal("ConnectionModal");
  const { account, deactivate } = useEthers();
  const [dropdown, setDropdown] = React.useState(false);

  console.log(isMenuOpen);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (ref) => {
    console.log(ref.current);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleLogout = () => {
    deactivate();
  };

  return (
    <div className="flex justify-between items-center font-sans py-7 px-14 text-white">
      <div className="text-left font-blanka lg:text-2xl sm:text-xxl uppercase">
        Dopereum
      </div>
      <div className="text-center lg:flex hidden space-x-6">
        <p
          className="uppercase hover:cursor-pointer tracking-1.5"
          onClick={() => handleScroll(AboutRef)}
        >
          About
        </p>
        <p
          className="uppercase hover:cursor-pointer tracking-1.5"
          onClick={() => handleScroll(PassRef)}
        >
          NFT PUFF PASS
        </p>
        <p
          className="uppercase hover:cursor-pointer tracking-1.5"
          onClick={() => handleScroll(LoyaltyRef)}
        >
          Loyalty Program
        </p>
        <p
          className="uppercase hover:cursor-pointer tracking-1.5"
          onClick={() => handleScroll(TokenRef)}
        >
          Token
        </p>
        <p
          className="uppercase hover:cursor-pointer tracking-1.5"
          onClick={() => handleScroll(NFTRef)}
        >
          NFT
        </p>
        <p
          className="uppercase hover:cursor-pointer tracking-1.5"
          onClick={() => handleScroll(MissionRef)}
        >
          Mission and Goals
        </p>
        <p
          className="uppercase hover:cursor-pointer tracking-1.5"
          onClick={() => handleScroll(RoadmapRef)}
        >
          Roadmap
        </p>
      </div>
      <div className="hidden lg:block">
        {account ? (
          <div className="flex flex-col items-center hover:cursor-pointer">
            <span
              className="py-[9px] font-nunito_sans px-4 border border-gold rounded-xl text-gold font-light"
              onClick={handleDropdown}
            >
              {formatAddress(account)}a
            </span>

            {dropdown && (
              <ClickAwayListener onClickAway={() => setDropdown(false)}>
                <div className="absolute mt-[52px]">
                  <span
                    className="py-[9px] font-nunito_sans px-6 border border-gold bg-gold rounded-b-lg text-white font-light"
                    onClick={handleLogout}
                  >
                    Logout
                  </span>
                </div>
              </ClickAwayListener>
            )}
          </div>
        ) : (
          <button
            onClick={openModal}
            className="text-center bg-gradient-to-r tracking-15% from-mainGreen to-secondaryGreen rounded-lg text-black font-blanka px-6 font-thin py-2 text-base"
          >
            DAPP
          </button>
        )}
      </div>
      <div className="lg:hidden">
        <button onClick={handleMenu}>
          <ReactSVG src={menuSvg} />
        </button>
        {isMenuOpen && (
          <div
            className="absolute top-0 left-0 bg-secondaryGray rounded-lg text-white font-sans font-medium py-2 text-tiny w-full h-screen z-150"
            style={{ zIndex: 150 }}
          >
            {/* title on top left and cross on right top */}
            <div className="flex justify-between items-center mx-10">
              <div className="text-left font-blanka lg:text-2xl sm:text-xxl uppercase">
                Dopereum
              </div>
              <button onClick={handleMenu}>X</button>
            </div>
            <div className="mt-10">
              <p
                className="uppercase hover:cursor-pointer p-4 px-10 hover:bg-white hover:bg-opacity-20 tracking-1.5"
                onClick={() => handleScroll(AboutRef)}
              >
                About
              </p>
              <p
                className="uppercase hover:cursor-pointer p-4 px-10 hover:bg-white hover:bg-opacity-20 tracking-1.5"
                onClick={() => handleScroll(PassRef)}
              >
                NFT PUFF PASS
              </p>
              <p
                className="uppercase hover:cursor-pointer p-4 px-10 hover:bg-white hover:bg-opacity-20 tracking-1.5"
                onClick={() => handleScroll(LoyaltyRef)}
              >
                Loyalty Program
              </p>
              <p
                className="uppercase hover:cursor-pointer p-4 px-10 hover:bg-white hover:bg-opacity-20 tracking-1.5"
                onClick={() => handleScroll(TokenRef)}
              >
                Token
              </p>
              <p
                className="uppercase hover:cursor-pointer p-4 px-10 hover:bg-white hover:bg-opacity-20 tracking-1.5"
                onClick={() => handleScroll(NFTRef)}
              >
                NFT
              </p>
              <p
                className="uppercase hover:cursor-pointer p-4 px-10 hover:bg-white hover:bg-opacity-20 tracking-1.5"
                onClick={() => handleScroll(MissionRef)}
              >
                Mission and Goals
              </p>
              <p
                className="uppercase hover:cursor-pointer p-4 px-10 hover:bg-white hover:bg-opacity-20 tracking-1.5"
                onClick={() => handleScroll(RoadmapRef)}
              >
                Roadmap
              </p>
              <div className="flex flex-col px-10 space-y-4 mt-10">
                <button className="text-center bg-gradient-to-r tracking-15% from-mainGray to-secondaryGray rounded-lg text-white font-blanka px-6 font-thin py-2 text-base">
                  Whitepaper
                </button>
                {account ? (
                  <div className="flex flex-col items-center">
                    <span
                      className="py-[9px] font-nunito_sans px-4 border border-gold rounded-xl text-gold font-light"
                      onClick={handleDropdown}
                    >
                      {formatAddress(account)}
                    </span>

                    {dropdown && (
                      <ClickAwayListener onClickAway={() => setDropdown(false)}>
                        <div className="absolute mt-[52px]">
                          <span
                            className="py-[9px] font-nunito_sans px-6 border border-gold bg-gold rounded-b-lg text-white font-light"
                            onClick={handleLogout}
                          >
                            Logout
                          </span>
                        </div>
                      </ClickAwayListener>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={openModal}
                    className="text-center bg-gradient-to-r tracking-15% from-mainGreen to-secondaryGreen rounded-lg text-black font-blanka px-6 font-thin py-2 text-base"
                  >
                    DAPP
                  </button>
                )}

                <div className="flex justify-center mb-8">
                  <a
                    href="https://twitter.com/dopereumtoken"
                    className="text-white text-base p-2 bg-white bg-opacity-20 mx-2 rounded-md"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://instagram.com/dopereum"
                    className="text-white text-base p-2 bg-white bg-opacity-20 mx-2 rounded-md"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://t.me/dopereum"
                    className="text-white text-base p-2 bg-white bg-opacity-20 mx-2 rounded-md"
                  >
                    <FaTelegramPlane />
                  </a>
                  <a
                    href="https://youtube.com/@Dopereum"
                    className="text-white text-base p-2 bg-white bg-opacity-20 mx-2 rounded-md"
                  >
                    <FaYoutube />
                  </a>
                  <a
                    href="https://www.tiktok.com/@dopereum"
                    className="text-white text-base p-2 bg-white bg-opacity-20 mx-2 rounded-md"
                  >
                    <FaTiktok />
                  </a>
                  <a
                    href="https://medium.com/@dopereumtoken"
                    className="text-white text-base p-2 bg-white bg-opacity-20 mx-2 rounded-md"
                  >
                    <FaMediumM />
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
