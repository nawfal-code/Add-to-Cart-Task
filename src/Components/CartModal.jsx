import React from "react";

const CartModal = ({ cart, setShowModal, setCart }) => {
  //Calculate total amount
  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  // Handle remove item
  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    // The modal should display all the products which are added in the cart.
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-lg p-6 relative animate-fade-in">
        {/*  Close button */}
        <button
          onClick={() => setShowModal(false)}
          className="bg-red-700 text-white absolute top-3 right-3 w-8 h-8 rounded-full hover:bg-red-800 transition flex items-center justify-center"
        >
          ✕
        </button>

        {/*  Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          🛒 Your Cart
        </h2>

        {/*  Items list */}
        {cart.length === 0 ? (
          <p className="text-center text-gray-600 py-6">No items in cart.</p>
        ) : (
          <div className="space-y-4 max-h-80 overflow-y-auto">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-12 w-12 object-contain"
                />
                <div className="flex-1 ml-3">
                  <p className="text-sm font-medium text-gray-800 line-clamp-1">
                    {item.title}
                  </p>
                  <p className="text-green-600 font-semibold">${item.price}</p>
                </div>
                {/*  Remove button */}
                {/* Include a "Remove from Cart" button for all the products within the modal, when clicked, removes the product from the cart.                */}
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-500 text-white text-sm px-3 py-1 rounded-lg hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Totals */}
        {cart.length > 0 && (
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold text-gray-700">
              Total Amount:{" "}
              <span className="text-green-600 font-bold">${total}</span>
            </p>
            <p className="text-lg font-semibold text-gray-700">
              Total Products:{" "}
              <span className="text-blue-600 font-bold">{cart.length}</span>
            </p>

            <button
              onClick={() => alert("ordered...!")}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Order All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
