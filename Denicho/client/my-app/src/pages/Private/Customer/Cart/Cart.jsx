import React, { useState } from "react";
import CartCard from "../../../../components/Cart Card/CartCard";
import "./Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Product Title 1",
      price: 2990,
      quantity: 1,
      imageUrl: "link_to_image_1",
    },
    {
      id: 2,
      title: "Product Title 2",
      price: 1990,
      quantity: 1,
      imageUrl: "link_to_image_2",
    },
    {
      id: 3,
      title: "Product Title 3",
      price: 3990,
      quantity: 1,
      imageUrl: "link_to_image_3",
    },
  ]);

  const handleDelete = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  const handleUpdateQuantity = (id, delta) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id && item.quantity + delta > 0
        ? { ...item, quantity: item.quantity + delta }
        : item
    );
    setCartItems(updatedItems);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Calculate total number of products
  const totalProducts = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <div className="card-container">
        {cartItems.map((item) => (
          <CartCard
            key={item.id}
            product={item}
            onDelete={handleDelete}
            onUpdateQuantity={handleUpdateQuantity}
          />
        ))}
      </div>
      <div className="cart-summary">
        <div className="cart-summary-1">
          <h3>Resumen de Compra</h3>
          <div>
            <p>Productos</p>
            <p>({totalProducts})</p> {/* Dynamic product count */}
          </div>
          <div>
            <p>Total</p>
            <p className="total-price">${totalPrice}</p>
          </div>
        </div>

        <div className="cart-summary-2">
          <p>Detalles de envio</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            ipsum adipisci accusamus? Tenetur natus, minus beatae fugiat iure
            ipsam repudiandae?
          </p>
        </div>

        <button className="proceed-to-payment">Proceed to Payment</button>
      </div>
    </div>
  );
}

export default Cart;
