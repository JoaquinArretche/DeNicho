import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import SmileyIcon from './SmiileyIcon';
import { person, key } from 'ionicons/icons'; // Import icons for login and register
import './Home.css';


const Home = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index); // Set the clicked index as active
    };

    return (
        <div className='bg'>
            <div className="scrolling-banner">
                <div className="scrolling-content">
                    {/* Infinite h1 elements and smiley faces */}
                    {Array(20).fill().map((_, index) => (
                        <h1 key={index}>
                            DeNicho <SmileyIcon />
                        </h1>
                    ))}
                </div>
            </div>

            <div className='container'>
                <section className="grid-container centrado">
                    <div className="card-1">
                        <h2>
                            Impulsá<br /><span>tu emprendimiento <img src="/img/Big Circle.svg" alt="oval" /></span> <br /> en nuestro <span> <br />  <img src="/img/Oval.svg" alt="oval" className="oval-img" /> showroom digital</span>
                        </h2>

                        {/* <div className='call-to-action'>

                        <a href="#register" className="nav-link2">
                            <IonIcon icon={key} className="nav-icon" />
                            Registro
                        </a>

                        <a href="#login" className="nav-link2">
                            <IonIcon icon={person} className="nav-icon" />
                            Iniciar
                        </a>

                    </div> */}
                    </div>
                    <Link to="/filming" className="card-2">
                        <div>
                            <h2>FILMING</h2>
                            <p>lorem ipsum</p>
                        </div>
                        <IonIcon icon={arrowForward} className="arrow-icon" />
                    </Link>
                    <Link to="/arte" className="card-3">
                        <div>
                            <h2>ARTE</h2>
                            <p>lorem ipsum</p>
                        </div>
                        <IonIcon icon={arrowForward} className="arrow-icon" />
                    </Link>
                    <Link to="/moda" className="card-4">
                        <div>
                            <h2>MODA</h2>
                            <p>lorem ipsum</p>
                        </div>
                        <IonIcon icon={arrowForward} className="arrow-icon" />
                    </Link>
                    <Link to="/moda" className="card-5">
                        <div>
                            <h2>HOME & DECO</h2>
                            <p>lorem ipsum</p>
                        </div>
                        <IonIcon icon={arrowForward} className="arrow-icon" />
                    </Link>
                </section>
            </div>


            <section className='section2'>
                <div className='centrado'>

                    <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio laborum aliquid illo voluptas rerum explicabo quasi dicta corrupti! Nobis impedit laudantium delectus ex, aperiam similique iste voluptate minima quae itaque.</h2>
                </div>
            </section>


            <section className='section3'>
                <div className='head'>
                    <h2>Shop By <br />Essentials</h2>
                    <div className='filters'>
                        {/* First div with the first two items */}
                        <div className='number1'>
                            <ul>
                                {['TODOS', 'ARTE'].map((item, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleClick(index)}
                                        className={activeIndex === index ? 'active' : ''}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='number2'>
                            <ul>
                                {['MODA', 'HOME & DECO'].map((item, index) => (
                                    <li
                                        key={index + 2} // Adjust index so it doesn't overlap with the first list
                                        onClick={() => handleClick(index + 2)}
                                        className={activeIndex === index + 2 ? 'active' : ''}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
