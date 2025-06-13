import { Calendar, Palette, User, Wine } from "lucide-react";
import { Link } from "react-router-dom";
import "../../css/rad.css"
import { GiLipstick } from "react-icons/gi";
const Radionica = ({ radionice }) => {



    return (
        <div className="container">
            {radionice.map((radionica) => (
                <div className="radionica-final">
                    <img src={radionica.slika} href={`Tipsy Muse Radionice - Wine and pain - ${radionica.naslov}`} loading="lazy" />
                    <div className="top">
                        <Calendar size={40} className="icon" /> {radionica.date}
                    </div>
                    <div className="middle">
                        <h2>{radionica.naslov}</h2>
                        <h3>{radionica.podnaslov}</h3>
                    </div>
                    <div className="bottom">
                        <div className="bottom-left">
                            <p className="price">{radionica.cijena + "€"}</p>
                            <span>{radionica.slobodnaMjesta}<User size={15} /></span>
                        </div>
                        <div className="bottom-right">
                            <Wine color="orange" size={30} />
                            {radionica.title === "Wine & Makeup" ? <GiLipstick color="#4be6e9" size={30} /> : <Palette color="#4be6e9" size={30} />}
                        </div>
                    </div>
                    <Link to={`/radionica/${radionica._id}`} className="main-button"><button>Prijavi se</button></Link>
                </div>
            ))}
        </div>
    );
};

export default Radionica;
