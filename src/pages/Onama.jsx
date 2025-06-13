import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "../css/onama.css"
import { Link } from 'react-router-dom'
import { Award, Brush, Coffee, Sparkles, User } from 'lucide-react'
const Onama = () => {
    return (
        <div className="onama-page">
            <Navbar />
            <div className="onama-hero">
                <img src="/img.png" alt="Tipsy Muse - O nama" />
                <h1>Naša priča</h1>
                <p>Tipsy Muse je rođen iz želje da se umjetnost učini pristupačnom svima. Vjerujemo da kreativnost cvjeta u opuštenom okruženju, uz dobro društvo i možda čašu vina.</p>
            </div>
            <div className="flex-container">
                <div className="flex-text">
                    <h2>Kako je sve počelo</h2>
                    <p>2019. godine, Ana je organizirala prvi "paint & sip" događaj za svoje prijatelje u malom kafeu u centru grada. Ideja je bila jednostavna - kombinirati ljubav prema umjetnosti s opuštenom atmosferom.</p>
                    <p>Ono što je počelo kao zabava među prijateljima, brzo se pretvorilo u nešto veće. Ljudi su počeli dolaziti ne samo zbog slikanja, već zbog zajednice koju smo stvarali.</p>
                    <p>Danas, Tipsy Muse je dom kreativnosti gdje se svaki tjedan okupljaju ljudi svih uzrasta i iskustava, povezani zajedničkom ljubavlju prema umjetnosti i dobrom društvu.</p>
                    <Link to="/radionice" className="main-button"><button>Prijavi se na naše radionice</button></Link>
                </div>
                <div className="flex-image">
                    <img src="/ab.png" alt="Tipsy muse wine & art" loading='lazy' />
                </div>
            </div>
            <div className="nasa-misija">
                <div className="wrapper">
                    <Brush className='brush' />
                    <h2>Naša Misija</h2>
                    <p>"Stvoriti prostor gdje se umjetnost susreće sa životom, gdje kreativnost cvjeta bez pritiska, a ljudi se povezuju kroz zajedničku strast prema lijepom. Tipsy Muse nije samo studio - to je zajednica koja slavi jedinstvenost svakog pojedinca."</p>
                    <span>Tamara, osnivačica</span>
                </div>
                <div className="lies-container">
                    <div className="lies">
                        <div className="lie">
                            <h3>5+</h3>
                            <p>Godina iskustva</p>
                        </div>
                        <div className="lie">
                            <h3>1000+</h3>
                            <p>Zadovoljnih umjetnika</p>
                        </div>
                        <div className="lie">
                            <h3>200+</h3>
                            <p>Održanih radionica</p>
                        </div>
                        <div className="lie">
                            <h3>15+</h3>
                            <p>Ražličitih tehnika</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="drukciji">
                <h2>Što nas čini drugačijima</h2>
                <p>Tipsy Muse nije samo još jedan art studio - mi smo nešto posebno</p>
                <div className="wreper">
                    <div className="item-holder">
                        <div className="item">
                            <div className='svg-holder'>                            <User className='brush II' /></div>
                            <div className="text-hold">
                                <h4>Mala grupa, velika pažnja</h4>
                                <p>Zaboravi na stroge pravila i perfekcionizam. Kod nas je važan proces, ne rezultat. Uz čašu vina ili kave, sve je lakše i zabavnije.</p>
                            </div>

                        </div>
                        <div className="item">
                            <div className='svg-holder'>                            <Coffee className='brush II' /></div>
                            <div className="text-hold">
                                <h4>Opuštena atmosfera</h4>
                                <p>Zaboravi na stroge pravila i perfekcionizam. Kod nas je važan proces, ne rezultat. Uz čašu vina ili kave, sve je lakše i zabavnije.</p>
                            </div>

                        </div>

                    </div>
                    <div className="item-holder">
                        <div className="item">
                            <div className='svg-holder'>                            <Award className='brush II' /></div>
                            <div className="text-hold">
                                <h4>Mala grupa, velika pažnja</h4>
                                <p>Zaboravi na stroge pravila i perfekcionizam. Kod nas je važan proces, ne rezultat. Uz čašu vina ili kave, sve je lakše i zabavnije.</p>
                            </div>

                        </div>
                        <div className="item">
                            <div className='svg-holder'>                            <Sparkles className='brush II' /></div>
                            <div className="text-hold">
                                <h4>Opuštena atmosfera</h4>
                                <p>Zaboravi na stroge pravila i perfekcionizam. Kod nas je važan proces, ne rezultat. Uz čašu vina ili kave, sve je lakše i zabavnije.</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className="STIA">
                <h2>Postani kreativac</h2>
                <p>Pridruži se tisućama ljudi koji su već otkrili radost stvaranja u Tipsy Muse</p>

                <Link to="/radionice" className='main-button'><button>Rezerviraj radionicu</button></Link>


            </div>
            <Footer />
        </div>
    )
}

export default Onama