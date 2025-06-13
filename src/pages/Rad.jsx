import { useParams } from 'react-router-dom'
import "../css/radionica.css"

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Calendar, Clock, MapPin, User } from 'lucide-react'
import { useEffect, useState } from 'react'
const Rad = () => {

    const { id } = useParams();

    const maxUsers = 4;
    const basePrice = 45



    const [number, SetNumber] = useState(1);
    const [price, setPrice] = useState(basePrice)

    const [formData, setFormData] = useState({
        ime: '',
        prezime: '',
        email: '',
        telefon: '',
        polaznici: 1,
        uvjeti: '',
        newslettter: ''
    })

    useEffect(() => {
        setPrice(number * basePrice);
    }, [number]);

    const increment = () => {
        if (number < maxUsers) {
            SetNumber(prev => prev + 1);
        }
    };

    const decrement = () => {
        if (number > 1) {
            SetNumber(prev => prev - 1);
        }
    };



    return (
        <div className="radionica-page">
            <Navbar />
            <div className="radionica-content">
                <h1>Rezerviraj Mjesto</h1>
                <p className='subheading'>Samo nekoliko koraka do tvoje kreativne avanture</p>
                <div className="radionica-info">
                    <div className="left">
                        <div className="after-image-content">
                            <img src="/radionica.card.jpeg" alt='radionica' loading='eager' />
                            <div className="body">
                                <p className='description'>Pridružite nam se za nezaboravan večer uz odličnu hranu, vino i društvo. Uživajte u tradicionalno pripravljenoj janjetini uz pažljivo odabrana vina.</p>
                                <div className="tags">
                                    <div className="tag">
                                        <div className="tag-content">
                                            <p><Calendar className='ikona' /> 15. veljače 2024.  </p>
                                            <p><MapPin className='ikona' /> Restoran Panorama, Maksimirska 132</p>
                                        </div>



                                    </div>
                                    <div className="tag">
                                        <div className="tag-content">
                                            <p><Clock className='ikona' /> 18:00 - 20:00 (2 sata)</p>
                                            <p><User className='ikona' /> Slobodnih mjesta: 4</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="payment-info">
                            <h2>Podaci za rezervaciju</h2>
                            <div className="input-container">
                                <div className="input-left">
                                    <label htmlFor="ime"> Ime *
                                    </label>
                                    <input id="ime" className='ime' name='ime' placeholder='Vaše ime' required />
                                </div>
                                <div className="input-rigth">
                                    <label htmlFor="prezime"> Prezime *
                                    </label>
                                    <input id="prezime" className='prezime' name='prezime' placeholder='Vaše prezime' required />
                                </div>
                            </div>

                            <div className="input-container">
                                <div className="input-left">
                                    <label htmlFor="email"> Email *
                                    </label>
                                    <input id="email" className='email' name='email' placeholder='Vaš email' type='email' required />
                                </div>
                                <div className="input-rigth">
                                    <label htmlFor="telefon"> Telefon *
                                    </label>
                                    <input id="telefon" className='telefon' name='telefon' placeholder='Vaš telefon' required />
                                </div>
                            </div>

                            <div className="users-count">
                                <p onClick={decrement}>-</p>
                                <span>{number}</span>
                                <p onClick={increment}>+</p>
                            </div>

                            <div className="agree-form">
                                <div className="form">
                                    <input type="checkbox" />
                                    <p>Slažem se s uvjetima korištenja i pravilima privatnosti. </p>
                                </div>
                                <div className="form">
                                    <input type="checkbox" />
                                    <p>Želim primati obavijesti o novim radionicama i posebnim ponudama</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="right">
                        <h3>Sažetak Rezervacije</h3>

                        <div><span>Radionica:</span>  <p>Jabuketina</p></div>
                        <div><span>Datum:</span>  <p>15. veljače 2025.</p></div>
                        <div><span>Vrijeme:</span>  <p>18:00 - 20:00</p></div>
                        <div><span>Polaznika:</span>  <p>{number}</p></div>

                        <div className="divider"></div>

                        <div><span>Cijena po osobi:</span> <p>{basePrice + " €"}</p></div>

                        <div className="divider"></div>

                        <div><h3>Ukupno:</h3> <p className='final-price'>{price + " €"}</p></div>

                        <button>Rezerviraj i plati</button>
                        <span>Sigurno plačanje putem Stripe</span>
                    </div>
                </div>
            </div>
            <Footer />
            <div className="copyrightline">copyright © all rights reserved</div>

        </div>
    )
}

export default Rad