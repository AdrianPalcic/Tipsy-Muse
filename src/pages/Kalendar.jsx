import "../css/kalendar.css"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import KalendarHero from '../components/kalendar/KalendarHero'
import KalendarCards from '../components/kalendar/KalendarCards';
import KalendarRadionice from '../components/kalendar/KalendarRadionice'
import Testimonials from "../components/Testimonials"
import CardCarousel from '../components/CardCarousel'
import { Link } from "react-router-dom"
const Kalendar = () => {


    return (
        <div className="kalendar-page">
            <Navbar />
            <KalendarHero />
            <img src="background-image.png" alt="Tipsy Muse - Art & Create" className='background-image calendar-background' />

            <KalendarCards />

            <KalendarRadionice />
            <Testimonials />
            <div className="kalendar-carousel">
                <h2>Pogledaj kako to izgleda</h2>
                <p>I dodiiiii!!!!!!!</p>
                <CardCarousel />
                <div className="button-container">
                    <Link to="/galerija" className="main-button"><button>Galerija</button></Link>
                    <Link to="/kontakt" className="secondary-button"><button>Kontakt</button></Link>
                </div>
            </div>
            <Footer />
            <div className="copyrightline">copyright © all rights reserved</div>
        </div>
    )
}

export default Kalendar