import React from 'react'
import { Link } from 'react-router-dom'

const Mission = () => {
    return (
        <div className="mission">
            <div className="content">
                <h2>Što je Tipsy Muse?</h2>
                <p>          "Tipsy Muse" je kreativni i simpatični ( kažu ljudi ) studio, koji je otvoren s ciljem da se ljudi druže, zabave i kreativno izražavaju - ukratko. Ne želimo biti pretenciozni i pričati o sebi bajke, želimo te samo malo zainteresirati da poželiš doći kod nas i uvijeriti se na svoje oči!
                </p>
                <p>Za sad imamo radionice poput "Wine&Paint" i " Wine&MakeUp" - gdje spajamo degustaciju vrhunskih vina uz malo opuštene zabave poput slikanja i šminkanja!</p>
                <Link to="/kalendar" className='main-button'><button>Bookiraj se na radionicu</button></Link>
            </div>
            <div className="cards">
                <div className="card">
                    <img loading='lazy' src="card-image2.png" alt="Neon casa martinija" />
                    <h3>Dođeš Solo ili <br></br> s ekipom</h3>
                    <p>Kako god da dođeš, otići ćeš s novim poznanstvom - ovdje si uvijek među "svojima"!</p>
                </div>
                <div className="card">
                    <img loading='lazy' src="card-image.png" alt="Neon boca vina" />
                    <h3>Uloviš kist i ćašu vina</h3>
                    <p>Ili dvije ili pet, mi ne brojimo čaše, i ne ocjenjujemo nikoga! Tu si da se zabaviš - ostalo ćemo ti mi pomoći </p>
                </div>

                <div className="card">
                    <img loading='lazy' src="hero-lips.png" alt="Neon slika" />
                    <h3>Smijeh nova poznanstva i puno boja</h3>
                    <p>Svaka večer je drukčija ( neke su i tematske ), ali dobra energija ( i muzika! ) je kod nas konstanta! </p>
                </div>
                <div className="card">
                    <img loading='lazy' src="card-image3.png" alt="Neon slika" />
                    <h3>Odlaziš s umjetničkim djelom ( i možda novim hobijem )
                    </h3>
                    <p>Vjeruj nam, svi misle da to "ne mogu" dok ne dođu kod nas. Najgore što se može dogoditi je da si ne priuštiš makar PROBATI doći, i škicnuti o čemu pričamo</p>
                </div>
            </div>
        </div>
    )
}

export default Mission