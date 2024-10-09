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
                    <div className='title'>
                        <img src="/img/Arrows/01.png" alt="" />
                        <h1>¿Porque deNicho?</h1>
                    </div>
                    <p className='text'>
                        En denicho, creemos en el poder de los emprendedores creativos y en la capacidad de los productos hechos a mano para contar historias únicas. Nuestra plataforma nació con un objetivo claro: ofrecer un espacio digital donde emprendedores de moda, arte y decoración puedan crecer, conectarse con su audiencia y vender con facilidad
                    </p>
                </div>

                <article className='beneficios'>
                    <h2>Beneficios</h2>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, voluptates?</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, voluptates?</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, voluptates?</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, voluptates?</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, voluptates?</li>
                    </ul>
                </article>

                <div className='content2'>
                    <h2>¿Como empezar?</h2>

                    <article>
                        <h3>01</h3>
                        <div>
                            <div>
                                <p>Crear perfil</p>
                                <img src="/img/Arrows/1.png" alt="" />
                            </div>
                            En denicho, creemos en el poder de los emprendedores creativos y en la capacidad de los productos hechos a mano para contar historias únicas.
                        </div>
                    </article>

                    <article>
                        <h3>02</h3>
                        <div>
                            <div>
                                <p>Subir Productos</p>
                                <img src="/img/Arrows/2.png" alt="" />
                            </div>
                            <p>En denicho, creemos en el poder de los emprendedores creativos y en la capacidad de los productos hechos a mano para contar historias únicas. </p>
                        </div>
                    </article>
                    <article>
                        <h3>03</h3>
                        <div>
                            <div>
                                <p>Vender </p>
                                <img src="/img/Arrows/3.png" alt="" />
                            </div>
                            <p>En denicho, creemos en el poder de los emprendedores creativos y en la capacidad de los productos hechos a mano para contar historias únicas. </p>
                        </div>
                    </article>
                </div>

            </div>

        </div>
    )
}

export default Nosotros
