import React from 'react'
import { Link } from 'react-router-dom'

const KalendarHero = () => {
    return (
        <div className="kalendar-hero">
            <div className="kalendar-content">
                <h1>Tipsy Radionice</h1>
                <p className='marg'>Zaboravi tišinu i platna bez duše – Tipsy Muse je eksplozija boja i vina. Ako imaš pitanja:</p>
                <Link to="/kontakt" className="main-button"><button>Kontaktiraj nas</button></Link>
            </div>
            <img className='kalendar-hero-image' src="/kalendar-hero.png" alt="Tipsy Muse Art & Craft" loading='lazy' />
        </div>
    )
}

export default KalendarHero