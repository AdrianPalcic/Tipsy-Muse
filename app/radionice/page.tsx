"use client";
import Hero from "./components/Hero";
import Filters from "./components/Filters";
import { useEffect, useState, useMemo } from "react";
import { getDateRange, isDateInRange, parseDate } from "../utils";
import Radionice from "./components/Radionice";
import SpecialForm from "./components/SpecialForm";
import Spinner from "../components/Spinner";
import { getAllKategorije, getAllRadionice } from "@/lib/sanity.queries";

const page = () => {
  const [workShops, setWorkshops] = useState<Radionice[]>([]);
  const [activeCategory, setActiveCategory] = useState("Sve");
  const [dateFilter, setDateFilter] = useState("Svi datumi");
  const [priceSort, setPriceSort] = useState<"none" | "asc" | "desc">("none");
  const [kategorije, setKategorije] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        
        const [radioniceData, kategorijeData] = await Promise.all([
          getAllRadionice(),
          getAllKategorije(),
        ]);

        setWorkshops(radioniceData);

        const categoryNames = ["Sve", ...kategorijeData.map((k: kategorije) => k.ime)];
        setKategorije(categoryNames);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredWorkshops = useMemo(() => {
    let filtered = [...workShops];

    if (activeCategory !== "Sve") {
      filtered = filtered.filter(
        (workshop) => workshop.kategorija === activeCategory
      );
    }

    const dateRange = getDateRange(dateFilter);
    filtered = filtered.filter((workshop) =>
      isDateInRange(workshop.datum, dateRange)
    );

    const now = new Date();
    filtered = filtered.filter((workshop) => {
      const dateOnly = parseDate(workshop.datum);
      const [hoursStr, minutesStr] = workshop.vrijeme.split(":");
      const hours = parseInt(hoursStr, 10);
      const minutes = parseInt(minutesStr, 10);
      const workshopDateTime = new Date(
        dateOnly.getFullYear(),
        dateOnly.getMonth(),
        dateOnly.getDate(),
        hours,
        minutes,
        0,
        0
      );

      return workshopDateTime >= now;
    });

    if (priceSort === "asc") {
      filtered.sort((a, b) => a.cijena - b.cijena);
    } else if (priceSort === "desc") {
      filtered.sort((a, b) => b.cijena - a.cijena);
    }

    return filtered;
  }, [workShops, activeCategory, dateFilter, priceSort]);

  return (
    <main>
      <Hero />
      <Filters
        activeCat={activeCategory}
        setActiveCat={setActiveCategory}
        dateFilter={dateFilter}
        setDateFilter={setDateFilter}
        priceSort={priceSort}
        setPriceSort={setPriceSort}
        kategorije={kategorije.length > 0 ? kategorije : undefined}
      />
      
      {isLoading ? (
        <section className="section-overlay-b section-padding">
          <div className="flex justify-center items-center py-20">
            <Spinner />
          </div>
        </section>
      ) : filteredWorkshops.length > 0 ? (
        <Radionice radionice={filteredWorkshops} />
      ) : (
        <section className="section-overlay-b section-padding">
          <h2 className="pt-10 text-center text-3xl ">
            Nema radionica ovih parametara
          </h2>
          <p className="subtitle text-center">
            Probajte filtrirati po drugim kategorijama ili datumima
          </p>
        </section>
      )}
      <SpecialForm />
    </main>
  );
};

export default page;
