import React from 'react'
import './Footer.css';
import { IonIcon } from '@ionic/react';
import { send } from 'ionicons/icons';



const Footer = () => {
    return (
        <div className='footer'>
            <div className='centrado'>
                <div className='left'>
                    <h2>DeNicho</h2>
                    <p>Para todos pero no para nadie</p>
                </div>

                <div className='center1'>
                    <h3>CATEGORIAS</h3>
                    <ul>
                        <li>Arte</li>
                        <li>Moda</li>
                        <li>Home & Deco</li>
                    </ul>
                </div>

                <div className='center2'>
                    <h3>SOCIAL</h3>
                    <ul>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Whatsapp</li>
                    </ul>
                </div>

                <div className='right'>
                    <h3>Únete a nuestra comunidad</h3>
                    <div className='input'>
                        <input type="email" placeholder='Correo Electronico' className='form' />
                        <IonIcon icon={send} className="send-icon" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Footer
