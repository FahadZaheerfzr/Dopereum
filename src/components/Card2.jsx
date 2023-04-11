import React from "react";

const Card2 = () => {
  return (
    <div className="lg:absolute  lg:left-1/2 transform  lg:-translate-x-1/2 lg:-translate-y-1/2 translate-x-10 font-sans bg-gradient-to-r from-mainGreen to-secondaryGreen text-white rounded-md shadow-lg p-8 xl:w-11/12 w-full h-max z-50 mt-0 lg:mt-0 overflow-x-clip">
      <div className="lg:grid lg:grid-cols-3 lg:pl-0 lg:px-0 px-5 flex flex-col text-black ">
        <div className="col-span-1 flex flex-col justify-center">
          <h4 className="text-xl font-medium uppercase lg:block hidden tracking-[3.26471px]">Revolutionize <br></br> the e-commerce</h4>
          <h4 className="text-tiny font-medium uppercase lg:hidden block tracking-3.26">ENJOY ENCHANCED</h4>
          <h2 className="lg:text-5xl text-3.75xl font-semibold uppercase font-blanka tracking-5.91">
            Mission & goals
          </h2>
        </div>
        <div className="col-span-2">
          <p className="lg:text-tiny text-xs mt-2">
            Dopereum's mission is to empower and incentivize individuals to
            engage in online commerce and create a community of loyal users on
            participating platforms. We strive to enhance the online shopping
            experience by rewarding users with $DOPE tokens for their loyalty
            and referralsOur goal is to build strong partnerships with
            e-commerce and marketplace platforms, in order to drive growth and
            provide added value to their users. We aim to revolutionize the
            e-commerce landscape and bring exciting new opportunities to both
            users and partners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
