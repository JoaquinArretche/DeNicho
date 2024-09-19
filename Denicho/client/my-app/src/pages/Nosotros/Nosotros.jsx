import React from 'react'
import './Nosotros.css';

function Nosotros() {
    return (
        <div className='nosotros'>
            <div className="scrolling-banner">
                <div className="scrolling-content">
                    {/* Infinite h1 elements and smiley faces */}
                    {Array(50).fill().map((_, index) => (
                        <h1 key={index}>
                            SOBRE NOSOTROS
                        </h1>
                    ))}
                </div>
            </div>

            <div className='content centrado'>
                <div>
                    <h2>01
                    </h2>
                    <article>
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In incidunt reprehenderit temporibus modi accusamus maiores laboriosam officia aut voluptatum consequatur.</p>
                        <a href="" className='CTA'>Crear Perfil</a>
                    </article>
                </div>

                <div>
                    <h2>02</h2>
                    <article>
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In incidunt reprehenderit temporibus modi accusamus maiores laboriosam officia aut voluptatum consequatur.</p>
                    </article>
                </div>

                <div>
                    <h2>03</h2>
                    <article>
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In incidunt reprehenderit temporibus modi accusamus maiores laboriosam officia aut voluptatum consequatur.</p>
                    </article>
                </div>
            </div>

        </div>
    )
}

export default Nosotros
