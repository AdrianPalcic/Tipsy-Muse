
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onToggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <Link to="/">
                        <img src="/Logo.png" alt="Logo" className="logic" />
                    </Link>
                </div>
                <nav className="nav-links">
                    <ul>
                        <li><Link to="/onama">O nama</Link></li>
                        <li><Link to="/galerija">Galerija</Link></li>
                        <li><Link to="/kalendar">Kalendar</Link></li>
                        <li><Link to="/kontakt">Kontakt</Link></li>
                    </ul>
                </nav>
                <ChevronLeft className="menu" onClick={onToggle} />
            </div>

            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <ChevronRight className="menu close-icon" onClick={onToggle} />
                <h2>Prati nas na društvenim mrežama</h2>
                <div className="social-links">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer"><FaXTwitter size={30} /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
                </div>
                <div className="linko">
                    <ul>
                        <li><Link to="/onama" onClick={onToggle}>O nama</Link></li>
                        <li><Link to="/galerija" onClick={onToggle}>Galerija</Link></li>
                        <li><Link to="/kalendar" onClick={onToggle}>Kalendar</Link></li>
                        <li><Link to="/kontakt" onClick={onToggle}>Kontakt</Link></li>
                    </ul>
                </div>
                <p className="sidebar-tagline">Ovdje vino teče, a kreativnost curi</p>
            </div>
        </>
    );
};

export default Navbar;
