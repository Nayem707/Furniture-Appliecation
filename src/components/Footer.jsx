import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-emerald-50 px-20 text-gray-600">
      <div className="flex justify-around pt-20">
        <div className="space-y-8">
          <h1 className="font-bebas text-4xl font-normal text-black">
            Timber Trove
          </h1>
          <h1 className="font-roboto text-lg font-medium capitalize text-black">
            Social Media
          </h1>
          <h1>icon</h1>
        </div>
        <div className="space-y-4">
          <h1 className="font-roboto text-lg font-medium uppercase text-black">
            SHOP
          </h1>
          <p className="font-poppins font-medium text-black">Products</p>
          <p className="font-poppins font-medium text-black">Overview</p>
          <p className="font-poppins font-medium text-black">Pricing</p>
          <p className="font-poppins font-medium text-black">Releases</p>
        </div>
        <div className="space-y-4">
          <h1 className="font-roboto text-lg font-medium uppercase text-black">
            Company
          </h1>
          <p className="font-poppins font-medium text-black">About us</p>
          <p className="font-poppins font-medium text-black">Contact</p>
          <p className="font-poppins font-medium text-black">News</p>
          <p className="font-poppins font-medium text-black">Support</p>
        </div>
        <div>
          <div className="space-y-8">
            <h1 className="font-roboto text-lg font-medium uppercase text-black">
              Stay up to date
            </h1>

            <input
              className="h-12 w-96 rounded-l border border-black bg-inherit px-4"
              type="text"
              name=""
              id=""
              placeholder="Enter your email"
            />
            <button className="h-[8vh] w-28 rounded-br-md rounded-tr-md bg-black">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="flex items-center justify-center gap-4 pt-2">
          <span className="h-px w-[850px] border border-zinc-400" />
          <div className="flex gap-4">
            <p className="font-poppins text-base font-semibold capitalize text-black">
              Terms
            </p>
            <p className="font-poppins text-base font-semibold capitalize text-black">
              Privacy
            </p>
            <p className="font-poppins text-base font-semibold capitalize text-black">
              Cookies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
