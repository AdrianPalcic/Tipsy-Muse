"use client";

import { cats } from "@/app/constants";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const dateOptions = [
  "Svi datumi",
  "ovaj tjedan",
  "sljedeci tjedan",
  "ovaj mjesec",
  "sljedeci mjesec",
];

const Filters = ({
  activeCat,
  setActiveCat,
  dateFilter,
  setDateFilter,
  priceSort,
  setPriceSort,
}: {
  activeCat: string;
  setActiveCat: React.Dispatch<React.SetStateAction<string>>;
  dateFilter: string;
  setDateFilter: React.Dispatch<React.SetStateAction<string>>;
  priceSort: "none" | "asc" | "desc";
  setPriceSort: React.Dispatch<React.SetStateAction<"none" | "asc" | "desc">>;
}) => {
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [activeSortType, setActiveSortType] = useState<"date" | "price">(
    "date"
  );

  const handleCatChange = (cat: string) => {
    setActiveCat(cat);
  };

  const handleDateFilterChange = (option: string) => {
    setDateFilter(option);
    setShowDateDropdown(false);
  };

  const handleSortTypeChange = (type: "date" | "price") => {
    setActiveSortType(type);

    if (type === "date") {
      setPriceSort("none");
      setShowDateDropdown(true);
    } else {
      if (priceSort === "none" || priceSort === "desc") {
        setPriceSort("asc");
      } else {
        setPriceSort("desc");
      }
      setShowDateDropdown(false);
    }
  };

  const getPriceSortLabel = () => {
    if (priceSort === "asc") return "Cijena (najniža)";
    if (priceSort === "desc") return "Cijena (najviša)";
    return "Cijena";
  };

  return (
    <section className="section-overlay-a section-padding px-4 sm:px-8 md:px-12 pt-6 sm:pt-10 border-b-3 border-primary/50 pb-20">
      <div
        id="header"
        className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 "
      >
        <div className="flex flex-col">
          <p className="subtitle mb-2 sm:mb-3 text-sm sm:text-base">
            Kategorije
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
            {cats.map((cat) => (
              <div
                onClick={() => handleCatChange(cat)}
                key={cat}
                className={`cat text-xs sm:text-sm md:text-base px-3 py-1.5 sm:px-4 sm:py-2 ${
                  activeCat === cat ? "active" : ""
                }`}
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <p className="subtitle mb-2 sm:mb-3 text-sm sm:text-base">
            Sortiraj Po:
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 items-center">
            <div className="relative">
              <div
                onClick={() => handleSortTypeChange("date")}
                className={`cat cursor-pointer flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base px-3 py-1.5 sm:px-4 sm:py-2 whitespace-nowrap ${
                  activeSortType === "date" ? "active" : ""
                }`}
              >
                <span className="truncate max-w-[120px] sm:max-w-none">
                  {dateFilter}
                </span>
                <ChevronDown
                  size={14}
                  className={`transition-transform shrink-0 sm:w-4 sm:h-4 ${
                    showDateDropdown ? "rotate-180" : ""
                  }`}
                />
              </div>

              {showDateDropdown && activeSortType === "date" && (
                <div className="absolute top-full mt-2 left-0 right-0 sm:left-0 sm:right-auto bg-[#1a1a2e] border border-fifth rounded-lg shadow-lg z-10 min-w-[160px] sm:min-w-[180px] max-w-[200px]">
                  {dateOptions.map((option) => (
                    <div
                      key={option}
                      onClick={() => handleDateFilterChange(option)}
                      className={`px-3 py-2 sm:px-4 sm:py-2.5 cursor-pointer hover:bg-fifth/20 transition-colors first:rounded-t-lg last:rounded-b-lg text-xs sm:text-sm ${
                        dateFilter === option
                          ? "bg-fifth/30 text-fifth"
                          : "text-white"
                      }`}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div
              onClick={() => handleSortTypeChange("price")}
              className={`cat cursor-pointer text-xs sm:text-sm md:text-base px-3 py-1.5 sm:px-4 sm:py-2 whitespace-nowrap ${
                activeSortType === "price" && priceSort !== "none"
                  ? "active"
                  : ""
              }`}
            >
              {getPriceSortLabel()}
            </div>
          </div>
        </div>
      </div>

      {/* Close dropdown when clicking outside */}
      {showDateDropdown && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setShowDateDropdown(false)}
        />
      )}
    </section>
  );
};

export default Filters;
