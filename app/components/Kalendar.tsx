"use client";

import React, { ReactEventHandler, useEffect, useState } from "react";
import { months, radionice } from "../constants";
import { formattedDate } from "../utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getAllRadionice } from "@/lib/sanity.queries";

const Kalendar = () => {
  const [days, setDays] = useState<Date[]>([]);
  const [selectedDay, setSelectedDay] = useState("");
  const [activeDays, setActiveDays] = useState<string[]>([]);
  const [workshops, setWorkshops] = useState<Radionice[]>([]);
  const router = useRouter();
  const today = new Date();

  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDate = today.getDate();

  const [displayedYear, setDisplayedYear] = useState(currentYear);
  const [displayedMonth, setDisplayedMonth] = useState(currentMonth);

  useEffect(() => {
    getAllRadionice()
      .then((data) => {
        setWorkshops(data);
      })
      .catch((error) => {
        console.error("Error fetching radionice:", error);
      });

    const getDaysInMonth = (year: number, month: number) => {
      const date = new Date(year, month, 1);
      const days = [];
      while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }
      return days;
    };

    const monthDays = getDaysInMonth(displayedYear, displayedMonth);
    setDays(monthDays);

    const radionicesDates = radionice.map((radionica) => radionica.datum);
    setActiveDays(radionicesDates);
  }, [displayedYear, displayedMonth]);

  const handleClick = (day: Date) => {
    const date = formattedDate(day);
    setSelectedDay(date);
    const activeRadionica = workshops.find(
      (radionica) => radionica.datum === date
    );
    if (!activeRadionica) return;
    router.push(`/radionice/${activeRadionica.slug.current}`);
  };

  const handlePreviousMonth = () => {
    if (displayedMonth === 0) {
      setDisplayedMonth(11);
      setDisplayedYear(displayedYear - 1);
    } else {
      setDisplayedMonth(displayedMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (displayedMonth === 11) {
      setDisplayedMonth(0);
      setDisplayedYear(displayedYear + 1);
    } else {
      setDisplayedMonth(displayedMonth + 1);
    }
  };

  const isCurrentMonth =
    displayedYear === currentYear && displayedMonth === currentMonth;

  return (
    <section className="section-overlay-a section-padding">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 w-full text-center lg:text-left">
            <h1 className="title text-gradient shadow-pink-text">Kalendar</h1>
            <p className="subtitle mx-auto lg:mx-0">
              Malo vina, puno ideja. Tipsy Muse spaja kreativnost, razgovor i
              umjetnost — jer najbolje misli ne dolaze za stolom, nego između
              gutljaja. Otkrij radionice koje bude inspiraciju i rezerviraj
              svoje mjesto za dozu umjetnosti uz čašu vina.
            </p>
            <div className="calendar w-full">
              <div className="p-3 sm:p-4 lg:p-6 border-3 border-solid border-primary w-full rounded-md bg-tetriary-dark shadow-pink">
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={handlePreviousMonth}
                    disabled={isCurrentMonth}
                    className={`text-white text-xl sm:text-2xl font-bold px-3 py-1 rounded transition-colors ${
                      isCurrentMonth
                        ? "opacity-30 cursor-not-allowed"
                        : "hover:bg-secondary cursor-pointer"
                    }`}
                  >
                    ←
                  </button>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl text-white text-center">
                    {months[displayedMonth]}, {displayedYear}
                  </h3>
                  <button
                    onClick={handleNextMonth}
                    className="text-white text-xl sm:text-2xl font-bold px-3 py-1 rounded hover:bg-secondary transition-colors cursor-pointer"
                  >
                    →
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-1 sm:gap-2">
                  {days.map((day) => {
                    const isPastDate =
                      day.getFullYear() < currentYear ||
                      (day.getFullYear() === currentYear &&
                        day.getMonth() < currentMonth) ||
                      (day.getFullYear() === currentYear &&
                        day.getMonth() === currentMonth &&
                        day.getDate() < currentDate);

                    const hasRadionica = activeDays.includes(
                      formattedDate(day)
                    );

                    return (
                      <div
                        key={day.toISOString()}
                        onClick={() => !isPastDate && handleClick(day)}
                        className={`
                          aspect-square flex flex-col items-center justify-center  
                          text-xs sm:text-base lg:text-lg font-semibold transition-colors rounded-md lg:rounded-lg text-white duration-200 relative
                          ${
                            isPastDate
                              ? "opacity-50 cursor-not-allowed"
                              : "cursor-pointer hover:bg-secondary"
                          }
                        `}
                      >
                        {day.getDate()}
                        {hasRadionica && !isPastDate && (
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-500 rounded-full absolute bottom-1 sm:bottom-2" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <p className="subtitle mt-6">
              U slučaju da imate nekakva pitanja vezana uz naše datume,
              radionice ili općenito želite o nečemu popričati.
            </p>
            <div className="w-fit mx-auto sm:mx-0">
              <Link href={"/kontakt"} className="w-fit mx-auto sm:mx-0">
                <button className="button red">Kontaktiraj Nas</button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex justify-center flex-1">
            <img
              src="/wine-bottles.png"
              alt="Wine Bottles"
              className="max-w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kalendar;
