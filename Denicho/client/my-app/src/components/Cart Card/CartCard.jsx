import './CartCard.css';

import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { trashOutline, addCircleOutline, removeCircleOutline } from 'ionicons/icons';

function CartCard({ product, onDelete, onUpdateQuantity }) {
    const { id, title, price, quantity, imageUrl } = product;

    return (
        <div className="cart-card">
            <div className='title-img'>
                <figure>
                    <img src={imageUrl} alt={title} />
                </figure>
                <div className="cart-card-header">
                    <p>{title}</p>
                    <h2>{title}</h2>
                </div>
            </div>
            <div className="cart-card-price">
                <p>${price * quantity}</p>
            </div>
            <div className="cart-card-quantity">
                <p>Quantity:</p>
                <div className="cantidad">
                    <button
                        onClick={() => onUpdateQuantity(id, -1)}
                        className="subtract-btn"
                        disabled={quantity <= 1}
                    >
                        <IonIcon icon={removeCircleOutline} className="subtract-btn" />
                    </button>
                    <p>{quantity}</p>
                    <button onClick={() => onUpdateQuantity(id, 1)} className="add-btn">
                        <IonIcon icon={addCircleOutline} className="add-btn" />
                    </button>
                </div>
            </div>
            <div className="cart-card-actions">
                <button onClick={() => onDelete(id)} className="delete-btn">
                    <IonIcon icon={trashOutline} className="delete-btn" />
                </button>
            </div>
        </div>
    );
}
export default CartCard;

