import React from "react";
import logo from "../assets/shpping logo.png";
import cartimg from "../assets/cartLogo.png";

const NavBar = ({ cart, setShowModal }) => {
  return (
    <nav className="bg-blue-950 text-white p-3 flex justify-between items-center">
      <div className="text-2xl font-bold flex gap-2 items-center">
        <p>ShoppingCart</p>
        <img className="h-7" src={logo} alt="logo" />
      </div>

      <div
        className="relative h-12 cursor-pointer"
        // A modal should open, If a user clicks the "Cart" button which contains no.of.products in the cart.
        onClick={() => setShowModal(true)}
      >
        <img className="h-full" src={cartimg} alt="cart" />
        {cart.length > 0 && (
          // 7.Display the current cart items count in a Navbar component.
          <div className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-orange-400 text-black font-semibold flex items-center justify-center">
            {cart.length}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
