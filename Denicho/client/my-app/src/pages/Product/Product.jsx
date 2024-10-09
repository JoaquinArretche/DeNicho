import React, { useState } from 'react';
import './ProductPage.css';

const ProductPage = () => {
    const [selectedImage, setSelectedImage] = useState("https://via.placeholder.com/300x300.png?text=Large+Image");

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div className="product-page-container">
            <div className="product-page center">
                <div className="product-gallery">
                    <img className="large-image" src={selectedImage} alt="Selected" />
                    <div className="small-images">
                        <img
                            className="small-image"
                            src="https://via.placeholder.com/300x300.png?text=Image+1"
                            alt="Thumbnail 1"
                            onClick={() => handleImageClick("https://via.placeholder.com/300x300.png?text=Image+1")}
                        />
                        <img
                            className="small-image"
                            src="https://via.placeholder.com/300x300.png?text=Image+2"
                            alt="Thumbnail 2"
                            onClick={() => handleImageClick("https://via.placeholder.com/300x300.png?text=Image+2")}
                        />
                        <img
                            className="small-image"
                            src="https://via.placeholder.com/300x300.png?text=Image+3"
                            alt="Thumbnail 3"
                            onClick={() => handleImageClick("https://via.placeholder.com/300x300.png?text=Image+3")}
                        />
                    </div>
                </div>
                <div className="product-details">
                    <div>
                        <h2>Sample Product</h2>
                        <p>By John Doe</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio iure ratione aut eius non deleniti repellat, quia exercitationem impedit aliquam ipsum minus itaque culpa vero et consectetur quae nemo quis.</p>
                        <p className='price'>Price: <span>$50</span></p>
                    </div>
                    <div className="actions">
                        <button className="add-to-cart-btn">Add to Cart</button>
                        <button className="visit-entrepreneur-btn">Visit Entrepreneur</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
