import { useState } from 'react'
import '../css/kontakt.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { LocateIcon, PhoneIcon } from 'lucide-react'
import { MdEmail } from 'react-icons/md'
const Kontakt = () => {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    return (
        <div className="kontakt-page">
            <Navbar />
            <div className="kontakt-hero">
                <div className="kontakt-hero-content">
                    <h1>Kontaktiraj nas!</h1>
                    <p>Ako imaš bilo kakva pitanja ili želiš popričati o nečemu</p>
                    <form>
                        <label htmlFor="name">Ime i prezime</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                        <label htmlFor="message">Poruka</label>
                        <textarea
                            rows="10"

                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                        ></textarea>
                        <button type='submit' className="formButton">Pošalji</button>
                    </form>
                </div>
                <div className="kontakt-hero-image">
                    <img src="/contact-hero.png" alt="Tipsy Muse Kontaktiraj nas" />
                </div>
            </div>
            <div className="map">
                <h2>Pronađi nas na mapi</h2>
                <p>Pozovi nas, napiši poruku ili pošalji mail</p>
                <div className="map-container">
                    <div className="embeded-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.472830368455!2d16.030089776141462!3d45.821815209507136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d7dc9058afe1%3A0xdce3b4d99d852e9!2sMaksimirska%20Cesta%20132%2C%2010000%2C%20Zagreb!5e0!3m2!1shr!2shr!4v1748619670743!5m2!1shr!2shr" width="600" height="650" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                    </div>
                    <div className="icons">
                        <a href='tel:0957482199' className="icon">
                            <PhoneIcon size={40} color='#FF46A3' />
                            <p>+385 91 123 4567</p>
                        </a>
                        <a href='mailto:adrian.palcic@gmail.com' className="icon">
                            <MdEmail size={40} color='#FF46A3' />
                            <p>info@tipsymuse@gmail.com</p>
                        </a>
                        <a className="icon">
                            <LocateIcon size={40} color='#FF46A3' />
                            <p>Maksimirska Cesta 132</p>
                        </a>
                    </div>
                </div>
                <h2>Vidimo se!</h2>
            </div>
            <Footer />
            <div className="copyrightline">copyright © all rights reserved</div>
        </div>
    )
}

export default Kontakt