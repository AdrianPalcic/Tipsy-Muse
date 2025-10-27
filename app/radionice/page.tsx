"use client";
import Hero from "./components/Hero";
import Filters from "./components/Filters";
import { useEffect, useState, useMemo } from "react";
import { radionice } from "../constants";
import { getDateRange, isDateInRange, parseDate } from "../utils";
import Radionice from "./components/Radionice";

const page = () => {
  const [workShops, setWorkshops] = useState<Radionice[]>([]);
  const [activeCategory, setActiveCategory] = useState("Sve");
  const [dateFilter, setDateFilter] = useState("Svi datumi");
  const [priceSort, setPriceSort] = useState<"none" | "asc" | "desc">("none");

  useEffect(() => {
    setWorkshops(radionice);
  }, []);

  const filteredWorkshops = useMemo(() => {
    let filtered = [...workShops];

    // 1. Filter by category
    if (activeCategory !== "Sve") {
      filtered = filtered.filter(
        (workshop) => workshop.kategorija === activeCategory
      );
    }

    // 2. Filter by date range
    const dateRange = getDateRange(dateFilter);
    filtered = filtered.filter((workshop) =>
      isDateInRange(workshop.date, dateRange)
    );

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
      />
      <Radionice radionice={filteredWorkshops} />
    </main>
  );
};

export default page;
