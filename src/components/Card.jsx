import React from "react";

const Card = () => {
  return (
    <div>
      <div className="lg:absolute  lg:left-1/2  lg:-translate-x-1/2  translate-x-10 font-sans bg-gradient-to-r from-mainGray to-secondaryGray text-white rounded-md shadow-lg p-8 lg:pr-8 pr-10 xl:w-11/12 w-full h-max z-50 mt-10 lg:mt-0 overflow-x-clip">
        <div className="lg:grid lg:grid-cols-3 flex flex-col ">
          <div className="col-span-1 flex flex-col justify-center">
            <h4 className="lg:text-xl text:tiny font-medium uppercase tracking-3.26">
              ENJOY ENCHANCED
            </h4>
            <h2 className="xl:text-5xl text-4xl font-semibold uppercase font-blanka tracking-5.91">shopping experience</h2>
          </div>
          <div className="col-span-2">
            <h3 className="lg:text-xl text-sm font-semibold uppercase tracking-3.26">
              SECURITY, PRIVACY AND LOYALTY
            </h3>
            <p className="lg:text-base text-xs mt-2">
              With Dopereum, users can enjoy an enhanced shopping experience and
              exclusive access to unique products and rewards. Our token is built
              on the principles of security, privacy, and loyalty, with the goal
              of revolutionizing the online shopping experience for our partners'
              customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
