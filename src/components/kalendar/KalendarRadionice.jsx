import React, { useState, useEffect } from 'react';
import Radionica from '../cards/Radionica';
import { getRadionice } from '../../api/getRadionice';

const KalendarRadionice = () => {
    const [isActive, setIsActive] = useState("SVI DATUMI");
    const [allRadionice, setAllRadionice] = useState([]);
    const [filteredRadionice, setFilteredRadionice] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getRadionice();
            setAllRadionice(data);
            setFilteredRadionice(data); // Prvo prikazuje sve
        };

        fetchData();
    }, []);

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleDateString("hr-HR", {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const getDateRange = (param) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let start = new Date(today);
        let end = new Date(today);

        switch (param) {
            case "OVAJ TJEDAN": {
                const dayOfWeek = today.getDay();
                const isSunday = dayOfWeek === 0;

                start.setDate(today.getDate() - (isSunday ? 6 : dayOfWeek - 1));
                end = new Date(start);
                end.setDate(start.getDate() + 6);
                break;
            }
            case "SLJEDEĆI TJEDAN": {
                const dayOfWeek = today.getDay();
                const isSunday = dayOfWeek === 0;

                start.setDate(today.getDate() - (isSunday ? 6 : dayOfWeek - 1) + 7);
                end = new Date(start);
                end.setDate(start.getDate() + 6);
                break;
            }
            case "SLJEDEĆI MJESEC": {
                start.setDate(1);
                start.setMonth(today.getMonth() + 1);

                end = new Date(start);
                end.setMonth(start.getMonth() + 1);
                end.setDate(0);
                break;
            }
            default:
                return () => true;
        }

        start.setHours(0, 0, 0, 0);
        end.setHours(23, 59, 59, 999);

        return (dateString) => {
            const date = new Date(dateString);
            return date >= start && date <= end;
        };
    };

    const handleClick = (e) => {
        const value = e.target.innerText;
        setIsActive(value);

        const dateFilter = getDateRange(value);
        const filtered = allRadionice.filter((radionica) => dateFilter(radionica.datum));
        setFilteredRadionice(filtered);
    };

    return (
        <div className="kalendar-radionice-container">
            <h2>Istraži naše radionice</h2>
            <p className="subhead">Filtriraj po datumu i pronađi večer za sebe. Svaka je posebna.</p>
            <div className="date-filter-container">
                <div className="date-filter-wrapper">
                    {["OVAJ TJEDAN", "SLJEDEĆI TJEDAN", "SLJEDEĆI MJESEC", "SVI DATUMI"].map((label) => (
                        <span
                            key={label}
                            className={isActive === label ? "active" : ""}
                            onClick={handleClick}
                        >
                            {label}
                        </span>
                    ))}
                </div>
            </div>
            <div className="kalendar-radionice-card-container">
                <div className="kalendar-radionice-card-wrapper">
                    <Radionica radionice={filteredRadionice} formatDate={formatDate} />
                </div>
            </div>
        </div>
    );
};

export default KalendarRadionice;
