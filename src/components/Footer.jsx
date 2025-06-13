import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={30} />
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter size={30} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} />
                </a>

            </div>
            <div className="nav-links">
                <Link to="/">Početna</Link>
                <Link to="/onama">O nama</Link>
                <Link to="/galerija">Galerija</Link>
                <Link to="/kalendar">Kalendar</Link>
                <Link to="/kontakt">Kontakt</Link>
            </div>
        </footer>
    )
}

export default Footer