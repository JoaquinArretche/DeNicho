import ProductCard from "../../../../components/ProductCard/ProductCard";
import "./ProfileUser.css";
import React, { useState } from "react";

function ProfileUser() {
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

  return (
    <div className="centrado" id="profileuser">
      <article>
        <h2>Nombre del Usuario</h2>
        <p>Ejemplo@gmail.com</p>
      </article>

      <div className="content">
        <h2>Mi cuenta</h2>

        <div>
          <div className="container-profile">
            <article>
              <h3>Nombre y Apellido</h3>
              <p>Nombre y Apellido</p>
            </article>

            <article>
              <h3>CI</h3>
              <p>6372949-8</p>
            </article>

            <article>
              <h3>Nombre de Usuario</h3>
              <p>Marto1987</p>
            </article>

            <article>
              <h3>Contraseña</h3>
              <p>**********</p>
            </article>

            <article>
              <h3>Dirección</h3>
              <p>Blanes Viales 6278</p>
            </article>
          </div>
        </div>

        <div className="products-profile">
          <h3>Historial de compras</h3>
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default ProfileUser;
