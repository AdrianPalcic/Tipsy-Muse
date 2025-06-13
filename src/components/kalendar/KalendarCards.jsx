import React from 'react'

const KalendarCards = () => {
    return (
        <div className="kalendar-card-container">
            <div className="kalendar-card-wrapper">
                <div className="card">
                    <img src='/card-image.png' loading='lazy' alt='Tipsy Muse - Art & Create' />
                    <h3>kreativnost nema pravila</h3>
                    <p>Ali ima tehnika. Ti si tu da se zabavis cak i ako nikad nisi primio/la kist/četkicu u ruke, a mi smo tu da ti pokažemo tehnike s kojima ćeš ( uz pomoć vina ) otkriti pravog umjetnika u sebi - ili se barem odlično zabaviti. </p>
                </div>
                <div className="card">
                    <img src='/glass.png' loading='lazy' alt='Tipsy Muse - Art & Create' />
                    <h3>Opusti se ( i uživaj 🎶)</h3>
                    <p>Nećemo vježbati tehnike disanja, samo ćemo te podsjetiti da je najzabavnije nešto iskusti po prvi put! Ako imaš nekog iskustva - super, ako nemaš tim bolje!
                    </p>
                </div>
                <div className="card">
                    <img src='/card-image3.png' loading='lazy' alt='Tipsy Muse - Art & Create' />
                    <h3>Ekipa i
                        atmosfera</h3>
                    <p>Znamo da je ovo baš hrabra izjava ali - GARANTIRAMO ti da ćeš se zabaviti na bilo kojoj od naših radionica, puštamo Britney zaboga - kako misliš "Nisi siguran/na?" Uz to, jesmo li već spomenuli da ti ne brojimo čaše a imamo vrhunsko vino ....čin čin!</p>
                </div>

            </div>
        </div>
    )
}

export default KalendarCards