"use client";

import React, { ReactEventHandler, useEffect, useState } from "react";
import { months } from "../constants";
import { formattedDate } from "../utils";

const Kalendar = () => {
  const [days, setDays] = useState<Date[]>([]);
  const [selectedDay, setSelectedDay] = useState("");
  const today = new Date();

  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDate = today.getDate();

  useEffect(() => {
    const getDaysInMonth = (year: number, month: number) => {
      const date = new Date(year, month, 1);
      const days = [];
      while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }
      return days;
    };

    const monthDays = getDaysInMonth(currentYear, currentMonth);
    setDays(monthDays);
  }, [currentYear, currentMonth]);

  const handleClick = (day: Date) => {
    const date = formattedDate(day);
    setSelectedDay(date);
    console.log(date);
  };

  return (
    <section className="section-overlay-a section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 w-full text-center lg:text-left">
            <h1 className="title text-gradient">Kalendar</h1>
            <p className="subtitle mx-auto lg:mx-0">
              Malo vina, puno ideja. Tipsy Muse spaja kreativnost, razgovor i
              umjetnost — jer najbolje misli ne dolaze za stolom, nego između
              gutljaja. Otkrij radionice koje bude inspiraciju i rezerviraj svoje
              mjesto za dozu umjetnosti uz čašu vina.
            </p>
            <div className="calendar w-full">
              <div className="p-3 sm:p-4 lg:p-6 border-3 border-solid border-primary w-full rounded-md bg-tetriary-dark shadow-pink">
                <h3 className="text-xl sm:text-2xl lg:text-3xl text-white mb-4 text-center">
                  {months[currentMonth]}, {currentYear}
                </h3>
                <div className="grid grid-cols-7 gap-1 sm:gap-2">
                  {days.map((day) => {
                    const isPastDate =
                      day.getFullYear() < currentYear ||
                      (day.getFullYear() === currentYear &&
                        day.getMonth() < currentMonth) ||
                      (day.getFullYear() === currentYear &&
                        day.getMonth() === currentMonth &&
                        day.getDate() < currentDate);

                    return (
                      <div
                        key={day.toISOString()}
                        onClick={() => !isPastDate && handleClick(day)}
                        className={`
                          aspect-square flex items-center justify-center 
                          text-xs sm:text-base lg:text-lg font-semibold transition-colors rounded-md lg:rounded-lg text-white duration-200
                          ${
                            isPastDate
                              ? "opacity-50 cursor-not-allowed"
                              : "cursor-pointer hover:bg-secondary"
                          }
                        `}
                      >
                        {day.getDate()}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-center flex-1">
            <img 
              src="/wine-bottles.png" 
              alt="Wine Bottles" 
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kalendar;
