import React from 'react'
import Radionica from '../cards/Radionica'
import { Link } from 'react-router-dom'
import { getRadionice } from '../../api/getRadionice'
import { useEffect } from 'react'
import { useState } from 'react'

const Radionice = () => {

    const [radionice, setRadionice] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getRadionice()
            setRadionice(data)
            console.log(data)
        }

        fetchData()
    }, [])


    const style = {
        justifySelft: "center"
    }

    return (
        <div className="radionice-home">
            <h2>Odaberi svoju večer - sve su genijlane</h2>
            <p>Imamo dvije jako zabavne opcije za tebe, slikanje i šminkanje ( za sad ). A u obje varijante nudimo stručno vodstvo tako da nemaš brige i stresa, osigurane sve profesionalne materijale potrebne za kreaciju tvog vlastitog umjetničkog djela, vrhunsko vino i najbolje što je glazba 2000tih mogla ponuditi ( igramo na nostalgiju - da, osudi nas ). Ovisno o tome koji si tip i što tražiš, klikni na kategoriju i izaberi svoj datum !</p>
            <p>P.S. Gupe za šminkanje su jako male ( 10 ljudi max.) Da se svima možemo potpuno posvetiti oko njihovog lica .
            </p>
            <Link to="/kalendar" className="main-button below"><button>Odaberi svoj datum</button></Link>
            <p className='after-button'>Dođite na party</p>
            <Radionica radionice={radionice} />
            <Link to={"/kalendar"} className='secondary-button'><button>Pregledaj sve datume</button></Link>
        </div>
    )
}

export default Radionice