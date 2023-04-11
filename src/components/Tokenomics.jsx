import React from "react";
import { ReactSVG } from "react-svg";
import chartSvg from "../assets/chart.svg";
import ellipseSvg from "../assets/ellipse.svg";
import ellipse2Svg from "../assets/ellipse2.svg";
const tokenList = [
  {
    color: "from-secondaryGreen to-mainGreen",
    name: "Private Sale",
    amount: "2,500,000 (25%)",
  },
  {
    color: "from-mainGray to-secondaryGray",
    name: "Liquidity Pool",
    amount: "2,500,000 (25%)",
  },
  {
    color: "from-green-300 to-green-400",
    name: "Staking (4 year emission plan):",
    amount: "1,800,000 (18%)",
  },
  {
    color: "from-cyan-400 to-cyan-500",
    name: "Referral and Loyalty Ecosystem(4 year emission plan):",
    amount: "800,000 (8%)",
  },
  {
    color: "from-mainGray to-gray-200",
    name: "Partnerships (locked for 6 months – 1% released yearly):	",
    amount: "500,000 (5%)",
  },
  {
    color: "from-pink-400 to-pink-600",
    name: "Marketing, Development and team(Locked 4 years – 1% released yearly): ",
    amount: "900,000 (9%)",
  },
  {
    color: "from-blue-400 to-blue-600",
    name: "Exchange and Market making(locked for 3 months)",
    amount: "1,000,000 (10%)",
  },
];

export default function Tokenomics() {
  return (
    <div className="flex font-sans  flex-wrap lg:flex-row flex-col-reverse bg-gradient-to-t lg:bg-gradient-to-r from-secondaryGray to-mainGray text-white lg:justify-center lg:items-center  py-36">
      {/* Left half */}
      <div className="lg:w-1/2 w-full bg0 p-10">
        <h1 className="lg:text-6xl text-3.75xl font-bold mb-6 font-blanka lg:block hidden tracking-5.91">
          Tokenomics
        </h1>
        <ul className="space-y-4">
          {tokenList.map((token, index) => (
            <li
              key={index}
              className="flex items-center bg-white bg-opacity-10 rounded-lg px-4 py-2"
            >
              <div
                className={`w-6 h-6 rounded-sm mr-4 bg-gradient-to-r ${token.color}`}
              ></div>
              <div className="flex-1 text-xxsl xl:text-tiny flex-wrap flex max-w-sm font-normal md:text-sm ">
                {token.name}
              </div>
              <div className="text-right text-xs xl:text-lg xl:ml-auto font-semibold md:text-base md:ml-5">
                {token.amount}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right half */}
      <div className="lg:w-1/2 lg:p-10 relative w-full text-center">
        <div className="w-full xl:mx-auto relative xl:right-0 lg:right-24">
          <div className="lg:block hidden">
            <ReactSVG src={chartSvg} />
            <ReactSVG
              src={ellipse2Svg}
              className="absolute "
              style={{ top: "230px", left: "40px" }}
            />
            <ReactSVG src={ellipseSvg} className="absolute top-36 left-48" />
            <span
              className="absolute  text-white lg:text-xl text-xs font-semibold"
              style={{ top: "200px", left: "150px" }}
            >
              18%
            </span>
            <span
              className="absolute  text-white lg:text-xl text-xs font-semibold"
              style={{ top: "100px", left: "250px" }}
            >
              8%
            </span>
            <span
              className="absolute  text-black lg:text-xl text-xs font-semibold"
              style={{ top: "130px", left: "400px" }}
            >
              25%
            </span>
            <span
              className="absolute  text-white lg:text-xl text-xs font-semibold"
              style={{ top: "260px", left: "400px" }}
            >
              5%
            </span>
            <span
              className="absolute  text-white lg:text-xl text-xs font-semibold"
              style={{ top: "320px", left: "400px" }}
            >
              9%
            </span>
            <span
              className="absolute  text-white lg:text-xl text-xs font-semibold"
              style={{ top: "370px", left: "330px" }}
            >
              10%
            </span>
            <span
              className="absolute  text-white lg:text-xl text-xs font-semibold"
              style={{ top: "330px", left: "180px" }}
            >
              25%
            </span>
            <span
              className="absolute  text-white lg:text-tiny text-xxs font-bold"
              style={{ top: "240px", left: "254px" }}
            >
              Total Supply <br></br>
              10,000,000
            </span>
          </div>
          <div className="lg:hidden block">
          <h1 className="lg:text-6xl text-3.75xl font-bold mb-6 font-blanka tracking-5.91">
          Tokenomics
        </h1>
            <div className="relative h-96  max-w-sm mx-auto">
              <ReactSVG
                src={chartSvg}
                className="scale-50 absolute"
                style={{ top: "-100px", left: "-115px " }}
              />
              <ReactSVG
                src={ellipse2Svg}
                className="absolute scale-50 "
                style={{ top: "90px", left: "-25px" }}
              />
              <ReactSVG
                src={ellipseSvg}
                className="absolute scale-50"
                style={{ top: "40px", left: "55px" }}
              />
              <span
                className="absolute  text-white lg:text-2xl text-xs font-semibold"
                style={{ top: "120px", left: "90px" }}
              >
                18%
              </span>
              <span
                className="absolute  text-white lg:text-2xl text-xs font-semibold"
                style={{ top: "80px", left: "150px" }}
              >
                8%
              </span>
              <span
                className="absolute  text-black lg:text-2xl text-xs font-semibold"
                style={{ top: "100px", left: "220px" }}
              >
                25%
              </span>
              <span
                className="absolute  text-white lg:text-2xl text-xs font-semibold"
                style={{ top: "163px", left: "240px" }}
              >
                5%
              </span>
            <span
                className="absolute  text-black lg:text-2xl text-xs font-semibold"
                style={{ top: "200px", left: "230px" }}
            >
              9%
            </span>
            <span
              className="absolute  text-white lg:text-2xl text-xs font-semibold"
              style={{ top: "220px", left: "189px" }}
            >
              10%
            </span>
            <span
              className="absolute  text-white lg:text-2xl text-xs font-semibold"
              style={{ top: "200px", left: "120px" }}
            >
              25%
            </span>
            <span
              className="absolute  text-white lg:text-2xl text-xxs font-bold"
              style={{ top: "150px", left: "145px" }}
            >
              Total Supply <br></br>
              10,000,000
            </span>
            </div>
          </div>
        </div>
        <div className="lg:text-lg text-sm font-bold  font-blanka">
          Tax Distribution
        </div>
        <div className=" lg:text-lg text-sm mt-4">
          <div>Buy tax = 4% (1% Liq / 3% marketing)</div>
          <div>Sell tax = 4% (1% Liq / 3% marketing)</div>
        </div>
      </div>
    </div>
  );
}
