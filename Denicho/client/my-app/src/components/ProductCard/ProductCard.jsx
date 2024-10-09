import React from 'react'
import './ProductCard.css';

function ProductCard() {
    return (
        <div className='ProductCard'>
            <div>
                <figure>
                    <img src="" alt="" />
                </figure>
                <div>
                    <h3>Nombre de Producto</h3>
                    <p>Emprendimiento</p>
                </div>
            </div>

            <div className='content'>
                <p>Cantidad</p>
                <p>1</p>
            </div>


            <div className='content'>
                <p>Destino</p>
                <p>Blanes Viales 9867</p>
            </div>
        </div>
    )
}

export default ProductCard



