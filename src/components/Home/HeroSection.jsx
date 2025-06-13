import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <div className="hero-section">
            <img src='hero-glass.png' alt="Hero Glass" className="hero-glass hero-image" />
            <img src='hero-lips.png' alt="Hero lips" className="hero-lips hero-image" />
            <img src='hero-women (2).png' alt="Hero women" className="hero-women hero-image" />
            <h1>Opusti se, stvaraj i uživaj</h1>
            <h2>Pusti kreativnost, upoznaj ekipu, nazdravi i uživaj — sve na jednom mjestu.</h2>
            <div className="button-container">
                <Link to="/kontakt" className="secondary-button"><button>Kalendar</button></Link>
                <Link to="/kalendar" className="main-button"><button>Kontakt</button></Link>
            </div>
        </div>
    )
}

export default HeroSection