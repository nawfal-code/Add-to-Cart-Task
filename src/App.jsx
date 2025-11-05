import React, { useEffect, useState } from "react";
import ProductHome from "./Components/ProductHome";
import NavBar from "./Components/NavBar";
import CartModal from "./Components/CartModal";
const App = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  //1.Use the Fake Store API to fetch a list of products.
  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle add to cart
  const handleAdd = (id) => {
    const productItem = items.find((item) => item.id === id);

    // 5.When the product is already added to the cart display the Alert with the message  “Item already added to the cart”.

    if (cart.some((item) => item.id === id)) {
      alert("Item already added to cart");
    } else {
      setCart([...cart, productItem]);
    }
  };

  return (
    // Pass necessary data
    <div>
      <NavBar cart={cart} setShowModal={setShowModal} />
      <ProductHome items={items} handleAdd={handleAdd} />
      {showModal && (
        <CartModal cart={cart} setCart={setCart} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default App;
