import React from "react";

const NavStyle = () => {
  return (
    <nav className="nav-bar">
      {/* NAVBAR-LOGO */}
      <div>
        <h1 className="logo">Timber Trove</h1>
      </div>
      {/* NAVBAR-LINK */}
      <div>
        <ul className="nav-links">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Shop
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* NAVBAR-CART AND LOGIN BUTTON */}
      <div className="flex items-center gap-12">
        <div className="relative">
          <div className="absolute left-5 top-5 h-[9.72px] w-[9.72px] rounded-full bg-green-500 shadow" />
          <img
            src="/public/images/cart.png"
            alt="cart"
            className="h-[29.15px] w-[29.15px]"
          />
        </div>
        <div className="inline-flex h-[50.53px] w-[137.98px] items-center justify-center gap-[9.72px] rounded-md border-2 px-[39.84px] py-[10.69px]">
          <button className="font-['Mochiy Pop One'] text-xl font-normal uppercase">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavStyle;
