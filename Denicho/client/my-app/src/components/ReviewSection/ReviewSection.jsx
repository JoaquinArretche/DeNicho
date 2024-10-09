// src/components/ReviewSection.js
import React from 'react';

const ReviewSection = ({ reviews }) => {
    return (
        <div className="review-section">
            <h2>Reseñas</h2>
            {reviews.map((review, index) => (
                <div key={index} className="review">
                    <h4>{review.author}</h4>
                    <p>{review.content}</p>
                </div>
            ))}
        </div>
    );
};

export default ReviewSection;
