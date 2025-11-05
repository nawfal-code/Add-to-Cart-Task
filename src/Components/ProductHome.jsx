import React from "react";

const ProductHome = ({ items, handleAdd }) => {
  // 6.Ensured that the products are displayed in a responsive layout.
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        🛍️ Our Products
      </h1>
      {/*2.Display the fetched products in a user-friendly format on the main page. */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items && items.length > 0 ? (
          items.map((i) => (
            // 3.Each product should display key information, such as the product image, title, price, and add to cart button.
            <div
              key={i.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            >
              <img
                src={i.image}
                alt={i.title}
                className="w-full h-56 object-contain bg-gray-100 p-4"
              />
              <div className="p-4 flex flex-col items-center">
                <h2 className="text-lg font-semibold text-gray-800 text-center line-clamp-2 h-14">
                  {i.title}
                </h2>
                <p className="text-xl font-bold text-green-600 mt-3">
                  ${i.price}
                </p>
                {/* 4.When the add to cart button is clicked it should add the product in the cart. */}
                <button
                  onClick={() => handleAdd(i.id)}
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default ProductHome;
