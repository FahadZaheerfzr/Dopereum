import React from "react";
import { ReactSVG } from "react-svg";
import Svgroad from "../assets/roadmap.svg";

export default function RoadMap() {
  return (
    <div className="bg-radial-gradient3 text-white text-center py-16 mt-24 font-sans overflow-x-hidden overflow-y-hidden">
      <div className="font-blanka text-3.75xl lg:text-5xl uppercase mb-8">
        Roadmap
      </div>
      <div className="mb-8">
        <div className="lg:text-tiny text-xs mb-2">
          We’re slowly transforming the website into the best place for
          beginners to learn about cryptocurrencies.{" "}
        </div>
        <div className="relative w-11/12 mx-auto py-20 text-left overflow-x-scroll xl:overflow-x-hidden overflow-y-hidden scrollbar-thin scrollbar-thumb-secondaryGreen scrollbar-track-mainGray">
          <div className="flex lg:mb-10 xl:mb-0 h-52 relative">
            <div
              className="w-96 h-52 border-l border-dashed absolute "
              style={{ marginLeft: "160px" }}
            >
              <div className="ml-5">
                <p className="uppercase text-xxs text-gray-300">
                  APRIL 15, 2019
                </p>
                <p className="text-tiny font-semibold">Phase 1</p>
                <ul className="text-xs font-normal">
                  <li>
                    Establish and expand the community in preparation for launch
                  </li>
                  <li>Website launch</li>
                  <li>Whitepaper release</li>
                </ul>
              </div>
            </div>
            <div
              className="w-80 h-52 border-l border-dashed absolute"
              style={{ marginLeft: "530px" }}
            >
              <div className="ml-5">
                <p className="uppercase text-xxs text-gray-300">May 15, 2019</p>
                <p className="text-tiny font-semibold">Phase 3</p>
                <ul className="text-xs font-normal">
                  <li>Token deployment</li>
                  <li>Presale</li>
                  <li>Stealth launch of the token</li>
                  <li>
                    List the project on popular platforms and listing sites
                  </li>
                  <li>Marketing campaign II</li>
                </ul>
              </div>
            </div>
            <div
              className=" h-52 border-l border-dashed absolute flex flex-wrap w-96"
              style={{ marginLeft: "900px" }}
            >
              <div className="ml-5">
                <p className="uppercase text-xxs text-gray-300">Oct 01, 2019</p>
                <p className="text-tiny font-semibold">Phase 5</p>
                <ul className="text-xs font-normal">
                  <li>Launch of a huge NFT series</li>
                  <li>
                    Implementation of a water program in areas of significant
                    need
                  </li>
                  <li>
                    Introduction of new products from new producers/factories
                  </li>
                  <li>Development of a Telegram bot for easy shopping</li>
                  <li>Launch a referral program</li>
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
              className="absolute top-7 w-8 h-8 rounded-full bg-mainGreen"
              style={{ left: "516px" }}
              ></div>
            <div
              className="absolute -top-1 w-8 h-8 rounded-full bg-mainGreen"
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
              className="w-80 h-44 border-l border-dashed absolute "
              style={{ marginLeft: "340px" }}
              >
              <div className="ml-5">
                <p className="uppercase text-xxs text-gray-300">
                  APRIL 20, 2019
                </p>
                <p className="text-tiny font-semibold">Phase 2</p>
                <ul className="text-xs font-normal">
                  <li>Contract security audit</li>
                  <li>
                    Establish partnerships with relevant parties within the
                    gardening sector and the cryptocurrency space to increase
                    exposure
                  </li>
                  <li>Initiate the first marketing campaign</li>
                </ul>
              </div>
            </div>
            <div
              className="w-80 h-44 border-l border-dashed absolute "
              style={{ marginLeft: "710px" }}
            >
              {" "}
              <div className="ml-5">
                <p className="uppercase text-xxs text-gray-300">
                  July 01, 2019
                </p>
                <p className="text-tiny font-semibold">Phase 4</p>
                <ul className="text-xs font-normal">
                  <li>
                    Attend fairs and conferences to further promote the project
                  </li>
                  <li>
                    Partnership with seed producer and launch of private seed
                    brand
                  </li>
                  <li>Partnership with web portals</li>
                  <li>Launch of Fertiliser brand</li>
                  <li>
                    First batch of NFTs redeemable for physical products
                    (available exclusively to investors who joined at launch)
                  </li>
                  <li>Partnership with Defi projects and marketplaces</li>
                </ul>
              </div>
            </div>

            <div
              className="w-80 h-44 border-l border-dashed absolute "
              style={{ marginLeft: "1070px" }}
              >              <div className="ml-5">
                <p className="uppercase text-xxs text-gray-300">Nov 03, 2019</p>
                <p className="text-tiny font-semibold">Phase 6</p>
                <ul className="text-xs font-normal">
                  <li>Partnership with a top soil producer</li>
                  <li>Launch of staking pools</li>
                  <li>Launch on a centralized exchange (CEX)</li>
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
