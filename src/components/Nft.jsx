import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import SvgLeaf from "../assets/leaf.svg";
import SvgLeaf2 from "../assets/leaf2.svg";
import SvgLeaf3 from "../assets/leaf3.svg";

export default function Nft() {
  return (
    <div className="flex-col flex-wrap lg:flex-row flex justify-center items-center overflow-x-clip ">
        <div className="lg:w-1/3 relative h-1/2 overflow-hidden lg:hidden">
        <img
          src="/images/weed2.png"
          alt="Your Image"
          className="max-w-full"
          style={{ width: "100%", height: "100%" }}
        />

      </div>
      {/* Left half */}
      <div className="lg:w-7/12 bg-gradient-to-t lg:bg-gradient-to-r from-secondaryGreen to-mainGreen p-20 py-10 font-sans lg:h-screen relative text-center lg:text-left" >
      <ReactSVG src={SvgLeaf3} className="lg:hidden block absolute left-10 -top-12 scale-125" />

        <h1 className="xl:text-6xl tracking-2.5 lg:tracking-[5.91176px] text-3.6xl font-bold mb-4 font-blanka uppercase lg:pt-0 pt-36">
          Dopereum redeemable NFT{" "}
        </h1>
        <p className="mb-6 xl:text-tiny text-[#232323] lg:text-sm text-xs  font-normal lg:w-[810px]">
          Dopereum's redeemable NFT logic provides a unique way to buy
          real-world items. NFTs can be redeemed for products through our
          partner grow shop, offering convenient access to premium goods while
          supporting the Dopereum ecosystem. By purchasing the NFTs, users lock
          in the price and avoid inflation concerns. The token price required to
          buy the product from the webshop is proportional to the NFT's value on
          the marketplace. This ensures that those who buy NFTs needn't worry
          about price changes on the grow shop, as they own the item digitally
          and can redeem it within three months.  
          <br/><br/>
          Our NFTs will be available on
          various platforms to reach different markets. With our grow shop
          partnership, we offer a secure and innovative way for users to
          purchase high-quality products.Currently, our NFTs are redeemable on a
          webpage for delivery. However, we are constantly working on improving
          our system to make it possible for users to pick up their purchases at
          selected shops, ensuring maximum privacy.
        </p>
        <button className="lg:text-xl lg:mb-0 text-sm bg-gradient-to-r font-blanka text-white uppercase from-mainGray to-secondaryGray font-bold py-2 px-5 mb-36 rounded-lg tracking-15%">
          Redeem Nft
        </button>
        <ReactSVG src={SvgLeaf2} className="lg:hidden block absolute left-10 -bottom-14 scale-125" />

      </div>

      {/* Right half */}
      <div className="lg:w-5/12 relative h-screen overflow-hidden lg:block hidden">
        <img
          src="/images/weed2.png"
          alt="Your Image"
          className="max-w-full mb-10 min-w-full h-full object-cover"
          style={{ width: "100%", height: "100%" }}
        />
        <ReactSVG
          src={SvgLeaf}
          className="absolute -top-10 scale-150 -left-44 transform -rotate-5"
        />
      </div>
    </div>
  );
}
