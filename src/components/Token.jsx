import React from "react";

const Token = ({TokenomicsRef}) => {
  const scrollToTokenomics = () => {
    TokenomicsRef.current.scrollIntoView({behavior: "smooth"});
  };
  return (
    <div className="bg-gradient-to-l from-mainGray to-secondaryGray text-white font-sans my-2 shadow-lg px-8 py-20 w-full text-center">
      <h4 className="lg:text-base text-tiny font-normal mb-2 uppercase tracking-3.26">
        INVEST IN THE FUTURE
      </h4>
      <h2 className="lg:text-6xl text-3.75xl font-semibold uppercase font-blanka mb-6 tracking-5.91">
        the $dope token
      </h2>
      <p className="lg:text-base text-xs font-normal mb-6">
        Dopereum will offer the $DOPE token as a loyalty and referral token
        designed to support real-world item shopping, reward customers for using
        our partners’ marketplaces or e-commerce platforms and staking. This
        incentive program will be exclusively available on partner platforms
        associated with Dopereum.
      </p>
      <p className="lg:text-base text-xs  font-normal mb-14">
        To support the growth of our ecosystem and provide exceptional rewards
        to our users, Dopereum has partnered with high-quality producers to
        offer exclusive private label items. These items are not only developed
        with the utmost care and attention to detail, but are also available for
        purchase exclusively through the use of the Dopereum token.
      </p>
      <div className="justify-center items-center hover:cursor-pointer hidden lg:flex"
      onClick={scrollToTokenomics}
      >
        <h3 className="text-sm text-mainGreen font-medium uppercase mr-2  tracking-[3.26471px]">Tokenomics</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-6 h-6 text-secondaryGreen"
        >
          <path
            fillRule="evenodd"
            d="M14.354 10l-4.146 4.146a.5.5 0 01-.708 0l-.708-.708a.5.5 0 010-.708L12.293 10l-3.793-3.793a.5.5 0 010-.708l.708-.708a.5.5 0 01.708 0L14.354 10z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Token;
