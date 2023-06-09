import React from "react";
import { useState } from "react";
import { ReactSVG } from "react-svg";
import SvgLeaf from "../assets/leaf.svg";
import SvgLeaf2 from "../assets/leaf2.svg";
import SvgLeaf3 from "../assets/leaf3.svg";
import { useEthers } from "@usedapp/core";
import { useModal } from "react-simple-modal-provider";
import { ethers } from "ethers";
import { DOPE_PUFF } from "../config/constants";
import DOPE_ABI from "../config/abi/DopePuffPassABI.json";

export default function PuffPass() {
  const {account} = useEthers();
  const [minted, setMinted] = useState(1);
  const { open: openModal } = useModal("ConnectionModal");

  const handlePlus = () => {
    setMinted(minted + 1);
  };
  const handleMinus = () => {
    if (minted > 1) {
      setMinted(minted - 1);
    }
  };
  const handleClick = () => {    
      mint();
  };

  const mint = async () => {
    if(!account){
      openModal();
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(DOPE_PUFF, DOPE_ABI, signer);

    const mintAmount =  await contract.mintPriceInWei();
    const mintedAmount = ethers.utils.formatEther(mintAmount) * minted;

    await contract.mint(minted, {value: ethers.utils.parseEther(mintedAmount.toString())}).then((tx) => {
      console.log(tx);
    }).catch((err) => {
      console.log(err.message);
      alert("Transaction Failed. Ensure your wallet is whitelisted and you have enough ETH to cover the transaction fee.");
    })

  }

  return (
    <div className="flex-col flex-wrap lg:flex-row flex justify-center items-center h-max lg:h-full lg:-mt-20 ">
      {/* Left half */}
      <div className="lg:w-[45%] relative lg:h-full h-1/2 w-full overflow-hidden">
        <img
          src="/images/grootSecond.png"
          alt="groot"
          style={{ width: "100%", height: "100%" }}
          className="max-w-full"
        />
        <ReactSVG
          src={SvgLeaf}
          className="absolute top-0 my-leaf2  transform rotate-15 lg:block hidden"
        />
      </div>

      {/* Right half */}
      <div className="flex flex-col items-center justify-center lg:w-[55%] bg-gradient-to-b lg:bg-gradient-to-r from-mainGreen to-secondaryGreen px-10 lg:px-0 py-32 font-sans lg:h-full h-max relative overflow-y-visible overflow-x-clip text-center lg:text-left">
        <ReactSVG src={SvgLeaf3} className="lg:hidden block absolute left-10 -top-12 scale-125" />
        <h2 className="text-xl font-normal mb-4 uppercase hidden lg:block tracking-3.26">
        Enhanced shopping experience
        </h2>
        <h2 className="text-tiny font-normal mb-4 uppercase block lg:hidden tracking-1.5">
          Exclusive benefits
        </h2>
        <h1 className="xl:text-6xl lg:text-[55px] tracking-2.5 lg:tracking-[5.91px] text-3.75xl font-bold mb-4 font-blanka uppercase ">
          Dopereum's NFT PUFF PASS
        </h1>
        <p className="mb-6 xl:text-tiny lg:text-sm text-xs font-normal">
          Dopereum's NFT PUFF PASS offers exclusive benefits to users for a fee
          of 0.05 ETH. Enjoy cashback rewards from select e-stores and brands,
          special discounts from partners, exclusive redeemable NFTs, early
          access to new products, free seeds with orders, and a higher 10%
          reward from our referral program (compared to 5% for non-members).
          Plus, access limited high-reward staking pools to maximize earnings.
        </p>
        <div className="flex items-center mb-8 border-black lg:text-3xl text-sm">
          <button
            onClick={handleMinus}
            className="bg-gradient-to-b from-mainGreen to-secondaryGreen   text-gray-700 font-bold py-4 px-2 rounded-l"
          >
            -
          </button>
          <span className="bg-white bg-opacity-40 text-gray-700 font-bold py-4 px-6 ">
            {minted}
          </span>
          <button
            onClick={handlePlus}
            className="from-mainGreen to-secondaryGreen bg-gradient-to-b text-gray-700 font-bold py-4 px-2 rounded-r"
          >
            +
          </button>
          <button className="bg-gradient-to-r tracking-15% lg:text-xl text-sm font-blanka text-white uppercase from-mainGray to-secondaryGray font-bold py-4 px-6 rounded-r-lg " onClick={handleClick}>
            Mint yours Now!
          </button>
        </div>
        <ReactSVG src={SvgLeaf2} className="lg:hidden block absolute left-10 -bottom-14 scale-125" />
      </div>
    </div>
  );
}
