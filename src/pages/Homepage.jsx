import { Link } from 'react-router-dom'
import HeroSection from '../components/Home/HeroSection'
import Navbar from '../components/Navbar'
import Mission from '../components/Home/Mission'
import Radionice from '../components/Home/Radionice'
import CTAHome from './CTAHome'
import Footer from '../components/Footer'
import CardCarousel from '../components/CardCarousel'
import Testimonials from '../components/Testimonials'

const Homepage = () => {


    return (
        <div className="homepage">
            <Navbar />
            <HeroSection />
            <img src="background-image.png" alt="Tipsy Muse - Art & Create" className='background-image' />
            <div className="page-content">
                <Mission />
                <Radionice />
                <div className="galerija-home">
                    <h2>Naše šarene večeri</h2>
                    <p>Svaka večer priča svoju priču — pogledaj kako izgleda prava Tipsy vibra.</p>
                    <CardCarousel />
                    <Link to="/galerija" className="main-button"><button>Pogledaj cijelu galeriju</button></Link>
                    <p className='after-button'>I pridružite nam se</p>
                </div>
                <Testimonials />
                <CTAHome />

                <Footer />
            </div >
            <div className="copyrightline">copyright © all rights reserved</div>
        </div>
    )
}


export default Homepage