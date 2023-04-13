import React from "react";
import { ReactSVG } from "react-svg";
import Svgroad from "../assets/roadmap.svg";

export default function RoadMap() {
  return (
    <div className="bg-radial-gradient3 text-white text-center py-16 lg:mt-0 font-sans overflow-x-hidden overflow-y-hidden">
      <div className="font-blanka text-3.75xl lg:text-5xl uppercase mb-8 tracking-5.91">
        Roadmap
      </div>
      <div className="mb-8">
        <div className="lg:text-tiny text-xs mb-2">
          We’re slowly transforming the website into the best place for
          beginners to learn about cryptocurrencies.{" "}
        </div>
        <div className="relative w-11/12 lg:w-[96%]  mx-auto py-20 text-left overflow-x-scroll xl:overflow-x-hidden overflow-y-hidden scrollbar-thin scrollbar-thumb-secondaryGreen scrollbar-track-mainGray">
          <div className="flex lg:mb-10 xl:mb-0 h-52 relative">
            <div
              className="w-96 overflow-y-scroll h-52 border-l border-dashed absolute "
              style={{ marginLeft: "160px" }}
            >
              <div className="ml-5">
                {/* <p className="uppercase text-xxs text-gray-300 font-catamaran">
                  APRIL 15, 2019
                </p> */}
                <p className="text-tiny font-semibold">Phase 1</p>
                <ul className="text-xs font-normal list-disc">
                  <li>
                    Establish and expand the community in preparation for launch                  </li>
                  <li>Website launch</li>
                  <li>Whitepaper release</li>
                </ul>
              </div>
            </div>
            <div
              className="w-80 overflow-y-scroll h-52 border-l border-dashed absolute"
              style={{ marginLeft: "530px" }}
            >
              <div className="ml-5">
                <p className="text-tiny font-semibold">Phase 3</p>
                <ul className="text-xs font-normal list-disc">
                  <li>Attend fairs and conferences to further promote the project</li>
                  <li>Partnership with seed producer and launch of private seed brand</li>
                  <li>Partnership with web portals</li>
                  <li>
                    Launch of Fertiliser brand
                  </li>
                  <li>Partnership with Defi projects and marketplaces</li>
                </ul>
              </div>
            </div>
            <div
              className=" h-52 overflow-y-scroll border-l border-dashed absolute flex flex-wrap w-96"
              style={{ marginLeft: "900px" }}
            >
              <div className="ml-5">
                <p className="text-tiny font-semibold">Phase 5</p>
                <ul className="text-xs font-normal list-disc">
                  <li>Partnership with a top soil producer</li>
                  <li>
                    Launch of staking pools
                  </li>
                  <li>
                    Expansion into International markets & further development of strategic partnerships
                  </li>
                  <li>Launch on centralized exchanges (CEX)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative">
            <ReactSVG src={Svgroad} className="mx-auto" />
            <div className="absolute top-7 left-36 w-8 h-8 rounded-full bg-mainGreen"></div>
            <div
              className="absolute -top-1 left-80 w-8 h-8 rounded-full bg-mainGreen"
              style={{ top: "-3px", left: "330px" }}
            ></div>
            <div
              className="absolute top-7 w-8 h-8 rounded-full bg-mainGray"
              style={{ left: "516px" }}
            ></div>
            <div
              className="absolute -top-1 w-8 h-8 rounded-full bg-mainGray"
              style={{ left: "690px", top: "-3px" }}
            ></div>
            <div
              className="absolute top-7 w-8 h-8 rounded-full bg-mainGray"
              style={{ left: "880px" }}
            ></div>
            <div
              className="absolute -top-1 w-8 h-8 rounded-full bg-mainGray"
              style={{ left: "1057px", top: "-3px" }}
            ></div>
          </div>
          <div className="flex lg:mt-10 xl:mt-0">
            <div className="relative h-64">
              <div
                className="w-80 h-44 overflow-y-scroll border-l border-dashed absolute "
                style={{ marginLeft: "340px" }}
              >
                <div className="ml-5">
                  {/* <p className="uppercase text-xxs text-gray-300 font-catamaran">
                    APRIL 20, 2019
                  </p> */}
                  <p className="text-tiny font-semibold">Phase 2</p>
                  <ul className="text-xs font-normal list-disc">
                    <li>Establish partnerships with relevant parties within the gardening sector and the cryptocurrency space to increase exposure</li>
                    <li>
                      Token deployment
                    </li>
                    <li>Private sale</li>
                    <li>Stealth launch of the token</li>
                    <li>First batch of NFTs redeemable for physical products (available exclusively to investors who joined at launch)</li>
                    <li>E-commerce site launch</li>
                    <li>List the project on popular platforms and listing sites</li>
                    <li>Initiate Marketing campaign</li>
                    <li>CMC/CG</li>
                  </ul>
                </div>
              </div>
              <div
                className="w-80 h-44 overflow-y-scroll border-l border-dashed absolute "
                style={{ marginLeft: "710px" }}
              >
                {" "}
                <div className="ml-5">
                  {/* <p className="uppercase text-xxs text-gray-300 font-catamaran">
                    July 01, 2019
                  </p> */}
                  <p className="text-tiny font-semibold">Phase 4</p>
                  <ul className="text-xs font-normal list-disc">
                    <li>
                      Launch of huge 2nd batch NFT series
                    </li>
                    <li>
                      Implementation of a water program in areas of significant need
                    </li>
                    <li>Introduction of new products from new producers/factories</li>
                    <li>Development of a Telegram bot for easy shopping
                    </li>
                    <li>
                    Launch referral program
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="w-80 h-44 overflow-y-scroll border-l border-dashed absolute "
                style={{ marginLeft: "1070px" }}
              >              <div className="ml-5">
                  {/* <p className="uppercase text-xxs text-gray-300 font-catamaran">Nov 03, 2019</p> */}
                  <p className="text-tiny font-semibold">Phase 6</p>
                  <ul className="text-xs font-normal list-disc">
                    <li>Research and development of innovative gardening solutions, such as smart gardens and IoT integration</li>
                    <li>Launch of educational programs, workshops, and webinars to promote sustainable gardening practices and community engagement</li>
                    <li>Establish a carbon offset program to reduce the environmental impact of the project and promote ecological responsibility</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
