import React from "react";

export default function About() {
  return (
    <div className="flex flex-wrap justify-center items-center min-h-max lg:flex-row flex-col-reverse ">
      <div className="lg:w-1/2 px-14 font-sans text-white lg:relative z-50">
        <h1 className="lg:text-6xl text-4.5xl font-blanka font-bold UPPERCASE tracking-[7.09725px]">
          WElcome to doperium
        </h1>
        <h2 className="lg:text-xl text-xs font-normal mb-8 mt-4 tracking-[3.26px]">
          Where your loyalty is rewarded!
        </h2>
        <p className=" mb-4 lg:text-tiny text-xs">
          Dopereum is a revolutionary currency that provides users with access
          to an extensive range of utilities, through our partnerships with
          e-commerce stores and private label brands, offering discounts,
          rewards, and free product drops. Our innovative NFT technology
          introduces a new way of shopping online that is both seamless and
          secure.
        </p>
        <div className="flex items-center mb-6">
          <p className=" font-bold lg:text-3.5xl text-sm mt-6">
            Unlock Exclusive Rewards with Dopereum's NFT PUFF PASS
          </p>
        </div>
        <button className="bg-gradient-to-t from-mainGreen to-secondaryGreen font-blanka text-black uppercase lg:text-xl text-tiny py-2 px-4 rounded tracking-15%">
          mINT YOURS NOW!
        </button>
      </div>
      <div className="lg:w-1/2 relative z-0">
        {/* blured circles */}
        <img
          src="/images/grootFirst.png"
          alt="Groot"
          className="z-50 lg:ml-24 relative lg:scale-100 scale-200"
        />
        <div className="absolute lg:top-32 lg:left-24 top-16 w-1/2 h-1/2 bg-gradient-to-r from-secondaryGreen to-mainGreen rounded-full opacity-50 z-0 blur-3xl"></div>
        <div className="absolute lg:top-36 lg:left-56 top-16 left-56 w-1/2 h-1/2 bg-gradient-to-r from-secondaryGreen to-mainGreen rounded-full opacity-50 z-0 blur-3xl"></div>
      </div>
    </div>
  );
}
