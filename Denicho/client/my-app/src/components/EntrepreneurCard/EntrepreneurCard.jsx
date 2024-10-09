import React from 'react';
import './EntrepreneurCard.css'; // Asegúrate de crear este archivo para los estilos

const EntrepreneurCard = () => {
    return (
        <div className="entrepreneur-card">
            <img
                src="https://via.placeholder.com/60"
                alt="Logo del Emprendimiento"
                className="logo"
            />
            <h1 className="logo-text">Emprendimiento</h1>
        </div>
    );
};

export default EntrepreneurCard;
